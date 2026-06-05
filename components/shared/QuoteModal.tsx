"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Phone, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICES = [
  "House Removals",
  "House Clearance",
  "Man & Van",
  "Office Removals",
  "Furniture Removals",
  "Packing Services",
  "Student Move",
  "Same Day Removal",
  "Emergency Removal",
  "End of Tenancy Clearance",
  "Commercial Move",
  "Other / Not Sure",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  moveFrom: string;
  moveTo: string;
  date: string;
  message: string;
};

const INITIAL: FormState = {
  name: "", phone: "", email: "", service: "",
  moveFrom: "", moveTo: "", date: "", message: "",
};

export function QuoteModal({ open, onClose, defaultService }: QuoteModalProps) {
  const [form, setForm] = useState<FormState>({ ...INITIAL, service: defaultService ?? "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

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

  const handleClose = () => {
    onClose();
    setTimeout(() => { setForm(INITIAL); setStatus("idle"); }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="sm:max-w-lg">
        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Quote Request Sent!</h3>
            <p className="text-brand-muted text-sm mb-6">
              Thank you! We&apos;ll get back to you within 30 minutes during business hours.
              For urgent moves, call us directly.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 bg-brand-blue text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-blue-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {SITE.phoneDisplay}
              </a>
              <button
                onClick={handleClose}
                className="text-brand-muted text-sm hover:text-brand-dark transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get Your Free Quote</DialogTitle>
              <DialogDescription>
                Fill in a few details and we&apos;ll provide a fast, accurate, no-obligation quote.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1 space-y-1.5">
                  <Label htmlFor="qm-name">Full Name *</Label>
                  <Input
                    id="qm-name"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={set("name")}
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1 space-y-1.5">
                  <Label htmlFor="qm-phone">Phone Number *</Label>
                  <Input
                    id="qm-phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    value={form.phone}
                    onChange={set("phone")}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="qm-email">Email Address</Label>
                <Input
                  id="qm-email"
                  type="email"
                  placeholder="john@email.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="qm-service">Service Required *</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                  required
                >
                  <SelectTrigger id="qm-service">
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="qm-from">Moving From</Label>
                  <Input
                    id="qm-from"
                    placeholder="Postcode or town"
                    value={form.moveFrom}
                    onChange={set("moveFrom")}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="qm-to">Moving To</Label>
                  <Input
                    id="qm-to"
                    placeholder="Postcode or town"
                    value={form.moveTo}
                    onChange={set("moveTo")}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="qm-date">Preferred Date</Label>
                <Input
                  id="qm-date"
                  type="date"
                  value={form.date}
                  onChange={set("date")}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="qm-message">Additional Details</Label>
                <Textarea
                  id="qm-message"
                  placeholder="Property size, access details, any special requirements…"
                  value={form.message}
                  onChange={set("message")}
                  className="min-h-[80px]"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
                  Something went wrong. Please call us directly on {SITE.phoneDisplay}.
                </p>
              )}

              <div className="flex gap-3 pt-1">
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Get Free Quote"
                  )}
                </Button>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 bg-brand-neutral border border-slate-200 text-brand-dark font-semibold px-4 rounded-xl hover:bg-slate-100 transition-colors text-sm whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>

              <p className="text-[11px] text-brand-muted text-center">
                Free quote · No obligation · Response within 30 minutes
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
