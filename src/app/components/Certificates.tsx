import { motion } from "motion/react";
import { Section } from "./Section";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CERTS = [
  {
    title: "DSA with Java",
    issuer: "Apna College",
    date: "2026",
    desc: "Comprehensive course covering Data Structures & Algorithms using Java — arrays, linked lists, trees, graphs, dynamic programming, and competitive programming.",
    color: "#f59e0b",
    badge: "🏆",
    skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "DP", "Java"],
    verify: "dsa-cert.pdf",
  },
  {
    title: "MERN Stack Development — Sigma 8.0",
    issuer: "Apna College",
    date: "2026",
    desc: "Full MERN stack curriculum covering MongoDB, Express.js, React.js, Node.js with real-world project building, REST APIs, and deployment.",
    color: "#6d28d9",
    badge: "⚡",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    verify: "#",
  },
  {
    title: "Web Development Internship",
    issuer: "CodeAlpha",
    date: "2026",
    desc: "Official internship completion certificate from CodeAlpha recognizing successful delivery of frontend web development projects and professional conduct.",
    color: "#3b82f6",
    badge: "💼",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    verify: "#",
  },
];

export function Certificates() {
  return (
    <Section id="certificates" title="Certificates" subtitle="Verified credentials and completed courses.">
      <div className="grid md:grid-cols-3 gap-6">
        {CERTS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative p-6 rounded-2xl flex flex-col overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)", backdropFilter: "blur(12px)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}45`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${cert.color}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            {/* Top glow */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${cert.color}15` }}>
                {cert.badge}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-[#475569] text-xs">
                  <Calendar size={11} />
                  {cert.date}
                </div>
                <a href={cert.verify} target="_blank" rel="noopener noreferrer"
                  className="text-[#475569] hover:text-[#818cf8] transition-colors">
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-1">
              <Award size={13} style={{ color: cert.color }} />
              <span className="text-xs font-medium" style={{ color: cert.color, fontFamily: "'Outfit', sans-serif" }}>
                {cert.issuer}
              </span>
            </div>
            <h3 className="text-[#e2e8f0] font-semibold mb-3 leading-snug" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem" }}>
              {cert.title}
            </h3>
            <p className="text-[#64748b] mb-4 flex-1 leading-relaxed" style={{ fontSize: "0.8rem" }}>
              {cert.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span key={s} className="px-2.5 py-0.5 rounded-full text-xs"
                  style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}28`, fontFamily: "'Outfit', sans-serif" }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
