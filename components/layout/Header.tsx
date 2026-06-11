"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Menu, X, ChevronDown, Truck, ArrowRight, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── TOPICAL MAP ──────────────────────────────────────────────────────────────
// Korey holistic SEO: navigation = entity signals + topical cluster architecture
// Three clusters: Service Cluster, Geographic Cluster, Resource Hub

const SERVICE_GROUPS = [
  {
    heading: "Moving Services",
    links: [
      { label: "House Removals",     href: "/services/house-removals",           desc: "Local & long-distance" },
      { label: "Man & Van",          href: "/services/man-and-van",              desc: "Flexible hourly hire" },
      { label: "Furniture Removals", href: "/services/furniture-removals",       desc: "Single items & full loads" },
      { label: "Office Removals",    href: "/services/office-removals",          desc: "Commercial relocations" },
      { label: "Packing Services",   href: "/services/packing-services",         desc: "Full & partial packing" },
    ],
  },
  {
    heading: "Clearance Services",
    links: [
      { label: "House Clearance",    href: "/services/house-clearance",          desc: "Full property clearance" },
      { label: "End of Tenancy",     href: "/services/end-of-tenancy-clearance", desc: "Landlords & tenants" },
      { label: "Commercial Moves",   href: "/services/commercial-moves",         desc: "Business relocations" },
    ],
  },
  {
    heading: "Urgent & Specialist",
    links: [
      { label: "Same Day Removals",  href: "/services/same-day-removals",        desc: "Today's availability" },
      { label: "Emergency Removals", href: "/services/emergency-removals",       desc: "Rapid response, 7 days" },
      { label: "Student Moves",      href: "/services/student-moves",            desc: "Affordable student moves" },
    ],
  },
];

const LOCAL_AREAS = [
  { label: "Wolverhampton",  href: "/areas/wolverhampton",  primary: true },
  { label: "Whitmore Reans", href: "/areas/whitmore-reans" },
  { label: "Bilston",        href: "/areas/bilston" },
  { label: "Wednesfield",    href: "/areas/wednesfield" },
  { label: "Tettenhall",     href: "/areas/tettenhall" },
  { label: "Codsall",        href: "/areas/codsall" },
];

const REGIONAL_AREAS = [
  { label: "Dudley",         href: "/areas/dudley" },
  { label: "Walsall",        href: "/areas/walsall" },
  { label: "Cannock",        href: "/areas/cannock" },
  { label: "West Bromwich",  href: "/areas/west-bromwich" },
  { label: "Birmingham",     href: "/areas/birmingham" },
  { label: "Stafford",       href: "/areas/stafford" },
];

const RESOURCE_LINKS = [
  { label: "Blog & Moving Guides",      href: "/blog",    desc: "Costs, tips & expert advice" },
  { label: "FAQs — 74 Answered",        href: "/faq",     desc: "Prices, areas, process & trust" },
  { label: "About Get Rapid Removals",  href: "/about",   desc: "Our story, team & values" },
  { label: "Contact Us",                href: "/contact", desc: "Call, email or message us" },
];

type MegaMenu = "services" | "areas" | "guides" | null;

// ─── HEADER ───────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [desktopOpen,    setDesktopOpen]    = useState<MegaMenu>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLink = (active: boolean) =>
    cn(
      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
      active
        ? scrolled ? "text-brand-blue bg-blue-50" : "text-white bg-white/15"
        : scrolled
          ? "text-brand-dark hover:text-brand-blue hover:bg-brand-neutral"
          : "text-white/90 hover:text-white hover:bg-white/10"
    );

  const megaPanel = "absolute top-full mt-1.5 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-slate-100 z-50 overflow-hidden";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo / Brand Entity ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Get Rapid Removals — Home">
            <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className={cn("font-bold text-base leading-tight transition-colors duration-300", scrolled ? "text-brand-dark" : "text-white")}>
                Get Rapid
              </span>
              <span className={cn("font-bold text-base leading-tight transition-colors duration-300", scrolled ? "text-brand-blue" : "text-brand-sky")}>
                Removals
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setDesktopOpen(null)}
            aria-label="Main navigation"
          >
            {/* Home */}
            <Link href="/" className={navLink(pathname === "/")}>Home</Link>

            {/* ── SERVICES mega menu ── */}
            <div className="relative" onMouseEnter={() => setDesktopOpen("services")}>
              <Link href="/services" className={navLink(pathname.startsWith("/services"))}>
                Services
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", desktopOpen === "services" ? "rotate-180" : "")} />
              </Link>

              <AnimatePresence>
                {desktopOpen === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.14 }}
                    className={cn(megaPanel, "left-1/2 -translate-x-1/2 w-[580px]")}
                  >
                    {/* 3-column service cluster grid */}
                    <div className="grid grid-cols-3 divide-x divide-slate-100">
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.heading} className="p-4">
                          <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-3 pb-2 border-b border-slate-100">
                            {group.heading}
                          </p>
                          <ul className="space-y-0.5">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className={cn(
                                    "group block px-2 py-2 rounded-lg hover:bg-brand-neutral transition-colors",
                                    pathname === link.href ? "bg-blue-50" : ""
                                  )}
                                >
                                  <span className={cn(
                                    "block text-[11px] font-semibold transition-colors",
                                    pathname === link.href ? "text-brand-blue" : "text-brand-dark group-hover:text-brand-blue"
                                  )}>
                                    {link.label}
                                  </span>
                                  <span className="block text-[10px] text-brand-muted leading-snug">{link.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Mega footer bar */}
                    <div className="flex items-center justify-between px-5 py-2.5 bg-brand-neutral border-t border-slate-100">
                      <Link href="/services" className="text-[11px] text-brand-muted hover:text-brand-blue font-semibold flex items-center gap-1 transition-colors">
                        All services <ArrowRight className="w-3 h-3" />
                      </Link>
                      <Link href="/quote" className="text-[11px] bg-brand-blue text-white px-3.5 py-1.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-1">
                        Get Free Quote <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── AREAS mega menu ── */}
            <div className="relative" onMouseEnter={() => setDesktopOpen("areas")}>
              <Link href="/areas" className={navLink(pathname.startsWith("/areas"))}>
                Areas
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", desktopOpen === "areas" ? "rotate-180" : "")} />
              </Link>

              <AnimatePresence>
                {desktopOpen === "areas" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.14 }}
                    className={cn(megaPanel, "left-1/2 -translate-x-1/2 w-[400px]")}
                  >
                    <div className="grid grid-cols-2 divide-x divide-slate-100 p-4">
                      {/* Local cluster */}
                      <div className="pr-4">
                        <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-3 pb-2 border-b border-slate-100">
                          Wolverhampton &amp; Local
                        </p>
                        <ul className="space-y-0.5">
                          {LOCAL_AREAS.map((area) => (
                            <li key={area.href}>
                              <Link
                                href={area.href}
                                className={cn(
                                  "block px-2 py-1.5 rounded-lg text-[11px] transition-colors hover:bg-brand-neutral hover:text-brand-blue",
                                  area.primary ? "font-bold text-brand-dark" : "text-brand-dark",
                                  pathname === area.href ? "text-brand-blue bg-blue-50 font-semibold" : ""
                                )}
                              >
                                {area.primary ? `${area.label} ★` : area.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Regional cluster */}
                      <div className="pl-4">
                        <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest mb-3 pb-2 border-b border-slate-100">
                          West Midlands &amp; Beyond
                        </p>
                        <ul className="space-y-0.5">
                          {REGIONAL_AREAS.map((area) => (
                            <li key={area.href}>
                              <Link
                                href={area.href}
                                className={cn(
                                  "block px-2 py-1.5 rounded-lg text-[11px] text-brand-dark transition-colors hover:bg-brand-neutral hover:text-brand-blue",
                                  pathname === area.href ? "text-brand-blue bg-blue-50 font-semibold" : ""
                                )}
                              >
                                {area.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-2.5 bg-brand-neutral border-t border-slate-100">
                      <Link href="/areas" className="text-[11px] text-brand-muted hover:text-brand-blue font-semibold flex items-center gap-1 transition-colors">
                        All areas <ArrowRight className="w-3 h-3" />
                      </Link>
                      <span className="text-[10px] text-brand-muted">WV1–WV14 &amp; West Midlands</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── GUIDES / Resource Hub ── */}
            <div className="relative" onMouseEnter={() => setDesktopOpen("guides")}>
              <Link
                href="/blog"
                className={navLink(pathname.startsWith("/blog") || pathname === "/faq")}
              >
                Guides
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", desktopOpen === "guides" ? "rotate-180" : "")} />
              </Link>

              <AnimatePresence>
                {desktopOpen === "guides" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.14 }}
                    className={cn(megaPanel, "left-1/2 -translate-x-1/2 w-[280px] py-2")}
                  >
                    {RESOURCE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "group block px-4 py-2.5 hover:bg-brand-neutral transition-colors",
                          pathname === link.href ? "bg-blue-50" : ""
                        )}
                      >
                        <span className={cn(
                          "block text-sm font-semibold transition-colors",
                          pathname === link.href ? "text-brand-blue" : "text-brand-dark group-hover:text-brand-blue"
                        )}>
                          {link.label}
                        </span>
                        <span className="block text-[10px] text-brand-muted">{link.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link href="/about" className={navLink(pathname === "/about")}>About</Link>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SITE.phone}`}
              className={cn(
                "flex items-center gap-1.5 text-sm font-bold transition-colors duration-200",
                scrolled ? "text-brand-dark hover:text-brand-blue" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </a>
            <Button asChild size="sm" className="font-bold">
              <Link href="/quote">Free Quote</Link>
            </Button>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled ? "text-brand-dark hover:bg-brand-neutral" : "text-white hover:bg-white/10"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 max-h-[82vh] overflow-y-auto space-y-1">

              {/* Call CTA */}
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 bg-brand-blue text-white rounded-xl px-4 py-3 mb-1 font-bold"
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call {SITE.phoneDisplay}</span>
              </a>

              {/* Emergency link */}
              <Link
                href="/services/emergency-removals"
                className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-2.5 text-sm font-semibold mb-1"
              >
                <Zap className="w-4 h-4 shrink-0" />
                Emergency Removal — Rapid Response
              </Link>

              {/* Home */}
              <Link href="/" className={cn("block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                pathname === "/" ? "text-brand-blue bg-blue-50 font-semibold" : "text-brand-dark hover:bg-brand-neutral")}>
                Home
              </Link>

              {/* Services accordion */}
              {[
                {
                  id: "services",
                  label: "Services",
                  content: (
                    <>
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.heading} className="mb-3">
                          <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest px-3 pb-1">{group.heading}</p>
                          {group.links.map((link) => (
                            <Link key={link.href} href={link.href}
                              className={cn("block px-3 py-2 rounded-lg text-sm transition-colors",
                                pathname === link.href ? "text-brand-blue font-semibold bg-blue-50" : "text-brand-muted hover:text-brand-dark hover:bg-brand-neutral")}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link href="/services" className="block px-3 py-2 text-sm text-brand-blue font-bold">
                        All services →
                      </Link>
                    </>
                  ),
                },
                {
                  id: "areas",
                  label: "Areas",
                  content: (
                    <>
                      <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest px-3 pb-1">Wolverhampton &amp; Local</p>
                      {LOCAL_AREAS.map((area) => (
                        <Link key={area.href} href={area.href}
                          className={cn("block px-3 py-2 rounded-lg text-sm transition-colors",
                            area.primary ? "font-semibold" : "",
                            pathname === area.href ? "text-brand-blue bg-blue-50" : "text-brand-muted hover:text-brand-dark hover:bg-brand-neutral")}
                        >
                          {area.primary ? `${area.label} ★` : area.label}
                        </Link>
                      ))}
                      <p className="text-[9px] font-bold text-brand-muted uppercase tracking-widest px-3 pb-1 mt-3">West Midlands &amp; Beyond</p>
                      {REGIONAL_AREAS.map((area) => (
                        <Link key={area.href} href={area.href}
                          className={cn("block px-3 py-2 rounded-lg text-sm transition-colors",
                            pathname === area.href ? "text-brand-blue bg-blue-50" : "text-brand-muted hover:text-brand-dark hover:bg-brand-neutral")}
                        >
                          {area.label}
                        </Link>
                      ))}
                      <Link href="/areas" className="block px-3 py-2 text-sm text-brand-blue font-bold mt-1">
                        All areas →
                      </Link>
                    </>
                  ),
                },
                {
                  id: "guides",
                  label: "Guides & Info",
                  content: (
                    <>
                      {RESOURCE_LINKS.map((link) => (
                        <Link key={link.href} href={link.href}
                          className={cn("block px-3 py-2 rounded-lg text-sm transition-colors",
                            pathname === link.href ? "text-brand-blue font-semibold bg-blue-50" : "text-brand-muted hover:text-brand-dark hover:bg-brand-neutral")}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </>
                  ),
                },
              ].map(({ id, label, content }) => (
                <div key={id}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === id ? null : id)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-brand-dark font-semibold hover:bg-brand-neutral transition-colors text-sm"
                  >
                    {label}
                    <ChevronDown className={cn("w-4 h-4 text-brand-muted transition-transform duration-200",
                      mobileExpanded === id ? "rotate-180" : "")} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 overflow-hidden"
                      >
                        {content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/about" className={cn("block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                pathname === "/about" ? "text-brand-blue bg-blue-50 font-semibold" : "text-brand-dark hover:bg-brand-neutral")}>
                About Us
              </Link>

              <Link href="/contact" className={cn("block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                pathname === "/contact" ? "text-brand-blue bg-blue-50 font-semibold" : "text-brand-dark hover:bg-brand-neutral")}>
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-100">
                <Button asChild className="w-full font-bold" size="lg">
                  <Link href="/quote">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
