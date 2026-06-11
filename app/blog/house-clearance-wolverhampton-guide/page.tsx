import type { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";
import { CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: `House Clearance in Wolverhampton: Costs, Process & Guide [2025] | ${SITE.name}`,
  description:
    "Complete guide to house clearance in Wolverhampton. Costs from £150 for a room, £300–£800 for a full property. What's included, how waste is disposed of, estate clearances, and how to choose the right company.",
  alternates: {
    canonical: `${SITE.url}/blog/house-clearance-wolverhampton-guide`,
  },
  openGraph: {
    title: "House Clearance in Wolverhampton: Costs & Complete Guide [2025]",
    description:
      "What house clearance costs in Wolverhampton, what's included, how waste is handled, and how to choose the right company. Honest guide from a local licensed clearance company.",
    url: `${SITE.url}/blog/house-clearance-wolverhampton-guide`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "House Clearance in Wolverhampton: Costs, Process and How to Choose the Right Company",
  description:
    "A complete guide to arranging a house clearance in Wolverhampton — including 2025 costs, what's included, how waste is disposed of, and estate clearance advice.",
  datePublished: "2025-06-01",
  dateModified: "2025-06-01",
  author: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}/blog/house-clearance-wolverhampton-guide`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a house clearance cost in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "House clearance in Wolverhampton typically starts from £150 for a single room and £300–£800 for a full property, depending on the volume of items, number of floors, and access. Partial clearances — garages, lofts, single rooms — are also available at lower cost. Get Rapid Removals provides free, no-obligation clearance quotes.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A house clearance includes the removal of all unwanted furniture, appliances, household items, clothing, and general waste from a property. The clearance company loads, transports, and responsibly disposes of, recycles, or donates all items. The property is left cleared and clean.",
      },
    },
    {
      "@type": "Question",
      name: "How do house clearance companies dispose of waste in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Licensed clearance companies sort items for reuse, donation to local charities, recycling, and legal disposal at licensed waste facilities. A legitimate company will be a registered waste carrier — you can verify this on the Environment Agency website. Get Rapid Removals is a licensed waste carrier.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a house clearance be arranged in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For urgent clearances in Wolverhampton, Get Rapid Removals can often attend within 1–3 working days. Planned clearances can be booked as far in advance as needed. Call 07778 298447 to check current availability.",
      },
    },
    {
      "@type": "Question",
      name: "Do house clearance companies buy items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most professional clearance companies do not purchase items during a clearance. However, they should notify you of any items of apparent value before disposing of them. Get Rapid Removals always reports potentially valuable items to customers before removal.",
      },
    },
  ],
};

const CLEARANCE_TYPES = [
  {
    title: "Full House Clearance",
    desc: "The entire contents of a property removed, sorted, and responsibly disposed of. The most common clearance for house sales, probate, and end of tenancy.",
    cost: "£300–£800+",
  },
  {
    title: "Partial Clearance",
    desc: "Specific areas cleared — a garage, loft, garden, or particular rooms only. Ideal when you only need to clear selected items or spaces.",
    cost: "£150–£350",
  },
  {
    title: "Estate Clearance",
    desc: "Full or partial property clearance after a bereavement. Handled with particular sensitivity, care, and respect for personal effects.",
    cost: "£300–£800+",
  },
  {
    title: "End of Tenancy Clearance",
    desc: "Full clearance of a rental property between tenancies. Often required at short notice. Leaves the property ready for inspection or re-letting.",
    cost: "£200–£600",
  },
  {
    title: "Hoarding Clearance",
    desc: "Specialist clearance of properties affected by hoarding disorder — carried out without judgement, thoroughly, and at a considered pace.",
    cost: "From £300 (assessment required)",
  },
];

const RED_FLAGS = [
  "No waste carrier licence — ask for it, and verify it on the Environment Agency website",
  "Quoting a very low price then increasing it dramatically on arrival",
  "Cash-only payments with no receipt or paperwork",
  "No fixed business address or verifiable trading history",
  "Pressure to sign before seeing a full written quote",
  "No mention of how waste will be disposed of — fly-tipping risk",
];

const CHECKLIST = [
  "Check they are a licensed waste carrier (Environment Agency register)",
  "Ask for a written, fixed-price quote before agreeing anything",
  "Check Google reviews — look for consistent, recent, verified reviews",
  "Confirm what is included in the price (loft, garage, garden?)",
  "Ask how waste is disposed of and request confirmation in writing",
  "Confirm they have public liability insurance",
  "Check the company has a verifiable local address and trading history",
];

export default function HouseClearanceWolverhamptonGuidePage() {
  return (
    <>
      <SchemaMarkup schema={[articleSchema, faqSchema]} />

      {/* Article hero */}
      <div className="bg-brand-dark text-white py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
              Blog
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-brand-sky text-sm font-semibold">House Clearance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            House Clearance in Wolverhampton:{" "}
            <span className="text-brand-sky">Costs, Process &amp; Complete Guide</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            What house clearance costs in Wolverhampton in 2025, what&apos;s included, how waste is
            handled, and how to choose a clearance company you can trust.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Get Rapid Removals</span>
            <span>·</span>
            <time dateTime="2025-06-01">June 2025</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </div>

      <article className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

          {/* Quick answer */}
          <div className="bg-blue-50 border border-brand-blue/20 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-2">
              Quick Answer
            </p>
            <p className="text-brand-dark leading-relaxed">
              A <strong>house clearance in Wolverhampton</strong> typically costs{" "}
              <strong>£150–£800+</strong>, depending on property size and volume. A single-room
              clearance starts from £150. A full house clearance costs £300–£800. Costs are driven
              by volume of items, access, and any specialist handling required.
            </p>
          </div>

          {/* Intro */}
          <p className="text-brand-muted leading-relaxed mb-4">
            Whether you&apos;re clearing a property after a bereavement, preparing a house for
            sale, ending a tenancy, or simply reclaiming a cluttered space, this guide covers
            everything you need to know about arranging a house clearance in{" "}
            <Link href="/areas/wolverhampton" className="text-brand-blue hover:underline">
              Wolverhampton
            </Link>{" "}
            and the surrounding West Midlands area.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            Get Rapid Removals is a licensed waste carrier based in Whitmore Reans, Wolverhampton.
            We have completed hundreds of clearances across the city and wider West Midlands. This
            guide is written from direct experience.
          </p>

          {/* Section 1: What is a house clearance */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What Is a House Clearance?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            A house clearance is the removal of all — or a selected portion — of a property&apos;s
            contents. Unlike a skip hire or a tip run, a professional clearance company loads
            everything for you, transports it, and handles disposal responsibly.
          </p>
          <p className="text-brand-muted leading-relaxed mb-4">
            A full clearance covers furniture, white goods, clothing, crockery, books, carpets,
            garden items, sheds, loft contents, and all household effects. Items are sorted on
            removal for:
          </p>
          <ul className="space-y-2 mb-10">
            {[
              "Reuse — items in good condition kept for resale or donation",
              "Charity donation — furniture and clothing donated to local charities where possible",
              "Recycling — metals, electronics, textiles, and cardboard separated",
              "Legal disposal — remaining items taken to a licensed waste facility",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 2: Cost table */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            House Clearance Costs in Wolverhampton [2025]
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            The cost of a house clearance in Wolverhampton is primarily determined by the volume of
            items to be removed, the size of the property, and access. The table below provides
            indicative price ranges:
          </p>
          <div className="overflow-x-auto mb-6 rounded-2xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Property / scope</th>
                  <th className="px-4 py-3 font-semibold">Typical cost range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scope: "Single room (e.g. bedroom, garage)", cost: "£150–£250" },
                  { scope: "1-bedroom flat (full clearance)", cost: "£200–£350" },
                  { scope: "2-bedroom house (full clearance)", cost: "£300–£500" },
                  { scope: "3-bedroom house (full clearance)", cost: "£400–£650" },
                  { scope: "4-bedroom house (full clearance)", cost: "£550–£800" },
                  { scope: "5+ bedroom / large property", cost: "£800+" },
                  { scope: "Garden / shed / outbuilding only", cost: "£150–£300" },
                  { scope: "Loft clearance only", cost: "£150–£250" },
                ].map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-brand-neutral"}>
                    <td className="px-4 py-3 text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-brand-muted text-sm italic mb-10">
            Prices depend on volume of items and access. All Get Rapid Removals quotes are
            fixed-price.{" "}
            <Link href="/quote" className="text-brand-blue hover:underline">
              Request your free clearance quote
            </Link>
            .
          </p>

          {/* Section 3: Types */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Types of House Clearance in Wolverhampton
          </h2>
          <div className="space-y-4 mb-10">
            {CLEARANCE_TYPES.map((type) => (
              <div key={type.title} className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-brand-dark">{type.title}</h3>
                  <span className="text-brand-blue font-semibold text-sm shrink-0">{type.cost}</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>

          {/* Section 4: What happens to waste */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How Is Clearance Waste Disposed of in Wolverhampton?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            This is one of the most important questions to ask any clearance company — and one that
            many people don&apos;t think to ask until it&apos;s too late.
          </p>
          <p className="text-brand-muted leading-relaxed mb-4">
            Fly-tipping is a genuine problem in the West Midlands. Some unregistered &quot;clearance
            companies&quot; take your money, dump the contents illegally, and disappear — leaving
            you potentially liable as the waste owner. This has happened to Wolverhampton homeowners
            and landlords.
          </p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-brand-blue/20 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-dark mb-1">How we handle waste at Get Rapid Removals</p>
                <p className="text-brand-muted text-sm leading-relaxed">
                  We are a registered licensed waste carrier. All items are transported to licensed
                  facilities. We sort everything for reuse, charity donation, recycling, and legal
                  disposal. We can provide our waste carrier licence number on request, and we will
                  always tell you what we plan to do with specific items before removing them.
                </p>
              </div>
            </div>
          </div>
          <p className="text-brand-muted leading-relaxed mb-10">
            You can verify any waste carrier&apos;s licence on the{" "}
            <span className="font-semibold text-brand-dark">Environment Agency public register</span>.
            Always do this before handing over any payment.
          </p>

          {/* Section 5: Estate clearance */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Estate Clearances After a Bereavement
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Estate clearances are among the most sensitive jobs we carry out. Clearing a loved
            one&apos;s home is genuinely difficult — and the last thing a grieving family needs is
            a clearance company that rushes, shows no sensitivity, or handles personal effects
            carelessly.
          </p>
          <p className="text-brand-muted leading-relaxed mb-4">
            At Get Rapid Removals, we work at your pace. We will always notify you of any items of
            personal significance or apparent value before removing them. If you need time to go
            through belongings, we accommodate that. There is no pressure to rush.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            We cover estate clearances across{" "}
            <Link href="/areas/wolverhampton" className="text-brand-blue hover:underline">
              Wolverhampton
            </Link>
            ,{" "}
            <Link href="/areas/dudley" className="text-brand-blue hover:underline">
              Dudley
            </Link>
            ,{" "}
            <Link href="/areas/walsall" className="text-brand-blue hover:underline">
              Walsall
            </Link>
            ,{" "}
            <Link href="/areas/cannock" className="text-brand-blue hover:underline">
              Cannock
            </Link>
            , and the wider West Midlands.
          </p>

          {/* Section 6: End of tenancy */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            End of Tenancy Clearances in Wolverhampton
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Landlords and letting agents across Wolverhampton use Get Rapid Removals for{" "}
            <Link href="/services/end-of-tenancy-clearance" className="text-brand-blue hover:underline">
              end-of-tenancy clearances
            </Link>{" "}
            — particularly where a tenant has left items behind or the property needs a full clear
            before re-letting.
          </p>
          <ul className="space-y-2 mb-10">
            {[
              "Available at short notice — often within 1–3 working days",
              "Full clearance of all rooms, including any tenant-left items",
              "Garden, garage, and shed clearance included",
              "Property left clean, clear, and ready for inspection",
              "Fixed-price quotes for landlords managing multiple properties",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Section 7: Red flags */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Red Flags: How to Spot a Rogue Clearance Company
          </h2>
          <p className="text-brand-muted mb-5">
            Not all clearance companies in Wolverhampton operate legitimately. Watch for these
            warning signs:
          </p>
          <ul className="space-y-3 mb-10">
            {RED_FLAGS.map((flag) => (
              <li key={flag} className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm leading-relaxed">{flag}</span>
              </li>
            ))}
          </ul>

          {/* Section 8: How to choose */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How to Choose a House Clearance Company in Wolverhampton
          </h2>
          <p className="text-brand-muted mb-5">
            Use this checklist before booking any house clearance company:
          </p>
          <div className="space-y-3 mb-10">
            {CHECKLIST.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <div className="w-6 h-6 bg-brand-blue rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-brand-dark text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: "How much does a house clearance cost in Wolverhampton?",
                a: "A house clearance in Wolverhampton typically costs £150–£800+. A single room starts from £150. A full 3-bedroom house clearance costs £400–£650. The final price depends on volume, access, and the specific scope. Get Rapid Removals provides free, no-obligation fixed-price quotes.",
              },
              {
                q: "What is included in a house clearance?",
                a: "A full house clearance includes the removal of all furniture, appliances, clothing, household items, and general waste from a property — including garages, lofts, sheds, and gardens. The property is left cleared, clean, and ready.",
              },
              {
                q: "How do house clearance companies dispose of waste in Wolverhampton?",
                a: "Licensed clearance companies sort items for reuse, charity donation, recycling, and legal disposal at licensed waste facilities. Always verify a company's waste carrier licence on the Environment Agency register before booking.",
              },
              {
                q: "How quickly can a house clearance be arranged in Wolverhampton?",
                a: "Get Rapid Removals can often arrange clearances within 1–3 working days for urgent situations. Planned clearances can be booked as far in advance as needed. Call 07778 298447 to check availability.",
              },
              {
                q: "Do house clearance companies buy items?",
                a: "Most professional companies — including Get Rapid Removals — do not purchase items. However, we always notify customers of any items of apparent value before disposing of them. We can suggest local auction services and charity collection contacts.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-brand-dark text-sm mb-2">{item.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Areas covered */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            House Clearance Areas We Cover
          </h2>
          <p className="text-brand-muted mb-5">
            We carry out house clearances across Wolverhampton and the West Midlands:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-10">
            {[
              { name: "Wolverhampton", href: "/areas/wolverhampton" },
              { name: "Bilston", href: "/areas/bilston" },
              { name: "Wednesfield", href: "/areas/wednesfield" },
              { name: "Dudley", href: "/areas/dudley" },
              { name: "Walsall", href: "/areas/walsall" },
              { name: "Cannock", href: "/areas/cannock" },
              { name: "West Bromwich", href: "/areas/west-bromwich" },
              { name: "Birmingham", href: "/areas/birmingham" },
              { name: "Stafford", href: "/areas/stafford" },
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

          {/* Related reading */}
          <div className="border-t border-slate-200 pt-8">
            <p className="font-bold text-brand-dark mb-4">Related Guides</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "House Clearance Service", href: "/services/house-clearance" },
                { label: "End of Tenancy Clearance", href: "/services/end-of-tenancy-clearance" },
                { label: "House Removal Cost Guide", href: "/blog/house-removal-cost-wolverhampton" },
                { label: "Get a Free Clearance Quote", href: "/quote" },
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

      <section className="py-12 bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold mb-3">
            Get a Free House Clearance Quote in Wolverhampton
          </h2>
          <p className="text-slate-400 mb-7 text-sm">
            Licensed waste carrier · Fixed price · No hidden fees · Fast response
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

      <CTASection />
    </>
  );
}
