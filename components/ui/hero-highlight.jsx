"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Highlight = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
        backgroundPosition: "0% 100%",
      }}
      animate={{
        backgroundSize: ["0% 100%", "100% 100%", "100% 100%", "0% 100%"],
        backgroundPosition: ["0% 100%", "0% 100%", "100% 100%", "100% 100%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.4, 0.6, 1],
      }}
      style={{
        backgroundRepeat: "no-repeat",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-lg bg-gradient-to-r from-sky-400/30 via-blue-500/30 to-indigo-600/30 px-3 py-2 shadow-lg dark:from-sky-400/40 dark:via-blue-500/40 dark:to-indigo-600/40 dark:shadow-cyan-500/20`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
