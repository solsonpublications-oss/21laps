"use client";

import { ExternalLink } from "lucide-react";
import { LINKS } from "@/data/site";

export default function LinksSection() {
  return (
    <section id="links" className="bg-[#f6f4ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="gold-rule mb-6" />
          <h2 className="display-heading text-3xl text-charcoal sm:text-4xl lg:text-5xl">
            Links
          </h2>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-sm text-[#777]">
            A few of the organizations, festivals, and resources we rely on when
            adapting books for the screen.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
          {LINKS.map((group, gi) => (
            <div
              key={group.group}
              className="reveal"
              style={{ transitionDelay: `${gi * 110}ms` }}
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {group.group}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.url}
                      className="group flex items-start gap-3 border-b border-black/5 pb-4 transition-colors hover:border-gold/40"
                    >
                      <ExternalLink
                        size={15}
                        className="mt-0.5 shrink-0 text-[#bbb] transition-colors group-hover:text-gold"
                      />
                      <span>
                        <span className="block font-display text-[15px] font-semibold text-charcoal transition-colors group-hover:text-gold">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-[#999]">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
