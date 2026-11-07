"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, NAV_CTA } from "@/data/site";
import { useActiveSection, useScrolled } from "@/hooks/use-scroll";

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);
  const active = useActiveSection(
    ["home", ...NAV_LINKS.map((l) => l.href.replace("#", "")), "contact"]
  );

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // when transparent (over dark hero) text is light; when scrolled (white bg) text is dark
  const onDark = !scrolled && !open;
  const linkColor = onDark ? "text-white/90 hover:text-gold" : "text-charcoal hover:text-gold";
  const activeColor = "text-gold";
  const logoFilter = onDark ? "invert mix-blend-screen" : "";
  const toggleColor = onDark ? "text-white" : "text-charcoal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur-sm shadow-[0_6px_24px_-14px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[84px] lg:px-10">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="group flex shrink-0 items-center"
          aria-label="21 Laps Entertainment — home"
        >
          <img
            src="/images/logo.jpg"
            alt="21 Laps Entertainment"
            className={`h-11 w-auto transition-all duration-300 sm:h-12 lg:h-[54px] group-hover:scale-[1.03] ${logoFilter}`}
            fetchPriority="high"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-display text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive ? activeColor : linkColor
                }`}
              >
                {link.label}
              </button>
            );
          })}
          {/* Contact Us CTA — gold outline button */}
          <button
            onClick={() => handleNav(NAV_CTA.href)}
            className="ml-2 inline-flex items-center rounded-md border border-gold px-5 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-[#1a1206] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {NAV_CTA.label}
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`flex h-11 w-11 items-center justify-center lg:hidden ${toggleColor}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`py-3 text-left font-display text-[15px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  isActive ? "text-gold" : "text-charcoal"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNav(NAV_CTA.href)}
            className="mt-2 inline-flex items-center justify-center rounded-md border border-gold px-5 py-2.5 font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-[#1a1206]"
          >
            {NAV_CTA.label}
          </button>
        </nav>
      </div>
    </header>
  );
}
