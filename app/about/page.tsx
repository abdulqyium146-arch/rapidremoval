import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { SITE, STATS, TRUST_SIGNALS } from "@/lib/constants";
import {
  Shield, Star, MapPin, Users, Award, CheckCircle,
  Building2, ExternalLink, Phone, Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${SITE.legalName} | Wolverhampton Removals`,
  description:
    `${SITE.legalName} — a trusted Wolverhampton removals company registered in England & Wales (Co. No. ${SITE.companyNumber}). 5+ years experience, 5.0★ Google rating, fully insured. Learn about our team and values.`,
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

const CREDENTIALS = [
  {
    label: "Registered Ltd Company",
    detail: `Co. No. ${SITE.companyNumber} · Registered in England & Wales`,
    href: SITE.social.companiesHouse,
    icon: Building2,
    verified: true,
  },
  {
    label: "Goods-in-Transit Insurance",
    detail: "All customer belongings fully covered in transit",
    icon: Shield,
    verified: true,
  },
  {
    label: "Public Liability Insurance",
    detail: "Full coverage protecting your home and property",
    icon: Shield,
    verified: true,
  },
  {
    label: "5.0★ Google Rating",
    detail: "11 verified five-star Google reviews — 100% satisfaction",
    icon: Star,
    verified: true,
  },
  {
    label: "Established 2019",
    detail: "Over 5 years serving Wolverhampton and the West Midlands",
    icon: Award,
    verified: true,
  },
  {
    label: "500+ Moves Completed",
    detail: "Trusted by homeowners, landlords, and businesses across the region",
    icon: Users,
    verified: true,
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE.name}`,
  url: `${SITE.url}/about`,
  description: `${SITE.legalName} (Co. No. ${SITE.companyNumber}) is a professional removals and clearance company based in Whitmore Reans, Wolverhampton, established in ${SITE.established}.`,
  about: {
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Companies House Registration Number",
        value: SITE.companyNumber,
      },
    ],
    foundingDate: SITE.established,
    sameAs: [
      SITE.social.facebook,
      SITE.social.companiesHouse,
    ].filter(Boolean),
    image: [
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/get-rapid-removals-team-customer-wolverhampton.webp`,
        name: "Get Rapid Removals team with customer beside branded truck in Wolverhampton",
        description:
          "Get Rapid Removals professional removal team with a satisfied customer in Wolverhampton, West Midlands",
      },
      {
        "@type": "ImageObject",
        url: `${SITE.url}/images/get-rapid-removals-luton-van-wolverhampton.webp`,
        name: "Get Rapid Removals branded Luton removal van in Wolverhampton",
        description:
          "Get Rapid Removals Luton van with company branding and phone number 07778 298447",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      addressCountry: SITE.address.countryCode,
      postalCode: SITE.address.postcode,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: SITE.rating.best,
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
        subheadline={`${SITE.legalName} — founded in Whitmore Reans, Wolverhampton. 5+ years of professional, fully insured removal and clearance services across the West Midlands.`}
        breadcrumbs={[{ label: "About Us" }]}
        showStats={false}
      />

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
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
                  removals company — now registered as {SITE.legalName} (Co. No. {SITE.companyNumber}) —
                  covering house removals, house clearances, office relocations, long-distance moves, senior
                  moves, and specialist packing services across Wolverhampton and the wider West Midlands.
                </p>
                <p>
                  What hasn&apos;t changed is our commitment to the local community. Every review we earn,
                  every recommendation we receive, represents a family we&apos;ve helped through one of
                  life&apos;s most significant transitions. That responsibility drives us to be better on
                  every single job.
                </p>
                <p>
                  Today, Get Rapid Removals holds a perfect 5.0★ Google rating, has completed over 500
                  moves across the West Midlands, and is trusted by homeowners, landlords, estate
                  agents, and businesses throughout Wolverhampton and beyond.
                </p>
              </div>

              {/* Contact at a glance */}
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
                >
                  <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:underline text-sm"
                >
                  <Mail className="w-4 h-4" /> {SITE.email}
                </a>
              </div>
            </div>

            {/* Team photo + stats */}
            <div className="space-y-5">
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
        </div>
      </section>

      {/* Business Credentials — E-E-A-T trust layer */}
      <section className="py-14 bg-brand-neutral border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white text-brand-blue border border-blue-100 rounded-full px-4 py-1.5 text-sm font-semibold mb-3">
              <Shield className="w-4 h-4" /> Verified Business
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">
              Our Credentials &amp; Accreditations
            </h2>
            <p className="text-brand-muted text-sm mt-2 max-w-xl mx-auto">
              We are a fully registered, fully insured limited company — independently verifiable
              through Companies House and our Google Business profile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <cred.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="font-bold text-brand-dark text-sm">{cred.label}</p>
                    {cred.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    )}
                  </div>
                  <p className="text-brand-muted text-xs leading-relaxed">{cred.detail}</p>
                  {cred.href && (
                    <a
                      href={cred.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-blue text-xs font-medium hover:underline mt-1.5"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Verification links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.social.companiesHouse}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-brand-blue hover:text-brand-blue transition-colors text-sm shadow-sm"
            >
              <Building2 className="w-4 h-4" />
              View on Companies House
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-brand-dark font-semibold px-5 py-2.5 rounded-xl hover:border-[#1877F2] hover:text-[#1877F2] transition-colors text-sm shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
              Find us on Facebook
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
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

          {/* Trust signals */}
          <div className="mt-12 bg-brand-neutral rounded-2xl p-8 border border-slate-100">
            <h2 className="text-xl font-bold text-brand-dark mb-5 text-center">
              Why Wolverhampton Trusts Us
            </h2>
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

          {/* NAP entity block for AEO/GEO */}
          <div className="mt-10 bg-brand-dark text-white rounded-2xl p-6 text-sm">
            <h3 className="font-bold mb-3 text-white">Business Information</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-300">
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Legal name</span><br />{SITE.legalName}</p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Company No.</span><br />{SITE.companyNumber}</p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Registered</span><br />England &amp; Wales</p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Founded</span><br />{SITE.established}</p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Location</span><br />{SITE.address.street}, {SITE.address.city}, {SITE.address.county}</p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Phone</span><br /><a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a></p>
              <p><span className="text-slate-500 text-xs uppercase tracking-wide">Email</span><br /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></p>
              <p>
                <span className="text-slate-500 text-xs uppercase tracking-wide">Verify</span><br />
                <a href={SITE.social.companiesHouse} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
                  Companies House <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
