"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptedText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 font-mono md:text-6xl lg:text-7xl"
      aria-label={text}
    >
      {displayText}
    </motion.h1>
  );
};
