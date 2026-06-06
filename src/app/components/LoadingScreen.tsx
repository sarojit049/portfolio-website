import { motion } from "motion/react";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#060714" }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Animated logo */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl"
            style={{ background: "conic-gradient(from 0deg, #6d28d9, #2563eb, #818cf8, #6d28d9)", padding: "2px" }}
          >
            <div className="w-full h-full rounded-2xl" style={{ background: "#060714" }} />
          </motion.div>
          <div
            className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold"
            style={{
              background: "linear-gradient(135deg, #6d28d9, #2563eb)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.6rem",
              margin: "2px",
            }}
          >
            SK
          </div>
        </div>

        <div>
          <p className="text-[#818cf8] text-center font-medium mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
            SAROJ KUMAR
          </p>
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: i < 2 ? "#6d28d9" : i === 2 ? "#818cf8" : "#2563eb" }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
