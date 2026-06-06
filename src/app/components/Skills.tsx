import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Section } from "./Section";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { Code2 } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const SKILL_GROUPS: { title: string; accent: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    accent: "#3b82f6",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={20} />, level: 90, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt size={20} />, level: 85, color: "#1572b6" },
      { name: "JavaScript", icon: <FaJs size={20} />, level: 80, color: "#f7df1e" },
      { name: "React.js", icon: <FaReact size={20} />, level: 78, color: "#61dafb" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} />, level: 75, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    accent: "#6d28d9",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={20} />, level: 72, color: "#68a063" },
      { name: "Express.js", icon: <SiExpress size={20} />, level: 68, color: "#a78bfa" },
    ],
  },
  {
    title: "Database",
    accent: "#10b981",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={20} />, level: 70, color: "#47a248" },
      { name: "SQL", icon: <FaDatabase size={20} />, level: 65, color: "#336791" },
    ],
  },
  {
    title: "Programming",
    accent: "#f59e0b",
    skills: [
      { name: "Java", icon: <FaJava size={20} />, level: 82, color: "#f89820" },
      { name: "DSA", icon: <Code2 size={20} />, level: 75, color: "#a78bfa" },
    ],
  },
  {
    title: "Tools",
    accent: "#ef4444",
    skills: [
      { name: "Git", icon: <FaGitAlt size={20} />, level: 80, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub size={20} />, level: 82, color: "#c7d2fe" },
    ],
  },
];

function SkillBar({ skill, accent }: { skill: Skill; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span style={{ color: skill.color }}>{skill.icon}</span>
          <span className="text-[#c7d2fe] text-sm" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>{skill.name}</span>
        </div>
        <span className="text-[#475569] text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${skill.color})` }}
        />
      </div>
    </div>
  );
}

// Icon grid for visual flair
const TECH_ICONS = [
  { icon: <FaHtml5 size={26} />, color: "#e34f26", name: "HTML5" },
  { icon: <FaCss3Alt size={26} />, color: "#1572b6", name: "CSS3" },
  { icon: <FaJs size={26} />, color: "#f7df1e", name: "JS" },
  { icon: <FaReact size={26} />, color: "#61dafb", name: "React" },
  { icon: <SiTailwindcss size={26} />, color: "#38bdf8", name: "Tailwind" },
  { icon: <FaNodeJs size={26} />, color: "#68a063", name: "Node" },
  { icon: <SiExpress size={26} />, color: "#a78bfa", name: "Express" },
  { icon: <SiMongodb size={26} />, color: "#47a248", name: "MongoDB" },
  { icon: <FaDatabase size={26} />, color: "#336791", name: "SQL" },
  { icon: <FaJava size={26} />, color: "#f89820", name: "Java" },
  { icon: <FaGitAlt size={26} />, color: "#f05032", name: "Git" },
  { icon: <FaGithub size={26} />, color: "#c7d2fe", name: "GitHub" },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with to build full-stack applications.">
      {/* Tech icon grid */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {TECH_ICONS.map(({ icon, color, name }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            whileHover={{ scale: 1.15, y: -4 }}
            className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl cursor-default"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)", minWidth: "72px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}50`; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${color}25`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
          >
            <span style={{ color }}>{icon}</span>
            <span className="text-[#475569]" style={{ fontSize: "0.68rem" }}>{name}</span>
          </motion.div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(109,40,217,0.15)" }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: group.accent, boxShadow: `0 0 8px ${group.accent}` }} />
              <span className="text-[#e2e8f0] font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{group.title}</span>
            </div>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} accent={group.accent} />
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
