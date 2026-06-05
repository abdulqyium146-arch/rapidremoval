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
    slug: "how-to-prepare-for-a-house-removal",
    title: "How to Prepare for a House Removal: The Ultimate Checklist",
    excerpt:
      "Moving house is one of life's biggest events. Our comprehensive checklist covers everything from 8 weeks before moving day to the day itself.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "House Removals",
  },
  {
    slug: "house-clearance-wolverhampton-guide",
    title: "House Clearance in Wolverhampton: What You Need to Know",
    excerpt:
      "Everything you need to know about arranging a house clearance in Wolverhampton — costs, what's included, and how to choose the right company.",
    date: "2024-10-22",
    readTime: "6 min read",
    category: "House Clearance",
  },
  {
    slug: "man-and-van-vs-removal-company",
    title: "Man and Van vs Removal Company: Which Do You Need?",
    excerpt:
      "Not sure whether to book a man and van or a full removal company? We break down the key differences, costs, and which is right for your move.",
    date: "2024-09-10",
    readTime: "5 min read",
    category: "Moving Advice",
  },
  {
    slug: "packing-tips-for-moving-home",
    title: "10 Expert Packing Tips for Moving Home",
    excerpt:
      "Avoid broken items and moving day chaos with our professional packing tips — used by our experienced packing team on every job.",
    date: "2024-08-05",
    readTime: "7 min read",
    category: "Packing Tips",
  },
  {
    slug: "end-of-tenancy-clearance-guide",
    title: "End of Tenancy Clearance: A Complete Guide for Landlords",
    excerpt:
      "A practical guide for landlords and letting agents on how to arrange a fast, thorough end-of-tenancy clearance in the West Midlands.",
    date: "2024-07-18",
    readTime: "6 min read",
    category: "House Clearance",
  },
  {
    slug: "office-relocation-checklist",
    title: "Office Relocation Checklist: Moving Your Business Without Downtime",
    excerpt:
      "Our office relocation checklist helps Wolverhampton businesses plan their commercial move and minimise disruption from start to finish.",
    date: "2024-06-30",
    readTime: "9 min read",
    category: "Office Removals",
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
