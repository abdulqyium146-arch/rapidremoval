import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Banknote, Truck, MapPin, Shield, Calendar,
  Home, Trash2, Zap, ArrowRight, Phone,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE } from "@/lib/constants";

type FAQItem = {
  question: string;
  snippet: string;
  detail?: string[];
  linkLabel?: string;
  linkHref?: string;
};

type FAQSection = {
  id: string;
  title: string;
  icon: LucideIcon;
  count: string;
  description: string;
  faqs: FAQItem[];
};

const FAQ_SECTIONS: FAQSection[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1. PRICING & COSTS
  // ─────────────────────────────────────────────────────────────────
  {
    id: "pricing",
    title: "Pricing & Costs",
    icon: Banknote,
    count: "13 questions",
    description: "Transparent answers on what removals and clearances actually cost in Wolverhampton — no fluff, no hidden surprises.",
    faqs: [
      {
        question: "How much does a house removal cost in Wolverhampton?",
        snippet:
          "A 2-bedroom house removal in Wolverhampton typically costs between £300 and £450. A 3-bedroom home costs £450–£700, and larger properties start from £700 upwards. The final price depends on property size, move distance, access, and any extras such as packing or furniture disassembly. All Get Rapid Removals quotes are fixed — no hidden fees.",
        detail: [
          "These are indicative ranges. The only way to get a precise price is to request a free tailored quote, which takes less than two minutes online or a quick phone call.",
        ],
        linkLabel: "Get a free, no-obligation quote",
        linkHref: "/quote",
      },
      {
        question: "How much does a man and van service cost in Wolverhampton?",
        snippet:
          "A man and van service in Wolverhampton typically starts from £60–£80 per hour. Most small moves, single-item deliveries, and student moves take 2–4 hours in total. Flat-rate quotes are available for larger jobs where a fixed price is preferable.",
        linkLabel: "View our man and van service",
        linkHref: "/services/man-and-van",
      },
      {
        question: "How much does a house clearance cost in Wolverhampton?",
        snippet:
          "House clearance in Wolverhampton starts from around £150 for a single room and £300–£800 for a full property, depending on the volume of items, number of floors, and any hazardous materials. Partial clearances — garages, lofts, single rooms — are also available. All quotes are free and no-obligation.",
        linkLabel: "View our house clearance service",
        linkHref: "/services/house-clearance",
      },
      {
        question: "How much do professional packing services cost?",
        snippet:
          "Professional packing starts from approximately £80–£150 for a partial pack (fragile and high-value items only, all materials included). A full professional pack of a 3-bedroom home typically costs £200–£400, covering all boxes, bubble wrap, specialist wrapping, and labour. Prices vary by volume and item complexity.",
        linkLabel: "View our packing services",
        linkHref: "/services/packing-services",
      },
      {
        question: "Do you charge extra for stairs or difficult access?",
        snippet:
          "No. We assess all access at the quotation stage. If your property has stairs, narrow corridors, no direct road access, or parking restrictions, these are factored into your quoted price before we start. Your quoted price is your final price — there are no day-of surprises for access.",
      },
      {
        question: "Do you charge extra for weekend or evening moves?",
        snippet:
          "No. Get Rapid Removals operates Monday–Saturday 07:00–20:00 and Sundays 08:00–18:00. Evening and weekend moves are available at our standard rates — there are no unsocial-hours premiums or weekend surcharges applied.",
      },
      {
        question: "Do you charge by the hour or offer fixed-price quotes?",
        snippet:
          "Both options are available. Man and van services are typically charged hourly from £60–£80 per hour. House removals, office relocations, and house clearances are quoted at an all-in fixed price, so you know exactly what to budget with no risk of a higher bill at the end.",
      },
      {
        question: "Do I need to pay a deposit to secure my booking?",
        snippet:
          "No deposit is required for most standard jobs. For larger or more complex moves — such as full house removals or commercial relocations — a small deposit may be requested to secure your chosen date. This is always discussed and agreed during the quotation stage, never applied without notice.",
      },
      {
        question: "What payment methods do you accept?",
        snippet:
          "We accept cash and bank transfer (BACS). Payment is due on completion of the service unless otherwise agreed in writing at booking. We do not currently accept card payments. Invoices are provided on request for business customers.",
      },
      {
        question: "Are there any hidden fees with Get Rapid Removals?",
        snippet:
          "No. We operate a strict no-hidden-fees policy. Your quoted price is your final price. The only exception is where there is a material difference between what was quoted and what we encounter on arrival — such as significantly more items than stated, or undisclosed access problems — which we always discuss with you before proceeding.",
      },
      {
        question: "Will my quote change on the day of the move?",
        snippet:
          "Your quote will not change unless the scope of the job is materially different from what was agreed — for example, considerably more items, items requiring specialist handling that weren't disclosed, or access issues not previously mentioned. If any adjustment is needed, we discuss it with you before starting, not after.",
      },
      {
        question: "Can I get a free quote online?",
        snippet:
          "Yes. You can request a free, no-obligation quote online by completing our short form with your move details — address, property size, preferred date, and any extras. We respond to all online quote requests within a few hours during business hours. For immediate availability, call 07438 447286.",
        linkLabel: "Request a free online quote",
        linkHref: "/quote",
      },
      {
        question: "Do you offer any discounts for flexible or off-peak moves?",
        snippet:
          "We price competitively as standard — we do not inflate prices to offer false discounts. We may offer adjusted rates for genuinely flexible move dates (mid-week, early-morning starts, or off-peak periods). Enquire at the quotation stage and we will always try to accommodate a fair price.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. OUR SERVICES
  // ─────────────────────────────────────────────────────────────────
  {
    id: "services",
    title: "Our Services",
    icon: Truck,
    count: "13 questions",
    description: "What we do, what we handle, and what to expect from every service we offer.",
    faqs: [
      {
        question: "What services does Get Rapid Removals offer?",
        snippet:
          "Get Rapid Removals offers: house removals, house clearance, man and van, office removals, furniture removals, packing services, student moves, same-day removals, emergency removals, end-of-tenancy clearance, and commercial moves. All services are based in Wolverhampton and cover the West Midlands and beyond.",
        linkLabel: "Browse all our services",
        linkHref: "/services",
      },
      {
        question: "Do you offer same-day removals in Wolverhampton?",
        snippet:
          "Yes. Same-day removals are available across Wolverhampton and the West Midlands, subject to availability. Call 07438 447286 as early as possible — the earlier you call, the more likely we can accommodate you. We keep capacity reserved specifically for urgent and same-day bookings.",
        linkLabel: "Same-day removal service",
        linkHref: "/services/same-day-removals",
      },
      {
        question: "Do you offer emergency removals?",
        snippet:
          "Yes. Get Rapid Removals provides emergency removal services 7 days a week across Wolverhampton and the West Midlands. For all urgent situations — last-minute completions, crisis moves, domestic emergencies — call 07438 447286 directly rather than using the online form.",
        linkLabel: "Emergency removal service",
        linkHref: "/services/emergency-removals",
      },
      {
        question: "Can you disassemble and reassemble furniture?",
        snippet:
          "Yes. Our team can disassemble beds, wardrobes, dining tables, desks, and flat-pack furniture before a move and fully reassemble everything at your new address. Just notify us at quote stage so we can allow time and bring the right tools. There is no specialist charge for standard flat-pack items.",
      },
      {
        question: "Do you provide packing boxes and materials?",
        snippet:
          "Yes. We supply professional double-wall removal boxes, wardrobe boxes, bubble wrap, acid-free packing paper, mattress bags, and tape. All materials are included in our packing service quotes. We can also supply packing materials separately to customers who are packing their own home.",
        linkLabel: "View our packing service",
        linkHref: "/services/packing-services",
      },
      {
        question: "Do you move pianos?",
        snippet:
          "Yes, we have experience moving upright pianos in Wolverhampton and across the West Midlands. Grand pianos and concert instruments require an individual assessment. Contact us with your piano type, dimensions, and access details for a tailored no-obligation quote.",
      },
      {
        question: "Can you move a single item of furniture?",
        snippet:
          "Yes. Our man and van service is ideal for single-item moves — sofas, beds, wardrobes, washing machines, and other large items — within Wolverhampton or across the West Midlands. Single-item moves are charged at our hourly rate with a short minimum call-out period.",
        linkLabel: "Furniture removal service",
        linkHref: "/services/furniture-removals",
      },
      {
        question: "Do you offer office and commercial removals?",
        snippet:
          "Yes. We provide full office and commercial relocation services in Wolverhampton and the wider West Midlands. We offer out-of-hours and weekend moves to minimise business disruption, and handle IT equipment, office furniture, archive boxes, and multi-floor moves.",
        linkLabel: "Office removals service",
        linkHref: "/services/office-removals",
      },
      {
        question: "Do you offer student removals?",
        snippet:
          "Yes. We offer affordable student removal services across Wolverhampton — ideal for university arrivals, end-of-year pack-ups, and shared house moves. The man and van service is the most popular option for students moving smaller volumes at competitive hourly rates.",
        linkLabel: "Student moves service",
        linkHref: "/services/student-moves",
      },
      {
        question: "Do you handle end-of-tenancy clearances?",
        snippet:
          "Yes. Our end-of-tenancy clearance service is available for landlords, letting agents, and tenants across Wolverhampton and the West Midlands. We remove all unwanted items and leave the property clear, clean, and ready for inspection, re-letting, or sale.",
        linkLabel: "End of tenancy clearance",
        linkHref: "/services/end-of-tenancy-clearance",
      },
      {
        question: "Can you move antiques, art, and fragile items?",
        snippet:
          "Yes. We specialise in the careful handling of fragile items, antiques, mirrors, fine art, and high-value pieces. We use professional furniture blankets, specialist wrapping materials, and custom packing techniques appropriate to each item. All high-value items are discussed individually at quote stage.",
      },
      {
        question: "Do you offer commercial moves for businesses?",
        snippet:
          "Yes. Get Rapid Removals handles full commercial relocations for businesses of all sizes across Wolverhampton and the West Midlands — including IT equipment, office furniture, filing systems, and archive materials. Out-of-hours and weekend moves are available to minimise disruption.",
        linkLabel: "Commercial moves service",
        linkHref: "/services/commercial-moves",
      },
      {
        question: "What if my removal company has let me down and I need urgent help?",
        snippet:
          "Call us immediately on 07438 447286. Being let down by another removal company on or near moving day is one of the most common emergency situations we handle. We will assess our current schedule and do everything possible to step in at short notice.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. COVERAGE & AREAS
  // ─────────────────────────────────────────────────────────────────
  {
    id: "areas",
    title: "Coverage & Areas",
    icon: MapPin,
    count: "10 questions",
    description: "Where we work — from every Wolverhampton postcode to Birmingham, Dudley, Walsall, and beyond.",
    faqs: [
      {
        question: "What areas does Get Rapid Removals cover?",
        snippet:
          "Get Rapid Removals is based in Whitmore Reans, Wolverhampton, and covers: all WV postcodes (WV1–WV14), Bilston, Wednesfield, Tettenhall, Codsall, Dudley, Walsall, Cannock, West Bromwich, Stafford, and Birmingham. We also carry out long-distance removals throughout the UK.",
        linkLabel: "View all service areas",
        linkHref: "/areas",
      },
      {
        question: "Do you cover all of Wolverhampton?",
        snippet:
          "Yes. We cover every Wolverhampton postcode: WV1, WV2, WV3, WV4, WV5, WV6, WV7, WV8, WV9, WV10, WV11, WV12, WV13, and WV14. As a locally based company in Whitmore Reans, Wolverhampton is our home territory — we know every street, parking restriction, and access challenge in the city.",
        linkLabel: "Removals in Wolverhampton",
        linkHref: "/areas/wolverhampton",
      },
      {
        question: "Do you cover Birmingham?",
        snippet:
          "Yes. Birmingham (B1–B45) is approximately 16 miles from our Wolverhampton base. We regularly carry out house removals, clearances, and man and van services across the full Birmingham area, including the city centre, suburbs, and surrounding boroughs.",
        linkLabel: "Removals in Birmingham",
        linkHref: "/areas/birmingham",
      },
      {
        question: "Do you cover Dudley?",
        snippet:
          "Yes. Dudley (DY1–DY3) is approximately 8 miles from Wolverhampton — well within our primary service area. We cover all Dudley borough postcodes for house removals, house clearances, and man and van services.",
        linkLabel: "Removals in Dudley",
        linkHref: "/areas/dudley",
      },
      {
        question: "Do you cover Walsall?",
        snippet:
          "Yes. Walsall (WS1–WS9) is approximately 9 miles from our base in Whitmore Reans. We cover the full Walsall borough — including Walsall town centre, Bloxwich, Aldridge, Brownhills, and surrounding areas — for removals and clearances.",
        linkLabel: "Removals in Walsall",
        linkHref: "/areas/walsall",
      },
      {
        question: "Do you cover Cannock?",
        snippet:
          "Yes. Cannock (WS11–WS12) is approximately 10 miles north of Wolverhampton. We cover Cannock town, Hednesford, Rugeley, and the wider Cannock Chase area for house removals, clearances, and man and van services.",
        linkLabel: "Removals in Cannock",
        linkHref: "/areas/cannock",
      },
      {
        question: "Do you cover Stafford?",
        snippet:
          "Yes. Stafford (ST16–ST21) is approximately 14 miles from our Wolverhampton base and falls within our regular service area. We provide the full range of removal and clearance services across Stafford and the surrounding Staffordshire area.",
        linkLabel: "Removals in Stafford",
        linkHref: "/areas/stafford",
      },
      {
        question: "Do you do long-distance removals from Wolverhampton?",
        snippet:
          "Yes. We carry out long-distance house removals from Wolverhampton to any UK destination — from Scotland to Cornwall. Long-distance moves are quoted at a fixed all-in price covering loading, transit, unloading, and fuel. Contact us for a tailored quote.",
        linkLabel: "Get a long-distance quote",
        linkHref: "/quote",
      },
      {
        question: "Are you actually a local Wolverhampton company?",
        snippet:
          "Yes. Get Rapid Removals is a genuinely local business — founded in Whitmore Reans, Wolverhampton in 2019. We are not a national chain, a franchise, or a lead broker. Every quote, booking, and move is handled directly by us. You speak to the company, not a call centre.",
        linkLabel: "About Get Rapid Removals",
        linkHref: "/about",
      },
      {
        question: "Can you do local moves within Wolverhampton (short distances)?",
        snippet:
          "Yes. Local moves within Wolverhampton — the same street, the same postcode, across town — are our most frequent jobs. Being based here means we know the city well, which makes local moves faster and more efficient. Short local moves are often the best value.",
        linkLabel: "Wolverhampton removals",
        linkHref: "/areas/wolverhampton",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. TRUST & INSURANCE
  // ─────────────────────────────────────────────────────────────────
  {
    id: "insurance",
    title: "Trust & Insurance",
    icon: Shield,
    count: "9 questions",
    description: "Our insurance, our people, our track record — everything you need to trust us with your home.",
    faqs: [
      {
        question: "Is Get Rapid Removals fully insured?",
        snippet:
          "Yes. Get Rapid Removals carries goods-in-transit insurance and public liability insurance as standard on every job. Your belongings are fully protected from the moment we begin loading to the moment the final item is placed at your new address. Insurance is included in your quote — it is not an optional extra.",
      },
      {
        question: "What happens if something is damaged during the move?",
        snippet:
          "Any damage claims must be reported within 24 hours of delivery, with photographic evidence where possible. We assess the damage and handle the matter through our goods-in-transit insurance policy. We take exceptional care on every move — professional furniture blankets and specialist protection are used on all items as standard.",
        detail: [
          "To report damage, contact us at info@getrapidremovals.co.uk or call 07438 447286 on the day of delivery.",
        ],
      },
      {
        question: "How experienced is the Get Rapid Removals team?",
        snippet:
          "Get Rapid Removals has been trading since 2019 and has completed over 500 moves across Wolverhampton and the West Midlands. Our team is trained, uniformed, and experienced across all property types — studio flats, Victorian terraces, large detached houses, and commercial premises.",
        linkLabel: "About us and our history",
        linkHref: "/about",
      },
      {
        question: "What is your Google rating?",
        snippet:
          "Get Rapid Removals holds a perfect 5.0-star rating on Google with 11 verified reviews from real customers. Every review is genuine — we do not pay for, incentivise, or solicit inauthentic reviews. Our rating reflects consistent service quality across five years of trading.",
      },
      {
        question: "Are your team uniformed and professionally vetted?",
        snippet:
          "Yes. Our team arrives in uniform on every job. We use our own trained, directly employed staff — not agency workers or unknown subcontractors. You deal with the same professional team throughout your move, and we stand behind everything they do.",
      },
      {
        question: "Do you hold a waste carrier licence?",
        snippet:
          "Yes. Get Rapid Removals is a registered licensed waste carrier. All items cleared from properties are disposed of legally and responsibly at licensed waste facilities. We prioritise recycling and donation to local charities and divert items from landfill wherever possible. Our waste carrier licence number is available on request.",
      },
      {
        question: "What is your cancellation policy?",
        snippet:
          "Cancellations made with 48 or more hours' notice incur no charge. Cancellations made with less than 48 hours' notice may be subject to a cancellation fee. We always try to accommodate rescheduling where circumstances have changed — particularly for customers in property chains where dates shift unexpectedly.",
      },
      {
        question: "What happens if you can't make the agreed date?",
        snippet:
          "In the rare event of an unavoidable circumstance — vehicle breakdown, medical emergency — we will contact you as early as possible and arrange the earliest available alternative at no additional charge. This has occurred very rarely across our trading history, and we communicate proactively when any issue arises.",
      },
      {
        question: "Do you carry public liability insurance?",
        snippet:
          "Yes. Full public liability insurance is carried on every job as standard. This covers any accidental damage caused to your property — walls, floors, doorframes, carpets, and fittings — during the move. It is included in your standard service, not an optional bolt-on.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. BOOKING & PROCESS
  // ─────────────────────────────────────────────────────────────────
  {
    id: "booking",
    title: "Booking & Process",
    icon: Calendar,
    count: "9 questions",
    description: "How to book, what we need from you, and what to expect from the moment you enquire.",
    faqs: [
      {
        question: "How do I get a quote and book a removal?",
        snippet:
          "The fastest way is to call 07438 447286 directly — we can quote and confirm your booking on the same call. Alternatively, complete our free online quote form with your move details. We respond to all online enquiries within a few hours during business hours. For same-day and emergency requests, always call.",
        linkLabel: "Request a free quote online",
        linkHref: "/quote",
      },
      {
        question: "How far in advance should I book a house removal?",
        snippet:
          "For planned house moves, book 2–4 weeks in advance, particularly for end-of-month completion dates and school holiday periods when demand is highest. For man and van and smaller jobs, we can often accommodate bookings within a few days. Same-day availability is subject to the day's schedule — call to check.",
      },
      {
        question: "What information do you need to provide an accurate quote?",
        snippet:
          "To provide a fully accurate quote we need: collection and delivery postcodes, property size (number of bedrooms), a list of any large or specialist items (pianos, pool tables, large appliances), known access issues (stairs, no parking, narrow entry), your preferred date, and whether packing services are needed.",
      },
      {
        question: "How quickly do you respond to quote requests?",
        snippet:
          "We aim to respond to all online quote requests within a few hours during business hours (Monday–Saturday 07:00–20:00, Sunday 08:00–18:00). For urgent responses — same-day availability, emergency moves — always call 07438 447286 directly for an instant answer.",
      },
      {
        question: "What happens on moving day from start to finish?",
        snippet:
          "Our uniformed team arrives at the agreed time and begins with a walkthrough of your property. We carefully load all items using full furniture protection and secure everything in our vehicle. We then transport to your new address, unload, and position furniture and boxes in the rooms you direct.",
        detail: [
          "We do not leave until you are happy with the placement of all your items. There is no rushing — we work until the job is properly done.",
        ],
      },
      {
        question: "Do I need to be present during the move?",
        snippet:
          "We strongly recommend you are present at both the collection and delivery addresses. If this is not possible, a trusted representative can authorise the team and direct item placement on your behalf. You do not need to remain on-site throughout, but someone should be reachable by phone at all times.",
      },
      {
        question: "What should I prepare before the removal team arrives?",
        snippet:
          "Before the team arrives: defrost your fridge and freezer at least 24 hours prior; ensure all items are packed if not using our packing service; dismantle any furniture not included in our service; clear access routes through the property; and confirm parking arrangements at both addresses in advance.",
      },
      {
        question: "Can I book evening or weekend removals?",
        snippet:
          "Yes. We operate Monday–Saturday 07:00–20:00 and Sundays 08:00–18:00. Evening starts and weekend moves are available at our standard rates — no surcharges. Weekend slots, particularly end-of-month Fridays and Saturdays, book up quickly. Reserve your preferred date early.",
      },
      {
        question: "What if my completion or exchange date changes after I have booked?",
        snippet:
          "Contact us as soon as you know the date has changed and we will do everything possible to accommodate the new date. We understand that property chains are unpredictable. We work with you, not against you, and take a common-sense approach to date changes.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. ON MOVING DAY
  // ─────────────────────────────────────────────────────────────────
  {
    id: "moving-day",
    title: "On Moving Day",
    icon: Home,
    count: "7 questions",
    description: "Practical answers to help your moving day go smoothly — timing, preparation, and what to expect.",
    faqs: [
      {
        question: "How long does a house removal take?",
        snippet:
          "A 2-bedroom house move within Wolverhampton typically takes 3–5 hours. A 3-bedroom home takes 5–8 hours. A 4+ bedroom property may take a full day or longer. Timing varies based on the volume of items, access at both properties, packing preparation, and the distance between addresses.",
      },
      {
        question: "What time does the removal team arrive?",
        snippet:
          "We agree a start time with you at the point of booking. Most moves start between 08:00 and 09:00, though earlier (from 07:00) and later starts are available on request. We aim to arrive within 15 minutes of the agreed time and communicate proactively if any delay occurs.",
      },
      {
        question: "How do you protect furniture and belongings during the move?",
        snippet:
          "We use professional quilted furniture blankets, stretch wrap, and corner protectors on all furniture. Mattresses are covered with purpose-made mattress sleeves. Mirrors and flat-screen TVs are individually wrapped. We do not load unprotected furniture into our vehicle — protection is not optional, it is how we work.",
      },
      {
        question: "What should I do with plants on moving day?",
        snippet:
          "Plants are best transported in your own vehicle to avoid soil spillage and ensure the right temperature and handling. If you need us to transport plants, let us know at booking. We take care to protect both the plants and your other belongings — but plants can be tricky in a loaded removal van.",
      },
      {
        question: "What should I do with food and perishables before a move?",
        snippet:
          "Use up or donate perishable food in the days leading up to your move. Non-perishable food can be packed in clearly labelled boxes. We recommend transporting high-value food items, medication, and anything temperature-sensitive in your own vehicle on moving day.",
      },
      {
        question: "Should I label my packing boxes?",
        snippet:
          "Yes — and it makes a significant difference. Clearly label each box with the destination room ('Kitchen', 'Bedroom 2', 'Study') and a brief content note. Mark any fragile items in large, clear writing. Our team will place boxes directly in the correct rooms without you needing to direct each one individually.",
      },
      {
        question: "How do I make moving day as smooth as possible?",
        snippet:
          "The key steps: pack and label everything before the team arrives; ensure clear access routes through both properties; have your keys confirmed and ready; keep a personal essentials bag separate (documents, valuables, medication, phone charger, overnight items); and communicate any access or parking concerns to us in advance of the day.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. HOUSE CLEARANCE
  // ─────────────────────────────────────────────────────────────────
  {
    id: "clearance",
    title: "House Clearance",
    icon: Trash2,
    count: "7 questions",
    description: "Everything you need to know about house clearances — what's included, how waste is handled, and specialist situations.",
    faqs: [
      {
        question: "What is included in a house clearance?",
        snippet:
          "A house clearance covers the removal of all unwanted items from a property — furniture, appliances, clothing, household effects, and general waste. We load, transport, and responsibly dispose of, recycle, or donate all items. The property is left cleared, clean, and ready for sale, re-letting, or occupation.",
        linkLabel: "View our house clearance service",
        linkHref: "/services/house-clearance",
      },
      {
        question: "How is waste from a house clearance disposed of?",
        snippet:
          "We are licensed waste carriers. Cleared items are sorted on removal for reuse, donation to local charities, recycling, and legal disposal at licensed waste facilities. We aim to divert as much as possible from landfill. All waste is handled in compliance with Environmental Protection Act requirements — no fly-tipping, ever.",
      },
      {
        question: "Can you carry out an estate clearance after a bereavement?",
        snippet:
          "Yes. We regularly carry out estate clearances in Wolverhampton and the West Midlands, working sensitively and respectfully with families during difficult times. We work at your pace, communicate clearly throughout, and treat all personal items with the care and dignity they deserve.",
      },
      {
        question: "Do you buy items found during a clearance?",
        snippet:
          "We do not purchase items. However, we will always notify you of any items that appear to have significant value before proceeding with disposal. We can advise on local auction services, charity collections, or online selling platforms for items worth recovering.",
      },
      {
        question: "Can you clear a house affected by hoarding?",
        snippet:
          "Yes. We approach all clearances, including those involving hoarding disorder, with complete professionalism and no judgement. We conduct a thorough on-site assessment before quoting, and work at a pace that is sensitive to all parties involved. This is a specialist service we have experience providing.",
      },
      {
        question: "Do you clear garages, sheds, gardens, and lofts?",
        snippet:
          "Yes. Our house clearance service covers the full property — garages, sheds, garden waste, loft spaces, cellars, and outbuildings are all included. There is no part of a property we cannot clear. These areas are all factored into your fixed clearance quote from the outset.",
      },
      {
        question: "How quickly can you arrange a house clearance in Wolverhampton?",
        snippet:
          "For urgent clearances in Wolverhampton and the surrounding area, we can often arrange attendance within 1–3 working days. Planned clearances can be booked as far in advance as required. Call 07438 447286 to discuss your situation and check current availability.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. EMERGENCY & SAME-DAY
  // ─────────────────────────────────────────────────────────────────
  {
    id: "emergency",
    title: "Emergency & Same-Day",
    icon: Zap,
    count: "6 questions",
    description: "Urgent removals handled fast — including same-day, last-minute, and crisis situations across Wolverhampton.",
    faqs: [
      {
        question: "Can you do a same-day house removal in Wolverhampton?",
        snippet:
          "Yes. Same-day house removals are available in Wolverhampton and the West Midlands, subject to schedule availability. Call 07438 447286 as early in the day as possible — the earlier you call, the more likely we can accommodate you. We hold capacity specifically for urgent and same-day situations.",
        linkLabel: "Same-day removal service",
        linkHref: "/services/same-day-removals",
      },
      {
        question: "How quickly can you respond to an emergency removal?",
        snippet:
          "For emergency removals in Wolverhampton, we aim to respond within 1–4 hours depending on our current schedule. In genuine crisis situations — including domestic emergencies, bailiff situations, flood evacuations, or last-minute completions — call 07438 447286 immediately and explain the urgency. We prioritise accordingly.",
        linkLabel: "Emergency removal service",
        linkHref: "/services/emergency-removals",
      },
      {
        question: "What situations count as an emergency removal?",
        snippet:
          "Emergency removals include: same-day property completions, last-minute chain collapses requiring immediate action, removal company no-shows, domestic emergency situations, bailiff or eviction-related clearances, flood or fire evacuations, and any move where standard advance notice is not possible.",
      },
      {
        question: "Do you charge a premium for emergency or same-day removals?",
        snippet:
          "Emergency and same-day jobs may carry a small additional charge depending on timing and complexity. We are always transparent about any adjusted cost before confirming the booking — never springing a higher price at the end. For many same-day jobs, standard rates apply. Call to discuss your specific situation.",
      },
      {
        question: "Can you step in if my removal company has let me down on the day?",
        snippet:
          "Yes. A removal company cancelling on moving day — or simply not turning up — is one of the most frequent emergency calls we receive. Call 07438 447286 immediately. Explain the situation and we will assess our current schedule and do everything possible to cover your move at short notice.",
      },
      {
        question: "Can you do an emergency house clearance in Wolverhampton?",
        snippet:
          "Yes. Urgent clearances are available across Wolverhampton and the West Midlands — including probate, repossession, eviction, and flood damage situations. Call 07438 447286 directly to discuss timescale and availability. We can often attend within 24–48 hours for genuine emergency clearances.",
      },
    ],
  },
];

// Flatten all FAQs for schema generation
const ALL_FAQS_FLAT = FAQ_SECTIONS.flatMap((s) => s.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS_FLAT.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [faq.snippet, ...(faq.detail ?? [])].join(" "),
    },
  })),
};

export const metadata: Metadata = {
  title: `Removal & Clearance FAQs | Wolverhampton | ${SITE.name}`,
  description:
    "74 answers to your removal and clearance questions — prices, areas covered, insurance, same-day availability, moving day preparation and more. Get Rapid Removals: Wolverhampton's 5.0★ rated local removal company.",
  alternates: {
    canonical: `${SITE.url}/faq`,
  },
  openGraph: {
    title: `Removal FAQs | ${SITE.name} | Wolverhampton`,
    description:
      "74 honest answers covering removal costs, areas served, insurance, booking, same-day service and more. Wolverhampton's most trusted local removal company.",
    url: `${SITE.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema} />

      <PageHero
        badge="Help & FAQs"
        headline="Removal & Clearance FAQs"
        subheadline="74 honest answers covering costs, coverage, insurance, process, same-day availability and everything else our customers ask."
        breadcrumbs={[{ label: "FAQs" }]}
        showStats={false}
      />

      {/* Intro + category quick-nav */}
      <section className="py-12 bg-brand-neutral border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-brand-muted leading-relaxed">
              Whether you&apos;re planning a house move, arranging a clearance, or need urgent same-day
              help in Wolverhampton, find your answer below. Can&apos;t find it?{" "}
              <a href={`tel:${SITE.phone}`} className="text-brand-blue font-semibold hover:underline">
                Call {SITE.phoneDisplay}
              </a>{" "}
              — we answer 7 days a week.
            </p>
          </div>

          {/* Category nav grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {FAQ_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 border border-slate-200 hover:border-brand-blue hover:bg-blue-50 transition-all group text-center"
                >
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                    <Icon className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-brand-dark text-xs font-semibold leading-tight group-hover:text-brand-blue transition-colors">
                    {section.title}
                  </span>
                  <span className="text-brand-muted text-[10px]">{section.count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <div className="bg-white">
        {FAQ_SECTIONS.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`py-14 ${sIdx % 2 === 1 ? "bg-brand-neutral" : "bg-white"}`}
            >
              <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                {/* Section header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-brand-dark mb-1">
                      {section.title}
                    </h2>
                    <p className="text-brand-muted text-sm">{section.description}</p>
                  </div>
                </div>

                {/* Accordion */}
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-card">
                  <Accordion type="single" collapsible>
                    {section.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`${section.id}-${i}`}
                        className="px-5 border-b border-slate-100 last:border-0"
                      >
                        <AccordionTrigger className="text-sm font-semibold text-brand-dark hover:text-brand-blue text-left py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <p className="text-brand-muted text-sm leading-relaxed">
                            {faq.snippet}
                          </p>
                          {faq.detail?.map((para, j) => (
                            <p key={j} className="text-brand-muted text-sm leading-relaxed mt-2">
                              {para}
                            </p>
                          ))}
                          {faq.linkHref && faq.linkLabel && (
                            <Link
                              href={faq.linkHref}
                              className="inline-flex items-center gap-1.5 mt-3 text-brand-blue text-sm font-semibold hover:underline"
                            >
                              {faq.linkLabel}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Back to top anchor */}
                <div className="mt-4 text-right">
                  <a
                    href="#"
                    className="text-brand-muted text-xs hover:text-brand-blue transition-colors"
                  >
                    ↑ Back to categories
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Still have questions CTA banner */}
      <section className="py-14 bg-brand-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold mb-3">Still Have a Question?</h2>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            If your question isn&apos;t answered above, call us directly — we answer 7 days a week
            and can give you an accurate answer or quote on the spot. No call centres, no bots.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {SITE.phoneDisplay}
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
