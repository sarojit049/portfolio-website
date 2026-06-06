import { Router } from "express";
import nodemailer from "nodemailer";
import validator from "validator";

const router = Router();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === "465",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sanitizeValue = (value) => validator.escape(validator.trim(String(value || "")));

router.post("/", async (req, res) => {
  const { name, email, subject, message, botField } = req.body ?? {};

  if (botField && String(botField).trim() !== "") {
    console.warn("Spam trap triggered", { ip: req.ip, botField });
    return res.status(400).json({ success: false, message: "Spam detected." });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "Name, email, subject, and message are required." });
  }

  const normalizedEmail = validator.normalizeEmail(String(email).trim(), {
    gmail_remove_dots: false,
    gmail_remove_plus: false,
  });

  if (!normalizedEmail || !validator.isEmail(normalizedEmail)) {
    return res.status(400).json({ success: false, message: "Please provide a valid email address." });
  }

  const trimmedName = String(name).trim();
  const trimmedSubject = String(subject).trim();
  const trimmedMessage = String(message).trim();

  if (trimmedName.length > 100) {
    return res.status(400).json({ success: false, message: "Name must be 100 characters or fewer." });
  }

  if (trimmedSubject.length > 150) {
    return res.status(400).json({ success: false, message: "Subject must be 150 characters or fewer." });
  }

  if (trimmedMessage.length > 3000) {
    return res.status(400).json({ success: false, message: "Message must be 3000 characters or fewer." });
  }

  const safeName = sanitizeValue(trimmedName);
  const safeEmail = sanitizeValue(normalizedEmail);
  const safeSubject = sanitizeValue(trimmedSubject);
  const safeMessage = sanitizeValue(trimmedMessage);
  const receivedAt = new Date().toISOString();

  const mailText = `Portfolio contact form submission:\n\nName: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\nReceived: ${receivedAt}\n\nMessage:\n${safeMessage}`;

  const mailHtml = `
    <h2>New portfolio contact message</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Subject:</strong> ${safeSubject}</p>
    <p><strong>Received:</strong> ${receivedAt}</p>
    <hr />
    <p>${safeMessage.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: safeEmail,
      subject: `[Portfolio Contact] ${safeSubject}`,
      text: mailText,
      html: mailHtml,
    });

    console.info("Contact form submission sent", { from: safeEmail, name: safeName, subject: safeSubject, receivedAt });
    return res.status(200).json({ success: true, message: "Message delivered successfully." });
  } catch (error) {
    console.error("Email delivery failed", { error, from: safeEmail, name: safeName, subject: safeSubject });
    return res.status(502).json({ success: false, message: "Unable to deliver message right now. Please try again later." });
  }
});

export default router;
