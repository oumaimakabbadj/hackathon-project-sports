"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function DayNightWidget({ username }: { username: string }) {
  const [isDay, setIsDay] = useState(true);
  const [time, setTime] = useState("");

  useEffect(() => {
    // Function to update time and day/night status
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();

      // Format time as 9:00 AM
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );

      // Assume Day is 6AM to 6PM (18:00)
      setIsDay(hours >= 6 && hours < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 shadow-xl transition-colors duration-1000 ${
        isDay
          ? "bg-linear-to-br from-blue-400 to-blue-200"
          : "bg-linear-to-br from-indigo-900 to-slate-800"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Dynamic Greeting */}
        <h2
          className={`text-3xl font-bold mb-4 ${
            isDay ? "text-white" : "text-blue-100"
          }`}
        >
          {isDay ? "Bonjour" : "Bonsoir"}, {username}
        </h2>

        {/* Animated Icon Switcher */}
        <div className="my-4 h-24 w-24 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isDay ? (
              <motion.div
                key="sun"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <Sun className="w-20 h-20 text-yellow-300 drop-shadow-lg" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ scale: 0, rotate: 90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -90 }}
                transition={{ duration: 0.5 }}
              >
                <Moon className="w-20 h-20 text-gray-200 drop-shadow-lg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Time Display */}
        <div
          className={`text-4xl font-mono tracking-widest mt-2 ${
            isDay ? "text-white" : "text-blue-200"
          }`}
        >
          {time}
        </div>
      </div>

      {/* Background decoration circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-10 -mb-10 blur-xl"></div>
    </div>
  );
}
