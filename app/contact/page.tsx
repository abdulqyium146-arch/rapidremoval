"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    sub: "Mon–Sat 07:00–20:00, Sun 08:00–18:00",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: buildWhatsAppUrl(SITE.whatsapp, "Hi! I'd like to enquire about a removal."),
    sub: "Quick responses during business hours",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    sub: "We respond within 2 hours",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: `${SITE.address.street}, ${SITE.address.city}`,
    href: undefined,
    sub: `${SITE.address.county}, ${SITE.address.country}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 07:00–20:00",
    href: undefined,
    sub: "Sunday: 08:00–18:00",
  },
];

type FormState = {
  name: string; phone: string; email: string; message: string;
};
const INITIAL: FormState = { name: "", phone: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        headline="Get in Touch with Get Rapid Removals"
        subheadline="Call, WhatsApp, email, or complete the form. We respond fast and provide free, accurate quotes with no obligation."
        breadcrumbs={[{ label: "Contact" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                How to Reach Us
              </h2>
              <div className="space-y-4">
                {CONTACT_INFO.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 bg-brand-neutral rounded-xl p-4 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="font-semibold text-brand-dark hover:text-brand-blue transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-brand-dark text-sm">{item.value}</p>
                      )}
                      <p className="text-brand-muted text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick call CTA */}
              <div className="mt-6 bg-brand-blue rounded-2xl p-5 text-white">
                <p className="font-bold text-lg mb-1">Fastest Response: Call Us</p>
                <p className="text-blue-100 text-sm mb-4">
                  For urgent, same-day, or emergency moves — calling is always the fastest way to
                  get a quote and confirm a booking.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 bg-white text-brand-blue font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm w-fit"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 bg-green-50 rounded-2xl border border-green-100"
                >
                  <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-brand-green" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                  <p className="text-brand-muted text-sm max-w-xs mx-auto">
                    Thank you for getting in touch. We&apos;ll reply within 30 minutes during business
                    hours. For urgent moves, please call us directly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cf-name">Full Name *</Label>
                      <Input
                        id="cf-name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={set("name")}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cf-phone">Phone Number *</Label>
                      <Input
                        id="cf-phone"
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        value={form.phone}
                        onChange={set("phone")}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cf-email">Email Address</Label>
                    <Input
                      id="cf-email"
                      type="email"
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cf-message">Message *</Label>
                    <Textarea
                      id="cf-message"
                      placeholder="Tell us about your move or clearance — what, where, when…"
                      value={form.message}
                      onChange={set("message")}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                      Something went wrong. Please call us directly on {SITE.phoneDisplay}.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  <p className="text-xs text-brand-muted text-center">
                    We respond within 30 minutes during business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
