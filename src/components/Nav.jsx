"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "../components/navs/Navbar";

const Nav = () => {
  const [isDark, setIsDark] = useState(true);

  // Apply theme to body
  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-6 sm:px-10 py-4 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo-removebg-preview.png"
            alt="Rishi logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex">
          <Navbar />
        </div>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDark((prev) => !prev)}
          className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FiSun className="w-5 h-5 text-white/80" />
          ) : (
            <FiMoon className="w-5 h-5 text-white/80" />
          )}
        </motion.button>
      </nav>

      {/* Mobile Navbar */}
      <div className="mt-4 md:hidden">
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Nav;
