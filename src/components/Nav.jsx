"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navs/Navbar";

const Nav = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-amber-300/10 shadow-lg shadow-black/30"
          : "bg-transparent border-b border-white/6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="shrink-0"
        >
          <Image
            src="/logo-removebg-preview.png"
            alt="Rishi"
            width={120}
            height={36}
            className="object-contain brightness-110"
            priority
          />
        </motion.div>

        {/* Desktop Navbar — center */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar />
        </div>

        {/* Right side: theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{ rotate: 20, scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsDark((p) => !p)}
            className="relative w-9 h-9 flex items-center justify-center rounded-full border border-white/15 hover:border-amber-300/50 bg-white/4 hover:bg-amber-300/8 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun className="w-4 h-4 text-amber-300" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon className="w-4 h-4 text-white/70" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navbar — below main bar */}
      <div className="md:hidden border-t border-white/6 px-5 py-3">
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Nav;