import type { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";
import { CheckCircle, ArrowRight, Phone, Shield, ExternalLink, Truck } from "lucide-react";

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
  dateModified: "2026-06-11",
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
    "@id": `${SITE.url}/blog/house-clearance-wolverhampton-guide`,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a house clearance service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A house clearance service is the professional removal of all unwanted furniture, appliances, and belongings from a residential property. A licensed clearance company handles all labour, transport, sorting, recycling, and disposal — leaving the property empty and clean. It differs from a skip hire in that the company does all the work for you.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a house clearance service cost in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A house clearance in Wolverhampton typically starts from £150 for a single room and £300–£800 for a full property, depending on volume, floors, and access. Get Rapid Removals provides free, no-obligation fixed-price quotes. Call 07438 447286.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a free house clearance service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fully free house clearance is possible if the property contains high-value furniture, antiques, or appliances that can be resold or donated. Get Rapid Removals offers a free on-site assessment to determine whether item value can reduce or eliminate the clearance cost. Most clearances involve a charge based on labour and disposal.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer charity house clearance in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Before any disposal, Get Rapid Removals sorts all usable items for donation to local charities including British Heart Foundation (BHF) and Salvation Army collection points. Donating good-condition furniture and household goods reduces environmental impact and can lower your clearance cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you clear hoarder houses in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Get Rapid Removals has specialist experience with hoarder house clearances across Wolverhampton and the West Midlands. Our team approaches these clearances without judgement — working methodically to sort, donate, recycle, and dispose of accumulated items safely and with respect for the occupant.",
      },
    },
    {
      "@type": "Question",
      name: "What is a compassionate house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A compassionate house clearance is carried out following a bereavement — clearing a loved one's home after they have passed. Get Rapid Removals approaches these clearances with patience, sensitivity, and complete discretion, coordinating with executors, solicitors, and family members at every stage.",
      },
    },
    {
      "@type": "Question",
      name: "Do councils offer house clearance services in Wolverhampton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Wolverhampton City Council and other local councils only offer a bulky waste collection for individual large items — they do not provide full house clearance services. For a complete property clearance, you need a licensed private company such as Get Rapid Removals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover Birmingham and Walsall for house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Get Rapid Removals provides house clearance services across Wolverhampton, Birmingham, Walsall, Dudley, Cannock, and the wider West Midlands. Call 07438 447286 for a free quote in any of these areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can I clear my parents' house before probate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can physically clear and sort a property before probate is granted. The legal restriction is on selling assets belonging to the estate, not on clearing or storing them. You can bring in a house clearance company, arrange charity donations, and clean the property before probate. Do not sell items of value from the estate before a Grant of Probate is obtained without agreement from all executors and beneficiaries.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can you clear a house before probate in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no legal minimum waiting period. You can begin clearing a property immediately after a death in the UK. Many families start within days or weeks. The only restriction is that estate assets should not be sold without a Grant of Probate. Clearing, cleaning, maintaining, and donating items is permitted at any point.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 6 month rule for probate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 6-month rule relates to Inheritance Tax, not house clearance. Executors must pay any Inheritance Tax owed within 6 months of the end of the month of death, or HMRC charges interest. This rule has no bearing on when you can start clearing or cleaning a property.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 40 day rule after death?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 40-day rule applies in Scotland under Scots law, where a surviving spouse has Prior Rights that must be asserted within 40 days. In England and Wales — including Wolverhampton and the West Midlands — there is no equivalent 40-day rule. House clearance can begin at any time after a death in England and Wales.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sell my dad's house before probate is granted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. In England and Wales, you cannot legally complete a property sale from an estate until a Grant of Probate (or Letters of Administration if there is no will) is obtained. You can market the property and accept an offer before probate, but legal completion of the sale cannot take place until the grant is in place.",
      },
    },
    {
      "@type": "Question",
      name: "Why is house clearance so expensive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "House clearance costs reflect professional labour (often 2–4 operatives for a full property), a licensed commercial vehicle, and regulated waste disposal fees at licensed facilities charged by weight. Compared to the alternative — multiple skip hires, numerous tip runs, vehicle hire, and your own physical labour — a professional clearance is usually comparable or better value.",
      },
    },
    {
      "@type": "Question",
      name: "What will house clearance companies take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full house clearance covers all furniture (sofas, beds, wardrobes, tables), white goods (fridges, washing machines, cookers), smaller appliances, clothing, bedding, books, crockery, garden furniture, shed contents, loft contents, garage contents, and general household waste. Items not typically included are hazardous materials, clinical waste, or items the customer wishes to keep.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to furniture in a house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good-condition furniture is offered to charity — including British Heart Foundation and Salvation Army — or donated to furniture banks. Reusable but worn furniture goes to licensed resale partners or community furniture projects. Damaged furniture is transported to a licensed waste facility where wood, metal, and foam are recycled separately. Specialist items such as pianos and safes are handled with appropriate equipment.",
      },
    },
    {
      "@type": "Question",
      name: "What are the responsibilities of a house clearance company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A house clearance company is responsible for removing all agreed items safely, transporting them legally in a licensed commercial vehicle, sorting items for charity donation, recycling, and licensed disposal, and leaving the property cleared and clean. They must hold a valid Environment Agency waste carrier licence and carry public liability insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of a house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key benefits of hiring a professional house clearance company are: saves significant time (a 3-bed house cleared in one day vs. weeks of personal effort); no heavy lifting or physical risk; responsible recycling and charity donation; protection from liability for illegal waste disposal; reduction in emotional burden for bereaved families; and improved property saleability from a clear, decluttered space.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a licence to do house clearance in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Any company or individual that removes and transports waste commercially in the UK must be a registered waste carrier, licensed by the Environment Agency. You can verify any clearance company's waste carrier status on the Environment Agency public register. Always check before booking — an unlicensed company may fly-tip your waste, leaving you potentially liable.",
      },
    },
    {
      "@type": "Question",
      name: "How to arrange a house clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To arrange a house clearance: (1) Contact a licensed clearance company and request a free quote. (2) Confirm the scope — rooms, loft, garage, garden. (3) Agree a fixed price and book a date. (4) Before the day, remove items you want to keep and ensure access is clear. (5) On the day, the team clears and sorts everything. The property is left empty and clean.",
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

const WHAT_CLEARANCE_TAKES = [
  "All furniture — sofas, beds, wardrobes, dining tables, chests of drawers",
  "White goods — fridges, washing machines, dishwashers, cookers",
  "Smaller appliances — microwaves, kettles, toasters, TVs, stereos",
  "Clothing, bedding, curtains, and textiles",
  "Books, DVDs, CDs, games, and media",
  "Crockery, cutlery, pots, pans, kitchen contents",
  "Garden furniture, tools, shed contents, plant pots",
  "Loft contents — boxes, old furniture, luggage, seasonal items",
  "Garage contents — tools, bikes, paint, general clutter",
  "General household waste and rubbish",
];

const PROBATE_QA = [
  {
    q: "Can I clear my parents' house before probate is granted?",
    a: "Yes — you can physically clear and sort the property before probate is granted. The legal restriction is on selling assets belonging to the estate, not on clearing or storing them. You can sort belongings, arrange charity donations, and bring in a clearance company before probate is in place. You should not sell items of value from the estate before probate without agreement from all executors and beneficiaries.",
  },
  {
    q: "How soon can you start clearing a house after a death in the UK?",
    a: "There is no legal minimum waiting period before you can begin clearing a property after a death. You can start immediately — clearing, cleaning, and sorting belongings. Many families begin within days or weeks to protect the property and prepare it for sale. The only restriction is that you should not sell estate assets before a Grant of Probate (or Letters of Administration) is obtained.",
  },
  {
    q: "Can you clean a house before probate?",
    a: "Yes. Cleaning, maintaining, and clearing a property before probate is perfectly legal. In fact, keeping the property clean and secure is often required by the estate's building insurer to keep the policy valid on an unoccupied property. House clearance — including hiring a professional company — is allowed before probate is granted.",
  },
  {
    q: "What is the 6 month rule for probate?",
    a: "The 6-month rule relates to Inheritance Tax (IHT), not house clearance. Executors must pay any Inheritance Tax owed within 6 months of the end of the month in which the person died, or HMRC will charge interest. This rule has no bearing on when you can start clearing or cleaning the property.",
  },
  {
    q: "What is the 40 day rule after death?",
    a: "The 40-day rule applies in Scotland under Scots law (Executry). In Scotland, a surviving spouse or civil partner has Prior Rights and must assert certain legal claims within 40 days of the death. In England and Wales, there is no equivalent 40-day rule. House clearance in England and Wales — including Wolverhampton and the West Midlands — is not subject to any 40-day restriction.",
  },
  {
    q: "Can I sell my dad's house before probate is granted?",
    a: "No. In England and Wales, you cannot exchange contracts or legally complete a sale of a property belonging to an estate until a Grant of Probate (or Letters of Administration if there is no will) is obtained. You can market the property and accept an offer before probate, but legal completion of the sale cannot happen until the grant is in place.",
  },
  {
    q: "What are the most common inheritance mistakes when clearing a house?",
    a: "The most common mistakes are: selling property or assets before probate is granted; failing to value items correctly for Inheritance Tax; removing items without agreement from all beneficiaries; hiring an unlicensed clearance company (leaving the estate liable for fly-tipping); and missing assets — cash, jewellery, collectibles — that should be declared. Always use a licensed waste carrier and keep records of all items donated or disposed of.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Contact & Get a Quote",
    desc: "Call or request a quote online. Tell us the property size, number of rooms to clear, and any large or unusual items. We provide free, fixed-price quotes — in person or by phone and photos.",
  },
  {
    step: "2",
    title: "Confirm Scope & Book",
    desc: "Agree exactly what is included — rooms, loft, garage, garden, shed. Confirm the price and book your date. No deposit required. We can usually attend within 1–3 working days.",
  },
  {
    step: "3",
    title: "Prepare the Property",
    desc: "Remove anything you want to keep before the team arrives. Set aside items for family members or charity. Label anything requiring special care.",
  },
  {
    step: "4",
    title: "Clearance Day",
    desc: "The team arrives and systematically clears the property room by room, sorting items for charity donation, recycling, and licensed disposal as they go.",
  },
  {
    step: "5",
    title: "Property Left Clear",
    desc: "Once complete, the property is left empty and clean — ready for viewing, sale, re-letting, or handover. We can provide a waste transfer note if required.",
  },
];

const PREP_CHECKLIST = [
  "Walk through every room and remove anything you want to keep before the clearance date",
  "Set aside items for family members, friends, or specific charities",
  "Label or photograph any items you want the team to handle with extra care",
  "Ensure clear vehicle access — parking for a large van, door keys, gate codes",
  "Confirm whether the loft, garage, and garden are included in the agreed scope",
  "Mention any fragile, valuable, or hazardous items before the team begins",
  "Start with large furniture and obvious clutter first — this frees up space to work through smaller items",
];

const FURNITURE_FATE = [
  {
    category: "Good-condition furniture",
    outcome: "Offered to charity — British Heart Foundation, Salvation Army, and local furniture banks accept sofas, wardrobes, tables, and more. Charity collection can reduce your clearance cost.",
  },
  {
    category: "Reusable but worn furniture",
    outcome: "Taken to licensed resale partners or community furniture banks where items are assessed, cleaned, and donated to households in need.",
  },
  {
    category: "Damaged or end-of-life furniture",
    outcome: "Transported to a licensed waste facility. Wood, metal, springs, and foam are separated and recycled wherever possible rather than sent to landfill.",
  },
  {
    category: "Specialist items (pianos, safes, gym equipment)",
    outcome: "Handled with specialist equipment and additional team members. Always mention heavy or awkward items at the quote stage so we can plan access and loading.",
  },
];

const CLEARANCE_BENEFITS = [
  { title: "Creates usable space", desc: "A cleared property feels larger, lighter, and more liveable — immediately improving quality of life or saleability." },
  { title: "Saves significant time", desc: "Clearing a 3-bedroom house alone can take weeks. A professional team completes it in a single day." },
  { title: "No physical effort", desc: "Heavy lifting, carrying, and loading — all handled. No risk of injury or strain to you or your family." },
  { title: "Supports bereaved families", desc: "Estate clearances are handled with patience and care, reducing the emotional burden on grieving families." },
  { title: "Responsible disposal", desc: "Items are sorted for charity donation, recycling, and licensed disposal — not fly-tipped. You're protected from liability." },
  { title: "Increases property value", desc: "A cleared, decluttered property photographs better, shows better, and typically achieves a higher sale price." },
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

          {/* Definitional anchor — featured snippet / AI citation target */}
          <div className="bg-slate-50 border-l-4 border-brand-blue rounded-r-2xl px-6 py-5 mb-8">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-2">
              What Is a House Clearance Service?
            </p>
            <p className="text-brand-dark leading-relaxed text-base">
              A <strong>house clearance service</strong> is the professional removal of all unwanted
              furniture, appliances, household items, and accumulated belongings from a residential
              property. A licensed company handles all labour, transport, sorting, recycling, and
              disposal — leaving the property completely empty and clean.
            </p>
          </div>

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

          {/* Section 3b: How it works / how to arrange */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How Do House Clearances Work in the UK?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            Arranging a house clearance is straightforward. Here is the step-by-step process with
            Get Rapid Removals — from initial contact to a cleared, clean property.
          </p>
          <div className="space-y-3 mb-10">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white text-sm font-extrabold shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm mb-1">{item.title}</p>
                  <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
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

          {/* Section 5b: Probate */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-2">
            House Clearance and Probate: What You Need to Know
          </h2>
          <p className="text-brand-muted leading-relaxed mb-6">
            If you are clearing a property after a bereavement, you may have questions about probate
            — what you can and cannot do legally before a Grant of Probate is obtained. Here are the
            key rules for England and Wales.
          </p>
          <div className="space-y-4 mb-10">
            {PROBATE_QA.map((item) => (
              <div key={item.q} className="bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-brand-dark text-sm mb-2">{item.q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Section 5c: What clearance companies take */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What Will House Clearance Companies Take?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-5">
            A full house clearance covers the complete contents of a property. Here is what a
            professional clearance company will remove:
          </p>
          <ul className="space-y-2 mb-6">
            {WHAT_CLEARANCE_TAKES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-brand-muted leading-relaxed mb-4">
            Items that are <strong>not</strong> typically taken on a standard clearance include
            hazardous materials (asbestos, chemicals, paint tins), clinical waste, and items the
            customer wishes to keep. If in doubt, mention any unusual items when requesting a quote.
          </p>
          <div className="bg-blue-50 rounded-2xl p-5 border border-brand-blue/20 mb-10">
            <p className="font-bold text-brand-dark text-sm mb-1">Do you pay house clearance companies, or do they pay you?</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              Usually you pay them — house clearance involves significant labour and licensed disposal
              costs. However, if a property contains high-value furniture, antiques, working appliances,
              or collectibles, a clearance company may reduce their quote — or in rare cases offer a
              free clearance — when the resale value of items offsets disposal costs. Get Rapid Removals
              always assesses item value before quoting and will tell you honestly whether anything can
              reduce your cost.
            </p>
          </div>

          {/* What happens to furniture */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What Happens to Furniture in a House Clearance?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-5">
            Furniture is the most asked-about category in any house clearance. Here is exactly what
            happens to different types of furniture once our team removes it:
          </p>
          <div className="space-y-3 mb-6">
            {FURNITURE_FATE.map((item) => (
              <div key={item.category} className="bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <p className="font-bold text-brand-dark text-sm mb-1">{item.category}</p>
                <p className="text-brand-muted text-sm leading-relaxed">{item.outcome}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-muted leading-relaxed mb-4">
            <strong>The best way to get rid of unwanted furniture</strong> depends on condition and
            urgency. Good-condition furniture can be listed free on Facebook Marketplace, Freecycle,
            or Gumtree. British Heart Foundation and Salvation Army offer free collection services in
            many UK areas. For a full property with mixed-condition furniture, a clearance company is
            the most efficient option — they handle everything in a single visit.
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            <strong>Do you need a licence to do house clearance in the UK?</strong> Yes. Any
            company or individual that removes and transports waste commercially must be a registered
            waste carrier, licensed by the Environment Agency. You can verify any clearance company&apos;s
            waste carrier licence on the Environment Agency public register at no charge. Get Rapid
            Removals is a fully licensed waste carrier — licence number available on request.
          </p>

          {/* Benefits */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What Are the Benefits of a House Clearance?
          </h2>
          <p className="text-brand-muted leading-relaxed mb-5">
            For most people, the decision to hire a professional clearance company comes down to
            time, physical effort, and peace of mind. Here are the key benefits:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {CLEARANCE_BENEFITS.map((item) => (
              <div key={item.title} className="bg-brand-neutral rounded-xl p-4 border border-slate-100">
                <p className="font-bold text-brand-dark text-sm mb-1">{item.title}</p>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

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

          {/* How to prepare */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            How to Prepare for a House Clearance
          </h2>
          <p className="text-brand-muted leading-relaxed mb-5">
            A little preparation before the clearance date makes the day smoother and ensures nothing
            important is accidentally removed. Work through this checklist in the days before:
          </p>
          <ul className="space-y-2 mb-6">
            {PREP_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-brand-neutral rounded-xl p-5 border border-slate-100 mb-10">
            <p className="font-bold text-brand-dark text-sm mb-1">What is the hardest thing to get rid of when decluttering?</p>
            <p className="text-brand-muted text-sm leading-relaxed">
              Sentimental items — photographs, letters, keepsakes — are consistently the hardest to
              let go of. Our advice: photograph everything before the clearance so you have a visual
              record of items that are disposed of. For particularly meaningful items, set them aside
              early and make a deliberate decision rather than leaving it to the last minute under
              time pressure.
            </p>
          </div>

          {/* FAQs */}
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-12">
            {[
              {
                q: "How much does a house clearance cost in Wolverhampton?",
                a: "A house clearance in Wolverhampton typically costs £150–£800+. A single room starts from £150. A full 3-bedroom house clearance costs £400–£650. A 4-bedroom house clearance costs £550–£800. The final price depends on volume, access, and scope. Get Rapid Removals provides free, no-obligation fixed-price quotes.",
              },
              {
                q: "Why is house clearance so expensive?",
                a: "House clearance costs reflect labour (often 2–4 operatives for a full day), a licensed commercial vehicle, and waste disposal fees at licensed facilities — which are regulated and charged by weight. Unlike a skip, a clearance company also sorts items for recycling and charity, which takes additional time. The cost is typically comparable to hiring a skip multiple times plus your own labour.",
              },
              {
                q: "Are house clearances worth it?",
                a: "Yes, for most people. A professional clearance saves significant time and physical effort — clearing a 3-bedroom house alone could take weeks. A clearance company completes it in a day. When you factor in skip costs, multiple tip runs, vehicle hire, and your own time, a professional clearance is usually the better value option.",
              },
              {
                q: "What is included in a house clearance?",
                a: "A full house clearance includes the removal of all furniture, appliances, clothing, household items, and general waste from a property — including garages, lofts, sheds, and gardens. The property is left cleared, clean, and ready.",
              },
              {
                q: "Can I clear a house before probate is granted?",
                a: "Yes. You can physically clear and sort a property before probate is granted. The restriction is on selling estate assets, not clearing them. You can arrange a house clearance, donate items to charity, and clean the property before probate. You should not sell items of apparent value without agreement from all executors and beneficiaries.",
              },
              {
                q: "What is the 6 month rule for probate?",
                a: "The 6-month rule relates to Inheritance Tax — executors must pay IHT within 6 months of the month of death or HMRC charges interest. It has nothing to do with when you can clear or clean the property. House clearance can begin as soon as you are ready.",
              },
              {
                q: "How do house clearance companies dispose of waste in Wolverhampton?",
                a: "Licensed clearance companies sort items for reuse, charity donation, recycling, and legal disposal at licensed waste facilities. Always verify a company's waste carrier licence on the Environment Agency register before booking.",
              },
              {
                q: "How quickly can a house clearance be arranged in Wolverhampton?",
                a: "Get Rapid Removals can often arrange clearances within 1–3 working days for urgent situations. Planned clearances can be booked as far in advance as needed. Call 07438 447286 to check availability.",
              },
              {
                q: "What are the responsibilities of a house clearance company?",
                a: "A professional house clearance company is responsible for: removing all agreed items safely; transporting them legally in a licensed commercial vehicle; sorting items for charity, recycling, and licensed disposal; providing waste transfer documentation if requested; and leaving the property in a cleared, clean state. They must hold a valid Environment Agency waste carrier licence and public liability insurance.",
              },
              {
                q: "Do you need a licence to do house clearance in the UK?",
                a: "Yes. Any business or individual that removes and transports waste commercially must be a registered waste carrier, licensed by the Environment Agency. You can verify a company's waste carrier status free of charge on the Environment Agency public register. Get Rapid Removals is a fully licensed waste carrier — licence number available on request.",
              },
              {
                q: "How do I get rid of furniture for free in the UK?",
                a: "Options for free furniture disposal in the UK: British Heart Foundation and Salvation Army offer free collection of good-condition furniture in many areas. Freecycle, Facebook Marketplace (free section), and Gumtree free listings allow you to offer furniture to local collectors. Local councils offer bulky waste collection, though this usually charges a fee per item. A house clearance company may offer a reduced or free clearance if furniture has sufficient resale or donation value.",
              },
              {
                q: "What day is the cheapest for house clearance or removals?",
                a: "Mid-week days — Monday to Thursday — are typically cheaper for both house clearances and removals in Wolverhampton and the UK. Friday and Saturday are peak days and often carry a small premium due to demand. Booking for a weekday can reduce your cost by 10–20% compared to a weekend date.",
              },
              {
                q: "What is the 5-5-5 decluttering rule?",
                a: "The 5-5-5 rule is a decluttering decision tool: if you haven't used an item in 5 months, won't use it in the next 5 months, and someone else could benefit from it — let it go. For a full house clearance where the entire property must be cleared, a professional clearance company makes these decisions systematically and at pace across every room.",
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
                moves and clearances across the West Midlands. All costs and guidance reflect our
                first-hand knowledge of the house clearance market in Wolverhampton.
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
