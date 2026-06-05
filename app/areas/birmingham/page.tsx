import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { AreaPageContent } from "@/components/shared/AreaPageContent";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { getAreaBySlug } from "@/lib/areas-data";
import { SITE, FAQS } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const area = getAreaBySlug("birmingham");
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical: `${SITE.url}/areas/birmingham` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${SITE.url}/areas/birmingham`,
    },
  };
}

export default function AreaPage() {
  const area = getAreaBySlug("birmingham");
  if (!area) notFound();

  const schemas = [
    buildServiceSchema(`Removals ${area.name}`, area.description, area.name),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Areas", url: `${SITE.url}/areas` },
      { name: area.name, url: `${SITE.url}/areas/birmingham` },
    ]),
    buildFAQSchema(FAQS.slice(0, 5)),
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />
      <PageHero
        badge={`Removals ${area.name}`}
        headline={area.heroHeadline}
        subheadline={area.heroSubheadline}
        breadcrumbs={[
          { label: "Areas", href: "/areas" },
          { label: area.name },
        ]}
      />
      <AreaPageContent area={area} />
      <CTASection />
    </>
  );
}
