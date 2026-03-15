"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";



const Projects = () => {
  const [open, setOpen] = useState(false);

  

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
];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/8 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6 text-left"
      >
        <span className="hidden sm:block font-mono text-xs text-zinc-700 w-7">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-zinc-500">
              {project.role}
            </span>
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

        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-zinc-600">
            {project.year}
          </span>

          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            className="w-7 h-7 flex items-center justify-center border border-white/12 rounded-full"
          >
            +
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 border-t border-white/6 space-y-4">
              <p className="text-sm text-zinc-400">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-500">
                    <span className="w-1 h-1 rounded-full bg-amber-400 mt-2" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 border border-amber-300/30 px-4 py-2 rounded-full hover:bg-amber-300/10 transition"
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

export default Projects;