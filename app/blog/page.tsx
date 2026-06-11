import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Moving Tips & Guides | ${SITE.name} Blog`,
  description:
    "Expert moving tips, house clearance guides, and removal advice from Get Rapid Removals — Wolverhampton's trusted removal company.",
  alternates: { canonical: `${SITE.url}/blog` },
};

const POSTS = [
  {
    slug: "house-removal-cost-wolverhampton",
    title: "How Much Does a House Removal Cost in Wolverhampton? [2025 Price Guide]",
    excerpt:
      "Full breakdown of 2025 house removal prices in Wolverhampton — by property size, distance, and service type. Includes pricing tables, hidden fee warnings, and how to get a fair quote.",
    date: "2025-06-01",
    readTime: "8 min read",
    category: "House Removals",
  },
  {
    slug: "how-to-prepare-for-a-house-removal",
    title: "How to Prepare for a House Removal: The Complete Checklist",
    excerpt:
      "Week-by-week moving house checklist from our professional removal team — covering 8 weeks out, packing tips, moving day morning, and arriving at your new home.",
    date: "2025-06-01",
    readTime: "8 min read",
    category: "House Removals",
  },
  {
    slug: "house-clearance-wolverhampton-guide",
    title: "House Clearance in Wolverhampton: Costs, Process & Complete Guide",
    excerpt:
      "What house clearance costs in Wolverhampton in 2025, what's included, how waste is responsibly disposed of, and how to avoid rogue clearance companies.",
    date: "2025-06-01",
    readTime: "7 min read",
    category: "House Clearance",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog & Guides"
        headline="Moving Tips & Expert Guides"
        subheadline="Practical advice on removals, house clearance, packing, and everything in between — from Wolverhampton's most trusted removal company."
        breadcrumbs={[{ label: "Blog" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Placeholder image block */}
                <div className="h-40 bg-gradient-to-br from-slate-800 to-brand-dark flex items-center justify-center">
                  <span className="text-white/30 text-5xl font-black">
                    {post.category.charAt(0)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-brand-muted text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-brand-muted text-xs leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-blue font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
