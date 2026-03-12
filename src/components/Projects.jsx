"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "ServiceNow Studio",
    role: "UX Architect · AI Platform",
    year: "2023 – Present",
    tags: ["AI/UX", "Design Systems", "MCP"],
    link: "#",
    description:
      "Designing and evangelizing unified, scalable, end-to-end platform-centric systems and product strategies across multiple tools and capabilities.",
    highlights: [
      "Developed prompt-to-experience tool by establishing design system ontologies integrated into MCP servers for LLM consumption.",
      "Established foundational AI UX patterns for the platform.",
      "Maintained and modified platform-wide navigational structures.",
      "Supported consolidation of 50+ developer tools into ServiceNow Studio.",
    ],
  },
  {
    id: 2,
    title: "Portfolio System",
    role: "Full Stack · Personal",
    year: "2024",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
    description:
      "Built a performant, intentional personal portfolio from scratch — focused on calm UX, clean architecture, and meaningful micro-interactions.",
    highlights: [
      "Designed a cohesive dark aesthetic with amber accents throughout.",
      "Implemented scroll-triggered animations and staggered reveals.",
      "Fully responsive across all screen sizes with mobile-first approach.",
    ],
  },
  {
    id: 3,
    title: "Book Tracker App",
    role: "Frontend · Personal",
    year: "2023",
    tags: ["React", "MongoDB", "Express"],
    link: "#",
    description:
      "A reading journal app that tracks books, notes, and key takeaways — built to support a habit of reading one book per month.",
    highlights: [
      "Expandable book cards with animated accordions.",
      "Status tracking: Reading, Revisiting, Completed.",
      "Clean REST API with Express and MongoDB Atlas.",
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl border border-white/8 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card header — clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 text-left cursor-pointer"
      >
        {/* Index */}
        <span className="hidden sm:block shrink-0 font-mono text-xs text-zinc-700 w-7">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title + meta */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors duration-300">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-zinc-500">{project.role}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Year + toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-xs text-zinc-600">{project.year}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-7 h-7 flex items-center justify-center rounded-full border border-white/12 text-zinc-500 group-hover:border-amber-300/40 group-hover:text-amber-300 transition-all duration-300"
          >
            <span className="text-base leading-none">+</span>
          </motion.div>
        </div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 sm:pl-14 space-y-5 border-t border-white/6">
              <p className="text-sm text-zinc-400 font-mono leading-relaxed max-w-2xl pt-4">
                {project.description}
              </p>

              <ul className="space-y-2.5 max-w-2xl">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-500 leading-relaxed">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-amber-400 mt-2" />
                    {h}
                  </li>
                ))}
              </ul>

              
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 border border-amber-300/30 px-4 py-2 rounded-full hover:bg-amber-300/10 transition-all duration-200"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                View Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="relative w-full border-t border-white/8 py-24">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

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
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-300/70">Work</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-none">
          Projects
        </h1>
        <p className="text-sm font-mono text-zinc-500 max-w-md leading-relaxed">
          Things I've designed, built, and shipped — each one taught me something.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {projectsData.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;