"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Camera } from "lucide-react";

const GALLERY = [
  {
    src: "/images/get-rapid-removals-luton-van-wolverhampton.webp",
    alt: "Get Rapid Removals branded Luton van parked at commercial premises in Wolverhampton — house removals and man and van service",
    caption: "Our branded removal vehicle",
  },
  {
    src: "/images/house-removal-service-wolverhampton.webp",
    alt: "Get Rapid Removals Luton van with tail lift deployed outside residential property in Wolverhampton ready for house removal",
    caption: "House removals across Wolverhampton",
  },
  {
    src: "/images/removal-team-loading-wolverhampton.webp",
    alt: "Two Get Rapid Removals team members in blue uniform loading protected furniture onto removal van in Wolverhampton",
    caption: "Professional uniformed team",
  },
  {
    src: "/images/furniture-protection-removal-blankets-wolverhampton.webp",
    alt: "Sofa fully wrapped in quilted blue removal blankets by Get Rapid Removals — furniture protection during house removal",
    caption: "Every item fully protected",
  },
  {
    src: "/images/get-rapid-removals-van-packed-interior-wolverhampton.webp",
    alt: "Inside a Get Rapid Removals van packed with household furniture, boxes, wrapped items and luggage — fully loaded for a house removal in Wolverhampton",
    caption: "Every cubic inch used efficiently",
  },
  {
    src: "/images/house-removals-van-loaded-wolverhampton.webp",
    alt: "Inside Get Rapid Removals removal van fully loaded with wrapped and blanketed household furniture — safe and secure packing",
    caption: "Safe, secure loading every time",
  },
  {
    src: "/images/get-rapid-removals-team-customer-wolverhampton.webp",
    alt: "Happy customer giving thumbs up with Get Rapid Removals team member standing beside branded removal truck in Wolverhampton",
    caption: "Another happy customer in Wolverhampton",
  },
];

export function WorkGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="gallery-heading" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            <Camera className="w-3.5 h-3.5" />
            Real Moves
          </motion.div>
          <motion.h2
            id="gallery-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4"
          >
            See Us In Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-brand-muted text-lg max-w-xl mx-auto"
          >
            Real photos from real moves across Wolverhampton and the West Midlands.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className={`group relative overflow-hidden rounded-xl bg-brand-neutral${i === GALLERY.length - 1 && GALLERY.length % 3 === 1 ? " md:col-span-3" : GALLERY.length % 3 === 2 && i === GALLERY.length - 1 ? " col-span-2 md:col-span-1" : ""}`}
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{item.caption}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
