import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { AREAS } from "@/lib/areas-data";
import { PRIMARY_AREAS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Removal Service Areas | Wolverhampton & West Midlands | Get Rapid Removals",
  description:
    "Get Rapid Removals covers Wolverhampton, Bilston, Wednesfield, Dudley, Walsall, Cannock, Birmingham & more. Professional removals across the West Midlands. Free quotes: 07778 298447.",
  alternates: {
    canonical: `${SITE.url}/areas`,
  },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        badge="Service Areas"
        headline="Removals Across Wolverhampton & West Midlands"
        subheadline="Based in Whitmore Reans, Wolverhampton, we serve all WV postcodes and cover the wider West Midlands including Bilston, Dudley, Walsall, Cannock, Birmingham and Stafford."
        breadcrumbs={[{ label: "Areas" }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Primary areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Primary Service Area</h2>
            <p className="text-brand-muted mb-6">
              Wolverhampton is our home city. We cover every WV postcode.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {PRIMARY_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between bg-brand-blue text-white rounded-2xl p-5 hover:bg-brand-blue-light transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{area.name}</p>
                      <p className="text-blue-200 text-sm">{area.postcode}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* All areas */}
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">All Service Areas</h2>
            <p className="text-brand-muted mb-6">
              We regularly serve the following towns and cities across the West Midlands and Staffordshire.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group flex items-center justify-between bg-brand-neutral rounded-xl p-4 border border-slate-100 hover:border-brand-blue hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <MapPin className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">
                        {area.name}
                      </p>
                      <p className="text-brand-muted text-xs">{area.postcode} · {area.distance}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-blue transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Coverage note */}
          <div className="mt-12 bg-brand-dark rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-3">Don&apos;t See Your Area?</h2>
            <p className="text-slate-400 mb-4">
              Our service list above covers our most frequently served areas, but we can travel further
              for larger moves and long-distance relocations across the UK. Call us to discuss your
              specific location.
            </p>
            <a
              href="tel:+447778298447"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-blue-light transition-colors text-sm"
            >
              Call 07778 298447
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
