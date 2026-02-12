"use client";

import { useState } from "react";
import Image from "next/image";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Image */}
        <div className="relative w-full md:w-1/4 h-80 rounded-xl overflow-hidden">
          <Image
            src={book.image}
            alt={book.title}
            fill
            className="object-fit transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between md:w-2/3 space-y-5">
          
          <div>
            <h2 className="text-3xl font-serif font-semibold text-white tracking-tight">
              {book.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              by{" "}
              <span className="font-medium text-zinc-300">
                {book.author}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full font-medium">
              {book.reads}
            </span>

            <span className="text-xs px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full">
              {book.status}
            </span>
          </div>

          <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
            {book.description}
          </p>

          {expanded && (
            <div className="space-y-2 text-sm text-zinc-400 border-t border-zinc-800 pt-4">
              <p>
                <span className="text-zinc-500">Key Takeaway:</span>{" "}
                {book.keyTakeaway}
              </p>

              {book.favorite && (
                <p>
                  <span className="text-zinc-500">Favorite Concept:</span>{" "}
                  {book.favorite}
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm hover:cursor-pointer text-yellow-400 hover:text-yellow-300 transition font-medium self-start"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
