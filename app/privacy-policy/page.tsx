import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `Privacy policy for ${SITE.name}. Learn how we collect, use, and protect your personal data in line with UK GDPR.`,
  alternates: {
    canonical: `${SITE.url}/privacy-policy`,
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        badge="Legal"
        headline="Privacy Policy"
        subheadline={`How ${SITE.name} collects, uses, and protects your personal information.`}
        breadcrumbs={[{ label: "Privacy Policy" }]}
        showStats={false}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="prose prose-slate max-w-none text-brand-muted leading-relaxed space-y-8">

            <div>
              <p className="text-sm text-brand-muted">Last updated: June 2025</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Who We Are</h2>
              <p>
                {SITE.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a removal and clearance company based in
                Whitmore Reans, Wolverhampton, West Midlands. Our website is{" "}
                <a href={SITE.url} className="text-brand-blue hover:underline">{SITE.domain}</a>.
              </p>
              <p className="mt-3">
                We are the data controller for personal information you provide to us. If you have
                any questions about how we handle your data, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a> or
                call <a href={`tel:${SITE.phone}`} className="text-brand-blue hover:underline">{SITE.phoneDisplay}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. Information We Collect</h2>
              <p>We collect personal information when you:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Submit a quote request via our website form</li>
                <li>Call or email us to enquire about our services</li>
                <li>Book a removal or clearance service with us</li>
              </ul>
              <p className="mt-3">The information we collect may include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Addresses (collection and delivery locations)</li>
                <li>Move date and property type</li>
                <li>Any additional details you provide in your message</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your quote request or enquiry</li>
                <li>Plan and carry out your removal or clearance service</li>
                <li>Communicate with you about your booking</li>
                <li>Send invoices and receipts</li>
              </ul>
              <p className="mt-3">
                We do not use your information for marketing without your explicit consent, and we
                do not sell or share your data with third parties for commercial purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Legal Basis for Processing</h2>
              <p>
                We process your personal data on the basis of <strong>contract</strong> (to perform
                the service you have requested) and <strong>legitimate interests</strong> (to
                respond to your enquiry and run our business). Where required by law, we will
                obtain your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">5. Data Retention</h2>
              <p>
                We retain customer data for as long as is necessary to provide our services and
                to comply with our legal obligations (such as accounting and tax records, which
                are typically retained for 6 years). Enquiry data from customers who did not book
                is deleted within 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">6. Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href={`mailto:${SITE.email}`} className="text-brand-blue hover:underline">{SITE.email}</a>.
                We will respond within 30 days.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s
                Office (ICO) at <span className="font-medium">ico.org.uk</span> if you believe we
                have not handled your data correctly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">7. Cookies</h2>
              <p>
                Our website uses only essential cookies required for the site to function. We do
                not use tracking or advertising cookies. No personal data is collected via cookies
                on this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">8. Third-Party Services</h2>
              <p>Our website is hosted on Vercel. Our contact form submissions are processed via our own API endpoint. We use Google Maps (embedded iframe) on our contact and service area pages, which is subject to Google&apos;s privacy policy.</p>
              <p className="mt-3">
                We do not use Google Analytics, Facebook Pixel, or other third-party tracking tools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted
                on this page with an updated date. Continued use of our website after changes
                constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-3">10. Contact</h2>
              <p>
                For any questions about this privacy policy or how we handle your data:
              </p>
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
