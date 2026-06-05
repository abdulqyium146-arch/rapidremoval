"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, CalendarCheck, Users, PackageCheck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Request Your Free Quote",
    description:
      "Call us on 07778 298447 or complete our quick online form. We provide accurate, no-obligation quotes within minutes — no hidden fees, ever.",
    detail: "Phone, WhatsApp, or form — whichever suits you.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm Your Booking",
    description:
      "Choose a date and time that works for you, including evenings and weekends. We confirm everything in writing so there are no surprises on the day.",
    detail: "Flexible scheduling 7 days a week.",
  },
  {
    icon: Users,
    title: "Our Team Arrives On Time",
    description:
      "Our uniformed, professional team arrives punctually with all necessary equipment — blankets, straps, trolleys, and wrapping materials.",
    detail: "Fully equipped, fully insured, fully prepared.",
  },
  {
    icon: PackageCheck,
    title: "Safe & Swift Move",
    description:
      "We handle everything carefully and efficiently. Every item secured and protected during transit. Fragile and valuable pieces given specialist attention.",
    detail: "Goods-in-transit insurance on every move.",
  },
  {
    icon: Smile,
    title: "Job Complete — You Relax",
    description:
      "We unload, position your furniture exactly as you want it, and remove all packing materials. Your new space is ready the moment we leave.",
    detail: "We don't leave until you're happy.",
  },
];

export function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-brand-dark text-white" aria-labelledby="process-heading">
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-sky" />
            How It Works
          </motion.div>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Your Move in 5 Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From first contact to final placement — our proven process makes every move
            smooth, predictable, and stress-free.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-brand-blue to-transparent opacity-50" />
              )}

              {/* Step number + icon */}
              <div className="shrink-0 w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center shadow-glow-sm z-10">
                <step.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 hover:bg-white/8 transition-colors duration-200">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-white text-lg">{step.title}</h3>
                  <span className="shrink-0 w-7 h-7 bg-brand-blue/20 border border-brand-blue/30 rounded-full flex items-center justify-center text-xs font-bold text-brand-sky">
                    {i + 1}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{step.description}</p>
                <p className="text-brand-sky text-xs font-semibold">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="xl" variant="white">
            <Link href="/quote">Start Your Move Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
