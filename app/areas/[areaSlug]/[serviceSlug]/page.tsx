import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { ServiceAreaPageContent } from "@/components/shared/ServiceAreaPageContent";
import { buildServiceSchema, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { getAreaBySlug } from "@/lib/areas-data";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";
import { AREAS } from "@/lib/areas-data";
import {
  ALL_SERVICE_AREA_COMBINATIONS,
  AREA_LOCAL_CONTENT,
  getServiceAreaMeta,
  getServiceAreaFAQs,
} from "@/lib/service-area-data";
import { SITE } from "@/lib/constants";

// ─── Static generation ────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return ALL_SERVICE_AREA_COMBINATIONS;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ areaSlug: string; serviceSlug: string }>;
}): Promise<Metadata> {
  const { areaSlug, serviceSlug } = await params;
  const area = getAreaBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!area || !service) return {};

  const { metaTitle, metaDescription } = getServiceAreaMeta(service, area);
  const canonical = `${SITE.url}/areas/${areaSlug}/${serviceSlug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...(service.keywords ?? []), ...(area.keywords ?? [])],
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
    },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ areaSlug: string; serviceSlug: string }>;
}) {
  const { areaSlug, serviceSlug } = await params;
  const area = getAreaBySlug(areaSlug);
  const service = getServiceBySlug(serviceSlug);

  if (!area || !service) notFound();

  const areaLocal = AREA_LOCAL_CONTENT[areaSlug];
  if (!areaLocal) notFound();

  const { h1, badge, heroSub } = getServiceAreaMeta(service, area);
  const faqs = getServiceAreaFAQs(serviceSlug, areaSlug);

  // Related: same service in nearby area slugs (up to 4)
  const nearbyAreaSlugs = area.nearbyAreas
    .map((name) => AREAS.find((a) => a.name === name)?.slug)
    .filter((s): s is string => Boolean(s))
    .slice(0, 4);

  const relatedServiceAreas = nearbyAreaSlugs.map((slug) => {
    const nearbyArea = AREAS.find((a) => a.slug === slug)!;
    return {
      areaSlug: slug,
      areaName: nearbyArea.name,
      serviceSlug,
      serviceTitle: service.shortTitle,
    };
  });

  // Related: other services in the same area (up to 4)
  const relatedServicesInArea = SERVICES.filter((s) => s.slug !== serviceSlug)
    .slice(0, 4)
    .map((s) => ({
      serviceSlug: s.slug,
      serviceTitle: s.shortTitle,
    }));

  const pageUrl = `${SITE.url}/areas/${areaSlug}/${serviceSlug}`;

  const schemas = [
    buildServiceSchema(`${service.shortTitle} ${area.name}`, service.description, area.name),
    buildBreadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Areas", url: `${SITE.url}/areas` },
      { name: area.name, url: `${SITE.url}/areas/${areaSlug}` },
      { name: service.shortTitle, url: pageUrl },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaMarkup schema={schemas} />
      <PageHero
        badge={badge}
        headline={h1}
        subheadline={heroSub}
        breadcrumbs={[
          { label: "Areas", href: "/areas" },
          { label: area.name, href: `/areas/${areaSlug}` },
          { label: service.shortTitle },
        ]}
        defaultService={service.shortTitle}
      />
      <ServiceAreaPageContent
        service={service}
        area={area}
        areaLocal={areaLocal}
        faqs={faqs}
        relatedServiceAreas={relatedServiceAreas}
        relatedServicesInArea={relatedServicesInArea}
      />
      <CTASection />
    </>
  );
}
