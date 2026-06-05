import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { ServicePageContent } from "@/components/shared/ServicePageContent";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/lib/services-data";
import { SITE } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("end-of-tenancy-clearance");
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `${SITE.url}/services/end-of-tenancy-clearance` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.url}/services/end-of-tenancy-clearance`,
    },
  };
}

export default function ServicePage() {
  const service = getServiceBySlug("end-of-tenancy-clearance");
  if (!service) notFound();

  const schemas = [
    buildServiceSchema(service.shortTitle, service.description, "Wolverhampton"),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Services", url: `${SITE.url}/services` },
      { name: service.shortTitle, url: `${SITE.url}/services/end-of-tenancy-clearance` },
    ]),
    buildFAQSchema(service.faqs),
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />
      <PageHero
        badge={service.shortTitle}
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
        defaultService={service.shortTitle}
      />
      <ServicePageContent service={service} />
      <CTASection />
    </>
  );
}
