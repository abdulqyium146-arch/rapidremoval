"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/constants";

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c === 0 ? REVIEWS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === REVIEWS.length - 1 ? 0 : c + 1));

  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    const d = new Date(parseInt(year), parseInt(month) - 1);
    return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-neutral" aria-labelledby="reviews-heading" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Customer Reviews
          </motion.div>
          <motion.h2
            id="reviews-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4"
          >
            What Our Customers Say
          </motion.h2>
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-extrabold text-brand-dark">5.0</span>
            <span className="text-brand-muted">/ 5.0 on Google</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-muted text-sm"
          >
            Wolverhampton&apos;s highest-rated removals company
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-8 shadow-card border border-slate-100"
              >
                <Quote className="w-10 h-10 text-blue-100 mb-4" />
                <p className="text-brand-dark text-lg leading-relaxed mb-6 font-medium">
                  &ldquo;{REVIEWS[current].text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {REVIEWS[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark text-sm">{REVIEWS[current].name}</p>
                      <p className="text-brand-muted text-xs">
                        {REVIEWS[current].location} · {formatDate(REVIEWS[current].date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: REVIEWS[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <button
              onClick={prev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-brand-neutral transition-colors border border-slate-100"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 text-brand-dark" />
            </button>
            <button
              onClick={next}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-card flex items-center justify-center hover:bg-brand-neutral transition-colors border border-slate-100"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 text-brand-dark" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "w-6 bg-brand-blue" : "bg-slate-300"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All reviews grid preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-brand-dark text-xs leading-relaxed mb-3 line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-brand-muted text-xs font-medium">
                {review.name} · {review.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
