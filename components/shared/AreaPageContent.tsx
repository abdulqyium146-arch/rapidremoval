"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Star, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "./QuoteModal";
import type { AreaData } from "@/lib/types";
import { SITE, FAQS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SERVICE_LINKS = [
  { label: "House Removals", href: "/services/house-removals" },
  { label: "House Clearance", href: "/services/house-clearance" },
  { label: "Man & Van", href: "/services/man-and-van" },
  { label: "Office Removals", href: "/services/office-removals" },
  { label: "Furniture Removals", href: "/services/furniture-removals" },
  { label: "Packing Services", href: "/services/packing-services" },
  { label: "Same Day Removals", href: "/services/same-day-removals" },
  { label: "Emergency Removals", href: "/services/emergency-removals" },
  { label: "Student Moves", href: "/services/student-moves" },
  { label: "Commercial Moves", href: "/services/commercial-moves" },
  { label: "End of Tenancy", href: "/services/end-of-tenancy-clearance" },
  { label: "Long Distance Removals", href: "/services/long-distance-removals" },
  { label: "Senior Moves", href: "/services/senior-moves" },
];

interface AreaPageContentProps {
  area: AreaData;
}

export function AreaPageContent({ area }: AreaPageContentProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Long description */}
            <section>
              <div>
                {area.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-brand-muted leading-relaxed mb-4 last:mb-0 text-base">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Services in this area */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                Removal Services in {area.name}
              </h2>
              <p className="text-brand-muted mb-5 text-sm leading-relaxed">
                Get Rapid Removals provides the following services across {area.name} ({area.postcode}):
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between bg-brand-neutral rounded-xl p-3.5 border border-slate-100 hover:border-brand-blue hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                      <span className="text-brand-dark text-sm font-medium group-hover:text-brand-blue transition-colors">
                        {service.label}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue transition-colors" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Why choose us for this area */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                Why Choose Get Rapid Removals in {area.name}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: `Local Knowledge of ${area.name}`,
                    desc: `We know ${area.name} well — the streets, access challenges, parking restrictions, and property types. This expertise saves time and prevents problems on moving day.`,
                  },
                  {
                    title: "Fully Insured Service",
                    desc: "All moves include goods-in-transit and public liability insurance as standard. Your belongings are fully protected from loading to delivery.",
                  },
                  {
                    title: "Competitive Local Pricing",
                    desc: `We offer transparent, competitive pricing for removals in ${area.name}. Free no-obligation quotes — your quoted price is your final price.`,
                  },
                  {
                    title: "Same-Day Availability",
                    desc: `Need a removal in ${area.name} today? We keep capacity for urgent and same-day bookings across the ${area.county} area.`,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-5 border border-slate-100 shadow-card"
                  >
                    <h3 className="font-bold text-brand-dark text-sm mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Local landmarks context */}
            {area.landmarks.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  Areas Within {area.name} We Cover
                </h2>
                <p className="text-brand-muted text-sm mb-4">
                  Our removal team regularly works in and around the following locations in {area.name}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="flex items-center gap-1.5 bg-brand-neutral border border-slate-200 text-brand-dark text-sm rounded-lg px-3 py-1.5"
                    >
                      <MapPin className="w-3 h-3 text-brand-blue shrink-0" />
                      {landmark}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ section */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                Removals in {area.name} — Common Questions
              </h2>
              <div className="bg-brand-neutral rounded-2xl border border-slate-100 overflow-hidden">
                <Accordion type="single" collapsible>
                  {FAQS.slice(0, 5).map((faq, i) => (
                    <AccordionItem key={i} value={`afaq-${i}`} className="px-5">
                      <AccordionTrigger className="text-sm font-semibold text-brand-dark hover:text-brand-blue">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-brand-muted text-sm leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Nearby areas */}
            {area.nearbyAreas.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">
                  We Also Cover Nearby Areas
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {area.nearbyAreas.map((nearby) => {
                    const slug = nearby.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Link
                        key={nearby}
                        href={`/areas/${slug}`}
                        className="flex items-center justify-between bg-brand-neutral rounded-xl p-3 border border-slate-100 hover:border-brand-blue hover:bg-blue-50 transition-all group"
                      >
                        <span className="text-brand-dark text-sm font-medium group-hover:text-brand-blue transition-colors">
                          {nearby}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Quote CTA */}
            <Card className="border-brand-blue/20 bg-blue-50/50">
              <CardContent className="p-5">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">
                  Free Quote for {area.name}
                </h3>
                <p className="text-brand-muted text-xs mb-4">
                  Serving {area.name} ({area.postcode}) — {area.distance} from our base.
                  Fast response guaranteed.
                </p>
                <Button className="w-full mb-2" onClick={() => setQuoteOpen(true)}>
                  Get Free Quote
                </Button>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 text-brand-dark font-semibold py-2.5 rounded-xl hover:bg-brand-neutral transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phoneDisplay}
                </a>
              </CardContent>
            </Card>

            {/* Area info */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-brand-dark mb-3">Area Details</h3>
                <div className="space-y-2.5">
                  {[
                    { label: "Postcode", value: area.postcode },
                    { label: "County", value: area.county },
                    { label: "Distance from us", value: area.distance },
                    { label: "Same day available", value: "Yes" },
                    { label: "Free quotes", value: "Yes" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-brand-muted">{label}</span>
                      <span className="font-semibold text-brand-dark">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All services link */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-brand-dark mb-3">All Services</h3>
                <ul className="space-y-2">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center justify-between text-sm text-brand-dark hover:text-brand-blue transition-colors group"
                      >
                        {s.label}
                        <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
