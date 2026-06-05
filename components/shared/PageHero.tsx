"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/constants";

interface PageHeroProps {
  badge?: string;
  headline: string;
  subheadline: string;
  breadcrumbs: { label: string; href?: string }[];
  defaultService?: string;
  showStats?: boolean;
}

export function PageHero({
  badge,
  headline,
  subheadline,
  breadcrumbs,
  defaultService,
  showStats = true,
}: PageHeroProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative bg-hero-pattern pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-4">
            <BreadcrumbNav items={breadcrumbs} />
          </div>

          <div className="max-w-3xl">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <Badge variant="outline" className="border-white/30 text-white bg-white/10 text-sm">
                  {badge}
                </Badge>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => setQuoteOpen(true)}>
                Get Free Quote
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 text-white font-semibold border border-white/30 rounded-xl px-6 py-3 hover:bg-white/10 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {SITE.phoneDisplay}
              </a>
            </motion.div>

            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  5.0★ Google Rated
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Shield className="w-4 h-4 text-brand-sky" />
                  Fully Insured
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  Same Day Available
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService={defaultService}
      />
    </>
  );
}
