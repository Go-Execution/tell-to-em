import { supabase, isSupabaseConfigured } from "./supabase";
import {
  DEFAULT_PROGRAMS,
  DEFAULT_FAQS,
  DEFAULT_TESTIMONIALS,
  DEFAULT_LEGAL_PAGES,
  DEFAULT_SITE_SETTINGS,
  DEFAULT_INQUIRIES,
} from "./cms-defaults";
import type {
  ProgramTopic,
  FaqItem,
  TestimonialItem,
  LegalPage,
  SiteSettings,
  InquiryLead,
} from "@/types/cms";

// LocalStorage cache helpers for seamless offline/fallback preview
function getStored<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const item = localStorage.getItem(`tok2em_cms_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setStored<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(`tok2em_cms_${key}`, JSON.stringify(value));
  } catch (err) {
    console.warn("Could not save to localStorage:", err);
  }
}

// ==========================================
// PROGRAMS API
// ==========================================
export async function fetchPrograms(): Promise<ProgramTopic[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("programs")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!error && data && data.length > 0) return data as ProgramTopic[];
    } catch (err) {
      console.warn("Supabase fetchPrograms error, using cache/defaults:", err);
    }
  }
  return getStored<ProgramTopic[]>("programs", DEFAULT_PROGRAMS);
}

export async function upsertProgram(program: ProgramTopic): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("programs").upsert({
      ...program,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  }
  const current = getStored<ProgramTopic[]>("programs", DEFAULT_PROGRAMS);
  const index = current.findIndex((p) => p.id === program.id);
  if (index >= 0) {
    current[index] = program;
  } else {
    current.push(program);
  }
  setStored("programs", current);
}

export async function deleteProgram(id: string): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("programs").delete().eq("id", id);
    if (error) throw error;
  }
  const current = getStored<ProgramTopic[]>("programs", DEFAULT_PROGRAMS);
  setStored(
    "programs",
    current.filter((p) => p.id !== id),
  );
}

// ==========================================
// FAQS API
// ==========================================
export async function fetchFaqs(): Promise<FaqItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("faqs")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!error && data && data.length > 0) return data as FaqItem[];
    } catch (err) {
      console.warn("Supabase fetchFaqs error, using cache/defaults:", err);
    }
  }
  return getStored<FaqItem[]>("faqs", DEFAULT_FAQS);
}

export async function upsertFaq(faq: FaqItem): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("faqs").upsert({
      ...faq,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  }
  const current = getStored<FaqItem[]>("faqs", DEFAULT_FAQS);
  const index = current.findIndex((f) => f.id === faq.id);
  if (index >= 0) {
    current[index] = faq;
  } else {
    current.push(faq);
  }
  setStored("faqs", current);
}

export async function deleteFaq(id: string): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("faqs").delete().eq("id", id);
    if (error) throw error;
  }
  const current = getStored<FaqItem[]>("faqs", DEFAULT_FAQS);
  setStored(
    "faqs",
    current.filter((f) => f.id !== id),
  );
}

// ==========================================
// TESTIMONIALS API
// ==========================================
export async function fetchTestimonials(): Promise<TestimonialItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!error && data && data.length > 0) return data as TestimonialItem[];
    } catch (err) {
      console.warn("Supabase fetchTestimonials error, using cache/defaults:", err);
    }
  }
  return getStored<TestimonialItem[]>("testimonials", DEFAULT_TESTIMONIALS);
}

export async function upsertTestimonial(testimonial: TestimonialItem): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("testimonials").upsert({
      ...testimonial,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  }
  const current = getStored<TestimonialItem[]>("testimonials", DEFAULT_TESTIMONIALS);
  const index = current.findIndex((t) => t.id === testimonial.id);
  if (index >= 0) {
    current[index] = testimonial;
  } else {
    current.push(testimonial);
  }
  setStored("testimonials", current);
}

export async function deleteTestimonial(id: string): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) throw error;
  }
  const current = getStored<TestimonialItem[]>("testimonials", DEFAULT_TESTIMONIALS);
  setStored(
    "testimonials",
    current.filter((t) => t.id !== id),
  );
}

// ==========================================
// LEGAL PAGES API (Privacy Policy, Terms)
// ==========================================
export async function fetchLegalPage(slug: string): Promise<LegalPage> {
  const fallback = DEFAULT_LEGAL_PAGES[slug] || {
    id: `legal-${slug}`,
    slug,
    title: slug === "privacy-policy" ? "Privacy Policy" : "Terms of Service",
    content_html: "<p>Policy content coming soon.</p>",
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("legal_pages")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!error && data) return data as LegalPage;
    } catch (err) {
      console.warn(`Supabase fetchLegalPage for ${slug} error:`, err);
    }
  }
  const storedPages = getStored<Record<string, LegalPage>>("legal_pages", DEFAULT_LEGAL_PAGES);
  return storedPages[slug] || fallback;
}

export async function saveLegalPage(
  slug: string,
  title: string,
  contentHtml: string,
): Promise<void> {
  const page: LegalPage = {
    id: `legal-${slug}`,
    slug,
    title,
    content_html: contentHtml,
    last_updated_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("legal_pages").upsert({
      slug,
      title,
      content_html: contentHtml,
      last_updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  }

  const storedPages = getStored<Record<string, LegalPage>>("legal_pages", DEFAULT_LEGAL_PAGES);
  storedPages[slug] = page;
  setStored("legal_pages", storedPages);
}

// ==========================================
// SITE SETTINGS API
// ==========================================
export async function fetchSiteSettings(): Promise<SiteSettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "general")
        .single();
      if (!error && data?.value) return data.value as SiteSettings;
    } catch (err) {
      console.warn("Supabase fetchSiteSettings error:", err);
    }
  }
  return getStored<SiteSettings>("site_settings", DEFAULT_SITE_SETTINGS);
}

export async function saveSiteSettings(settings: SiteSettings): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from("site_settings").upsert({
      key: "general",
      value: settings,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  }
  setStored("site_settings", settings);
}

// ==========================================
// INQUIRIES API
// ==========================================
export async function submitInquiry(lead: {
  school_name: string;
  district?: string;
  contact_name: string;
  email: string;
  phone?: string;
  notes?: string;
}): Promise<void> {
  const newLead: InquiryLead = {
    id: `inq-${Date.now()}`,
    school_name: lead.school_name,
    district: lead.district || "",
    contact_name: lead.contact_name,
    email: lead.email,
    phone: lead.phone || "",
    notes: lead.notes || "",
    status: "new",
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from("inquiries").insert({
        school_name: newLead.school_name,
        contact_name: newLead.contact_name,
        email: newLead.email,
        phone: newLead.phone,
        notes: newLead.notes,
        status: "new",
      });
    } catch (err) {
      console.warn("Supabase submitInquiry error:", err);
    }
  }

  const current = getStored<InquiryLead[]>("inquiries", DEFAULT_INQUIRIES);
  current.unshift(newLead);
  setStored("inquiries", current);
}

export async function fetchInquiries(): Promise<InquiryLead[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) return data as InquiryLead[];
    } catch (err) {
      console.warn("Supabase fetchInquiries error:", err);
    }
  }
  return getStored<InquiryLead[]>("inquiries", DEFAULT_INQUIRIES);
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryLead["status"],
): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from("inquiries")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id);
    if (error) throw error;
  }
  const current = getStored<InquiryLead[]>("inquiries", DEFAULT_INQUIRIES);
  const target = current.find((i) => i.id === id);
  if (target) {
    target.status = status;
    setStored("inquiries", current);
  }
}
