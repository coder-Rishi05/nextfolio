"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const Profile = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient amber orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center gap-8">

        {/* Role label */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/25 bg-amber-300/6 text-amber-300 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Web Designer & Developer
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div {...fadeUp(0.2)} className="space-y-2">
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-serif font-black tracking-tight leading-none text-white">
            Welcome
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        </motion.div>

        {/* Name + intro */}
        <motion.div {...fadeUp(0.3)} className="max-w-2xl space-y-4">
          <p className="text-base sm:text-lg font-mono leading-relaxed text-white/80">
            Hi, I&apos;m{" "}
            <span className="text-amber-300 font-semibold">ऋषिः</span>{" "}
            <span className="text-white/50 text-sm">(ऋषभः • २.)</span>
            {" "}— a web designer and developer. I create websites not just to function,
            but to feel <span className="text-white italic">calm, intentional, and unforgettable.</span>
          </p>

          <p className="text-sm sm:text-base font-mono leading-relaxed text-white/55">
            Currently in{" "}
            <span className="text-white/80 font-medium">BCA Year 3</span>,
            exploring creative frontend and scalable backend development.
          </p>

          <p className="text-sm sm:text-base font-mono leading-relaxed text-white/45">
            Beyond code — books on power, influence, psychology, and fiction
            quietly shape how I think about design and systems.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Link
            href="#projects"
            className="group relative overflow-hidden px-7 py-2.5 rounded-full border border-amber-300 text-amber-300 font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-black"
          >
            <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">View Work →</span>
          </Link>

          <Link
            href="#contact"
            className="px-7 py-2.5 rounded-full border border-white/15 text-white/50 font-mono text-xs tracking-widest uppercase hover:border-white/35 hover:text-white/80 transition-all duration-300"
          >
            Contact
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-transparent via-amber-300/50 to-transparent"
          />
          <p className="text-[10px] font-mono tracking-[0.3em] text-white/25 uppercase">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;