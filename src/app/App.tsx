// MARKER-MAKE-KIT-INVOKED
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Particles } from "./components/Particles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Achievements } from "./components/Achievements";
import { GitHubStats } from "./components/GitHubStats";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#060714";
      document.body.style.color = "#e2e8f0";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#f1f5fd";
      document.body.style.color = "#1e1b4b";
    }
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <div
      style={{
        background: isDark ? "#060714" : "#f1f5fd",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        transition: "background 0.3s",
      }}
    >
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <>
          <Particles />
          {/* Scrollbar hiding */}
          <style>{`
            ::-webkit-scrollbar { width: 4px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: rgba(109,40,217,0.35); border-radius: 99px; }
            ::-webkit-scrollbar-thumb:hover { background: rgba(109,40,217,0.6); }
          `}</style>

          <div className="relative z-10">
            <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            <Hero />

            {/* Subtle section dividers */}
            <div style={{ background: "linear-gradient(180deg, transparent, rgba(109,40,217,0.06) 50%, transparent)", height: "1px" }} />

            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certificates />
            <Achievements />
            <GitHubStats />
            <Education />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
