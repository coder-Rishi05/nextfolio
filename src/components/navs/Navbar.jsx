"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const mobileItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between relative">
      {/* Logo / Brand */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white font-mono font-bold text-lg tracking-widest uppercase"
      >
        <span className="text-amber-300">&lt;</span>
        Portfolio
        <span className="text-amber-300">/&gt;</span>
      </motion.div>

      {/* Desktop Nav */}
      <motion.ul
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
        className="hidden md:flex items-center gap-8"
      >
        {navLinks.map((item) => (
          <motion.li
            key={item.label}
            variants={navItem}
            className="list-none relative group"
          >
            <Link
              href={item.href}
              className="uppercase text-xs tracking-widest font-mono text-white/70 hover:text-amber-300 transition-colors duration-300 py-1"
            >
              {item.label}
            </Link>
            {/* Animated underline */}
            <motion.span
              className="absolute left-0 -bottom-0.5 h-px w-full bg-amber-300"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.li>
        ))}

        {/* CTA Button */}
        <motion.li variants={navItem} className="list-none">
          <Link
            href="#contact"
            className="ml-4 px-4 py-1.5 border border-amber-300 text-amber-300 text-xs font-mono tracking-widest uppercase rounded hover:bg-amber-300 hover:text-black transition-all duration-300"
          >
            Hire Me
          </Link>
        </motion.li>
      </motion.ul>

      {/* Hamburger Button (mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-0.5 bg-amber-300 block rounded"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-0.5 bg-amber-300 block rounded"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-0.5 bg-amber-300 block rounded"
        />
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-amber-300/20 md:hidden z-40 px-6 py-6"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.08 }}
              className="flex flex-col gap-5"
            >
              {navLinks.map((item) => (
                <motion.li key={item.label} variants={mobileItem} className="list-none">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 uppercase text-sm tracking-widest font-mono text-white/70 hover:text-amber-300 transition-colors duration-300 group"
                  >
                    <span className="text-amber-300/50 group-hover:text-amber-300 transition-colors">›</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              <motion.li variants={mobileItem} className="list-none pt-2 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block px-5 py-2 border border-amber-300 text-amber-300 text-xs font-mono tracking-widest uppercase rounded hover:bg-amber-300 hover:text-black transition-all duration-300"
                >
                  Hire Me
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;