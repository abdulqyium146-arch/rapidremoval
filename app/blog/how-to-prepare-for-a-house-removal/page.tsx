import type { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";
import { CheckCircle, ArrowRight, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: `How to Prepare for a House Removal: Complete Checklist | ${SITE.name}`,
  description:
    "Step-by-step house removal checklist from Wolverhampton's 5.0★ rated removal company. What to do 8 weeks, 4 weeks, 1 week, and the day before moving — plus pro packing tips.",
  alternates: {
    canonical: `${SITE.url}/blog/how-to-prepare-for-a-house-removal`,
  },
  openGraph: {
    title: "How to Prepare for a House Removal: Complete Checklist [2025]",
    description:
      "The complete moving house preparation checklist — week by week, from 8 weeks out to moving day. By Wolverhampton's most trusted removal company.",
    url: `${SITE.url}/blog/how-to-prepare-for-a-house-removal`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Prepare for a House Removal: The Complete Checklist",
  description:
    "A complete week-by-week checklist for preparing for a house removal — from 8 weeks before moving day to arrival at your new home.",
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
    "@id": `${SITE.url}/blog/how-to-prepare-for-a-house-removal`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far in advance should I start preparing for a house removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally, start preparing 6–8 weeks before your move date. This gives you time to declutter, source packing materials, book a removal company, and notify relevant organisations. For larger homes or complex moves, starting earlier is always better.",
      },
    },
    {
      "@type": "Question",
      name: "What should I pack first when moving house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pack items you use least first — seasonal clothing, books, decorations, spare bedding, items in storage. Leave everyday essentials until last: kitchen items, toiletries, work equipment, children's toys. Pack an 'essentials box' separately for immediate access on moving day.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be present for the entire removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend being present at both the collection and delivery addresses. If you cannot be present for the entire move, a trusted representative can authorise the team and direct placement. Always ensure someone is reachable by phone throughout.",
      },
    },
    {
      "@type": "Question",
      name: "What should I put in my moving day essentials box?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your moving day essentials box should contain: kettle, mugs, tea and coffee, phone chargers, important documents (passport, contracts, driving licence), medication, phone chargers, toilet roll, a change of clothes, children's favourite toys, and anything you'll need on the first night.",
      },
    },
  ],
};

const TIMELINE = [
  {
    weeks: "8 weeks before",
    color: "bg-blue-600",
    tasks: [
      "Confirm your move date and instruct your solicitor",
      "Book your removal company — popular dates fill up fast",
      "Start decluttering: donate, sell, or dispose of items you're not taking",
      "Research storage options if you need a gap between properties",
      "Notify your employer of your new address",
      "Start researching schools, GPs, and services in your new area",
    ],
  },
  {
    weeks: "4–6 weeks before",
    color: "bg-blue-500",
    tasks: [
      "Confirm your removal company booking and review all details",
      "Source packing materials: boxes, bubble wrap, packing paper, tape",
      "Begin packing non-essential rooms: spare bedrooms, loft, garage",
      "Notify your bank, HMRC, DVLA, and utility providers of your new address",
      "Redirect your Royal Mail post (allow 2 weeks for activation)",
      "Cancel or transfer subscriptions and deliveries",
      "Photograph your current meter readings",
    ],
  },
  {
    weeks: "2–3 weeks before",
    color: "bg-blue-400",
    tasks: [
      "Continue packing systematically, room by room",
      "Label every box: room destination + brief contents (e.g. 'Kitchen — plates')",
      "Mark fragile boxes clearly on all sides",
      "Defrost fridge-freezer contents — start using up frozen food",
      "Arrange childcare and pet care for moving day",
      "Confirm parking arrangements at both addresses with your removal company",
      "Pack a dedicated 'do not move' box for items travelling with you personally",
    ],
  },
  {
    weeks: "1 week before",
    color: "bg-blue-300",
    tasks: [
      "Confirm your moving day start time with your removal company",
      "Fully defrost fridge and freezer (24–48 hours before)",
      "Disassemble furniture that won't be moved assembled (unless your removal company is doing this)",
      "Return borrowed items; collect items loaned to others",
      "Charge all electronic devices and back up important data",
      "Prepare your new home: arrange cleaning if needed, confirm key collection",
      "Prepare payment for your removal company if settling on the day",
    ],
  },
  {
    weeks: "Moving day morning",
    color: "bg-brand-green",
    tasks: [
      "Have tea, coffee, and snacks ready for the team — it helps",
      "Do a final walkthrough of every room, cupboard, attic, and shed",
      "Check gardens, outbuildings, and under-stair storage",
      "Walk the team through the property and flag any fragile or high-value items",
      "Keep your essentials box and personal valuables with you — not on the van",
      "Photograph the state of the property before leaving (dents, marks, condition)",
      "Hand over your keys only once you've confirmed the van is fully loaded",
    ],
  },
  {
    weeks: "Arriving at your new home",
    color: "bg-brand-green",
    tasks: [
      "Do a quick walkthrough before the team begins unloading",
      "Direct the team — tell them which room each box goes to",
      "Check meter readings before and photograph them",
      "Locate your boiler, stopcock, and fuse box",
      "Identify any damage to the property that was pre-existing — document it",
      "Keep children and pets away from the removal area for safety",
      "Check the removal van is fully empty before signing off the job",
    ],
  },
];

const PACKING_TIPS = [
  {
    tip: "Start with heavy items on the bottom, lighter on top — both in boxes and in the van.",
  },
  {
    tip: "Never fill a box so heavy you can't lift it. Books should go in small boxes; clothing can fill larger ones.",
  },
  {
    tip: "Use socks, towels, and clothing as padding for fragile items — saves on bubble wrap.",
  },
  {
    tip: "Seal boxes with two strips of tape on the bottom and three on the top for heavier loads.",
  },
  {
    tip: "Take photos of the backs of TVs, computers, and AV equipment before disconnecting — makes reconnection easy.",
  },
  {
    tip: "Keep screws and fittings from dismantled furniture in clearly labelled zip-lock bags taped to the furniture.",
  },
  {
    tip: "Pack plates vertically — standing on edge like records — rather than stacked flat. Far less breakage.",
  },
  {
    tip: "Wardrobe boxes let you move hanging clothes without folding them. Ask your removal company if they supply them.",
  },
  {
    tip: "Coloured tape or coloured labels by room make directing unloading significantly faster.",
  },
  {
    tip: "Fill every box to the top — partially filled boxes collapse under weight in a stacked van.",
  },
];

export default function HowToPrepareForHouseRemovalPage() {
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
            <span className="text-brand-sky text-sm font-semibold">House Removals</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            How to Prepare for a House Removal:{" "}
            <span className="text-brand-sky">The Complete Checklist</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Week-by-week, room-by-room — everything you need to do before moving day, from
            Wolverhampton&apos;s most experienced removal team.
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

      <article className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">

          {/* Quick answer */}
          <div className="bg-blue-50 border border-brand-blue/20 rounded-2xl p-6 mb-10">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-2">
              In Short
            </p>
            <p className="text-brand-dark leading-relaxed">
              Start preparing <strong>6–8 weeks before your move date</strong>. Declutter first,
              book your removal company early, pack non-essentials room-by-room, and save everyday
              items for last. Label everything clearly and have an essentials box ready to travel
              with you on moving day.
            </p>
          </div>

          {/* Intro */}
          <p className="text-brand-muted leading-relaxed mb-4">
            Moving house is consistently ranked as one of life&apos;s most stressful events. After
            completing over 500 moves across{" "}
            <Link href="/areas/wolverhampton" className="text-brand-blue hover:underline">
              Wolverhampton
            </Link>{" "}
            and the West Midlands, we know exactly what separates a smooth move from a chaotic one.
            It comes down almost entirely to preparation.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            This checklist covers everything — from eight weeks out to the moment you hand over your
            old keys. Follow it and your{" "}
            <Link href="/services/house-removals" className="text-brand-blue hover:underline">
              house removal
            </Link>{" "}
            will be as stress-free as it can possibly be.
          </p>

          {/* Timeline sections */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-8">
            Your Week-by-Week Moving Checklist
          </h2>
          <div className="space-y-10 mb-12">
            {TIMELINE.map((phase) => (
              <div key={phase.weeks} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${phase.color} text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                    <Clock className="w-3 h-3" />
                    {phase.weeks}
                  </div>
                </div>
                <div className="bg-brand-neutral rounded-2xl border border-slate-100 p-5">
                  <ul className="space-y-2.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span className="text-brand-dark text-sm leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Packing tips section */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            10 Professional Packing Tips from Our Team
          </h2>
          <p className="text-brand-muted mb-6">
            These are the packing habits our team uses on every job — the difference between
            arriving with everything intact and spending moving day evening nursing broken china.
          </p>
          <div className="space-y-3 mb-10">
            {PACKING_TIPS.map((item, i) => (
              <div key={i} className="flex gap-4 bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <span className="w-7 h-7 bg-brand-blue text-white rounded-lg text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-brand-dark text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted leading-relaxed mb-10">
            If you&apos;d rather not pack at all, our{" "}
            <Link href="/services/packing-services" className="text-brand-blue hover:underline">
              professional packing service
            </Link>{" "}
            covers full and partial packing with all materials supplied. We pack everything from
            fragile glassware to large appliances — safely, quickly, and with far less breakage than
            self-packing.
          </p>

          {/* What to keep with you */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What to Keep With You on Moving Day
          </h2>
          <p className="text-brand-muted mb-5">
            Not everything should go on the removal van. Keep these items with you personally — in
            your car or with you at all times:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              "Passport, driving licence, and ID documents",
              "Property contracts, solicitor correspondence",
              "House keys (old and new)",
              "Prescription medication",
              "Phone chargers and laptop",
              "Children's comfort items and favourite toys",
              "Valuables: jewellery, cash, keepsakes",
              "Kettle, mugs, tea, coffee (moving day essentials)",
              "Toilet roll and hand soap for the new property",
              "A change of clothes and overnight items",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-brand-dark text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Wolverhampton-specific tips */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            Wolverhampton-Specific Moving Tips
          </h2>
          <p className="text-brand-muted leading-relaxed mb-4">
            Having moved hundreds of homes across{" "}
            <Link href="/areas/wolverhampton" className="text-brand-blue hover:underline">
              Wolverhampton
            </Link>
            , we know the local challenges. A few specific things to prepare for:
          </p>
          <ul className="space-y-3 mb-10">
            {[
              "Many Wolverhampton terraces have very limited or permit-only parking — confirm access with your removal company at least a week before.",
              "Some areas of Wolverhampton have narrow access lanes or shared drives. Tell your removal company your exact address so they can plan vehicle size accordingly.",
              "If moving to or from a flat in the city centre, building management may need prior notice for lift and loading bay use.",
              "End-of-month completion dates are the busiest time of year for Wolverhampton removal companies — book at least 2–4 weeks in advance.",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <ArrowRight className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <span className="text-brand-muted text-sm leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>

          {/* FAQs */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: "How far in advance should I start preparing for a house removal?",
                a: "Ideally, start 6–8 weeks before your move date. This gives you time to declutter, source packing materials, book your removal company, and notify all relevant organisations. For larger homes or complex moves, earlier is always better.",
              },
              {
                q: "What should I pack first when moving house?",
                a: "Pack items you use least first — seasonal clothing, books, spare bedding, decorations, items in storage. Leave everyday essentials until last. Pack a separate essentials box for your first night.",
              },
              {
                q: "Do I need to be present for the entire removal?",
                a: "We recommend being present at both the collection and delivery addresses. If not practical, a trusted representative can authorise the team and direct item placement. Always be reachable by phone throughout.",
              },
              {
                q: "What should I put in my moving day essentials box?",
                a: "Kettle, mugs, tea and coffee, phone chargers, important documents, medication, toilet roll, a change of clothes, children's favourite toys, and anything you'll need on the first night in your new home.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-brand-dark text-sm mb-2">{item.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related reading */}
          <div className="border-t border-slate-200 pt-8">
            <p className="font-bold text-brand-dark mb-4">Related Guides</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "House Removal Costs in Wolverhampton", href: "/blog/house-removal-cost-wolverhampton" },
                { label: "House Clearance Guide Wolverhampton", href: "/blog/house-clearance-wolverhampton-guide" },
                { label: "Our Packing Service", href: "/services/packing-services" },
                { label: "Get a Free Removal Quote", href: "/quote" },
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
          <h2 className="text-2xl font-extrabold mb-3">Ready to Book Your Wolverhampton Move?</h2>
          <p className="text-slate-400 mb-7 text-sm">
            Free quote · Fixed price · Fully insured · 5.0★ Google rated
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
