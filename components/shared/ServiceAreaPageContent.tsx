import Link from "next/link";
import {
  CheckCircle,
  MapPin,
  Phone,
  Shield,
  Star,
  Clock,
  ChevronRight,
  Building2,
  Route,
} from "lucide-react";
import type { ServiceData, AreaData } from "@/lib/types";
import type { AreaLocalContent } from "@/lib/service-area-data";
import { SITE } from "@/lib/constants";

type Props = {
  service: ServiceData;
  area: AreaData;
  areaLocal: AreaLocalContent;
  faqs: { question: string; answer: string }[];
  relatedServiceAreas: {
    areaSlug: string;
    areaName: string;
    serviceSlug: string;
    serviceTitle: string;
  }[];
  relatedServicesInArea: {
    serviceSlug: string;
    serviceTitle: string;
  }[];
};

export function ServiceAreaPageContent({
  service,
  area,
  areaLocal,
  faqs,
  relatedServiceAreas,
  relatedServicesInArea,
}: Props) {
  const distanceText =
    area.distance === "0 miles"
      ? "Based here"
      : `${area.distance} away`;

  return (
    <div className="bg-white">

      {/* ── Section 1: Introduction ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Main intro copy */}
              <div className="md:col-span-2 space-y-5">
                <p className="text-slate-700 text-lg leading-relaxed">{areaLocal.intro}</p>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
                <p className="text-slate-600 leading-relaxed">
                  Our {service.shortTitle.toLowerCase()} is available across{" "}
                  <strong>{area.name}</strong> and the entire{" "}
                  <strong>{area.postcode}</strong> postcode area, 7 days a week
                  including Bank Holidays.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call {SITE.phoneDisplay} — Free Quote
                </a>
              </div>

              {/* Quick facts sidebar */}
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4 border border-slate-100">
                <h3 className="font-bold text-slate-900 text-base">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>
                      <strong>{area.name}</strong> — {area.postcode}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Route className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>{distanceText} from our Whitmore Reans base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>Fully insured — public liability &amp; goods-in-transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>5.0★ Google rating — 100% 5-star reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>Same-day availability — call to confirm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Free, no-obligation quotes — no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Why Choose Us ────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">
              Why Choose Get Rapid Removals for {service.shortTitle} in {area.name}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Local Proximity</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.distance === "0 miles"
                    ? `We are based right here in ${area.name} — zero travel time means faster response and zero fuel surcharge on your quote.`
                    : `Just ${area.distance} from our Wolverhampton base, we serve ${area.name} as part of our regular daily coverage. No inflated call-out fees.`}
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Fully Insured</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every {service.shortTitle.toLowerCase()} job is covered by our comprehensive
                  public liability and goods-in-transit insurance. Your belongings are protected
                  from the moment we arrive to the moment we leave.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">5.0★ Google Rated</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We hold a 5-star Google rating from 100% of our reviews — earned through
                  consistent, professional service across {area.name} and the West Midlands.
                  We are committed to maintaining that standard on every job.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">
                  {area.name} Property Expertise
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {areaLocal.propertyTypes.split(".")[0]}.{" "}
                  We understand the access requirements, road layouts, and property characteristics
                  unique to {area.name} and plan every move accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: About the Area ───────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              {service.shortTitle} Across {area.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-base">
                    Districts &amp; Neighbourhoods We Serve
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {areaLocal.districts.map((district) => (
                      <span
                        key={district}
                        className="text-sm bg-blue-50 text-brand-blue font-medium px-3 py-1 rounded-full border border-blue-100"
                      >
                        {district}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-base">Property Types</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {areaLocal.propertyTypes}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 mb-3 text-base">Key Roads &amp; Routes</h3>
                  <ul className="space-y-1">
                    {areaLocal.roads.map((road) => (
                      <li key={road} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
                        {road}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                  <h3 className="font-bold text-slate-800 mb-2 text-base">Access &amp; Parking Notes</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{areaLocal.accessNotes}</p>
                </div>

                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <h3 className="font-bold text-slate-800 mb-2 text-base">Pricing Context</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{areaLocal.pricingNote}</p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Get a free quote — {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: What's Included ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8">
              What&apos;s Included in Our {service.shortTitle} Service
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Nearby Areas ─────────────────────────────────────── */}
      {area.nearbyAreas.length > 0 && (
        <section className="py-16 lg:py-20 border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Areas We Cover from {area.name}
              </h2>
              <p className="text-slate-600 mb-8">
                Our {area.name} service area also covers these nearby towns and districts.
              </p>
              <div className="flex flex-wrap gap-3">
                {area.nearbyAreas.map((nearbyName) => {
                  // Convert nearby name to slug format
                  const nearbySlug = nearbyName.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={nearbyName}
                      href={`/areas/${nearbySlug}`}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors shadow-sm"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {nearbyName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 6: FAQs ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mb-10">
              {service.shortTitle} questions specific to {area.name} and our service.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            <div className="mt-10 p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 text-center">
              <p className="text-slate-700 mb-3 font-medium">
                Have a question not answered above?
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call us — {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Related Services in This Area ────────────────────── */}
      {relatedServicesInArea.length > 0 && (
        <section className="py-16 lg:py-20 border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                Other Services in {area.name}
              </h2>
              <p className="text-slate-600 mb-8">
                We offer a full range of removal services across {area.name} — not just{" "}
                {service.shortTitle.toLowerCase()}.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServicesInArea.map(({ serviceSlug, serviceTitle }) => (
                  <Link
                    key={serviceSlug}
                    href={`/areas/${area.slug}/${serviceSlug}`}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all group"
                  >
                    <span className="text-slate-800 font-medium text-sm group-hover:text-brand-blue transition-colors">
                      {serviceTitle} in {area.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 8: Same Service in Nearby Areas ─────────────────────── */}
      {relatedServiceAreas.length > 0 && (
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                {service.shortTitle} in Nearby Areas
              </h2>
              <p className="text-slate-600 mb-8">
                We provide {service.shortTitle.toLowerCase()} across all of the West Midlands —
                including these areas near {area.name}.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedServiceAreas.map(({ areaSlug, areaName, serviceSlug: sSlug, serviceTitle }) => (
                  <Link
                    key={areaSlug}
                    href={`/areas/${areaSlug}/${sSlug}`}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="text-slate-800 font-medium text-sm group-hover:text-brand-blue transition-colors">
                        {serviceTitle} in {areaName}
                      </span>
                      <p className="text-xs text-slate-500 mt-0.5">Get Rapid Removals</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-5 text-slate-900 font-semibold text-sm leading-snug list-none select-none hover:bg-slate-50 transition-colors">
        <span className="pr-4">{question}</span>
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-90" />
      </summary>
      <div className="px-5 pb-5 pt-1">
        <p className="text-slate-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
