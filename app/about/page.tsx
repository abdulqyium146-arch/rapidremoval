import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { SITE, STATS, TRUST_SIGNALS } from "@/lib/constants";
import { Shield, Star, MapPin, Users, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${SITE.name} | Wolverhampton Removals`,
  description:
    "Get Rapid Removals — a trusted Wolverhampton removals company based in Whitmore Reans. 5+ years experience, 5.0★ Google rating, fully insured. Learn about our team and values.",
  alternates: {
    canonical: `${SITE.url}/about`,
  },
};

const VALUES = [
  {
    icon: Star,
    title: "Excellence in Every Move",
    description:
      "We take pride in maintaining a perfect 5.0★ Google rating. This isn't accidental — it's the result of consistently delivering professional, careful, and punctual service on every job.",
  },
  {
    icon: Shield,
    title: "Reliability & Trust",
    description:
      "When we commit to a time and a price, we stick to it. No hidden fees, no last-minute surprises, no excuses. Our word is our bond, and our reputation in Wolverhampton reflects that.",
  },
  {
    icon: Users,
    title: "People-First Approach",
    description:
      "Moving is one of life's most stressful events. We treat every customer with empathy, respect, and patience — from the first phone call to the final box placed at your new home.",
  },
  {
    icon: MapPin,
    title: "Proud Local Business",
    description:
      "We are Wolverhampton born and raised. We understand the local community, the local streets, and the local challenges. Giving back to Wolverhampton is important to us.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE.name}`,
  url: `${SITE.url}/about`,
  description: `${SITE.name} is a professional removals and clearance company based in Whitmore Reans, Wolverhampton, established in ${SITE.established}.`,
  about: {
    "@type": "LocalBusiness",
    name: SITE.name,
    foundingDate: SITE.established,
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/get-rapid-removals-team-customer-wolverhampton.webp`,
        name: "Get Rapid Removals team with customer beside branded truck in Wolverhampton",
        description: "Get Rapid Removals professional removal team with a satisfied customer in Wolverhampton, West Midlands",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/get-rapid-removals-luton-van-wolverhampton.webp`,
        name: "Get Rapid Removals branded Luton removal van in Wolverhampton",
        description: "Get Rapid Removals Luton van with company branding and phone number 07778 298447",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      addressCountry: SITE.address.countryCode,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={aboutSchema} />
      <PageHero
        badge="About Us"
        headline="Wolverhampton's Trusted Local Removal Company"
        subheadline="Founded in Whitmore Reans, Wolverhampton. 5+ years of professional, fully insured removal and clearance services across the West Midlands."
        breadcrumbs={[{ label: "About Us" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
            {/* Our story */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-5">
                Built on Local Trust Since 2019
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Get Rapid Removals was founded in Whitmore Reans, Wolverhampton in 2019 with a simple
                  mission: to provide the kind of removal service we&apos;d want for our own families —
                  professional, careful, honest, and stress-free.
                </p>
                <p>
                  In the years since, we&apos;ve grown from a local man and van operation into a full-service
                  removals company covering house removals, house clearances, office relocations, and
                  specialist packing services across Wolverhampton and the wider West Midlands.
                </p>
                <p>
                  What hasn&apos;t changed is our commitment to the local community. Every review we earn,
                  every recommendation we receive, represents a family we&apos;ve helped through one of
                  life&apos;s most significant transitions. That responsibility drives us to be better on
                  every single job.
                </p>
                <p>
                  Today, Get Rapid Removals holds a perfect 5.0★ Google rating, has completed hundreds
                  of moves across the West Midlands, and is trusted by homeowners, landlords, estate
                  agents, and businesses throughout Wolverhampton and beyond.
                </p>
              </div>
            </div>

            {/* Team photo + stats */}
            <div className="space-y-5">
              {/* Real team photo */}
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/get-rapid-removals-team-customer-wolverhampton.webp"
                  alt="Get Rapid Removals team member with a happy customer standing beside the branded removal truck in Wolverhampton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-brand-dark text-white rounded-2xl p-5 text-center"
                  >
                    <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                    <p className="font-bold text-sm mb-0.5">{stat.label}</p>
                    <p className="text-slate-400 text-xs">{stat.sublabel}</p>
                  </div>
                ))}
              </div>

              {/* What we stand for */}
              <div className="bg-brand-neutral rounded-2xl p-5 border border-slate-100">
                <h3 className="font-bold text-brand-dark mb-3">What We Stand For</h3>
                <ul className="space-y-2.5">
                  {[
                    "Honesty — transparent pricing, no hidden fees",
                    "Reliability — we arrive on time, every time",
                    "Care — your belongings treated as our own",
                    "Professionalism — uniformed, trained, insured team",
                    "Community — proud Wolverhampton business",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                      <span className="text-brand-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <h3 className="font-bold text-brand-dark">{value.title}</h3>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-12 bg-brand-neutral rounded-2xl p-8 border border-slate-100 max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-brand-dark mb-5 text-center">Why Wolverhampton Trusts Us</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.label} className="text-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Award className="w-5 h-5 text-brand-blue" />
                  </div>
                  <p className="font-semibold text-brand-dark text-sm">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
