import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import { ChevronDown, Sparkles } from "lucide-react";

const ROLES = [
  "MERN Stack Developer",
  "Information Technology Student",
  "Open Source Contributor",
  "Full Stack Enthusiast",
  "Java Programmer",
];

function TypingText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, idx]);

  return (
    <span className="text-[#818cf8]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>
      {displayed}
      <span className="animate-pulse" style={{ color: "#6d28d9" }}>|</span>
    </span>
  );
}

const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "3+", label: "Certifications" },
  { value: "2+", label: "Internships" },
  { value: "2026", label: "Open Source" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full py-20">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm"
          style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.35)", color: "#a78bfa" }}>
          <Sparkles size={14} />
          Open to Internship Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.8rem, 9vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          <span className="text-[#e2e8f0]">Hi, I'm </span>
          <span style={{
            background: "linear-gradient(135deg, #818cf8 0%, #6d28d9 40%, #3b82f6 80%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Saroj Kumar</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 mb-3 h-9" style={{ fontSize: "clamp(1rem, 2.5vw, 1.35rem)" }}>
          <TypingText />
        </motion.div>

        {/* Location */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="flex items-center justify-center gap-1.5 mb-6 text-[#64748b] text-sm">
          <FaMapMarkerAlt size={12} className="text-[#6d28d9]" />
          Kolkata, West Bengal, India
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#64748b] mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
          Building scalable web applications using{" "}
          <span className="text-[#818cf8]">React</span>,{" "}
          <span className="text-[#818cf8]">Node.js</span>,{" "}
          <span className="text-[#818cf8]">Express.js</span>,{" "}
          <span className="text-[#818cf8]">MongoDB</span>, and{" "}
          <span className="text-[#818cf8]">Java</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 36px rgba(109,40,217,0.45)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}>
            View My Work
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="saroj_cv.pdf"
            className="px-8 py-3.5 rounded-xl text-[#c7d2fe] font-semibold flex items-center gap-2 transition-all"
            style={{ background: "rgba(109,40,217,0.1)", border: "1px solid rgba(109,40,217,0.35)", fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}>
            <FaDownload size={13} /> Download CV
          </motion.a>
        </motion.div>

        {/* Social */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          className="flex justify-center gap-4 mb-16">
          {[
            { icon: <FaGithub size={19} />, href: "https://github.com/sarojit049", label: "GitHub" },
            { icon: <FaLinkedin size={19} />, href: "https://www.linkedin.com/in/saroj-kumar-017948314/", label: "LinkedIn" },
          ].map(({ icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="p-3 rounded-full transition-all"
              style={{ background: "rgba(109,40,217,0.1)", border: "1px solid rgba(109,40,217,0.25)", color: "#94a3b8" }}
              aria-label={label}>
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {STATS.map(({ value, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65 + i * 0.08 }}
              className="py-4 px-3 rounded-xl text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}>
              <div className="text-[#818cf8] font-bold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.4rem" }}>{value}</div>
              <div className="text-[#64748b] text-xs mt-0.5">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-[#475569]"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
