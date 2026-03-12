"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const socials = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    handle: "@coder_rishi05",
    note: "Social media never used — couldn't find a reason, so...",
    href: "#",
    accent: "group-hover:border-pink-400/40 group-hover:text-pink-400",
    iconColor: "group-hover:text-pink-400",
  },
  {
    icon: <MdOutlineMail />,
    label: "Email",
    handle: "rawatrishi3@gmail.com",
    note: "Message me for anything big or small.",
    href: "mailto:rawatrishi3@gmail.com",
    accent: "group-hover:border-amber-300/40 group-hover:text-amber-300",
    iconColor: "group-hover:text-amber-300",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    handle: "rawatrishi3",
    note: "See my progress or connect professionally.",
    href: "https://www.linkedin.com/in/rawatrishi3/",
    accent: "group-hover:border-blue-400/40 group-hover:text-blue-400",
    iconColor: "group-hover:text-blue-400",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    handle: "coder-Rishi05",
    note: "Follow along or build something together.",
    href: "https://github.com/coder-Rishi05",
    accent: "group-hover:border-white/30 group-hover:text-white",
    iconColor: "group-hover:text-white",
  },
];

const Social = () => {
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setName("");
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/8 py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/5 blur-[100px] rounded-full" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-300/50" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-300/70">
              Connect
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-none">
            Stay In Touch
          </h1>
          <p className="text-sm font-mono text-zinc-500 max-w-md leading-relaxed">
            Whether it's a big idea, a small question, or just to say hello —
            I'm here.
          </p>
        </motion.div>

        {/* Social cards — 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className={`group flex items-start gap-4 p-5 rounded-2xl border border-white/8 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all duration-300 ${s.accent}`}
            >
              {/* Icon circle */}
              <div
                className={`mt-0.5 w-9 h-9 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 transition-all duration-300 ${s.iconColor}`}
              >
                <span className="text-sm">{s.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-sm font-mono font-semibold text-white/80">
                    {s.label}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">
                    {s.handle}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {s.note}
                </p>
              </div>

              <FaExternalLinkAlt className="mt-1 w-3 h-3 shrink-0 text-zinc-700 group-hover:text-current transition-colors duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Quick hello form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-white/8 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 sm:p-8"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-600 mb-1">
            Quick Hello
          </p>
          <p className="text-sm text-zinc-400 font-mono mb-6">
            Drop your name — I'll know someone visited. 👋
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="Your name..."
              className="flex-1 bg-transparent border border-white/12 rounded-full px-5 py-2.5 text-sm font-mono text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-300/50 transition-colors duration-200"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmit}
              className="px-6 py-2.5 rounded-full border border-amber-300 text-amber-300 font-mono text-xs tracking-widest uppercase hover:bg-amber-300 hover:text-black transition-all duration-300 cursor-pointer shrink-0"
            >
              {sent ? "Sent ✓" : "Say Hi"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Social;
