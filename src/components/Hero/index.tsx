/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-6xl font-bold text-white">
          Hello, I'm <span className="text-yellow-400">Manuel Lini</span>
        </h1>
        <p className="text-2xl mt-4 text-white">
          A passionate Frontend Developer
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <a href="#about">
            <button className="mt-10 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
              About me
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
