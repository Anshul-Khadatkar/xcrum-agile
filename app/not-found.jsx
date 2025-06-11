"use client"; // only if you're using App Router

import { motion } from "framer-motion";
import { Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-slate-950 to-slate-900 text-white p-6 overflow-hidden">
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0) 70%)",
              animation: `float ${
                Math.random() * 5 + 10
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Ghost
            size={100}
            className="text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]"
          />
        </motion.div>

        <motion.h1
          className="text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 drop-shadow-[0_0_15px_rgba(129,140,248,0.3)]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% auto" }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl mt-4 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Whoops! This page seems to have vanished.
        </motion.p>

        <motion.p
          className="mt-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Don't worry, our ghost friend is still here to guide you home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center mt-8 px-8 py-3 font-semibold text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          >
            <span className="relative">
              Back to Home
              <span className="absolute bottom-0 left-0 w-full h-px bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, 10px) rotate(5deg);
          }
          50% {
            transform: translate(-5px, 20px) rotate(-5deg);
          }
          75% {
            transform: translate(-15px, 10px) rotate(3deg);
          }
        }
      `}</style>
    </main>
  );
}
