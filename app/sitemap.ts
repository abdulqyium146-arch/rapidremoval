import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { AREAS } from "@/lib/areas-data";
import { ALL_SERVICE_AREA_COMBINATIONS } from "@/lib/service-area-data";

const HIGH_VALUE_SERVICES = new Set([
  "house-removals",
  "house-clearance",
  "man-and-van",
]);

const MID_VALUE_SERVICES = new Set([
  "office-removals",
  "furniture-removals",
  "same-day-removals",
  "emergency-removals",
  "long-distance-removals",
  "commercial-moves",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE.url}/services`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/areas`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/quote`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/faq`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: new Date("2026-05-01"),
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "weekly",
      priority: 0.65,
    },
    {
      url: `${SITE.url}/sitemap-html`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/privacy-policy`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: new Date("2025-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: new Date("2026-06-11"),
    changeFrequency: "monthly" as const,
    priority: HIGH_VALUE_SERVICES.has(service.slug)
      ? 0.95
      : MID_VALUE_SERVICES.has(service.slug)
        ? 0.85
        : 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = AREAS.map((area) => ({
    url: `${SITE.url}/areas/${area.slug}`,
    lastModified: new Date("2026-06-11"),
    changeFrequency: "monthly" as const,
    priority:
      area.slug === "wolverhampton"
        ? 0.9
        : area.slug === "whitmore-reans"
          ? 0.85
          : 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = [
    { slug: "house-removal-cost-wolverhampton", lastModified: "2025-07-01" },
    { slug: "how-to-prepare-for-a-house-removal", lastModified: "2025-07-01" },
    { slug: "house-clearance-wolverhampton-guide", lastModified: "2026-06-11" },
  ].map(({ slug, lastModified }) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const serviceAreaPages: MetadataRoute.Sitemap = ALL_SERVICE_AREA_COMBINATIONS.map(
    ({ areaSlug, serviceSlug }) => ({
      url: `${SITE.url}/areas/${areaSlug}/${serviceSlug}`,
      lastModified: new Date("2026-07-09"),
      changeFrequency: "monthly" as const,
      priority:
        areaSlug === "wolverhampton" && serviceSlug === "house-removals"
          ? 0.92
          : areaSlug === "wolverhampton"
            ? 0.88
            : 0.8,
    })
  );

  return [...staticPages, ...servicePages, ...areaPages, ...blogPosts, ...serviceAreaPages];
}
