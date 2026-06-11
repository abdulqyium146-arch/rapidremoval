import { SITE } from "./constants";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: SITE.established,
    identifier: [
      {
        "@type": "PropertyValue",
        name: "Companies House Registration Number",
        value: SITE.companyNumber,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      addressCountry: SITE.address.countryCode,
      postalCode: SITE.address.postcode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      "Wolverhampton",
      "Whitmore Reans",
      "Bilston",
      "Wednesfield",
      "Tettenhall",
      "Dudley",
      "Walsall",
      "Cannock",
      "West Bromwich",
      "Stafford",
      "Birmingham",
      "West Midlands",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: SITE.rating.best,
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.companiesHouse,
      SITE.social.instagram,
      SITE.social.google,
    ].filter(Boolean),
    knowsAbout: [
      "House Removals",
      "Man and Van",
      "Furniture Removals",
      "House Clearance",
      "Office Removals",
      "Packing Services",
      "Long Distance Removals",
      "Senior Moving",
      "Commercial Moves",
      "End of Tenancy Clearance",
      "Same Day Removals",
      "Emergency Removals",
      "Student Moves",
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer, Card",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.shortDescription,
    publisher: {
      "@id": `${SITE.url}/#business`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-GB",
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(
  serviceName: string,
  description: string,
  areaServed: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      legalName: SITE.legalName,
      telephone: SITE.phone,
      url: SITE.url,
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
      containedInPlace: {
        "@type": "State",
        name: "West Midlands",
      },
    },
    serviceType: serviceName,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "GBP",
        description: "Free quotes provided — contact us for pricing",
      },
    },
  };
}

export function buildReviewSchema(reviews: {
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
      datePublished: `${review.date}-01`,
    })),
  };
}
