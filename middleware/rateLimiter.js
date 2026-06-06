import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please wait a minute and try again.",
  },
  handler: (req, res, next, options) => {
    console.warn("Rate limit triggered", { ip: req.ip, path: req.originalUrl });
    res.status(options.statusCode).json(options.message);
  },
});

export default rateLimiter;
