"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home, Trash2, Truck, Building2, Armchair, Package,
  GraduationCap, Zap, AlertCircle, Key, Warehouse, ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    icon: Home,
    title: "House Removals",
    description:
      "Full house removal service — from carefully packing your belongings to unloading at your new home. Local and long-distance covered.",
    href: "/services/house-removals",
    badge: "Most Popular",
    badgeVariant: "default" as const,
  },
  {
    icon: Trash2,
    title: "House Clearance",
    description:
      "Fast, thorough property clearances for homeowners, landlords, and estate agents. Responsible disposal and recycling throughout.",
    href: "/services/house-clearance",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: Truck,
    title: "Man & Van",
    description:
      "Flexible, affordable man and van service for smaller moves, single items, collections, and deliveries across Wolverhampton.",
    href: "/services/man-and-van",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: Building2,
    title: "Office Removals",
    description:
      "Minimise downtime with our professional office relocation service. Out-of-hours moves available to suit your business.",
    href: "/services/office-removals",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: Armchair,
    title: "Furniture Removals",
    description:
      "Single items to complete room moves — sofas, wardrobes, beds, and more. Careful handling and floor protection guaranteed.",
    href: "/services/furniture-removals",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: Package,
    title: "Packing Services",
    description:
      "Professional packing by trained experts. All materials included — from standard boxes to specialist fragile item wrapping.",
    href: "/services/packing-services",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: GraduationCap,
    title: "Student Moves",
    description:
      "Affordable student removal service for University of Wolverhampton students. Start and end of term moves made easy.",
    href: "/services/student-moves",
    badge: "Student Discount",
    badgeVariant: "success" as const,
  },
  {
    icon: Zap,
    title: "Same Day Removals",
    description:
      "Need to move today? Our rapid response team covers Wolverhampton and the West Midlands for same-day removals.",
    href: "/services/same-day-removals",
    badge: "Today",
    badgeVariant: "default" as const,
  },
  {
    icon: AlertCircle,
    title: "Emergency Removals",
    description:
      "Urgent emergency removal service for evictions, domestic situations, and unexpected relocations. Immediate response available.",
    href: "/services/emergency-removals",
    badge: "24/7",
    badgeVariant: "default" as const,
  },
  {
    icon: Key,
    title: "End of Tenancy",
    description:
      "Complete end-of-tenancy clearances for landlords, letting agents, and tenants. Same-day turnaround available.",
    href: "/services/end-of-tenancy-clearance",
    badge: null,
    badgeVariant: "secondary" as const,
  },
  {
    icon: Warehouse,
    title: "Commercial Moves",
    description:
      "Full commercial relocation service for warehouses, retail, hospitality, and offices. Dedicated project coordinator assigned.",
    href: "/services/commercial-moves",
    badge: null,
    badgeVariant: "secondary" as const,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

export function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-brand-neutral" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            Our Services
          </motion.div>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-4"
          >
            Everything You Need to Move
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-brand-muted text-lg max-w-2xl mx-auto"
          >
            From a single sofa to a complete house move — Get Rapid Removals covers every
            removal and clearance need in Wolverhampton and the West Midlands.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.href}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              custom={i}
            >
              <Link
                href={service.href}
                className="group block bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  {service.badge && (
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  )}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-blue transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 text-brand-blue text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-brand-muted text-sm mb-4">
            Not sure which service you need?{" "}
            <Link
              href="/contact"
              className="text-brand-blue font-semibold hover:underline"
            >
              Get in touch
            </Link>{" "}
            and we&apos;ll advise you free of charge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
