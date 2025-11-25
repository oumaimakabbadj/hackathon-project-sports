"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Cloud, Star } from "lucide-react";

export default function DayNightWidget({ username }: { username: string }) {
  const [isDay, setIsDay] = useState(true);
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hrs = now.getHours();
      setIsDay(hrs >= 6 && hrs < 18);
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`relative w-full h-64 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-1000 group ${
        isDay
          ? "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]"
          : "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"
      }`}
    >
      {/* Background Animated Elements */}
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 right-10 opacity-20"
      >
        <Cloud className="w-32 h-32 text-white" />
      </motion.div>

      <div className="relative z-10 flex flex-col h-full justify-between p-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-white tracking-tight drop-shadow-md"
          >
            {isDay ? "Bonjour" : "Bonsoir"}, {username}
          </motion.h2>
          <p className="text-white/80 mt-1 font-medium text-lg">
            Prêt à bouger ?
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="text-6xl font-mono text-white font-bold tracking-tighter drop-shadow-lg">
            {time}
          </div>

          {/* Sun / Moon Animation */}
          <div className="relative w-24 h-24">
            <AnimatePresence mode="wait">
              {isDay ? (
                <motion.div
                  key="sun"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute inset-0"
                >
                  <Sun className="w-full h-full text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="absolute inset-0"
                >
                  <Moon className="w-full h-full text-blue-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                  <Star className="absolute top-0 right-0 w-6 h-6 text-yellow-100 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
