"use client";

import { FOOTER_TILES } from "@/data/site";

export default function FooterTiles() {
  const go = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {FOOTER_TILES.map((tile, i) => (
            <button
              key={tile.title}
              onClick={() => go(tile.href)}
              className="reveal group relative block w-full overflow-hidden text-left tile-shadow"
              style={{ transitionDelay: `${i * 90}ms` }}
              aria-label={`${tile.title} — ${tile.blurb}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal">
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
                    {tile.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-white/75">{tile.blurb}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 block h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
