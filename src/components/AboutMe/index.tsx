/* eslint-disable @next/next/no-img-element */
"use client"; // Enables client-side rendering for motion

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [typedText, setTypedText] = useState("");

  const description =
    "I'm a passionate Frontend Developer who loves building interactive user interfaces using modern web technologies like React, Next.js, and TypeScript.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + description[index]);
      index++;
      if (index >= description.length) clearInterval(typingInterval);
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* About Me Text */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-700 leading-relaxed">{typedText}</p>
          <motion.p
            className="mt-6 text-lg font-semibold text-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            I specialize in building responsive, scalable, and visually engaging
            web applications.
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/me.jpg"
            alt="Frontend Developer"
            className="w-[20rem] h-[30rem] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
