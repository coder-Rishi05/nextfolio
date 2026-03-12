"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const skills = [
  { name: "React", color: "text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10" },
  { name: "JavaScript", color: "text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/10" },
  { name: "TypeScript", color: "text-blue-400 border-blue-400/30 hover:bg-blue-400/10" },
  { name: "Tailwind CSS", color: "text-teal-400 border-teal-400/30 hover:bg-teal-400/10" },
  { name: "Node.js", color: "text-green-400 border-green-400/30 hover:bg-green-400/10" },
  { name: "Express", color: "text-gray-300 border-gray-300/30 hover:bg-gray-300/10" },
  { name: "MongoDB", color: "text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/10" },
  { name: "UI/UX Thinking", color: "text-pink-400 border-pink-400/30 hover:bg-pink-400/10" },
];

export default function AboutSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-20 space-y-24">

      {/* What I Do */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative text-center"
      >
        {/* Decorative line */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center gap-4 mb-8 justify-center"
        >
          <span className="h-px w-12 bg-amber-300/50" />
          <span className="text-amber-300 font-mono text-xs tracking-[0.3em] uppercase">About</span>
          <span className="h-px w-12 bg-amber-300/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight"
        >
          What I{" "}
          <span className="text-amber-300 font-mono italic">Do</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/60 max-w-2xl mx-auto"
        >
          I focus on building{" "}
          <span className="text-white/90">modern, performant, and scalable</span>{" "}
          web interfaces where design meets logic. My work revolves around crafting
          smooth user experiences with clean architecture and meaningful interactions.
        </motion.p>
      </motion.div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Skills Snapshot */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center gap-4 mb-8 justify-center"
        >
          <span className="h-px w-12 bg-amber-300/50" />
          <span className="text-amber-300 font-mono text-xs tracking-[0.3em] uppercase">Stack</span>
          <span className="h-px w-12 bg-amber-300/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl font-bold mb-10 text-white tracking-tight"
        >
          Skills{" "}
          <span className="text-amber-300 font-mono italic">Snapshot</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              variants={fadeUp}
              custom={i * 0.08}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 text-xs sm:text-sm font-mono border rounded-full transition-all duration-300 cursor-pointer ${skill.color}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Philosophy */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative text-center"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex items-center gap-4 mb-8 justify-center"
        >
          <span className="h-px w-12 bg-amber-300/50" />
          <span className="text-amber-300 font-mono text-xs tracking-[0.3em] uppercase">Belief</span>
          <span className="h-px w-12 bg-amber-300/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight"
        >
          My{" "}
          <span className="text-amber-300 font-mono italic">Philosophy</span>
        </motion.h2>

        {/* Quote block */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="relative max-w-2xl mx-auto"
        >
          <span className="absolute -top-4 -left-2 text-6xl text-amber-300/20 font-serif leading-none select-none">"</span>
          <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/60 italic px-6 sm:px-10">
            Good software is not just{" "}
            <span className="text-white/90">written</span> — it is{" "}
            <span className="text-white/90">designed</span>,{" "}
            <span className="text-white/90">felt</span>, and{" "}
            <span className="text-white/90">experienced</span>.
            Simplicity, clarity, and intention guide everything I build.
          </p>
          <span className="absolute -bottom-6 -right-2 text-6xl text-amber-300/20 font-serif leading-none select-none">"</span>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.div variants={fadeUp} custom={0}>
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono tracking-widest uppercase overflow-hidden border border-amber-300 text-amber-300 rounded-full hover:text-black transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Let's Build Together</span>
            <span className="relative text-base">→</span>
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} custom={1}>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono tracking-widest uppercase border border-white/20 text-white/60 rounded-full hover:border-white/50 hover:text-white transition-all duration-300"
          >
            View Resume
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}