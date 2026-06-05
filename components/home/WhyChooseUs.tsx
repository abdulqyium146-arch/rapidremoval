"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield, Clock, Star, Phone, MapPin, Banknote,
  Users, CheckCircle,
} from "lucide-react";

const REASONS = [
  {
    icon: Star,
    title: "5.0★ Google Rated",
    description:
      "Every one of our Google reviews is 5 stars. Our reputation in Wolverhampton is built on consistently exceptional service — and we protect it on every job.",
    highlight: "100% 5-star reviews",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "We carry comprehensive goods-in-transit insurance and public liability insurance on every move, giving you complete peace of mind from start to finish.",
    highlight: "Goods-in-transit covered",
  },
  {
    icon: MapPin,
    title: "True Wolverhampton Locals",
    description:
      "We're based in Whitmore Reans, Wolverhampton. We know every postcode, street, and access challenge — knowledge that saves time and prevents problems on moving day.",
    highlight: "Based in Whitmore Reans",
  },
  {
    icon: Clock,
    title: "Same Day Available",
    description:
      "Emergency move? Last-minute booking? We keep capacity available every day specifically for urgent and same-day removals across Wolverhampton.",
    highlight: "Call for today's availability",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description:
      "Your quote is your final price. We survey properly, quote accurately, and never surprise you with hidden charges. Free no-obligation quotes, always.",
    highlight: "No hidden fees ever",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our uniformed team is experienced, DBS checked, courteous, and fully trained in the proper handling of all property types — from studio flats to 5-bedroom homes.",
    highlight: "Trained & uniformed",
  },
  {
    icon: CheckCircle,
    title: "5+ Years Experience",
    description:
      "Founded in Wolverhampton in 2019, we've completed hundreds of moves across the West Midlands. Our depth of local experience ensures a smooth move, every time.",
    highlight: "Established since 2019",
  },
  {
    icon: Phone,
    title: "Available 7 Days",
    description:
      "Monday to Sunday, including Bank Holidays, evenings, and early mornings. We fit around your schedule — not the other way around.",
    highlight: "Including weekends & Bank Holidays",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: content */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              Why Get Rapid Removals
            </motion.div>
            <motion.h2
              id="why-us-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-5 leading-tight"
            >
              The Wolverhampton Removals Company That Gets It Right
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-brand-muted text-lg leading-relaxed mb-8"
            >
              Moving is stressful. We&apos;ve spent 5+ years perfecting a service that removes the stress — professional, insured, punctual, and transparent. Our 5-star reputation in Wolverhampton wasn&apos;t given to us. We earned it, job by job.
            </motion.p>

            {/* Large trust stat */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-dark rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-white">5.0</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm">
                    Average Google rating from all reviews
                  </p>
                  <p className="text-brand-sky text-sm font-semibold mt-0.5">
                    Wolverhampton&apos;s highest-rated removals company
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="bg-brand-neutral rounded-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <reason.icon className="w-4.5 h-4.5 text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-brand-dark text-sm">{reason.title}</h3>
                </div>
                <p className="text-brand-muted text-xs leading-relaxed mb-2">
                  {reason.description}
                </p>
                <span className="text-xs font-semibold text-brand-blue bg-blue-50 rounded-full px-2.5 py-0.5">
                  {reason.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
