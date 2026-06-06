import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import contactRouter from "./routes/contact.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const requiredEnv = [
  "EMAIL_HOST",
  "EMAIL_PORT",
  "EMAIL_USER",
  "EMAIL_PASS",
  "EMAIL_FROM",
  "CONTACT_TO_EMAIL",
];

const missingVars = requiredEnv.filter((name) => !process.env[name]);
if (missingVars.length > 0) {
  console.error(`Missing required environment variables: ${missingVars.join(", ")}`);
  process.exit(1);
}

const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(express.json({ limit: "12kb" }));
app.use(morgan("combined"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["POST", "OPTIONS"],
  })
);

app.use("/api/contact", rateLimiter, contactRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Resource not found" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  console.log(`Contact API listening on http://localhost:${port}/api/contact`);
});
