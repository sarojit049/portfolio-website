import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const LINKS = ["About", "Skills", "Experience", "Projects", "Certificates", "Achievements", "Education", "Contact"];

const scrollTo = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

export function Footer() {
  return (
    <footer className="relative border-t pt-14 pb-8 px-6"
      style={{ borderColor: "rgba(109,40,217,0.15)", background: "rgba(0,0,0,0.3)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)" }}>SK</span>
              <span className="text-[#c7d2fe] font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>Saroj Kumar</span>
            </div>
            <p className="text-[#475569] text-sm leading-relaxed max-w-xs">
              Information Technology student and MERN Stack developer based in Kolkata, India. Open to internship opportunities.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {LINKS.map((l) => (
                <button key={l} onClick={() => scrollTo(l)}
                  className="text-left text-[#475569] hover:text-[#818cf8] text-sm transition-colors">
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: <FaGithub size={18} />, href: "https://github.com/sarojit049", label: "GitHub" },
                { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/saroj-kumar-017948314/", label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-full transition-all text-[#64748b] hover:text-[#c7d2fe]"
                  style={{ background: "rgba(109,40,217,0.08)", border: "1px solid rgba(109,40,217,0.25)" }}
                  aria-label={label}>
                  {icon}
                </motion.a>
              ))}
            </div>
            <p className="text-[#475569] text-xs">sarojyadavit@gmail.com</p>
            <p className="text-[#475569] text-xs mt-1">Kolkata, West Bengal, India</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(109,40,217,0.12)" }}>
          <p className="text-[#475569] text-xs flex items-center gap-1.5">
            Built with <FaHeart className="text-[#6d28d9]" size={10} /> by{" "}
            <span className="text-[#818cf8]" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>Saroj Kumar</span>
            {" "}· {new Date().getFullYear()}
          </p>
          <p className="text-[#475569] text-xs">React · Tailwind CSS · Motion</p>
        </div>
      </div>
    </footer>
  );
}
