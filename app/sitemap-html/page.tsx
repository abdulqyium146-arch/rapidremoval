import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SITE, PRIMARY_AREAS, SERVICE_AREAS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Sitemap | ${SITE.name}`,
  description: `Complete sitemap for ${SITE.name}. Find all service pages, area pages, and information for Wolverhampton removals and clearances.`,
  alternates: {
    canonical: `${SITE.url}/sitemap-html`,
  },
};

const SERVICES = [
  { label: "House Removals Wolverhampton", href: "/services/house-removals" },
  { label: "House Clearance Wolverhampton", href: "/services/house-clearance" },
  { label: "Man & Van Wolverhampton", href: "/services/man-and-van" },
  { label: "Office Removals Wolverhampton", href: "/services/office-removals" },
  { label: "Furniture Removals Wolverhampton", href: "/services/furniture-removals" },
  { label: "Packing Services Wolverhampton", href: "/services/packing-services" },
  { label: "Student Moves Wolverhampton", href: "/services/student-moves" },
  { label: "Same Day Removals Wolverhampton", href: "/services/same-day-removals" },
  { label: "Emergency Removals Wolverhampton", href: "/services/emergency-removals" },
  { label: "End of Tenancy Clearance Wolverhampton", href: "/services/end-of-tenancy-clearance" },
  { label: "Commercial Moves Wolverhampton", href: "/services/commercial-moves" },
];

const MAIN_PAGES = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/areas" },
  { label: "Blog & Moving Guides", href: "/blog" },
  { label: "Get a Free Quote", href: "/quote" },
  { label: "Contact Us", href: "/contact" },
];

const ALL_AREAS = [
  ...PRIMARY_AREAS.map((a) => ({
    label: `Removals in ${a.name}`,
    href: `/areas/${a.slug}`,
    postcode: a.postcode,
  })),
  ...SERVICE_AREAS.map((a) => ({
    label: `Removals in ${a.name}`,
    href: `/areas/${a.slug}`,
    postcode: a.postcode,
  })),
];

function SitemapSection({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; postcode?: string }[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-slate-200">
        {title}
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-brand-blue hover:text-brand-dark transition-colors group text-sm"
            >
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-brand-muted group-hover:text-brand-blue" />
              <span>{link.label}</span>
              {link.postcode && (
                <span className="text-brand-muted text-xs">({link.postcode})</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapHtmlPage() {
  return (
    <>
      <PageHero
        badge="Sitemap"
        headline="Website Sitemap"
        subheadline="A complete map of all pages on the Get Rapid Removals website."
        breadcrumbs={[{ label: "Sitemap" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <SitemapSection title="Main Pages" links={MAIN_PAGES} />
            <SitemapSection title="Our Services" links={SERVICES} />
            <SitemapSection title="Service Areas" links={ALL_AREAS} />
          </div>

          <div className="mt-12 bg-brand-neutral rounded-2xl p-6 border border-slate-100 text-sm text-brand-muted">
            <p>
              <strong className="text-brand-dark">XML Sitemap:</strong>{" "}
              <a
                href="/sitemap.xml"
                className="text-brand-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.url}/sitemap.xml
              </a>{" "}
              — for search engine crawlers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
