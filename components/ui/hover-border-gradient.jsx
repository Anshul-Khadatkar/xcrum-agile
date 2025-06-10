"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "relative p-[1px] rounded-lg overflow-hidden transition-all group",
        className
      )}
      whileHover={{
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ mixBlendMode: "overlay" }}
      />
      <div className="relative bg-gray-800 rounded-lg h-full">{children}</div>
    </motion.div>
  );
};

export default HoverBorderGradient;
