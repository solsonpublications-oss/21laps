"use client";

import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import About from "@/components/site/about";
import ImageTiles from "@/components/site/image-tiles";
import Testimonials from "@/components/site/testimonials";
import PastHighlights from "@/components/site/past-highlights";
import Reviews from "@/components/site/reviews";
import FooterTiles from "@/components/site/footer-tiles";
import LinksSection from "@/components/site/links-section";
import ContactSection from "@/components/site/contact-section";
import SiteFooter from "@/components/site/site-footer";
import BackToTop from "@/components/site/back-to-top";
import { useScrollReveal } from "@/hooks/use-scroll";

export default function Home() {
  useScrollReveal();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ImageTiles />
        <Testimonials />
        <PastHighlights />
        <Reviews />
        <FooterTiles />
        <LinksSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
