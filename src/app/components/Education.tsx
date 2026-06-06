import { motion } from "motion/react";
import { Section } from "./Section";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const SUBJECTS = ["Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Programming", "Operating Systems", "Computer Networks", "Web Development", "Software Engineering", "Discrete Mathematics"];

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="My academic foundation and coursework.">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative p-8 rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 0 60px rgba(109,40,217,0.06)" }}
        >
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, #6d28d9, #3b82f6, #818cf8)" }} />

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="p-4 rounded-2xl shrink-0"
              style={{ background: "linear-gradient(135deg, rgba(109,40,217,0.25), rgba(37,99,235,0.2))" }}>
              <GraduationCap size={36} className="text-[#818cf8]" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                <div>
                  <h3 className="text-[#e2e8f0] font-bold leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.2rem" }}>
                    Bachelor of Technology in Information Technology
                  </h3>
                  <p className="font-semibold mt-1"
                    style={{
                      background: "linear-gradient(135deg, #818cf8, #60a5fa)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      fontFamily: "'Outfit', sans-serif", fontSize: "1rem",
                    }}>
                    MCKV Institute of Engineering
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(52,211,153,0.12)", color: "#34d399", fontFamily: "'Outfit', sans-serif" }}>
                  Currently Enrolled
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 mt-3">
                <div className="flex items-center gap-1.5 text-[#64748b] text-sm">
                  <Calendar size={13} className="text-[#818cf8]" />
                  2023 – 2027
                </div>
                <div className="flex items-center gap-1.5 text-[#64748b] text-sm">
                  <MapPin size={13} className="text-[#60a5fa]" />
                  Kolkata, West Bengal
                </div>
                <div className="flex items-center gap-1.5 text-[#64748b] text-sm">
                  <BookOpen size={13} className="text-[#a78bfa]" />
                  MAKAUT University
                </div>
              </div>

              {/* Progress bar for course completion */}
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#64748b]">Course Progress</span>
                  <span className="text-[#818cf8]" style={{ fontFamily: "'Outfit', sans-serif" }}>~50% Complete</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #6d28d9, #3b82f6)" }}
                  />
                </div>
              </div>

              <h4 className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Key Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                {SUBJECTS.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs"
                    style={{ background: "rgba(109,40,217,0.1)", color: "#a78bfa", border: "1px solid rgba(109,40,217,0.25)", fontFamily: "'Outfit', sans-serif" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
