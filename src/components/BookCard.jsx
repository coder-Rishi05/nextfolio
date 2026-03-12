"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-zinc-900 to-zinc-950"
    >
      {/* Ambient glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250,200,50,0.06), transparent 40%)" }}
      />

      <div className="flex flex-col sm:flex-row">

        {/* Book Cover — full height strip on sm+ */}
        <div className="relative w-full sm:w-36 md:w-44 lg:w-52 shrink-0 h-56 sm:h-auto overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent sm:bg-gradient-to-r" />

          {/* Status badge floating on image */}
          <span className="absolute bottom-3 left-3 sm:hidden text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-emerald-400">
            {book.status}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-5 md:p-7 gap-4">

          {/* Top: Title + Meta */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-white leading-snug tracking-tight">
                  {book.title}
                </h2>
                <p className="text-xs text-zinc-500 mt-1 font-mono tracking-wide">
                  by <span className="text-zinc-300">{book.author}</span>
                </p>
              </div>

              {/* Badges — hidden on mobile (shown on image), visible sm+ */}
              <div className="hidden sm:flex items-center gap-2 flex-wrap">
                <span className="text-[10px] px-2.5 py-1 bg-yellow-400/15 text-yellow-300 rounded-full font-mono border border-yellow-400/20">
                  {book.reads}
                </span>
                <span className="text-[10px] px-2.5 py-1 bg-emerald-400/15 text-emerald-400 rounded-full font-mono border border-emerald-400/20">
                  {book.status}
                </span>
              </div>
            </div>

            {/* Mobile badges row */}
            <div className="flex sm:hidden items-center gap-2 flex-wrap">
              <span className="text-[10px] px-2.5 py-1 bg-yellow-400/15 text-yellow-300 rounded-full font-mono border border-yellow-400/20">
                {book.reads}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
              {book.description}
            </p>
          </div>

          {/* Expanded section */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/8 space-y-3">
                  <div className="flex gap-2">
                    <span className="mt-0.5 shrink-0 w-1 h-1 rounded-full bg-amber-300 self-start mt-2" />
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <span className="text-zinc-500 font-mono mr-1">Takeaway →</span>
                      {book.keyTakeaway}
                    </p>
                  </div>

                  {book.favorite && (
                    <div className="flex gap-2">
                      <span className="mt-0.5 shrink-0 w-1 h-1 rounded-full bg-amber-300 self-start mt-2" />
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        <span className="text-zinc-500 font-mono mr-1">Favorite →</span>
                        {book.favorite}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer: CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-white/6">
            <button
              onClick={() => setExpanded(!expanded)}
              className="group/btn flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-amber-300 transition-colors duration-200 cursor-pointer"
            >
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="inline-block text-amber-400"
              >
                +
              </motion.span>
              {expanded ? "Show less" : "Explore notes"}
            </button>

            {/* Decorative page count or genre tag */}
            {book.genre && (
              <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                {book.genre}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BookCard;