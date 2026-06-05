"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Star, Shield, Clock, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { QuoteModal } from "@/components/shared/QuoteModal";

const TRUST_PILLS = [
  { icon: Star, label: "5.0★ Google Rated" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Clock, label: "Same Day Available" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export function Hero() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow blobs */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-sky/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-20 lg:pt-32 lg:pb-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              Wolverhampton&apos;s #1 Rated Removals Company
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            >
              Wolverhampton&apos;s Most{" "}
              <span className="bg-blue-gradient bg-clip-text text-transparent">
                Trusted Removals
              </span>{" "}
              Company
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8"
            >
              Professional house removals, house clearance & man and van services across
              Wolverhampton & the West Midlands.{" "}
              <strong className="text-white">Fully insured</strong> ·{" "}
              <strong className="text-white">Free quotes</strong> ·{" "}
              <strong className="text-white">Same day available</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <Button
                size="xl"
                onClick={() => setQuoteOpen(true)}
                className="w-full sm:w-auto shadow-glow-blue hover:shadow-glow-blue"
              >
                Get Your Free Quote
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200 text-lg"
              >
                <Phone className="w-5 h-5" />
                {SITE.phoneDisplay}
              </a>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {TRUST_PILLS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <Icon className="w-4 h-4 text-brand-sky" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
          >
            {[
              { value: "5.0★", label: "Google Rating" },
              { value: "500+", label: "Moves Completed" },
              { value: "5+", label: "Years Experience" },
              { value: "Same Day", label: "Availability" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
