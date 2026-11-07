"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { COMPANY } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Placeholder reel — a stable, cinematic book-to-film trailer the client can
// swap for their real showreel.
const REEL_VIDEO_ID = "YoHD9XEInc0";

export default function About() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <span className="gold-rule mb-7 lg:mx-0" />
            <h2 className="display-heading text-[2rem] leading-[1.05] text-charcoal sm:text-[2.5rem] lg:text-[2.9rem]">
              Everything you
              <br className="hidden sm:block" /> want to know
            </h2>
            <span className="gold-rule my-7 lg:mx-0" />

            <p className="text-justified text-[15px] leading-[1.95] text-[#555] sm:text-base lg:leading-[2]">
              21 Laps Entertainment is a Los Angeles-based production company
              dedicated to developing and producing book-to-screen adaptations
              for film and television. From award-winning literary fiction to
              blockbuster novels and beloved children's classics, we option the
              stories readers can't put down and shepherd them faithfully from
              the page to the screen. Our team partners closely with authors,
              publishers, studios, and streamers to protect the heart of every
              book while translating it into unforgettable cinema. Whether it is
              a prestige limited series, a wide-release feature, or a
              family-friendly franchise, 21 Laps Entertainment brings the same
              obsessive attention to story, character, and craft — because the
              best adaptations begin with deep respect for the source.
            </p>

            <div className="mt-9 flex justify-center lg:justify-start">
              <button
                onClick={() =>
                  document
                    .getElementById("past-highlights")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gold"
              >
                See Past Highlights
              </button>
            </div>
          </div>

          {/* Right: poster + play button → opens reel modal */}
          <div className="reveal">
            <button
              onClick={() => setReelOpen(true)}
              className="group relative block aspect-video w-full overflow-hidden tile-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label="Play our reel"
            >
              <img
                src="/images/tile-films.jpg"
                alt="21 Laps Entertainment showreel"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />
              {/* play button */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-[#1a1206] shadow-[0_10px_30px_-6px_rgba(199,154,0,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold sm:h-20 sm:w-20">
                  <Play size={26} className="ml-1 fill-current" />
                </span>
              </span>
              {/* label */}
              <span className="absolute inset-x-0 bottom-0 p-5 text-center">
                <span className="font-display text-[11px] uppercase tracking-[0.24em] text-white">
                  Watch our reel
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 block h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </button>
            <p className="mt-4 text-center font-display text-[11px] uppercase tracking-[0.22em] text-[#999]">
              {COMPANY.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Reel modal */}
      <Dialog open={reelOpen} onOpenChange={setReelOpen}>
        <DialogContent className="max-w-4xl overflow-hidden rounded-none border-charcoal/30 bg-black p-0">
          <DialogTitle className="sr-only">21 Laps Entertainment showreel</DialogTitle>
          <DialogDescription className="sr-only">
            A short reel of book-to-screen adaptations.
          </DialogDescription>
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${REEL_VIDEO_ID}?rel=0&autoplay=1`}
              title="21 Laps Entertainment — showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
