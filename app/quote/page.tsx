"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Loader2, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { SITE } from "@/lib/constants";

const SERVICES = [
  "House Removals", "House Clearance", "Man & Van", "Office Removals",
  "Furniture Removals", "Packing Services", "Student Move", "Same Day Removal",
  "Emergency Removal", "End of Tenancy Clearance", "Commercial Move", "Other / Not Sure",
];

type FormState = {
  name: string; phone: string; email: string; service: string;
  moveFrom: string; moveTo: string; date: string; propertySize: string; message: string;
};

const INITIAL: FormState = {
  name: "", phone: "", email: "", service: "",
  moveFrom: "", moveTo: "", date: "", propertySize: "", message: "",
};

const TRUST = [
  { icon: Star, label: "5.0★ Google Rated", sub: "100% 5-star reviews" },
  { icon: Shield, label: "Fully Insured", sub: "Complete peace of mind" },
  { icon: Clock, label: "Fast Response", sub: "Within 30 minutes" },
];

export default function QuotePage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-brand-neutral">
      <div className="bg-hero-pattern pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <BreadcrumbNav items={[{ label: "Get a Quote" }]} />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Get Your Free Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Fast, accurate, no-obligation quotes for all removals and clearances in
            Wolverhampton and the West Midlands.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-card border border-slate-100 p-10 text-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">Quote Request Received!</h2>
                <p className="text-brand-muted mb-6 max-w-sm mx-auto">
                  Thank you, {form.name}! We&apos;ll review your request and get back to you within
                  30 minutes during business hours.
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-blue-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {SITE.phoneDisplay}
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-brand-dark mb-1">Quote Request Form</h2>
                <p className="text-brand-muted text-sm mb-6">
                  The more detail you provide, the more accurate your quote will be.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="q-name">Full Name *</Label>
                      <Input id="q-name" placeholder="John Smith" value={form.name} onChange={set("name")} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="q-phone">Phone Number *</Label>
                      <Input id="q-phone" type="tel" placeholder="07xxx xxxxxx" value={form.phone} onChange={set("phone")} required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-email">Email Address</Label>
                    <Input id="q-email" type="email" placeholder="john@email.com" value={form.email} onChange={set("email")} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-service">Service Required *</Label>
                    <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))} required>
                      <SelectTrigger id="q-service"><SelectValue placeholder="Select a service…" /></SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="q-from">Moving From *</Label>
                      <Input id="q-from" placeholder="Postcode or address" value={form.moveFrom} onChange={set("moveFrom")} required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="q-to">Moving To</Label>
                      <Input id="q-to" placeholder="Postcode or address" value={form.moveTo} onChange={set("moveTo")} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="q-date">Preferred Date</Label>
                      <Input id="q-date" type="date" value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="q-size">Property Size</Label>
                      <Select value={form.propertySize} onValueChange={(v) => setForm((f) => ({ ...f, propertySize: v }))}>
                        <SelectTrigger id="q-size"><SelectValue placeholder="Select…" /></SelectTrigger>
                        <SelectContent>
                          {["Studio / Bedsit", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms", "Office / Commercial", "Single Item", "Not Sure"].map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="q-message">Additional Details</Label>
                    <Textarea
                      id="q-message"
                      placeholder="Any stairs, difficult access, fragile items, parking restrictions, storage needed…"
                      value={form.message}
                      onChange={set("message")}
                      className="min-h-[100px]"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                      Something went wrong. Please call us on {SITE.phoneDisplay}.
                    </p>
                  )}
                  <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
                    {status === "submitting" ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending…</> : "Submit Quote Request"}
                  </Button>
                  <p className="text-xs text-center text-brand-muted">
                    Free · No obligation · Response within 30 minutes
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Call card */}
            <div className="bg-brand-dark text-white rounded-2xl p-5">
              <p className="font-bold text-lg mb-1">Prefer to Call?</p>
              <p className="text-slate-400 text-sm mb-4">
                For urgent or same-day moves, calling is the fastest way to get a quote.
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-3 px-5 rounded-xl hover:bg-brand-blue-light transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {SITE.phoneDisplay}
              </a>
            </div>

            {/* Trust signals */}
            {TRUST.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brand-blue" />
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm">{label}</p>
                  <p className="text-brand-muted text-xs">{sub}</p>
                </div>
              </div>
            ))}

            {/* Promise */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="font-bold text-brand-dark text-sm mb-2">Our Promise</p>
              <ul className="space-y-1.5">
                {[
                  "No hidden fees — ever",
                  "Your quote is your final price",
                  "Fully insured on every move",
                  "Same day often available",
                  "Professional, uniformed team",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-brand-dark">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
