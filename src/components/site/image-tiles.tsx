"use client";

import { MIDDLE_TILES } from "@/data/site";

export default function ImageTiles() {
  const go = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {MIDDLE_TILES.map((tile, i) => (
            <button
              key={tile.title}
              onClick={() => go(tile.href)}
              className="reveal group relative block w-full overflow-hidden text-left tile-shadow"
              style={{ transitionDelay: `${i * 90}ms` }}
              aria-label={`${tile.title} — ${tile.blurb}`}
            >
              {/* Image wrapper enforces 4:3 ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="font-display text-[10px] uppercase tracking-[0.28em] text-gold">
                    21 Laps
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
                    {tile.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/75">{tile.blurb}</p>
                </div>

                {/* Gold bottom bar grows on hover */}
                <span className="absolute inset-x-0 bottom-0 block h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
