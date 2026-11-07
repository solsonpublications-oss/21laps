"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => clearInterval(t);
  }, [count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section
      id="testimonials"
      className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-testimonials.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <h2 className="display-heading text-4xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
          Testimonials
        </h2>
        <span className="gold-rule mt-6" />

        {/* Quote stage */}
        <div className="relative mt-12 min-h-[260px] sm:min-h-[240px]">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 translate-y-5"
              }`}
              aria-hidden={i !== index}
            >
              <blockquote className="font-serif-display max-w-3xl text-balance text-xl font-medium italic leading-relaxed text-white sm:text-2xl lg:text-[1.7rem] lg:leading-[1.5]">
                <span className="text-gold">“</span>
                {t.quote}
                <span className="text-gold">”</span>
              </blockquote>
              <figcaption className="mt-7 text-center">
                <p className="font-display text-base font-semibold uppercase tracking-[0.14em] text-white">
                  {t.name}
                </p>
                <p className="mt-1 font-serif-display text-sm italic text-white/80">
                  {t.title}
                </p>
                <p className="mt-0.5 font-display text-[11px] uppercase tracking-[0.24em] text-gold">
                  {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-gold"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 transition-all duration-300 ${
                  i === index ? "w-7 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-gold"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("reviews")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-gold mt-12"
        >
          Click Here For More
        </button>
      </div>
    </section>
  );
}
