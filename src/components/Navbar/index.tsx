"use client"; // Enable client-side rendering for animations

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "react-feather"; // Optional: for mobile menu icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className={`fixed w-full z-20 top-0 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">
          <Link href="/">Manuel Lini</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          {["About", "Skills"].map((section) => (
            <motion.div
              whileHover={{ scale: 1.1, color: "#7C3AED" }}
              whileTap={{ scale: 0.95 }}
              key={section}
            >
              <Link
                href={`#${section.toLowerCase()}`}
                className="text-lg text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                {section}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <Menu
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 w-6 h-6 cursor-pointer"
          />
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg"
          >
            {["About", "Skills"].map((section) => (
              <Link
                href={`#${section.toLowerCase()}`}
                key={section}
                className="block px-4 py-2 text-lg text-gray-800 hover:bg-purple-100"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu after clicking
              >
                {section}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
