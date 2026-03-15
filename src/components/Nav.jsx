"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/navs/Navbar";

const Nav = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-amber-300/10 shadow-md shadow-black/40"
          : "bg-transparent border-b border-white/6"
      }`}
    >
      {/* Main nav row */}
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4 relative">
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

        {/* Desktop links + hamburger */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Theme toggle */}
        <motion.button
          whileHover={{ rotate: 20, scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          onClick={() => setIsDark((p) => !p)}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-white/15 hover:border-amber-300/50 hover:bg-amber-300/8 transition-all duration-300"
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
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-md border-t border-amber-300/10"
          >
            <ul className="flex flex-col px-6 py-5 gap-4">
              {[
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Blogs", href: "/blog" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label} className="list-none">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 uppercase text-sm tracking-widest font-mono text-white/60 hover:text-amber-300 transition-colors duration-200"
                  >
                    <span className="text-amber-300/40">›</span>
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="list-none pt-3 border-t border-white/8">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-5 py-2 border border-amber-300 text-amber-300 text-xs font-mono tracking-widest uppercase rounded-full hover:bg-amber-300 hover:text-black transition-all duration-300"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
