import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12 }}
      className="flex items-center justify-center gap-14"
    >
      {[
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Blogs", href: "/blog" },
        { label: "Contact", href: "#contact" },
      ].map((item) => (
        <motion.li
          key={item.label}
          variants={navItem}
          className="list-none relative"
          whileHover="hover"
        >
          <Link
            href={item.href}
            className="uppercase text-sm tracking-widest font-mono text-white/80 hover:text-white transition-colors"
          >
            {item.label}
          </Link>

          {/* Underline */}
          <motion.span
            className="absolute left-0 -bottom-1 h-px w-full bg-amber-50"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Navbar;
