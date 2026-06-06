import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE.name}`,
  description: `Terms and conditions for using ${SITE.name} removal and clearance services in Wolverhampton.`,
  alternates: {
    canonical: `${SITE.url}/terms`,
  },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        headline="Terms & Conditions"
        subheadline={`Terms governing the use of ${SITE.name} services and this website.`}
        breadcrumbs={[{ label: "Terms & Conditions" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none text-brand-muted leading-relaxed space-y-8">

            <div>
              <p className="text-sm text-brand-muted">Last updated: June 2025</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Introduction</h2>
              <p>
                These terms and conditions apply to all services provided by {SITE.name}
                (&quot;the Company&quot;, &quot;we&quot;, &quot;us&quot;). By booking our services or using our
                website, you agree to these terms. Please read them carefully.
              </p>
              <p className="mt-3">
                Registered address: Whitmore Reans, Wolverhampton, West Midlands.
                Phone: <a href={`tel:${SITE.phone}`} className="text-brand-blue hover:underline">{SITE.phoneDisplay}</a>.
                Email: <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. Quotations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All quotations are free and carry no obligation to proceed.</li>
                <li>Quotes are based on information provided by the customer. The final price may change if the volume, access, or requirements differ materially from those described.</li>
                <li>Written confirmation of your quote and booking details will be provided on request.</li>
                <li>Quotes are valid for 30 days from the date of issue.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. Bookings and Cancellations</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bookings are confirmed on verbal or written agreement.</li>
                <li>Cancellations with less than 48 hours&apos; notice may incur a cancellation charge.</li>
                <li>We reserve the right to reschedule in the event of vehicle breakdown or unforeseen circumstances. We will provide as much notice as possible and offer an alternative date.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Customer Responsibilities</h2>
              <p>The customer is responsible for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Ensuring all items to be moved are clearly identified and accessible on the day.</li>
                <li>Disclosing any items that require specialist handling (pianos, safes, antiques, high-value items).</li>
                <li>Ensuring adequate parking access is available at both the collection and delivery addresses. Any parking fines incurred due to inadequate access will be recharged to the customer.</li>
                <li>Ensuring items are legally owned and free from any third-party claim or lien.</li>
                <li>Dismantling any furniture that cannot be moved assembled, unless a packing service has been booked.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">5. Prohibited Items</h2>
              <p>We will not transport the following items:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Hazardous materials (flammable liquids, compressed gases, chemicals)</li>
                <li>Illegal items or substances</li>
                <li>Perishable goods (unless agreed in advance)</li>
                <li>Live animals</li>
                <li>Items with a declared value exceeding our insurance limits without prior arrangement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">6. Insurance and Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We carry public liability and goods-in-transit insurance as standard on all moves.</li>
                <li>Our liability for damage to goods is limited to the replacement or repair value of the damaged item, up to the limits of our goods-in-transit policy.</li>
                <li>We are not liable for damage to items that were not properly packed or disclosed as fragile prior to the move.</li>
                <li>Claims for damage must be reported within 24 hours of delivery.</li>
                <li>We are not liable for pre-existing damage to items.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">7. Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due on completion of the service unless otherwise agreed in writing.</li>
                <li>We accept cash and bank transfer.</li>
                <li>For large or complex moves, a deposit may be required to secure the booking date.</li>
                <li>Late payment may attract interest at 8% above the Bank of England base rate under the Late Payment of Commercial Debts Act.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">8. House Clearance</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All items cleared are assumed to be unwanted and available for disposal, donation, or recycling unless otherwise specified.</li>
                <li>We are a licensed waste carrier. Our waste carrier licence number is available on request.</li>
                <li>We make reasonable efforts to divert items from landfill through donation and recycling.</li>
                <li>Items of value identified during clearance will be reported to the customer before disposal.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">9. Website Use</h2>
              <p>
                This website is provided for informational purposes. While we make every effort
                to keep information accurate and up to date, we cannot guarantee that all content
                is error-free. We reserve the right to change prices, availability, and service
                details without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will
                be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">11. Contact</h2>
              <p>For any questions about these terms:</p>
              <div className="mt-3 bg-brand-neutral rounded-xl p-5 border border-slate-100">
                <p className="font-semibold text-brand-dark">{SITE.name}</p>
                <p>{SITE.address.street}, {SITE.address.city}, {SITE.address.county}</p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>
                </p>
                <p>
                  Phone:{" "}
                  <a href={`tel:${SITE.phone}`} className="text-brand-blue hover:underline">{SITE.phoneDisplay}</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
