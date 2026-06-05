"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-brand-neutral" aria-labelledby="faq-heading" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              FAQ
            </motion.div>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4 leading-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-brand-muted leading-relaxed mb-6"
            >
              Everything you need to know about removals and clearances in Wolverhampton. Can&apos;t
              find your answer? Call us directly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <Button asChild className="w-full">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="tel:+447778298447">Call 07778 298447</a>
              </Button>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="px-6"
                  >
                    <AccordionTrigger className="text-base font-semibold text-brand-dark hover:text-brand-blue py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-muted text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Schema hint text (for AEO) */}
            <div className="mt-6 bg-white rounded-xl border border-slate-100 p-5">
              <p className="text-brand-muted text-sm leading-relaxed">
                <strong className="text-brand-dark">Still have questions?</strong> Our team is
                available 7 days a week to answer any questions about your move. Call us on{" "}
                <a href="tel:+447778298447" className="text-brand-blue font-semibold hover:underline">
                  07778 298447
                </a>{" "}
                or{" "}
                <Link href="/contact" className="text-brand-blue font-semibold hover:underline">
                  send us a message
                </Link>
                . We typically respond within 30 minutes during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
