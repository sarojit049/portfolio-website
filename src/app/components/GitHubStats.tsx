import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { GitCommit, GitPullRequest, Users, BookOpen } from "lucide-react";

const GITHUB_USER = "sarojkumar";

const STATS = [
  { icon: <GitCommit size={20} />, value: 120, label: "Total Commits", color: "#6d28d9" },
  { icon: <GitPullRequest size={20} />, value: 18, label: "Pull Requests", color: "#3b82f6" },
  { icon: <FaStar size={20} />, value: 24, label: "Stars Earned", color: "#f59e0b" },
  { icon: <BookOpen size={20} />, value: 12, label: "Repositories", color: "#10b981" },
  { icon: <FaCodeBranch size={20} />, value: 35, label: "Contributions", color: "#818cf8" },
  { icon: <Users size={20} />, value: 8, label: "Followers", color: "#f472b6" },
];

const LANG_BARS = [
  { name: "JavaScript", pct: 42, color: "#f7df1e" },
  { name: "Java", pct: 26, color: "#f89820" },
  { name: "HTML/CSS", pct: 20, color: "#e34f26" },
  { name: "TypeScript", pct: 8, color: "#3178c6" },
  { name: "Other", pct: 4, color: "#64748b" },
];

// Contribution heatmap mock
function ContribGrid() {
  const weeks = 26;
  const days = 7;
  const intensities = Array.from({ length: weeks * days }, () => Math.random());

  const getColor = (v: number) => {
    if (v < 0.15) return "rgba(255,255,255,0.04)";
    if (v < 0.35) return "rgba(109,40,217,0.25)";
    if (v < 0.6) return "rgba(109,40,217,0.5)";
    if (v < 0.8) return "rgba(109,40,217,0.75)";
    return "#6d28d9";
  };

  return (
    <div className="flex gap-1 overflow-x-auto pb-2">
      {Array.from({ length: weeks }).map((_, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {Array.from({ length: days }).map((_, di) => (
            <div
              key={di}
              className="w-3 h-3 rounded-sm"
              style={{ background: getColor(intensities[wi * days + di]) }}
              title={`${Math.floor(intensities[wi * days + di] * 5)} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ "--v": 0 } as Record<string, number>}
        animate={inView ? { "--v": value } as Record<string, number> : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {inView ? value : 0}
      </motion.span>
    </motion.span>
  );
}

export function GitHubStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full text-sm"
            style={{ background: "rgba(109,40,217,0.1)", border: "1px solid rgba(109,40,217,0.3)", color: "#818cf8" }}>
            <FaGithub size={15} /> @{GITHUB_USER}
          </div>
          <h2 className="text-[#e2e8f0] mb-3"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.75rem, 5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.01em" }}>
            GitHub Statistics
          </h2>
          <p className="text-[#64748b]" style={{ fontSize: "0.95rem" }}>My open source activity and coding patterns.</p>
          <div className="mx-auto mt-5 rounded-full" style={{ width: "48px", height: "3px", background: "linear-gradient(90deg, #6d28d9, #3b82f6)" }} />
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {STATS.map(({ icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.04, y: -3 }}
              className="p-5 rounded-2xl text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${color}40`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,40,217,0.18)"; }}
            >
              <div className="flex justify-center mb-2" style={{ color }}>{icon}</div>
              <div className="text-[#e2e8f0] font-bold" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem" }}>
                <AnimatedCounter value={value} />+
              </div>
              <div className="text-[#475569] mt-0.5" style={{ fontSize: "0.68rem" }}>{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contribution heatmap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#c7d2fe] font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Contribution Activity
              </h3>
              <span className="text-[#475569] text-xs">Last 6 months</span>
            </div>
            <ContribGrid />
            <div className="flex items-center justify-end gap-1.5 mt-3">
              <span className="text-[#475569] text-xs">Less</span>
              {["rgba(255,255,255,0.04)", "rgba(109,40,217,0.25)", "rgba(109,40,217,0.5)", "rgba(109,40,217,0.75)", "#6d28d9"].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
              ))}
              <span className="text-[#475569] text-xs">More</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(109,40,217,0.18)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[#c7d2fe] font-semibold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Top Languages
              </h3>
              <span className="text-[#475569] text-xs">By repository usage</span>
            </div>

            {/* Stacked bar */}
            <div className="flex h-3 rounded-full overflow-hidden mb-6">
              {LANG_BARS.map((l) => (
                <motion.div
                  key={l.name}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${l.pct}%` } : {}}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  style={{ background: l.color }}
                />
              ))}
            </div>

            <div className="space-y-3">
              {LANG_BARS.map((l, i) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                      <span className="text-[#94a3b8] text-sm">{l.name}</span>
                    </div>
                    <span className="text-[#475569] text-xs font-mono">{l.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${l.pct}%` } : {}}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
