import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Clock } from "lucide-react";

type Tag = "All" | "Frontend" | "MERN" | "Java" | "Upcoming";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A premium personal portfolio built with React.js and Tailwind CSS featuring glassmorphism design, smooth animations with Framer Motion, dark/light mode, and fully responsive layout.",
    tags: ["Frontend"] as Tag[],
    tech: ["React.js", "Tailwind CSS", "Motion"],
    emoji: "🌐",
    gradient: "linear-gradient(135deg, rgba(109,40,217,0.25), rgba(59,130,246,0.2))",
    accent: "#818cf8",
    github: "https://github.com/sarojit049",
    live: "https://my-portfolio-srl.netlify.app/#",
    status: "Live",
  },
  {
    title: "To-Do App",
    desc: "Feature-rich task management app with CRUD operations, priority levels, local storage persistence, drag-to-reorder, and clean responsive UI.",
    tags: ["Frontend"] as Tag[],
    tech: ["React.js", "JavaScript", "CSS3"],
    emoji: "✅",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(16,185,129,0.2))",
    accent: "#60a5fa",
    github: "https://github.com/sarojit049",
    live: "#",
    status: "working on it",
  },
  {
    title: "Calculator App",
    desc: "Sleek, keyboard-accessible calculator with standard & scientific modes, expression history, and a polished dark UI built with vanilla JavaScript.",
    tags: ["Frontend"] as Tag[],
    tech: ["HTML5", "CSS3", "JavaScript"],
    emoji: "🔢",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.25), rgba(239,68,68,0.2))",
    accent: "#fbbf24",
    github: "https://github.com/sarojit049",
    live: "https://calculator-appc.netlify.app",
    status: "Live",
  },
  {
    title: "Image Gallery",
    desc: "Responsive masonry image gallery with Unsplash API integration, real-time search, infinite scroll, lazy loading, and lightbox preview.",
    tags: ["Frontend"] as Tag[],
    tech: ["React.js", "Unsplash API", "CSS Grid"],
    emoji: "🖼️",
    gradient: "linear-gradient(135deg, rgba(167,139,250,0.25), rgba(236,72,153,0.2))",
    accent: "#a78bfa",
    github: "https://github.com/sarojit049",
    live: "https://sarojit049.github.io/CodeAlpha_Image-Gallery/",
    status: "Live",
  },

  {
    title: "Full-Stack Blog Platform",
    desc: "MERN stack blog with JWT authentication, rich text editor, image uploads, comment system, and an admin dashboard for content management.",
    tags: ["MERN", "Upcoming"] as Tag[],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    emoji: "📝",
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(59,130,246,0.15))",
    accent: "#34d399",
    github: "#",
    live: "#",
    status: "In Progress",
  },
  {
    title: "E-Commerce Store",
    desc: "Full-featured MERN e-commerce app with product listings, cart, Razorpay payment integration, order tracking, and seller dashboard.",
    tags: ["MERN", "Upcoming"] as Tag[],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    emoji: "🛒",
    gradient: "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(245,158,11,0.15))",
    accent: "#f87171",
    github: "#",
    live: "#",
    status: "Planned",
  },
];

const FILTERS: Tag[] = ["All", "Frontend", "MERN", "Java", "Upcoming"];

export function Projects() {
  const [active, setActive] = useState<Tag>("All");

  const filtered = active === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(active));

  return (
    <Section id="projects" title="Projects" subtitle="Things I've built and things I'm building.">
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <motion.button
            key={f}
            onClick={() => setActive(f)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: active === f ? "linear-gradient(135deg, #6d28d9, #2563eb)" : "rgba(255,255,255,0.04)",
              color: active === f ? "#fff" : "#64748b",
              border: active === f ? "none" : "1px solid rgba(109,40,217,0.18)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl overflow-hidden cursor-default flex flex-col"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)", backdropFilter: "blur(12px)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}45`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 48px ${project.accent}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: project.gradient }} />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${project.accent}15` }}>
                    {project.emoji}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs flex items-center gap-1"
                      style={{
                        background: project.status === "Live" ? "rgba(52,211,153,0.12)" : project.status === "In Progress" ? "rgba(251,191,36,0.12)" : "rgba(109,40,217,0.12)",
                        color: project.status === "Live" ? "#34d399" : project.status === "In Progress" ? "#fbbf24" : "#818cf8",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {project.status === "In Progress" && <Clock size={9} />}
                      {project.status}
                    </span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#c7d2fe] transition-colors" aria-label="GitHub">
                      <FaGithub size={16} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#c7d2fe] transition-colors" aria-label="Live">
                      <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="text-[#e2e8f0] font-semibold mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem" }}>
                  {project.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed flex-1 mb-5" style={{ fontSize: "0.82rem" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs"
                      style={{ background: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}28`, fontFamily: "'Outfit', sans-serif" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
