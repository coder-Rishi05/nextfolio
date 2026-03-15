"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => (
  <footer className="relative w-full border-t border-white/8 py-20 overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto px-5 flex flex-col items-center gap-12">
      {/* Prayer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full rounded-2xl border border-white/8 bg-zinc-900 p-10 text-center"
      >
        <p className="text-xs text-zinc-600 uppercase tracking-widest">
          At the end, I pray for
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          सर्वे भवन्तु सुखिनः
        </h2>

        <p className="text-sm text-zinc-500 mt-4">
          May all beings be happy · May all be free from suffering
        </p>
      </motion.div>

      {/* Nav Links */}
      <div className="flex gap-6">
        {["Skills", "Projects", "Books", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            
            className="text-xs font-mono text-zinc-600 hover:text-amber-300 transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Bottom */}
      <div className="w-full flex justify-between items-center border-t border-white/6 pt-6">
        <p className="text-xs text-zinc-700">
          © 2024 ऋषिः · Designed & Built by Rishi
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/coder-Rishi05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rawatrishi3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 hover:text-blue-400"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:rawatrishi3@gmail.com"
            className="text-zinc-700 hover:text-amber-300"
          >
            <MdOutlineMail />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
