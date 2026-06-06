import { motion } from "motion/react";
import { Section } from "./Section";
import { Code2, Database, GitBranch, Lightbulb, MapPin, GraduationCap } from "lucide-react";

const CARDS = [
  { icon: <Code2 size={18} />, label: "Stack", value: "MERN Stack", color: "#818cf8" },
  { icon: <Database size={18} />, label: "Database", value: "MongoDB & SQL", color: "#34d399" },
  { icon: <GraduationCap size={18} />, label: "Degree", value: "B.Tech IT", color: "#f59e0b" },
  { icon: <GitBranch size={18} />, label: "OSS", value: "Active Contributor", color: "#60a5fa" },
  { icon: <Lightbulb size={18} />, label: "Focus", value: "DSA + Dev", color: "#f472b6" },
  { icon: <MapPin size={18} />, label: "Location", value: "Kolkata, India", color: "#a78bfa" },
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Passionate developer on a mission to build meaningful software.">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative">
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-3xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(109,40,217,0.25), rgba(37,99,235,0.2))",
                border: "1px solid rgba(109,40,217,0.3)",
                backdropFilter: "blur(20px)",
                fontSize: "7rem",
              }}
            >
              👨‍💻
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl text-xs text-white font-semibold shadow-lg"
              style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", fontFamily: "'Outfit', sans-serif" }}
            >
              🟢 Available
            </motion.div>
            <div className="absolute -bottom-3 -left-3 w-full h-full rounded-3xl -z-10"
              style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", opacity: 0.12 }} />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="md:col-span-3"
        >
          <p className="text-[#94a3b8] leading-relaxed mb-4" style={{ fontSize: "1.02rem" }}>
            I'm a motivated{" "}
            <span className="text-[#818cf8] font-medium">Information Technology student</span> at MCKV Institute of Engineering
            with hands-on experience in the <span className="text-[#818cf8] font-medium">MERN stack</span>, Data Structures &
            Algorithms, DBMS, and Open Source Development.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mb-8" style={{ fontSize: "1.02rem" }}>
            I'm actively seeking <span className="text-[#60a5fa] font-medium">Software Development Internship</span> opportunities
            where I can apply my technical skills, learn from industry experts, and contribute to impactful projects. I believe in
            writing clean, efficient, and maintainable code.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CARDS.map(({ icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.03, borderColor: `${color}50` }}
                className="flex items-center gap-3 p-3.5 rounded-xl transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}
              >
                <span style={{ color }}>{icon}</span>
                <div>
                  <div className="text-[#475569]" style={{ fontSize: "0.68rem" }}>{label}</div>
                  <div className="text-[#c7d2fe]" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
