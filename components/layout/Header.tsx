"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
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
    ],
  },
  {
    label: "Areas",
    href: "/areas",
    children: [
      { label: "Wolverhampton", href: "/areas/wolverhampton" },
      { label: "Bilston", href: "/areas/bilston" },
      { label: "Wednesfield", href: "/areas/wednesfield" },
      { label: "Tettenhall", href: "/areas/tettenhall" },
      { label: "Dudley", href: "/areas/dudley" },
      { label: "Walsall", href: "/areas/walsall" },
      { label: "Cannock", href: "/areas/cannock" },
      { label: "Birmingham", href: "/areas/birmingham" },
      { label: "West Bromwich", href: "/areas/west-bromwich" },
      { label: "Stafford", href: "/areas/stafford" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 bg-brand-blue rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow-sm transition-shadow duration-200">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span
                className={cn(
                  "font-bold text-base leading-tight transition-colors duration-300",
                  scrolled ? "text-brand-dark" : "text-white"
                )}
              >
                Get Rapid
              </span>
              <span
                className={cn(
                  "font-bold text-base leading-tight transition-colors duration-300",
                  scrolled ? "text-brand-blue" : "text-brand-sky"
                )}
              >
                Removals
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      scrolled
                        ? "text-brand-dark hover:text-brand-blue hover:bg-brand-neutral"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-premium border border-slate-100 py-2 min-w-[220px] z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-brand-neutral hover:text-brand-blue",
                              pathname === child.href
                                ? "text-brand-blue font-semibold bg-blue-50"
                                : "text-brand-dark"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                      ? scrolled
                        ? "text-brand-blue bg-blue-50"
                        : "text-white bg-white/15"
                      : scrolled
                      ? "text-brand-dark hover:text-brand-blue hover:bg-brand-neutral"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`tel:${SITE.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors duration-200",
                scrolled ? "text-brand-dark hover:text-brand-blue" : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </Link>
            <Button asChild size="sm">
              <Link href="/quote">Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-brand-dark hover:bg-brand-neutral"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Call CTA */}
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-3 bg-brand-blue text-white rounded-xl px-4 py-3 mb-3 font-semibold"
              >
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                Call {SITE.phoneDisplay}
              </a>

              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-brand-dark font-semibold hover:bg-brand-neutral transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-brand-muted transition-transform duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-0.5 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 rounded-lg text-sm transition-colors",
                                pathname === child.href
                                  ? "text-brand-blue font-semibold bg-blue-50"
                                  : "text-brand-muted hover:text-brand-dark hover:bg-brand-neutral"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-brand-blue font-semibold bg-blue-50"
                        : "text-brand-dark hover:bg-brand-neutral"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="pt-3 border-t border-slate-100">
                <Button asChild className="w-full" size="lg">
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
