export interface ProgramTopic {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  target_audience: string;
  bullet_points: string[];
  one_sheet_url?: string;
  sort_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TestimonialItem {
  id: string;
  author_name: string;
  author_title: string;
  school_district: string;
  quote: string;
  rating: number;
  is_featured: boolean;
  is_approved: boolean;
  sort_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface LegalPage {
  id: string;
  slug: string;
  title: string;
  content_html: string;
  last_updated_at?: string;
}

export interface SiteSettings {
  phone: string;
  email: string;
  location: string;
  banner_enabled: boolean;
  banner_text: string;
}

export interface InquiryLead {
  id: string;
  school_name: string;
  district?: string;
  contact_name: string;
  email: string;
  phone?: string;
  requested_date?: string;
  audience_size?: string;
  event_type?: string;
  notes?: string;
  status: "new" | "contacted" | "quote_sent" | "confirmed" | "completed" | "archived";
  created_at: string;
  updated_at?: string;
}
