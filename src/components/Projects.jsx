"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "ResumeForge",
    role: "Full Stack · AI Tool",
    year: "2025",
    tags: ["React", "Node.js", "Groq AI", "Brevo", "pdf2json"],
    link: "https://resumeforge-1-c1t9.onrender.com/",
    description:
      "An AI-powered resume analyser and HR outreach tool. Upload a PDF resume, pick a job role, and get a detailed score breakdown with actionable suggestions — plus AI-written cold emails sent directly to recruiters.",
    highlights: [
      "Integrated Groq's LLaMA 3.3 70B model for structured resume analysis — returning per-section scores, priority-tagged suggestions, and rewrite recommendations.",
      "Built an AI email generation pipeline that reads the resume, understands the role, and sends a personalised outreach email with PDF attachment via Brevo REST API.",
      "Solved ES Module incompatibilities by migrating from pdf-parse to pdf2json with a safeDecode wrapper for reliable PDF text extraction.",
      "Designed a stateless REST API with two core endpoints — no database, no auth — deployed on Render free tier.",
    ],
  },
  {
    id: 2,
    title: "URL Shortener",
    role: "Full Stack · Personal",
    year: "2024",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    link: "https://url-frontend-fhzz.onrender.com",
    description:
      "A full-stack URL shortener with JWT auth via httpOnly cookies, credit-based throttling, and an admin panel — deployed on Render.",
    highlights: [
      "Engineered a credit-based throttling system using atomic MongoDB $expr updates, ensuring 100% data consistency.",
      "Built role-based access control using layered Express middleware.",
      "Developed an Admin Panel to manage users, URLs, and credit requests.",
      "Supported custom aliases, URL expiry, and click tracking.",
    ],
  },
  {
    id: 3,
    title: "NoteSphere",
    role: "Full Stack · Collaborative Study Platform",
    year: "2024",
    tags: ["React.js", "Node.js", "MongoDB Atlas", "Multer"],
    link: "https://notesspherestu.onrender.com/",
    description:
      "A collaborative study platform with role-based dashboards, file uploads, JWT auth, and a responsive UI.",
    highlights: [
      "Architected responsive frontend using React + Tailwind + DaisyUI.",
      "Designed Admin & User dashboards with role-based rendering.",
      "Built file upload system using Multer.",
      "Implemented protected routes and global state using Context API.",
    ],
  },
];

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

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
            transition={{ duration: 0.25 }}
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
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 border-t border-white/6 space-y-4">
              <p className="text-sm text-zinc-400">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-zinc-500">
                    <span className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
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

const Projects = () => {
  return (
    <section id="projects" className="w-full flex justify-center py-20">
      <div className="w-full max-w-4xl flex flex-col gap-4 px-5 sm:px-8">
        <h1 className="text-5xl italic sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-none">
          Pro<span className="text-amber-300">jects</span>
        </h1>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;