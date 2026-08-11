// These interfaces describe the shape of content each Home section
// renders. Sections currently use local mock data arrays matching
// these shapes exactly, so swapping to real HttpClient calls against
// the Admin CMS's REST API (Phase 5+) only touches the data source,
// never the templates.

export interface ProductPreview {
  id: string;
  name: string;
  category: string;
  icon: string; // Material icon name, placeholder until real product images exist
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
}

export interface WhyChooseUsPoint {
  icon: string;
  title: string;
  description: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ClientLogo {
  name: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface BlogPreview {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}
