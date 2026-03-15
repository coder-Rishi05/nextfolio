"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {/* Desktop links */}
      <motion.ul
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1 }}
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
              className="uppercase text-xs tracking-widest font-mono text-white/60 hover:text-amber-300 transition-colors duration-300 py-1"
            >
              {item.label}
            </Link>
            <motion.span
              className="absolute left-0 -bottom-0.5 h-px w-full bg-amber-300"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </motion.li>
        ))}

        <motion.li variants={navItem} className="list-none">
          <Link
            href="#contact"
            className="ml-2 px-4 py-1.5 border border-amber-300 text-amber-300 text-xs font-mono tracking-widest uppercase rounded-full hover:bg-amber-300 hover:text-black transition-all duration-300"
          >
            Hire Me
          </Link>
        </motion.li>
      </motion.ul>

      {/* Hamburger — mobile only */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-0.5 bg-amber-300 block rounded"
        />
        <motion.span
          animate={
            menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.2 }}
          className="w-5 h-0.5 bg-amber-300 block rounded"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-0.5 bg-amber-300 block rounded"
        />
      </button>
    </>
  );
};

export default Navbar;
