"use client";

import type { Book } from "@/data/site";

interface BookCoverProps {
  book: Book;
  className?: string;
  /** show the category tag chip at top */
  showTag?: boolean;
}

/**
 * Placeholder "book cover" rendered from a cinematic gradient + the title
 * typography. Designed so the client can swap in the official cover image
 * later by replacing the inner markup with an <img>.
 */
export default function BookCover({
  book,
  className = "",
  showTag = false,
}: BookCoverProps) {
  const { from, via, to } = book.cover;
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(155deg, ${from} 0%, ${via} 52%, ${to} 100%)`,
      }}
    >
      {/* texture / grain glow */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
        style={{ background: to }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_120%,rgba(255,255,255,0.10),transparent_55%)]" />

      {/* top mark */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-4">
        <span className="font-display text-[8px] uppercase tracking-[0.3em] text-white/55">
          21 Laps
        </span>
        {showTag && (
          <span className="bg-gold px-2 py-0.5 font-display text-[8px] uppercase tracking-[0.18em] text-black">
            {book.adaptationLabel}
          </span>
        )}
      </div>

      {/* title block */}
      <div className="relative z-10 px-4 pb-4">
        <span className="mb-2 block h-[2px] w-7 bg-gold/80" />
        <h3
          className="cover-title text-white"
          style={{
            fontSize: book.title.length > 36 ? "0.95rem" : book.title.length > 22 ? "1.15rem" : "1.4rem",
          }}
        >
          {book.title}
        </h3>
        <p className="mt-2 font-serif-display text-[10px] italic text-white/55">
          a novel
        </p>
      </div>
    </div>
  );
}
