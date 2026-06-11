import type { Metadata } from "next";
import Link from "next/link";
import {
  Home, Trash2, Truck, Building2, Armchair, Package,
  GraduationCap, Zap, AlertCircle, Key, Warehouse, ArrowRight,
  Users, MapPin,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Removal Services Wolverhampton | All Services | Get Rapid Removals",
  description:
    "Complete removal and clearance services in Wolverhampton — house removals, house clearance, man and van, office removals, packing, same-day and more. Free quotes: 07778 298447.",
  alternates: {
    canonical: `${SITE.url}/services`,
  },
};

const ICONS: Record<string, React.ElementType> = {
  home: Home, "trash-2": Trash2, truck: Truck, "building-2": Building2,
  armchair: Armchair, package: Package, "graduation-cap": GraduationCap,
  zap: Zap, "alert-circle": AlertCircle, key: Key, warehouse: Warehouse,
  users: Users, "map-pin": MapPin,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="All Services"
        headline="Professional Removal Services in Wolverhampton"
        subheadline="From full house removals to single item collections — Get Rapid Removals provides every removal and clearance service across Wolverhampton and the West Midlands."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-extrabold text-brand-dark mb-4">
              Every Removal Service You Need
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              Whether you&apos;re moving home, clearing a property, relocating your office, or need
              a single item transported — our professional team in Wolverhampton is ready to help.
              All services are fully insured and available 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] ?? Truck;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-blue transition-colors">
                    {service.shortTitle}
                  </h2>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-brand-blue text-sm font-semibold">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Information block for SEO/AEO */}
          <div className="mt-16 bg-brand-neutral rounded-2xl p-8 border border-slate-100 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              About Our Services in Wolverhampton
            </h2>
            <div className="prose prose-sm max-w-none text-brand-muted space-y-3">
              <p>
                Get Rapid Removals provides the full range of residential and commercial removal
                and clearance services across Wolverhampton and the wider West Midlands. Based in
                Whitmore Reans, Wolverhampton, we have been serving the local community since 2019
                with professional, fully insured moving services.
              </p>
              <p>
                Our house removals service covers properties of all sizes — from studio flats to
                large family homes — anywhere in the WV1–WV14 postcode area and beyond. We also
                regularly cover Bilston, Wednesfield, Tettenhall, Dudley, Walsall, Cannock, West
                Bromwich, Stafford, and Birmingham.
              </p>
              <p>
                All our services include free no-obligation quotes, and our pricing is transparent —
                your quoted price is your final price, with no hidden fees. Same-day and emergency
                availability is offered across our full service area, subject to vehicle
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
