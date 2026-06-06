import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";

const NAV_LINKS = [
  "About", "Skills", "Experience", "Projects",
  "Certificates", "Achievements", "Education", "Contact",
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,7,20,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(109,40,217,0.18)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)" }}
          >
            SK
          </span>
          <span className="text-[#c7d2fe] font-semibold tracking-wide hidden sm:block" style={{ fontSize: "0.95rem" }}>
            Saroj<span className="text-[#818cf8]">Kumar</span>
          </span>
        </motion.button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="relative px-3 py-1.5 text-xs font-medium transition-colors rounded-lg"
              style={{ color: active === l ? "#a78bfa" : "#94a3b8" }}
            >
              {active === l && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "rgba(109,40,217,0.15)" }}
                />
              )}
              <span className="relative">{l}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[rgba(109,40,217,0.3)] text-[#94a3b8] hover:text-[#c7d2fe] transition-all"
            style={{ background: "rgba(109,40,217,0.08)" }}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("Contact")}
            className="hidden sm:flex px-4 py-2 rounded-lg text-white text-xs font-semibold"
            style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)" }}
          >
            Hire Me
          </motion.button>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-[#c7d2fe]">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "rgba(6,7,20,0.97)", borderTop: "1px solid rgba(109,40,217,0.15)" }}
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="block w-full text-left py-3 px-3 rounded-lg text-sm transition-colors"
                  style={{ color: active === l ? "#a78bfa" : "#94a3b8", background: active === l ? "rgba(109,40,217,0.12)" : "transparent" }}
                >
                  {l}
                </button>
              ))}
              <button
                onClick={() => scrollTo("Contact")}
                className="w-full mt-3 py-2.5 rounded-lg text-white text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)" }}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
