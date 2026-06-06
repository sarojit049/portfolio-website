import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "./Section";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Send, CheckCircle, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || "";

const LINKS = [
  { icon: <FaEnvelope size={18} />, label: "Email", value: "sarojyadavit@gmail.com", href: "mailto:sarojyadavit@gmail.com", color: "#60a5fa" },
  { icon: <FaGithub size={18} />, label: "GitHub", value: "github.com/sarojit049", href: "https://github.com/sarojit049", color: "#e2e8f0" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/saroj-kumar-017948314", href: "https://www.linkedin.com/in/saroj-kumar-017948314/", color: "#0ea5e9" },
  { icon: <MapPin size={18} />, label: "Location", value: "Kolkata, West Bengal, India", href: "#", color: "#a78bfa" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", botField: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (form.botField.trim() !== "") {
      setError("Spam protection triggered.");
      return false;
    }

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please complete all fields before sending.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (form.name.trim().length > 100) {
      setError("Name must be 100 characters or fewer.");
      return false;
    }

    if (form.subject.trim().length > 150) {
      setError("Subject must be 150 characters or fewer.");
      return false;
    }

    if (form.message.trim().length > 3000) {
      setError("Message must be 3000 characters or fewer.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Email service is not configured. Please update your environment variables.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const templateParams = {
        user_name: form.name,
        user_email: form.email,
        subject: form.subject,
        message: form.message,
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.info("EmailJS submission result:", result);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "", botField: "" });
    } catch (sendError) {
      console.error("EmailJS submission failed:", sendError);
      setError("Unable to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Open to internships, collaborations, and exciting opportunities.">
      <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex flex-col gap-5"
        >
          <div>
            <h3 className="text-[#e2e8f0] font-semibold mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem" }}>
              Let's collaborate
            </h3>
            <p className="text-[#64748b] leading-relaxed" style={{ fontSize: "0.88rem" }}>
              I'm actively seeking Software Development internships. Feel free to reach out for
              project collaborations, open source opportunities, or just to say hi!
            </p>
          </div>

          <div className="space-y-3">
            {LINKS.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl group transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)"; }}
              >
                <span style={{ color }} className="shrink-0">{icon}</span>
                <div className="min-w-0">
                  <div className="text-[#475569]" style={{ fontSize: "0.68rem" }}>{label}</div>
                  <div className="text-[#c7d2fe] truncate" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem" }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Resume download */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="saroj_cv.pdf"
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm mt-1"
            style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", fontFamily: "'Outfit', sans-serif" }}
          >
            <FaDownload size={13} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 p-7 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.2)", backdropFilter: "blur(12px)" }}
        >
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
              <CheckCircle size={52} className="text-[#34d399]" />
              <h3 className="text-[#e2e8f0] font-semibold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem" }}>Message Sent!</h3>
              <p className="text-[#64748b] text-sm">Thanks for reaching out. I'll reply within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "", botField: "" }); }}
                className="text-[#818cf8] text-sm hover:underline mt-1">Send another</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="botField"
                value={form.botField}
                onChange={(e) => setForm({ ...form, botField: e.target.value })}
                style={{ display: "none" }}
                autoComplete="off"
                tabIndex={-1}
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Your Name", placeholder: "Saroj Kumar", type: "text" },
                  { id: "email", label: "Email Address", placeholder: "sarojyadavit@gmail.com", type: "email" },
                ].map(({ id, label, placeholder, type }) => (
                  <div key={id}>
                    <label className="block text-[#64748b] text-xs font-medium mb-1.5">{label}</label>
                    <input
                      type={type}
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-[#e2e8f0] placeholder-[#475569] outline-none transition-colors text-sm"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(109,40,217,0.2)" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.55)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.2)"; }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-[#64748b] text-xs font-medium mb-1.5">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Internship opportunity / Collaboration"
                  required
                  className="w-full px-4 py-2.5 rounded-xl text-[#e2e8f0] placeholder-[#475569] outline-none transition-colors text-sm"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(109,40,217,0.2)" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.55)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.2)"; }}
                />
              </div>
              <div>
                <label className="block text-[#64748b] text-xs font-medium mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or project..."
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl text-[#e2e8f0] placeholder-[#475569] outline-none transition-colors text-sm resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(109,40,217,0.2)" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.55)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(109,40,217,0.2)"; }}
                />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? undefined : "0 0 28px rgba(109,40,217,0.4)" }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", fontFamily: "'Outfit', sans-serif" }}
              >
                {loading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Send size={15} /> Send Message</>}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
