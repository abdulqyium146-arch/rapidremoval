"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, PRIMARY_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function ServiceAreas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="areas-heading" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            >
              <MapPin className="w-3.5 h-3.5" />
              Service Coverage
            </motion.div>
            <motion.h2
              id="areas-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-5 leading-tight"
            >
              Serving Wolverhampton & the West Midlands
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-brand-muted text-lg leading-relaxed mb-8"
            >
              Based in Whitmore Reans, Wolverhampton, we serve all WV postcodes as our primary
              area, with regular coverage across the wider West Midlands and Staffordshire. Long-distance
              UK moves also available.
            </motion.p>

            {/* Primary areas */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-3">
                Primary Service Area
              </p>
              <div className="flex flex-wrap gap-2">
                {PRIMARY_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="flex items-center gap-1.5 bg-brand-blue text-white rounded-lg px-3 py-1.5 text-sm font-semibold hover:bg-brand-blue-light transition-colors"
                  >
                    <MapPin className="w-3 h-3" />
                    {area.name}
                    <span className="text-blue-200 text-xs">{area.postcode}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Secondary areas */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-8"
            >
              <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-3">
                Also Covering
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="flex items-center gap-1.5 bg-brand-neutral border border-slate-200 text-brand-dark rounded-lg px-3 py-1.5 text-sm hover:bg-blue-50 hover:border-brand-blue hover:text-brand-blue transition-all duration-200"
                  >
                    {area.name}
                    <span className="text-brand-muted text-xs">{area.distance}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button asChild>
                <Link href="/areas">
                  View All Areas
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quote">Get a Quote for Your Area</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: map placeholder + coverage cards */}
          <div>
            {/* Google Maps — real GMB listing embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden mb-5 shadow-card border border-slate-100"
              style={{ height: "280px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310866.9665765834!2d-2.4643220328416597!3d52.503607911505426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa7ac0b367a2c3c07%3A0x624dd12b907e635e!2sGet%20Rapid%20Removals!5e0!3m2!1sen!2s!4v1780686456027!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Get Rapid Removals service area — Wolverhampton, West Midlands"
              />
            </motion.div>

            {/* Quick area links */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICE_AREAS.slice(0, 6).map((area, i) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                >
                  <Link
                    href={`/areas/${area.slug}`}
                    className="group flex items-center justify-between bg-brand-neutral rounded-xl p-3 border border-slate-100 hover:border-brand-blue hover:bg-blue-50 transition-all duration-200"
                  >
                    <div>
                      <p className="font-semibold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                        {area.name}
                      </p>
                      <p className="text-brand-muted text-xs">{area.postcode}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
