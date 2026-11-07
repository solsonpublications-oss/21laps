"use client";

import { Play, ArrowRight } from "lucide-react";
import {
  HERO_STATS,
  HERO_POSTERS,
  TRUST_ITEMS,
  BOOKS,
  bookCover,
} from "@/data/site";

// pick a few real covers for the film-strip frames
const STRIP_COVERS = [
  "story-of-your-life",
  "the-boogeyman",
  "shadow-and-bone",
  "the-adam-project",
  "all-the-light",
  "the-perfect-couple",
  "night-at-the-museum",
  "dash-and-lily",
].map((id) => `/images/covers/${id}.jpg`);

function FilmStrip({
  direction,
  tilt,
  offset,
}: {
  direction: "up" | "down";
  tilt: number;
  offset: string;
}) {
  // duplicate frames so the scroll loops seamlessly
  const frames = [...STRIP_COVERS, ...STRIP_COVERS];
  return (
    <div
      className="absolute top-1/2"
      style={{
        left: offset,
        transform: `translateY(-50%) rotate(${tilt}deg)`,
      }}
    >
      <div className="relative h-[460px] w-[88px] overflow-hidden bg-[#0c0a08] shadow-2xl ring-1 ring-white/10 sm:h-[520px]">
        {/* sprocket holes — left + right rails */}
        <div
          className="absolute inset-y-0 left-0 w-[12px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0 8px, transparent 8px 18px)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[12px]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0 8px, transparent 8px 18px)",
          }}
        />
        {/* scrolling frames */}
        <div
          className={`film-strip-track ${direction === "down" ? "down" : ""} flex flex-col gap-1.5 px-[14px] py-2`}
        >
          {frames.map((src, i) => (
            <div key={i} className="relative aspect-[2/3] w-full overflow-hidden">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tintMap: Record<string, string> = {
  red: "from-[#3a0d12] to-[#7a1820]",
  teal: "from-[#0a2a2e] to-[#0d4a52]",
  gold: "from-[#3a2a08] to-[#7a5a14]",
};

export default function Hero() {
  const go = (href: string) => {
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 75% 30%, #1f1408 0%, #120c07 45%, #080604 100%)",
      }}
    >
      {/* gold radial glow behind right column */}
      <div className="gold-glow pointer-events-none absolute right-[8%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(199,154,0,0.22),transparent_65%)] blur-2xl" />
      {/* film grain */}
      <div className="film-grain pointer-events-none absolute inset-0" />

      {/* main two-column content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 pb-28 pt-28 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pb-20 lg:pt-24">
        {/* LEFT column */}
        <div className="text-center lg:text-left">
          {/* badge */}
          <div className="hero-headline-line delay-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="green-pulse h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-[11px]">
              Now reading new book submissions
            </span>
          </div>

          {/* headline */}
          <h1 className="font-serif-display mt-6 text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-[3.6rem]">
            <span className="hero-headline-line delay-2 block">Books become worlds.</span>
            <span className="hero-headline-line delay-3 block text-gold">
              Worlds become cinema.
            </span>
          </h1>

          {/* subtext */}
          <p className="hero-headline-line delay-4 mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 lg:mx-0 lg:text-base">
            We turn novels and memoirs into film and television. Send us your
            book, and we will read it, shape it for the screen, and take it to
            producers.
          </p>

          {/* buttons */}
          <div className="hero-headline-line delay-5 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start lg:items-center">
            <button
              onClick={() => go("#contact")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-b from-[#e0b84a] to-[#c79a00] px-6 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1a1206] shadow-[0_10px_30px_-8px_rgba(199,154,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(199,154,0,0.75)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c07] sm:w-auto"
            >
              Submit your book
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => go("#past-highlights")}
              className="inline-flex w-full items-center justify-center rounded-md border border-gold/60 bg-transparent px-6 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-[#1a1206] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c07] sm:w-auto"
            >
              See past highlights
            </button>
            <button
              onClick={() => go("#about")}
              className="group inline-flex items-center gap-2.5 px-2 py-2 font-display text-[13px] font-medium uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#120c07] rounded-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-gold group-hover:bg-gold/10">
                <Play size={13} className="ml-0.5 fill-current text-gold" />
              </span>
              Watch our reel
            </button>
          </div>

          {/* stats */}
          <div className="hero-headline-line delay-5 mt-10 border-t border-gold/25 pt-6">
            <div className="grid grid-cols-3 gap-4 lg:max-w-md">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-serif-display text-2xl font-bold text-gold sm:text-3xl">
                    {s.number}
                  </div>
                  <div className="mt-1 font-display text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT column — cinematic visual */}
        <div className="relative hidden h-[520px] w-full lg:block">
          {/* film strips */}
          <FilmStrip direction="up" tilt={-9} offset="6%" />
          <FilmStrip direction="down" tilt={7} offset="62%" />

          {/* floating poster cards */}
          {HERO_POSTERS.map((p, i) => {
            const floatCls = i === 0 ? "delay-1" : i === 1 ? "delay-2" : "";
            return (
            <div
              key={p.title}
              className={`poster-float ${floatCls} absolute`}
              style={
                {
                  "--rot": `${p.rotate}deg`,
                  top:
                    i === 0 ? "4%" : i === 1 ? "40%" : "62%",
                  left:
                    i === 0 ? "34%" : i === 1 ? "12%" : "50%",
                  transform: `rotate(${p.rotate}deg)`,
                  zIndex: 10 + i,
                } as React.CSSProperties
              }
            >
              <div
                className={`relative w-[150px] overflow-hidden rounded-md bg-gradient-to-b ${tintMap[p.tint]} p-2 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.8)] ring-1 ring-white/10`}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-sm">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2">
                    <div className="font-serif-display text-[13px] font-bold leading-tight text-white">
                      {p.title}
                    </div>
                    <div className="mt-0.5 text-[8px] uppercase tracking-wide text-white/70">
                      {p.genre}
                    </div>
                  </div>
                  <span className="absolute right-1.5 top-1.5 rounded-sm bg-gold px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-black">
                    {p.status}
                  </span>
                </div>
              </div>
            </div>
            );
          })}

          {/* cream floating card */}
          <div
            className="poster-float delay-2 absolute right-[2%] top-[16%] z-20 w-[140px] rounded-md bg-[#f4ede0] p-3 shadow-[0_20px_44px_-16px_rgba(0,0,0,0.7)]"
            style={{ "--rot": "5deg", transform: "rotate(5deg)" } as React.CSSProperties}
          >
            <div className="font-display text-[9px] uppercase tracking-[0.18em] text-[#7a5a14]">
              Page to screen
            </div>
            <div className="mt-2 space-y-1">
              {["Read", "Develop", "Pitch"].map((step, i) => (
                <div key={step} className="flex items-center gap-1.5">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#c79a00] text-[8px] font-bold text-black">
                    {i + 1}
                  </span>
                  <span className="font-serif-display text-[12px] font-semibold text-[#2a1a08]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom trust strip */}
      <div className="relative z-10 border-t border-gold/40 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-3 sm:px-8">
          {TRUST_ITEMS.map((item) => (
            <span
              key={item}
              className="font-display text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-[11px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
