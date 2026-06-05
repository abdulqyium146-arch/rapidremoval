import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-pattern flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-black text-white/10 mb-4">404</div>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-400 text-lg mb-8">
          Sorry, we couldn&apos;t find that page. Try one of the links below, or call us
          directly for any removal enquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="white">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center gap-2 text-white font-semibold border border-white/30 rounded-xl px-6 py-3 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {SITE.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {[
            { label: "House Removals", href: "/services/house-removals" },
            { label: "House Clearance", href: "/services/house-clearance" },
            { label: "Man & Van", href: "/services/man-and-van" },
            { label: "Get a Quote", href: "/quote" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-brand-sky hover:text-white transition-colors"
            >
              {link.label} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
