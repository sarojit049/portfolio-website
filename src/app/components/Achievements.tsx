import { motion } from "motion/react";
import { Section } from "./Section";

const ACHIEVEMENTS = [
  {
    icon: "🌐",
    title: "ECWoC 2026 Participant",
    desc: "Participated in Extended Coding Winter of Code 2026, contributing to real open-source repositories, collaborating with global developers, and improving code quality.",
    color: "#6d28d9",
    tag: "Open Source",
  },
  {
    icon: "⚡",
    title: "MERN Stack Certified",
    desc: "Successfully completed the rigorous MERN Stack Sigma 8.0 course by Apna College, demonstrating proficiency in full-stack web development with MongoDB, Express, React, and Node.",
    color: "#3b82f6",
    tag: "Certification",
  },
  {
    icon: "🐙",
    title: "Active GitHub Contributor",
    desc: "Maintained consistent contributions on GitHub with a growing streak, contributing to open-source projects and personal repositories across frontend and backend stacks.",
    color: "#818cf8",
    tag: "Community",
  },
  {
    icon: "🏆",
    title: "Campus Lead — OSCG 2026",
    desc: "Selected and appointed as Campus Lead for Open Source Community Guild 2026, managing student engagement, running tech events, and bridging students with OSS opportunities.",
    color: "#f59e0b",
    tag: "Leadership",
  },
  {
    icon: "📚",
    title: "DSA with Java — Certified",
    desc: "Completed in-depth DSA training with Java covering 200+ problems across arrays, trees, graphs, dynamic programming, and competitive programming strategies.",
    color: "#10b981",
    tag: "Certification",
  },
  {
    icon: "💼",
    title: "CodeAlpha Internship",
    desc: "Completed a professional web development internship at CodeAlpha, delivering responsive and functional frontend projects, earning an official certificate of completion.",
    color: "#f472b6",
    tag: "Internship",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones, recognitions, and proud moments.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((ach, i) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.015 }}
            className="relative p-6 rounded-2xl overflow-hidden group"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)", backdropFilter: "blur(12px)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${ach.color}40`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${ach.color}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)";
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            {/* Corner glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle, ${ach.color}30, transparent 70%)` }} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${ach.color}15` }}>
                  {ach.icon}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: `${ach.color}15`, color: ach.color, fontFamily: "'Outfit', sans-serif" }}>
                  {ach.tag}
                </span>
              </div>
              <h3 className="text-[#e2e8f0] font-semibold mb-2.5 leading-snug" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.93rem" }}>
                {ach.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed" style={{ fontSize: "0.8rem" }}>
                {ach.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
