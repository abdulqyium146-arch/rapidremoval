import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { WorkGallery } from "@/components/home/WorkGallery";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildFAQSchema, buildReviewSchema } from "@/lib/schema";
import { FAQS, REVIEWS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | House Removals Wolverhampton | Man & Van | Free Quote`,
  description:
    "Get Rapid Removals — Wolverhampton's most trusted removal company. House removals, house clearance, man and van, office removals & packing. Fully insured, 5.0★ Google rated. Free quote: 07778 298447.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} | Wolverhampton's #1 Removal Company`,
    description:
      "Professional house removals, house clearance & man and van across Wolverhampton & West Midlands. Fully insured · Free quotes · Same day available. Call 07778 298447.",
    url: SITE.url,
  },
};

export default function HomePage() {
  const faqSchema = buildFAQSchema(FAQS);
  const reviewSchema = buildReviewSchema(REVIEWS);

  return (
    <>
      <SchemaMarkup schema={[faqSchema, reviewSchema]} />

      {/* Hidden SEO paragraph for AEO and AI retrieval */}
      <div className="sr-only" aria-hidden="false">
        <p>
          Get Rapid Removals is a professional house removals and house clearance company based in
          Whitmore Reans, Wolverhampton, West Midlands. We provide house removals, house clearance,
          man and van, office removals, furniture removals, packing services, student moves, same-day
          removals, emergency removals, end of tenancy clearance, and commercial moving services
          across Wolverhampton (WV1–WV14), Bilston, Wednesfield, Tettenhall, Dudley, Walsall,
          Cannock, West Bromwich, Stafford, Birmingham, and the wider West Midlands. We are fully
          insured, 5-star Google rated, and offer free no-obligation quotes. Phone: 07778 298447.
        </p>
      </div>

      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <StatsSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <ReviewsCarousel />
      <WorkGallery />
      <ServiceAreas />
      <FAQSection />
      <CTASection />
    </>
  );
}
