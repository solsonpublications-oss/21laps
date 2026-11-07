"use client";

import { REVIEWS } from "@/data/site";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-reviews.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="display-heading text-4xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
            Reviews
          </h2>
          <span className="gold-rule mt-6" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="reveal flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <span className="font-serif-display text-5xl leading-none text-gold">
                “
              </span>
              <blockquote className="font-serif-display -mt-3 max-w-xs text-balance text-lg font-medium italic leading-relaxed text-white sm:text-xl">
                {r.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="h-px w-6 bg-gold" />
                <span className="font-display text-[11px] uppercase tracking-[0.24em] text-gold">
                  {r.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
