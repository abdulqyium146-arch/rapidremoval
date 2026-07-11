import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, Star, Shield, CheckCircle, Award, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";

// Cluster 1: Moving Services (hub → spoke PageRank flow)
const MOVING_SERVICES = [
  { label: "House Removals", href: "/services/house-removals" },
  { label: "Long Distance Removals", href: "/services/long-distance-removals" },
  { label: "Man & Van", href: "/services/man-and-van" },
  { label: "Furniture Removals", href: "/services/furniture-removals" },
  { label: "Office Removals", href: "/services/office-removals" },
  { label: "Packing Services", href: "/services/packing-services" },
];

// Cluster 2: Clearance & Specialist Services
const CLEARANCE_SERVICES = [
  { label: "House Clearance", href: "/services/house-clearance" },
  { label: "End of Tenancy", href: "/services/end-of-tenancy-clearance" },
  { label: "Commercial Moves", href: "/services/commercial-moves" },
  { label: "Same Day Removals", href: "/services/same-day-removals" },
  { label: "Emergency Removals", href: "/services/emergency-removals" },
  { label: "Student Moves", href: "/services/student-moves" },
  { label: "Senior Moves", href: "/services/senior-moves" },
];

// Cluster 3: Geographic — Local (Wolverhampton core)
const LOCAL_AREAS = [
  { label: "Wolverhampton ★", href: "/areas/wolverhampton" },
  { label: "Whitmore Reans", href: "/areas/whitmore-reans" },
  { label: "Bilston", href: "/areas/bilston" },
  { label: "Wednesfield", href: "/areas/wednesfield" },
  { label: "Tettenhall", href: "/areas/tettenhall" },
  { label: "Codsall", href: "/areas/codsall" },
];

// Cluster 3: Geographic — Regional (West Midlands & beyond)
const REGIONAL_AREAS = [
  { label: "Dudley", href: "/areas/dudley" },
  { label: "Walsall", href: "/areas/walsall" },
  { label: "Cannock", href: "/areas/cannock" },
  { label: "West Bromwich", href: "/areas/west-bromwich" },
  { label: "Birmingham", href: "/areas/birmingham" },
  { label: "Stafford", href: "/areas/stafford" },
];

// Cluster 4: Resource hub
const RESOURCE_LINKS = [
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/quote" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "HTML Sitemap", href: "/sitemap-html" },
];

// Topical authority: specific guide content signals to Google/AI that we own these topics
const BLOG_POSTS = [
  { label: "House Removal Costs Wolverhampton", href: "/blog/house-removal-cost-wolverhampton" },
  { label: "How to Prepare for a House Removal", href: "/blog/how-to-prepare-for-a-house-removal" },
  { label: "House Clearance Guide", href: "/blog/house-clearance-wolverhampton-guide" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-bold text-white mb-4 text-xs uppercase tracking-widest">
      {children}
    </h3>
  );
}

function FooterSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-slate-300 text-xs uppercase tracking-wider mb-2 mt-5 first:mt-0">
      {children}
    </p>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-white text-sm transition-colors duration-150 hover:translate-x-0.5 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" aria-label="Site footer">
      {/* CTA bar */}
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

      {/* Main footer — 5-column topical map */}
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Column 1: Brand + Trust (spans 2 of 6) */}
          <div className="sm:col-span-2 lg:col-span-2">
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
              Wolverhampton&apos;s trusted local removals and clearance company. Professional house removals, house clearance &amp; man and van — fully insured, licensed waste carrier, 5.0★ Google rated. Est. {SITE.established}. 500+ moves completed across the West Midlands.
            </p>

            {/* Trust badges — E-E-A-T signals */}
            <div className="flex flex-wrap gap-2 mb-7">
              {[
                { icon: Star,         label: "5.0★ · 11 Reviews" },
                { icon: Shield,       label: "Fully Insured" },
                { icon: CheckCircle,  label: "Free Quotes" },
                { icon: Award,        label: "Licensed Waste Carrier" },
                { icon: Truck,        label: "Est. 2019" },
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

            {/* Contact details */}
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <span className="text-sm">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
                  <span className="text-sm break-all">{SITE.email}</span>
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

            {/* Social & verification links */}
            <div className="flex flex-wrap gap-2 mt-5">
              <a
                href="https://www.facebook.com/GetRapidRemovalsltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors"
                aria-label="Get Rapid Removals on Facebook"
              >
                {/* Facebook wordmark F */}
                <svg className="w-3.5 h-3.5 fill-current text-brand-sky" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/15457292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors"
                aria-label="Get Rapid Removals on Companies House"
              >
                <ExternalLink className="w-3 h-3 text-brand-sky" />
                Companies House
              </a>
              <a
                href="https://jmcremovals.co.uk/partners"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors"
                aria-label="Trusted by JMC Removals — partner network"
              >
                <ExternalLink className="w-3 h-3 text-brand-sky" />
                Trusted by JMC Removals
              </a>
              <a
                href="https://manandvanmanchester.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors"
                aria-label="Trusted by Man and Van Manchester — partner network"
              >
                <ExternalLink className="w-3 h-3 text-brand-sky" />
                Trusted by Man &amp; Van Manchester
              </a>
            </div>
          </div>

          {/* Column 2: Moving Services cluster */}
          <div>
            <FooterHeading>Moving Services</FooterHeading>
            <ul className="space-y-2.5">
              {MOVING_SERVICES.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="text-brand-sky hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clearance & Specialist cluster */}
          <div>
            <FooterHeading>Clearance & Specialist</FooterHeading>
            <ul className="space-y-2.5">
              {CLEARANCE_SERVICES.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas — local + regional sub-clusters */}
          <div>
            <FooterHeading>Service Areas</FooterHeading>

            <FooterSubHeading>Wolverhampton &amp; Local</FooterSubHeading>
            <ul className="space-y-2 mb-0">
              {LOCAL_AREAS.map((area) => (
                <FooterLink key={area.href} href={area.href}>
                  {area.label}
                </FooterLink>
              ))}
            </ul>

            <FooterSubHeading>West Midlands &amp; Beyond</FooterSubHeading>
            <ul className="space-y-2">
              {REGIONAL_AREAS.map((area) => (
                <FooterLink key={area.href} href={area.href}>
                  {area.label}
                </FooterLink>
              ))}
              <li className="pt-1">
                <Link
                  href="/areas"
                  className="text-brand-sky hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Resources & Legal — topical authority hub */}
          <div>
            <FooterHeading>Moving Guides</FooterHeading>
            <ul className="space-y-2.5 mb-2">
              {BLOG_POSTS.map((post) => (
                <FooterLink key={post.href} href={post.href}>
                  {post.label}
                </FooterLink>
              ))}
              <li className="pt-0.5">
                <Link
                  href="/blog"
                  className="text-brand-sky hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  All Guides →
                </Link>
              </li>
            </ul>

            <FooterHeading>Info &amp; Help</FooterHeading>
            <ul className="space-y-2.5 mb-6">
              {RESOURCE_LINKS.filter((l) => l.href !== "/blog").map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>

            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — entity/coverage signal */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <p>© {currentYear} {SITE.legalName}. All rights reserved.</p>
              <span className="hidden sm:inline">·</span>
              <a
                href={SITE.social.companiesHouse}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                Registered in England &amp; Wales · Co. No. {SITE.companyNumber}
              </a>
            </div>
            <p className="text-center">
              Serving{" "}
              <Link href="/areas/wolverhampton" className="hover:text-slate-300 transition-colors">Wolverhampton</Link>
              {" · "}
              <Link href="/areas/whitmore-reans" className="hover:text-slate-300 transition-colors">Whitmore Reans</Link>
              {" · "}
              <Link href="/areas/bilston" className="hover:text-slate-300 transition-colors">Bilston</Link>
              {" · "}
              <Link href="/areas/wednesfield" className="hover:text-slate-300 transition-colors">Wednesfield</Link>
              {" · "}
              <Link href="/areas/tettenhall" className="hover:text-slate-300 transition-colors">Tettenhall</Link>
              {" · "}
              <Link href="/areas/codsall" className="hover:text-slate-300 transition-colors">Codsall</Link>
              {" · "}
              <Link href="/areas/dudley" className="hover:text-slate-300 transition-colors">Dudley</Link>
              {" · "}
              <Link href="/areas/walsall" className="hover:text-slate-300 transition-colors">Walsall</Link>
              {" · "}
              <Link href="/areas/cannock" className="hover:text-slate-300 transition-colors">Cannock</Link>
              {" · "}
              <Link href="/areas/west-bromwich" className="hover:text-slate-300 transition-colors">West Bromwich</Link>
              {" · "}
              <Link href="/areas/birmingham" className="hover:text-slate-300 transition-colors">Birmingham</Link>
              {" · "}
              <Link href="/areas/stafford" className="hover:text-slate-300 transition-colors">Stafford</Link>
              {" since "}{SITE.established}
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
              <Link href="/sitemap-html" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
