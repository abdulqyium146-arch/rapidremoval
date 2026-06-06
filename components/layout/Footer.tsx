import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, Star, Shield, CheckCircle } from "lucide-react";
import { SITE, SERVICE_AREAS } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "House Removals", href: "/services/house-removals" },
  { label: "House Clearance", href: "/services/house-clearance" },
  { label: "Man & Van", href: "/services/man-and-van" },
  { label: "Office Removals", href: "/services/office-removals" },
  { label: "Furniture Removals", href: "/services/furniture-removals" },
  { label: "Packing Services", href: "/services/packing-services" },
  { label: "Student Moves", href: "/services/student-moves" },
  { label: "Same Day Removals", href: "/services/same-day-removals" },
  { label: "Emergency Removals", href: "/services/emergency-removals" },
  { label: "End of Tenancy", href: "/services/end-of-tenancy-clearance" },
  { label: "Commercial Moves", href: "/services/commercial-moves" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
  { label: "Service Areas", href: "/areas" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Sitemap", href: "/sitemap-html" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" aria-label="Site footer">
      {/* Top CTA bar */}
      <div className="bg-brand-blue">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-xl text-white">Ready to Move?</p>
              <p className="text-blue-100 text-sm mt-0.5">
                Free quotes · Same-day available · Fully insured
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 bg-white text-brand-blue font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {SITE.phoneDisplay}
              </a>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm border border-white/20"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center shadow-md">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <span className="font-bold text-base text-white leading-tight">Get Rapid</span>
                <span className="font-bold text-base text-brand-sky leading-tight">Removals</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Wolverhampton&apos;s trusted local removals and clearance company. Professional,
              fully insured, and always on time.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Star, label: "5.0★ Rated" },
                { icon: Shield, label: "Fully Insured" },
                { icon: CheckCircle, label: "Free Quotes" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white"
                >
                  <Icon className="w-3 h-3 text-brand-sky" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/areas/wolverhampton"
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-150 font-medium"
                >
                  Wolverhampton ★
                </Link>
              </li>
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-brand-sky hover:text-blue-300 text-sm transition-colors duration-150 font-medium"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Quick links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <span className="text-sm group-hover:text-white">
                    {SITE.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <span className="text-sm break-all group-hover:text-white">{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <span className="text-sm">
                    {SITE.address.street}, {SITE.address.city},{" "}
                    {SITE.address.county}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <Clock className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <div className="text-sm">
                    <p>Mon–Sat: 07:00–20:00</p>
                    <p>Sun: 08:00–18:00</p>
                  </div>
                </div>
              </li>
            </ul>

            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <span>|</span>
            <span>
              Serving Wolverhampton & West Midlands since {SITE.established}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
