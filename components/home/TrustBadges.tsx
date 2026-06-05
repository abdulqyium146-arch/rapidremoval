"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Star, Clock, Banknote, Calendar, Users, CheckCircle, Truck } from "lucide-react";

const BADGES = [
  { icon: Shield, label: "Fully Insured", sub: "Goods-in-transit & public liability" },
  { icon: Star, label: "5.0★ Google Rated", sub: "100% 5-star reviews" },
  { icon: CheckCircle, label: "Free Quotes", sub: "No obligation, ever" },
  { icon: Clock, label: "Same Day Service", sub: "Emergency moves available" },
  { icon: Truck, label: "Professional Team", sub: "Trained & uniformed staff" },
  { icon: Banknote, label: "No Hidden Fees", sub: "Your quote is your price" },
  { icon: Calendar, label: "7 Days a Week", sub: "Including Bank Holidays" },
  { icon: Users, label: "500+ Moves", sub: "Across West Midlands" },
];

export function TrustBadges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-12 bg-white border-y border-slate-100"
      aria-label="Trust signals"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {BADGES.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-brand-blue transition-colors duration-200">
                <badge.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors duration-200" />
              </div>
              <p className="font-bold text-brand-dark text-xs leading-tight mb-0.5">
                {badge.label}
              </p>
              <p className="text-brand-muted text-[10px] leading-tight">{badge.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
