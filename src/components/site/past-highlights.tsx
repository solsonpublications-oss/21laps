"use client";

import { useMemo, useState } from "react";
import { ZoomIn } from "lucide-react";
import {
  BOOKS,
  CATEGORY_LABELS,
  FILTERS,
  bookCover,
  bookStatus,
  type Book,
  type Category,
} from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type FilterKey = Category | "all";

export default function PastHighlights() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [selected, setSelected] = useState<Book | null>(null);

  const books = useMemo(
    () => (filter === "all" ? BOOKS : BOOKS.filter((b) => b.category === filter)),
    [filter]
  );

  const counts = useMemo(() => {
    const c: Record<FilterKey, number> = {
      all: BOOKS.length,
      film: BOOKS.filter((b) => b.category === "film").length,
      tv: BOOKS.filter((b) => b.category === "tv").length,
      upcoming: BOOKS.filter((b) => b.category === "upcoming").length,
    };
    return c;
  }, []);

  return (
    <section id="past-highlights" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Heading on gold banner */}
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <div className="bg-gold px-8 py-3 sm:px-12 sm:py-4">
              <h2 className="display-heading text-2xl font-bold uppercase tracking-[0.04em] text-white sm:text-3xl lg:text-4xl">
                Past Highlights
              </h2>
            </div>
            <span className="absolute inset-1 border border-white/40" aria-hidden />
          </div>
          <p className="mt-6 max-w-2xl text-center text-sm text-[#777]">
            A selection of books we have developed and produced for film and
            television — plus titles currently in development.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:mt-12">
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`filter-tab ${isActive ? "is-active" : ""}`}
                aria-pressed={isActive}
              >
                {f.label}{" "}
                <span
                  className={`ml-1 text-[10px] ${
                    isActive ? "text-gold/70" : "text-[#bbb]"
                  }`}
                >
                  ({counts[f.key]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-7">
          {books.map((book, i) => (
            <article
              key={book.id}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              onClick={() => setSelected(book)}
            >
              {/* Cover (2:3) — real image with gradient fallback */}
              <div
                className="relative aspect-[2/3] w-full overflow-hidden tile-shadow"
                style={{
                  backgroundImage: `linear-gradient(155deg, ${book.cover.from}, ${book.cover.via} 52%, ${book.cover.to})`,
                }}
              >
                <div className="absolute inset-0 transition-transform duration-[700ms] ease-out group-hover:scale-[1.07]">
                  <img
                    src={bookCover(book)}
                    alt={`${book.title} — ${book.adaptation} ${book.adaptationLabel.toLowerCase()} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* status badge */}
                <span className="absolute left-2 top-2 z-10 bg-gold px-2 py-0.5 font-display text-[8px] font-bold uppercase tracking-[0.12em] text-black">
                  {bookStatus(book)}
                </span>

                {/* hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 border border-gold/80 px-4 py-2 font-display text-[11px] uppercase tracking-[0.2em] text-white">
                    <ZoomIn size={14} className="text-gold" />
                    View Details
                  </span>
                </div>
              </div>

              {/* caption under cover */}
              <div className="px-1 pt-4">
                <span className="font-display text-[10px] uppercase tracking-[0.22em] text-gold">
                  {CATEGORY_LABELS[book.category]}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold leading-snug text-charcoal">
                  {book.title}
                </h3>
                <p className="mt-0.5 text-[12px] text-[#666]">
                  by {book.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog
        open={selected !== null}
        onOpenChange={(o) => !o && setSelected(null)}
      >
        <DialogContent className="max-w-3xl overflow-hidden rounded-none border-charcoal/30 bg-white p-0 sm:p-0">
          {selected && (
            <div className="grid gap-0 sm:grid-cols-2">
              {/* Cover side — real image */}
              <div
                className="relative aspect-[2/3] w-full overflow-hidden sm:aspect-auto sm:h-full sm:min-h-[360px]"
                style={{
                  backgroundImage: `linear-gradient(155deg, ${selected.cover.from}, ${selected.cover.via} 52%, ${selected.cover.to})`,
                }}
              >
                <img
                  src={bookCover(selected)}
                  alt={`${selected.title} cover`}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 bg-gold px-2.5 py-1 font-display text-[9px] font-bold uppercase tracking-[0.12em] text-black">
                  {bookStatus(selected)}
                </span>
              </div>
              {/* Details side */}
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="font-display text-[10px] uppercase tracking-[0.24em] text-gold">
                  {CATEGORY_LABELS[selected.category]}
                </span>
                <DialogTitle className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-charcoal">
                  {selected.title}
                </DialogTitle>

                <div className="my-5 h-px w-full bg-black/10" />

                <DialogDescription className="space-y-4 text-sm text-[#555]">
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-[#999]">
                      Author
                    </span>
                    <p className="mt-1 text-[15px] text-charcoal">
                      {selected.author}
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-[#999]">
                      Screen Adaptation
                    </span>
                    <p className="mt-1 text-[15px] text-charcoal">
                      <span className="text-gold">{selected.adaptationLabel}:</span>{" "}
                      {selected.adaptation}
                    </p>
                  </div>
                  <div>
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-[#999]">
                      Status
                    </span>
                    <p className="mt-1 text-[15px] text-charcoal">
                      {bookStatus(selected)}
                    </p>
                  </div>
                </DialogDescription>

                <div className="mt-7 border-t border-black/5 pt-5">
                  <p className="font-serif-display text-sm italic text-[#999]">
                    A 21 Laps Entertainment book-to-screen adaptation.
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
