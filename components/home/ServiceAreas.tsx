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
            {/* Coverage map visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-brand-dark rounded-2xl overflow-hidden mb-5 relative"
              style={{ height: "280px" }}
            >
              {/* Stylized map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-brand-dark">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
              {/* Center marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow-blue animate-float">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold text-lg">Wolverhampton</p>
                  <p className="text-slate-400 text-sm">WV1–WV14 + wider Midlands</p>
                </div>
              </div>
              {/* Area badges on map */}
              {[
                { name: "Bilston", top: "65%", left: "55%", delay: 0.3 },
                { name: "Walsall", top: "50%", left: "72%", delay: 0.4 },
                { name: "Dudley", top: "72%", left: "40%", delay: 0.5 },
                { name: "Stafford", top: "15%", left: "40%", delay: 0.35 },
                { name: "Birmingham", top: "78%", left: "65%", delay: 0.45 },
              ].map((point) => (
                <motion.div
                  key={point.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: point.delay }}
                  className="absolute"
                  style={{ top: point.top, left: point.left, transform: "translate(-50%, -50%)" }}
                >
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold rounded-full px-2.5 py-1 whitespace-nowrap">
                    {point.name}
                  </div>
                </motion.div>
              ))}
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
