"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const update = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [target, duration, active]);
  return count;
}

const STATS = [
  { value: 500, suffix: "+", label: "Moves Completed", sublabel: "Across Wolverhampton & West Midlands" },
  { value: 5, suffix: ".0★", label: "Google Rating", sublabel: "100% 5-star customer reviews" },
  { value: 5, suffix: "+", label: "Years Experience", sublabel: "Trusted locally since 2019" },
  { value: 10, suffix: "+", label: "Areas Covered", sublabel: "Wolverhampton & beyond" },
];

function StatCard({ stat, index, active }: { stat: typeof STATS[0]; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center px-4 py-6"
    >
      <div className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-1">
        {count}
        <span className="text-brand-blue">{stat.suffix}</span>
      </div>
      <p className="font-bold text-brand-dark text-base mb-1">{stat.label}</p>
      <p className="text-brand-muted text-xs">{stat.sublabel}</p>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14 bg-white" aria-label="Statistics" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-brand-dark rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 divide-y lg:divide-y-0 divide-x-0 sm:divide-x">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="[&>div_div:first-child]:!text-white [&>div_p:first-child]:!text-white [&>div_p:last-child]:!text-slate-400"
              >
                <StatCard stat={stat} index={i} active={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
