export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  included: string[];
  notIncluded?: string[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  schema: Record<string, unknown>;
  relatedServices: string[];
  keywords: string[];
}

export interface AreaData {
  slug: string;
  name: string;
  postcode: string;
  county: string;
  distance: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  landmarks: string[];
  nearbyAreas: string[];
  services: string[];
  keywords: string[];
}

export interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TrustSignal {
  label: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
