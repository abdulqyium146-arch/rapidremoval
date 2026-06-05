"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "./QuoteModal";
import type { ServiceData } from "@/lib/types";
import { SERVICES } from "@/lib/services-data";
import { SITE } from "@/lib/constants";

interface ServicePageContentProps {
  service: ServiceData;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const related = service.relatedServices
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Long description */}
            <section>
              <div className="prose prose-lg max-w-none">
                {service.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="text-brand-muted leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* What's included */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                What&apos;s Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-brand-neutral rounded-xl p-3 border border-slate-100"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                    <span className="text-brand-dark text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key features */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                Service Features
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                    <span className="text-brand-dark text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-5">
                Why Choose Get Rapid Removals
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-white rounded-xl p-5 border border-slate-100 shadow-card"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
                      <h3 className="font-bold text-brand-dark text-sm">{benefit.title}</h3>
                    </div>
                    <p className="text-brand-muted text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service FAQs */}
            {service.faqs.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="bg-brand-neutral rounded-2xl border border-slate-100 overflow-hidden">
                  <Accordion type="single" collapsible>
                    {service.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`sfaq-${i}`} className="px-5">
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
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Quote CTA card */}
            <Card className="border-brand-blue/20 bg-blue-50/50">
              <CardContent className="p-5">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">
                  Get a Free Quote
                </h3>
                <p className="text-brand-muted text-sm mb-4">
                  No obligation. Fast response. Local Wolverhampton experts.
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
                <div className="flex flex-col gap-1.5 mt-4">
                  {[
                    "✓ Fully insured",
                    "✓ No hidden fees",
                    "✓ Same day available",
                    "✓ 5.0★ Google rated",
                  ].map((item) => (
                    <p key={item} className="text-xs text-brand-muted">{item}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related services */}
            {related.length > 0 && (
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-bold text-brand-dark mb-3">Related Services</h3>
                  <ul className="space-y-2">
                    {related.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between text-sm text-brand-dark hover:text-brand-blue transition-colors group"
                        >
                          {s.shortTitle}
                          <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Areas served */}
            <Card>
              <CardContent className="p-5">
                <h3 className="font-bold text-brand-dark mb-3">Areas We Serve</h3>
                <p className="text-brand-muted text-xs mb-3">
                  This service is available across Wolverhampton and the West Midlands.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Wolverhampton",
                    "Bilston",
                    "Wednesfield",
                    "Tettenhall",
                    "Dudley",
                    "Walsall",
                    "Cannock",
                    "Birmingham",
                  ].map((area) => (
                    <span
                      key={area}
                      className="bg-brand-neutral border border-slate-200 text-brand-dark text-xs rounded-full px-2.5 py-1"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultService={service.shortTitle}
      />
    </>
  );
}
