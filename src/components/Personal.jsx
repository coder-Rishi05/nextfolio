import React from "react";
import { motion } from "framer-motion";
import BookCard from "./BookCard";

const books = [
  {
    id: 1,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    genre: "Strategy",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg",
    reads: "Read Twice · 2022, 2024",
    status: "Completed",
    description:
      "This book reshaped how I observe power, strategy, and human behavior in real life. It changed how I analyze leadership and ambition.",
    keyTakeaway: "Power is rooted in psychology, perception, and strategic patience.",
    favorite: "Law 3 — Conceal Your Intentions",
  },
  {
    id: 2,
    title: "Bhagavad Gita As It Is",
    author: "A.C. Bhaktivedanta Swami Prabhupada",
    genre: "Philosophy",
    image: "https://iskconbhiwandi.org/images/bhagavad-gita/bhagvad-gita.jpg",
    reads: "Read Once · Reflecting",
    status: "Revisiting",
    description:
      "More than philosophy — timeless guidance on discipline, action, and detachment from outcomes. Every re-read reveals something new.",
    keyTakeaway:
      "You are not the body nor the mind. Whatever is in your head is just a thought — a mere thought.",
    favorite: "Karma Yoga",
  },
  {
    id: 3,
    title: "Flow",
    author: "Mihaly Csikszentmihalyi",
    genre: "Psychology",
    image: "https://images.thenile.io/r1000/9780061339202.jpg",
    reads: "Read Once · 2023",
    status: "Completed",
    description:
      "A deep exploration of optimal experience and how true happiness comes from immersion in meaningful work.",
    keyTakeaway: "Happiness is achieved when challenge meets skill.",
    favorite: "The Flow State Framework",
  },
];

const Personal = () => {
  return (
    <section className="relative w-full border-t border-zinc-800/60 py-24 overflow-hidden">

      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-300/50" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-amber-300/70">Reading List</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-none">
            Books I Return To
          </h1>

          <p className="text-sm font-mono text-zinc-500 max-w-md leading-relaxed">
            Not a reading list — more like a set of lenses. These books changed
            how I think, build, and see.
          </p>
        </motion.div>

        {/* Book cards */}
        <div className="flex flex-col gap-8">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-zinc-800/50 text-center space-y-3"
        >
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-600">
            Always Reading
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Many more, but these hit hardest.
          </h3>
          <p className="text-sm text-zinc-500 font-mono">
            Finishing roughly one book every month.
          </p>

          {/* Reading progress indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
              <div
                key={m}
                title={m}
                className={`h-1 rounded-full transition-all ${
                  i < 3 ? "w-5 bg-amber-400" : "w-2 bg-zinc-700"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] font-mono text-zinc-600 tracking-widest">3 / 12 this year</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Personal;