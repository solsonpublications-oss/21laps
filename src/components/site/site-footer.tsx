"use client";

import { COMPANY } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="bg-charcoal mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-12 text-center lg:py-16">
        {/* Logo (inverted to white for the dark footer) */}
        <img
          src="/images/logo.jpg"
          alt="21 Laps Entertainment"
          className="mx-auto h-16 w-auto invert mix-blend-screen sm:h-20"
        />
        <p className="mx-auto mt-4 font-display text-[10px] uppercase tracking-[0.3em] text-white/40">
          {COMPANY.tagline}
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-gold/60" />

        <p className="mx-auto max-w-2xl text-[12px] leading-relaxed text-white/55">
          All video and photographs appearing on this site are the property of
          21 Laps Entertainment. They are protected by U.S. Copyright Laws, and
          are not to be downloaded or reproduced in any way without written
          permission.
        </p>

        <p className="mt-6 text-[12px] tracking-wide text-white/70">
          Copyright © 2026 21 Laps Entertainment
        </p>
      </div>
    </footer>
  );
}
