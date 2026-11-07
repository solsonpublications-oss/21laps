"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { COMPANY } from "@/data/site";

export default function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Please complete the form",
        description: "Name, email and message are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Message sent",
        description:
          "Thank you for reaching out to 21 Laps Entertainment. We will be in touch shortly.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    { icon: MapPin, label: "Address", value: COMPANY.address },
    { icon: Phone, label: "Phone", value: COMPANY.phone },
    { icon: Mail, label: "Email", value: COMPANY.email },
    { icon: Clock, label: "Hours", value: COMPANY.hours },
  ];

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="gold-rule mb-6" />
          <h2 className="display-heading text-3xl text-charcoal sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <span className="gold-rule mt-6" />
          <p className="mt-6 max-w-2xl text-sm text-[#777]">
            Have a book that belongs on screen, or want to partner with 21 Laps
            Entertainment? Send us a note.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Contact info */}
          <div className="reveal">
            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="font-display text-[11px] uppercase tracking-[0.22em] text-[#999]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[15px] text-charcoal">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-black/5 pt-6">
              <p className="font-serif-display text-sm italic text-[#888]">
                For rights and adaptation inquiries, please include the book
                title, author, and a short logline in your message.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-5 border border-black/5 bg-[#fafaf8] p-6 sm:p-8 lg:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-display text-[11px] uppercase tracking-[0.18em] text-charcoal">
                  Name <span className="text-gold">*</span>
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className="rounded-none border-black/15 bg-white focus-visible:ring-gold"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-display text-[11px] uppercase tracking-[0.18em] text-charcoal">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 (555) 000-0000"
                  className="rounded-none border-black/15 bg-white focus-visible:ring-gold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-display text-[11px] uppercase tracking-[0.18em] text-charcoal">
                Email <span className="text-gold">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className="rounded-none border-black/15 bg-white focus-visible:ring-gold"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-display text-[11px] uppercase tracking-[0.18em] text-charcoal">
                Message <span className="text-gold">*</span>
              </Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={update("message")}
                placeholder="Tell us about your book or project…"
                rows={5}
                className="rounded-none border-black/15 bg-white focus-visible:ring-gold"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-gold w-full disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 size={15} className="mr-2 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={15} className="mr-2" />
                  Submit
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
