import type { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";
import { CheckCircle, ArrowRight, Phone, ExternalLink, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: `How Much Does a House Removal Cost in Wolverhampton? [2025 Guide] | ${SITE.name}`,
  description:
    "2025 house removal prices in Wolverhampton. 1-bed from £200, 2-bed from £300, 3-bed from £450. What affects the cost, hidden fees to avoid, and how to get a fair quote.",
  alternates: {
    canonical: `${SITE.url}/blog/house-removal-cost-wolverhampton`,
  },
  openGraph: {
    title: "How Much Does a House Removal Cost in Wolverhampton? [2025 Prices]",
    description:
      "Full breakdown of house removal costs in Wolverhampton — by property size, distance, and service type. Real prices, no fluff.",
    url: `${SITE.url}/blog/house-removal-cost-wolverhampton`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a House Removal Cost in Wolverhampton? [2025 Price Guide]",
  description:
    "A complete breakdown of house removal costs in Wolverhampton — by property size, distance, service type, and more. Includes 2025 prices.",
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  author: {
    "@type": "Organization",
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    url: SITE.url,
    sameAs: [SITE.social.facebook, SITE.social.companiesHouse],
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    url: SITE.url,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/blog/house-removal-cost-wolverhampton`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a house removal cost in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A house removal in Wolverhampton typically costs between £200 and £1,200+ depending on property size. A 1-bedroom flat costs £200–£300, a 2-bedroom house £300–£450, a 3-bedroom house £450–£700, and a 4+ bedroom property from £700 upwards. These prices cover loading, transit, and unloading with a fully insured team.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to move mid-week in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some removal companies charge more for Friday, Saturday, and end-of-month moves due to high demand. Get Rapid Removals charges the same rates across all days of the week. However, booking mid-week or mid-month can sometimes mean more availability and a faster confirmation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest way to move house in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cheapest way to move house in Wolverhampton is to book a man and van service for smaller moves or request a fixed-price quote from a local removal company like Get Rapid Removals. Packing your own boxes, being flexible on dates, and avoiding peak periods (end of month, school holidays) all help reduce costs.",
      },
    },
    {
      "@type": "Question",
      name: "Do removal companies in Wolverhampton charge for stairs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some do, but Get Rapid Removals factors all access into the quoted price — stairs, narrow corridors, no parking — so there are no day-of surprises. Always check at quotation stage whether access is included in the price.",
      },
    },
  ],
};

const PRICE_TABLE = [
  { size: "1-bedroom flat", local: "£200–£300", regional: "£350–£500", packing: "+£80–£150" },
  { size: "2-bedroom house", local: "£300–£450", regional: "£500–£750", packing: "+£120–£200" },
  { size: "3-bedroom house", local: "£450–£700", regional: "£700–£1,000", packing: "+£180–£300" },
  { size: "4-bedroom house", local: "£700–£1,000", regional: "£950–£1,400", packing: "+£250–£400" },
  { size: "5+ bedroom house", local: "£1,000+", regional: "£1,400+", packing: "POA" },
];

const FACTORS = [
  {
    title: "Property size",
    desc: "The number of bedrooms is the primary driver of cost. More rooms means more items, more loading time, and potentially a larger vehicle.",
  },
  {
    title: "Distance",
    desc: "A local move within Wolverhampton will always be less expensive than a long-distance move. Regional moves (e.g. to Birmingham or beyond) cost more due to fuel and time.",
  },
  {
    title: "Access at both properties",
    desc: "Stairs, lifts, narrow doorways, long carries from the van to the front door, or no direct road access all take more time and effort — and may affect price.",
  },
  {
    title: "Packing service",
    desc: "If you want the removal company to pack your home for you, this adds to the total cost. Supplying your own packed boxes significantly reduces the price.",
  },
  {
    title: "Furniture disassembly",
    desc: "Beds, wardrobes, and large items that need taking apart and reassembling at the other end add labour time to the job.",
  },
  {
    title: "Volume of items",
    desc: "A property with a large volume of belongings — regardless of bedrooms — will cost more. A lightly furnished 3-bed may be cheaper than a heavily furnished 2-bed.",
  },
  {
    title: "Date and timing",
    desc: "End-of-month dates and school holiday periods are peak times. Some companies charge more — we don't, but availability is tighter.",
  },
];

export default function HouseRemovalCostPage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Article hero */}
      <div className="bg-brand-dark text-white py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/blog"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Blog
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-brand-sky text-sm font-semibold">House Removals</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            How Much Does a House Removal Cost in Wolverhampton?{" "}
            <span className="text-brand-sky">[2025 Price Guide]</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            A complete breakdown of what you&apos;ll pay — by property size, distance, and service.
            Real prices from a real Wolverhampton removal company.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Get Rapid Removals</span>
            <span>·</span>
            <time dateTime="2025-06-01">June 2025</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

          {/* Quick answer — featured snippet target */}
          <div className="bg-blue-50 border border-brand-blue/20 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-2">
              Quick Answer
            </p>
            <p className="text-brand-dark leading-relaxed">
              A <strong>house removal in Wolverhampton</strong> typically costs{" "}
              <strong>£200–£1,200+</strong> depending on property size. A 1-bedroom flat costs
              £200–£300, a 2-bedroom house £300–£450, a 3-bedroom house £450–£700, and a 4+
              bedroom property from £700 upwards. These prices cover loading, transit, and
              unloading with a fully insured, professional team.
            </p>
          </div>

          {/* Intro */}
          <p className="text-brand-muted leading-relaxed mb-4">
            Moving house is already stressful enough. Not knowing what you&apos;ll pay for a removal
            company makes it worse. This guide gives you honest, up-to-date prices from a removal
            company that has been operating in Wolverhampton since 2019 — so you can budget
            accurately and avoid being overcharged.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            We cover cost by property size, the factors that affect pricing, how packing changes
            the total, hidden fees to watch for, and how to get a fair quote. If you want to skip
            straight to a price,{" "}
            <Link href="/quote" className="text-brand-blue font-semibold hover:underline">
              request a free quote
            </Link>{" "}
            or call{" "}
            <a href={`tel:${SITE.phone}`} className="text-brand-blue font-semibold hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>

          {/* Section 1: Price table */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            House Removal Costs in Wolverhampton by Property Size
          </h2>
          <p className="text-brand-muted mb-6">
            The table below shows typical price ranges for{" "}
            <Link href="/services/house-removals" className="text-brand-blue hover:underline">
              house removals
            </Link>{" "}
            in Wolverhampton. Local refers to moves within the West Midlands. Regional refers to
            moves beyond the West Midlands (e.g. to Stafford, Shrewsbury, or further).
          </p>
          <div className="overflow-x-auto mb-10 rounded-2xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Property size</th>
                  <th className="px-4 py-3 font-semibold">Local move</th>
                  <th className="px-4 py-3 font-semibold">Regional move</th>
                  <th className="px-4 py-3 font-semibold">Add packing</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_TABLE.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-brand-neutral"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.size}</td>
                    <td className="px-4 py-3 text-brand-muted">{row.local}</td>
                    <td className="px-4 py-3 text-brand-muted">{row.regional}</td>
                    <td className="px-4 py-3 text-brand-muted">{row.packing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-brand-muted text-sm italic mb-10">
            These are indicative price ranges. Your actual quote depends on the specific details of
            your move. All Get Rapid Removals quotes are fixed-price and all-inclusive —{" "}
            <Link href="/quote" className="text-brand-blue hover:underline">
              get your free quote here
            </Link>
            .
          </p>

          {/* Section 2: Man and van */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Man and Van vs Full Removal Company: Cost Comparison
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            For smaller moves — a studio flat, a single bedroom, or a few large items — a{" "}
            <Link href="/services/man-and-van" className="text-brand-blue hover:underline">
              man and van service
            </Link>{" "}
            is almost always more cost-effective than booking a full removal company.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
              <h3 className="font-bold text-brand-dark mb-2">Man &amp; Van</h3>
              <p className="text-brand-muted text-sm mb-3">
                Best for: 1-bedroom moves, student moves, single items, short-distance jobs.
              </p>
              <p className="font-semibold text-brand-dark">From £60–£80/hour</p>
              <p className="text-brand-muted text-xs mt-1">Most small moves: 2–4 hours</p>
            </div>
            <div className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
              <h3 className="font-bold text-brand-dark mb-2">Full Removal Company</h3>
              <p className="text-brand-muted text-sm mb-3">
                Best for: 2+ bedroom houses, long-distance moves, office relocations.
              </p>
              <p className="font-semibold text-brand-dark">Fixed quote from £300</p>
              <p className="text-brand-muted text-xs mt-1">Includes full team + large van</p>
            </div>
          </div>
          <p className="text-brand-muted leading-relaxed mb-10">
            Not sure which is right for your move? See our guide to{" "}
            <Link
              href="/services/man-and-van"
              className="text-brand-blue hover:underline"
            >
              man and van in Wolverhampton
            </Link>{" "}
            or call us and we&apos;ll advise you honestly — even if it means recommending our
            cheaper option.
          </p>

          {/* Section 3: Factors */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            7 Factors That Affect House Removal Prices in Wolverhampton
          </h2>
          <p className="text-brand-muted mb-6">
            Two 3-bedroom houses can have very different removal costs. Here&apos;s what
            determines your final price.
          </p>
          <div className="space-y-4 mb-10">
            {FACTORS.map((factor, i) => (
              <div key={factor.title} className="flex gap-4">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-bold text-brand-blue text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-sm mb-1">{factor.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4: Packing */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How Much Do Packing Services Cost in Wolverhampton?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Professional packing significantly reduces the risk of damage and takes the most
            time-consuming part of moving off your plate. Here are typical costs:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Fragile-only pack (glassware, artwork, mirrors): £80–£150",
              "Part pack (kitchen + fragile items): £120–£200",
              "Full pack of a 2-bedroom home: £180–£280",
              "Full pack of a 3-bedroom home: £250–£400",
              "All materials included (boxes, bubble wrap, packing paper)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-muted leading-relaxed mb-10">
            Our{" "}
            <Link href="/services/packing-services" className="text-brand-blue hover:underline">
              professional packing service
            </Link>{" "}
            uses double-wall removal boxes, wardrobe boxes, bubble wrap, and acid-free paper.
            Everything is supplied — you don&apos;t need to source materials separately.
          </p>

          {/* Section 5: Hidden costs */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Hidden Costs to Watch Out For
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Not every removal company is as transparent as they should be. Watch for these common
            price-inflating tactics:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Stairs surcharges added on the day — always ask upfront if stairs are included",
              "Fuel surcharges not mentioned in the quote",
              "Hourly rate quotes with no cap — a fixed price removes the risk of overrun charges",
              "Materials charged separately to packing service quotes",
              "Parking fine liability — confirm who is responsible for parking costs",
              "Waiting time fees if access is delayed at either property",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-muted leading-relaxed mb-10">
            Get Rapid Removals operates a <strong>no-hidden-fees policy</strong>. Your quoted
            price is your final price. We include all access, fuel, and insurance in every quote.
            See our{" "}
            <Link href="/faq#pricing" className="text-brand-blue hover:underline">
              full pricing FAQs
            </Link>{" "}
            for more detail.
          </p>

          {/* Section 6: How to get a fair quote */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How to Get a Fair Removal Quote in Wolverhampton
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Getting an accurate quote — rather than an under-quoted price that rises on the day —
            depends on the information you provide. For an honest quote, tell the company:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Exact collection and delivery postcodes",
              "Number of bedrooms and approximate volume (light, medium, heavy furnished)",
              "Any large or specialist items: pianos, pool tables, American fridge-freezers, safes",
              "Access issues at either property (stairs, no road access, parking restrictions)",
              "Whether you need packing services or furniture disassembly",
              "Your preferred move date (or flexibility range)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-muted leading-relaxed mb-10">
            The more detail you give, the more accurate your quote. Vague descriptions lead to
            vague quotes — and potential day-of surprises. Our online{" "}
            <Link href="/quote" className="text-brand-blue hover:underline">
              quote form
            </Link>{" "}
            walks you through all the key questions.
          </p>

          {/* Section 7: Local areas */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Removal Costs Across the Wolverhampton Area
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Get Rapid Removals covers all Wolverhampton postcodes (WV1–WV14) and the surrounding
            West Midlands area. Local moves within the following areas are priced at our standard
            Wolverhampton rates:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {[
              { name: "Wolverhampton", href: "/areas/wolverhampton" },
              { name: "Bilston", href: "/areas/bilston" },
              { name: "Wednesfield", href: "/areas/wednesfield" },
              { name: "Tettenhall", href: "/areas/tettenhall" },
              { name: "Dudley", href: "/areas/dudley" },
              { name: "Walsall", href: "/areas/walsall" },
              { name: "Cannock", href: "/areas/cannock" },
              { name: "West Bromwich", href: "/areas/west-bromwich" },
              { name: "Birmingham", href: "/areas/birmingham" },
            ].map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="flex items-center gap-1.5 bg-brand-neutral border border-slate-200 rounded-lg px-3 py-2 text-sm text-brand-dark hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                <ArrowRight className="w-3 h-3 text-brand-muted" />
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-brand-muted leading-relaxed mb-10">
            Moves between Wolverhampton and Birmingham, Dudley, or Walsall are treated as local
            regional moves and quoted accordingly. Long-distance moves beyond the West Midlands are
            quoted at a fixed all-in price.
          </p>

          {/* Section 8: Why us */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Why Choose Get Rapid Removals?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Fixed-price quotes", desc: "Your quoted price is your final price. No day-of additions." },
              { title: "Fully insured", desc: "Goods-in-transit and public liability cover on every job." },
              { title: "5.0★ Google rated", desc: "11 verified 5-star reviews from real Wolverhampton customers." },
              { title: "Local since 2019", desc: "Based in Whitmore Reans — we know Wolverhampton's streets." },
              { title: "No hidden access fees", desc: "Stairs, tight access, and parking are all included in your quote." },
              { title: "Same day available", desc: "Urgent moves handled across Wolverhampton 7 days a week." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-brand-dark text-sm">{item.title}</p>
                  <p className="text-brand-muted text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: "How much does a house removal cost in Wolverhampton?",
                a: "A house removal in Wolverhampton typically costs between £200 and £1,200+ depending on property size. A 1-bedroom flat costs £200–£300, a 2-bedroom house £300–£450, a 3-bedroom house £450–£700, and a 4+ bedroom property from £700 upwards. All prices include loading, transit, and unloading with a fully insured team.",
              },
              {
                q: "Is it cheaper to move mid-week in Wolverhampton?",
                a: "Some removal companies charge more for Fridays and end-of-month dates due to high demand. Get Rapid Removals charges the same rates across all days of the week — there are no weekend or end-of-month premiums.",
              },
              {
                q: "What is the cheapest way to move house in Wolverhampton?",
                a: "The cheapest way is to book a man and van for smaller moves, pack your own boxes, and be flexible on dates. For larger homes, requesting a fixed-price quote from a local company prevents hourly overruns. Get Rapid Removals offers free, no-obligation quotes.",
              },
              {
                q: "Do removal companies in Wolverhampton charge for stairs?",
                a: "Some do — as a day-of surprise. Get Rapid Removals factors all access, including stairs and difficult entry, into the quoted price. What you're quoted is what you pay.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-brand-dark text-sm mb-2">{item.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related reading */}
          <div className="border-t border-slate-200 pt-8 mb-4">
            <p className="font-bold text-brand-dark mb-4">Related Guides</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "How to Prepare for a House Removal", href: "/blog/how-to-prepare-for-a-house-removal" },
                { label: "House Clearance Costs in Wolverhampton", href: "/blog/house-clearance-wolverhampton-guide" },
                { label: "House Removals Service", href: "/services/house-removals" },
                { label: "Full FAQ: Pricing & Costs", href: "/faq#pricing" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between bg-brand-neutral border border-slate-200 rounded-xl p-3.5 text-sm text-brand-dark hover:text-brand-blue hover:border-brand-blue transition-all group"
                >
                  {link.label}
                  <ArrowRight className="w-3.5 h-3.5 text-brand-muted group-hover:text-brand-blue" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Inline CTA */}
      <section className="py-12 bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold mb-3">Get Your Free Wolverhampton Removal Quote</h2>
          <p className="text-slate-400 mb-7 text-sm">
            Fixed price. No hidden fees. Fully insured. Respond within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Author attribution — E-E-A-T signal */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="flex items-start gap-4 bg-brand-neutral rounded-2xl p-5 border border-slate-100">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-brand-dark text-sm">Written by the Get Rapid Removals Team</p>
              <p className="text-brand-muted text-xs mt-0.5">{SITE.legalName} · Co. No. {SITE.companyNumber} · Wolverhampton, West Midlands</p>
              <p className="text-brand-muted text-xs mt-2 leading-relaxed">
                This guide is produced by the team at Get Rapid Removals — a registered, fully insured
                removal company based in Wolverhampton with 5+ years&apos; experience and over 500 completed
                moves across the West Midlands. All pricing and advice reflects our real-world operational
                knowledge.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <Link href="/about" className="text-brand-blue text-xs font-semibold hover:underline">About Us</Link>
                <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-blue text-xs font-semibold hover:underline">Facebook <ExternalLink className="w-3 h-3" /></a>
                <a href={SITE.social.companiesHouse} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-blue text-xs font-semibold hover:underline">Companies House <ExternalLink className="w-3 h-3" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
