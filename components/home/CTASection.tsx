"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ChevronRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { QuoteModal } from "@/components/shared/QuoteModal";
export function CTASection() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        className="py-20 lg:py-28 bg-brand-blue relative overflow-hidden"
        aria-label="Call to action"
        ref={ref}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-1 mb-5"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-300 fill-amber-300" />
              ))}
              <span className="text-white/80 text-sm ml-2">5.0 · Wolverhampton&apos;s #1</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            >
              Ready to Move? Get Your Free Quote Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-blue-100 text-lg mb-10 leading-relaxed"
            >
              Serving Wolverhampton, the West Midlands & beyond. Fully insured, same-day
              available, no hidden fees. Call us now or request a free quote online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Button size="xl" variant="white" onClick={() => setQuoteOpen(true)}>
                Get Free Quote
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 text-white font-semibold text-lg border-2 border-white/30 rounded-xl px-8 py-3.5 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl(SITE.whatsapp, "Hi! I'd like a free removal quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-semibold text-base border border-white/20 bg-white/10 rounded-xl px-6 py-3.5 hover:bg-white/20 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-6 text-blue-100 text-sm"
            >
              {[
                "✓ Fully Insured",
                "✓ Free No-Obligation Quotes",
                "✓ Same Day Available",
                "✓ No Hidden Fees",
                "✓ 5+ Years Experience",
              ].map((item) => (
                <span key={item} className="font-medium">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
