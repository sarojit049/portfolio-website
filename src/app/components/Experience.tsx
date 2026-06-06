import { motion } from "motion/react";
import { Section } from "./Section";
import { Briefcase, GitMerge, Users, ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Web Development Intern",
    org: "CodeAlpha",
    orgUrl: "https://codealpha.tech",
    period: "2024",
    type: "Internship",
    status: "Completed",
    icon: <Briefcase size={18} />,
    color: "#3b82f6",
    bullets: [
      "Worked on frontend web development projects from scratch",
      "Built fully responsive web designs using HTML, CSS, and JavaScript",
      "Gained practical hands-on experience with modern web technologies",
      "Delivered projects within deadlines, improving time management skills",
    ],
  },
  {
    title: "Open Source Contributor",
    org: "ECWoC 2026",
    period: "2026",
    type: "Open Source",
    status: "Participated",
    icon: <GitMerge size={18} />,
    color: "#6d28d9",
    bullets: [
      "Contributed meaningful code to open-source repositories during ECWoC 2026",
      "Collaborated asynchronously with developers across different time zones",
      "Reviewed pull requests and provided constructive code feedback",
      "Improved documentation and test coverage for assigned projects",
    ],
  },
  {
    title: "Campus Lead & Project Admin",
    org: "OSCG 2026",
    period: "2026",
    type: "Leadership",
    status: "Lead",
    icon: <Users size={18} />,
    color: "#a78bfa",
    bullets: [
      "Led and managed student engagement and participation in community programs",
      "Organized technical workshops, coding events, and hackathon sessions",
      "Mentored junior students in their open source contribution journey",
      "Coordinated between mentors and participants to ensure smooth event flow",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Internships, open source, and community leadership.">
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(109,40,217,0.4) 20%, rgba(109,40,217,0.4) 80%, transparent 100%)" }} />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start md:gap-0 gap-5 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 mt-6 w-5 h-5 rounded-full items-center justify-center border-2"
                style={{ background: exp.color, borderColor: "#060714", boxShadow: `0 0 16px ${exp.color}80` }} />

              {/* Half spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl transition-all"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)", backdropFilter: "blur(12px)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}40`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)"; }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: exp.color }}>{exp.icon}</span>
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium"
                          style={{ background: `${exp.color}18`, color: exp.color, fontFamily: "'Outfit', sans-serif" }}>
                          {exp.type}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-xs"
                          style={{ background: "rgba(109,40,217,0.1)", color: "#818cf8", fontFamily: "'Outfit', sans-serif" }}>
                          {exp.status}
                        </span>
                      </div>
                      <h3 className="text-[#e2e8f0] font-semibold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[#64748b] text-sm">{exp.org}</span>
                        {exp.orgUrl && (
                          <a href={exp.orgUrl} target="_blank" rel="noopener noreferrer"
                            className="text-[#475569] hover:text-[#818cf8] transition-colors">
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full shrink-0"
                      style={{ background: "rgba(109,40,217,0.12)", color: "#818cf8", fontFamily: "'Outfit', sans-serif" }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[#64748b]" style={{ fontSize: "0.82rem" }}>
                        <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: exp.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
