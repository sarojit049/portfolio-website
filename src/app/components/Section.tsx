import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 relative ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[#e2e8f0] mb-3"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#64748b] max-w-md mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
          <div
            className="mx-auto mt-5 rounded-full"
            style={{ width: "48px", height: "3px", background: "linear-gradient(90deg, #6d28d9, #3b82f6)" }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
