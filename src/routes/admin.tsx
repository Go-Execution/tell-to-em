import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import {
  fetchPrograms,
  upsertProgram,
  deleteProgram,
  fetchFaqs,
  upsertFaq,
  deleteFaq,
  fetchTestimonials,
  upsertTestimonial,
  deleteTestimonial,
  fetchLegalPage,
  saveLegalPage,
  fetchSiteSettings,
  saveSiteSettings,
  fetchInquiries,
  updateInquiryStatus,
} from "@/lib/cms-client";
import { isSupabaseConfigured } from "@/lib/supabase";
import type {
  ProgramTopic,
  FaqItem,
  TestimonialItem,
  LegalPage,
  SiteSettings,
  InquiryLead,
} from "@/types/cms";
import {
  BookOpen,
  HelpCircle,
  MessageSquareQuote,
  FileText,
  Settings,
  Inbox,
  Plus,
  Trash2,
  Edit2,
  Check,
  AlertCircle,
  ExternalLink,
  Save,
  Database,
  Lock,
  LogOut,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "TOK2EM Admin Portal — Content Operations" }],
  }),
  component: AdminPortalPage,
});

type TabType = "programs" | "faqs" | "testimonials" | "legal" | "settings" | "inquiries";

function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("tok2em_admin_auth") === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<TabType>("programs");
  const [notification, setNotification] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validPasswords = ["tok2em2026", "tok2em", "admin123", "admin"];
    if (validPasswords.includes(passwordInput.trim().toLowerCase())) {
      sessionStorage.setItem("tok2em_admin_auth", "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password. Please try again (hint: tok2em2026).");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("tok2em_admin_auth");
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  // Data states
  const [programs, setPrograms] = useState<ProgramTopic[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [legalSlug, setLegalSlug] = useState<"privacy-policy" | "terms-of-service">(
    "privacy-policy",
  );
  const [legalPage, setLegalPage] = useState<LegalPage | null>(null);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [inquiries, setInquiries] = useState<InquiryLead[]>([]);

  // Modals / active edit states
  const [editingProgram, setEditingProgram] = useState<ProgramTopic | null>(null);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialItem | null>(null);

  // Load all initial data
  const refreshData = async () => {
    const [p, f, t, l, s, inq] = await Promise.all([
      fetchPrograms(),
      fetchFaqs(),
      fetchTestimonials(),
      fetchLegalPage(legalSlug),
      fetchSiteSettings(),
      fetchInquiries(),
    ]);
    setPrograms(p);
    setFaqs(f);
    setTestimonials(t);
    setLegalPage(l);
    setSiteSettings(s);
    setInquiries(inq);
  };

  useEffect(() => {
    refreshData();
  }, [legalSlug]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Program Handlers
  const handleSaveProgram = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProgram) return;
    await upsertProgram(editingProgram);
    setEditingProgram(null);
    const updated = await fetchPrograms();
    setPrograms(updated);
    showToast("Program topic saved successfully!");
  };

  const handleDeleteProgram = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;
    await deleteProgram(id);
    const updated = await fetchPrograms();
    setPrograms(updated);
    showToast("Program deleted.");
  };

  // FAQ Handlers
  const handleSaveFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    await upsertFaq(editingFaq);
    setEditingFaq(null);
    const updated = await fetchFaqs();
    setFaqs(updated);
    showToast("FAQ saved successfully!");
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    await deleteFaq(id);
    const updated = await fetchFaqs();
    setFaqs(updated);
    showToast("FAQ deleted.");
  };

  // Testimonial Handlers
  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;
    await upsertTestimonial(editingTestimonial);
    setEditingTestimonial(null);
    const updated = await fetchTestimonials();
    setTestimonials(updated);
    showToast("Testimonial saved successfully!");
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    await deleteTestimonial(id);
    const updated = await fetchTestimonials();
    setTestimonials(updated);
    showToast("Testimonial deleted.");
  };

  // Legal Page Handler
  const handleSaveLegal = async () => {
    if (!legalPage) return;
    await saveLegalPage(legalPage.slug, legalPage.title, legalPage.content_html);
    showToast(`${legalPage.title} published live!`);
  };

  // Settings Handler
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!siteSettings) return;
    await saveSiteSettings(siteSettings);
    showToast("Site settings updated!");
  };

  // Inquiry Status Handler
  const handleStatusChange = async (id: string, status: InquiryLead["status"]) => {
    await updateInquiryStatus(id, status);
    const updated = await fetchInquiries();
    setInquiries(updated);
    showToast(`Inquiry status updated to ${status}.`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F4F1EA] flex items-center justify-center p-6 text-[#181614] font-sans antialiased">
        <div className="w-full max-w-md bg-white border border-[#E0DBCF] p-8 sm:p-10 shadow-lg rounded-xl text-center">
          <a href="/" className="inline-block mb-6">
            <img src={logo} alt="TOK2EM" className="h-16 w-auto mx-auto object-contain" />
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E0DBCF] text-[11px] font-mono-label text-[#7A746B] mb-4">
            <Lock className="h-3 w-3 text-[#181614]" />
            Operations Hub Access
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#181614]">Portal Sign In</h1>
          <p className="mt-2 text-xs text-[#7A746B] leading-relaxed">
            Enter the master access code to manage speaking topics, FAQs, testimonials, and legal
            policies.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
            <div>
              <label className="block text-[11px] font-mono-label uppercase tracking-wider text-[#7A746B] mb-1.5">
                Access Code / Password
              </label>
              <input
                type="password"
                autoFocus
                required
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setAuthError("");
                }}
                placeholder="Enter master password..."
                className="w-full rounded-md border border-[#E0DBCF] bg-[#FAF8F5] px-3.5 py-2.5 text-sm text-[#181614] placeholder:text-[#A69F94] focus:outline-none focus:ring-2 focus:ring-[#181614] focus:bg-white transition-all"
              />
            </div>

            {authError && (
              <p className="text-xs font-semibold text-rose-600 flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-[#181614] py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors shadow-sm cursor-pointer"
            >
              Unlock Portal →
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[#EFECE6] text-center">
            <p className="text-[11px] text-[#7A746B]">
              Client Demo Access Code:{" "}
              <code className="bg-[#FAF8F5] border border-[#E0DBCF] px-1.5 py-0.5 rounded text-[#181614] font-mono font-bold">
                tok2em2026
              </code>
            </p>
            <a
              href="/"
              className="inline-block mt-3 text-xs text-[#7A746B] hover:text-[#181614] underline underline-offset-4"
            >
              ← Return to Live Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#181614] font-sans antialiased">
      {/* Top Notification Toast */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 rounded-md bg-[#181614] px-4 py-3 text-xs font-medium text-white shadow-lg animate-in fade-in slide-in-from-top-2">
          <Check className="h-4 w-4 text-emerald-400" />
          {notification}
        </div>
      )}

      {/* Header Bar */}
      <header className="border-b border-[#E0DBCF] bg-white sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <a href="/" className="shrink-0 flex items-center">
              <img src={logo} alt="TOK2EM" className="h-10 w-auto object-contain" />
            </a>
            <div className="h-5 w-px bg-[#E0DBCF]" />
            <div>
              <h1 className="text-sm font-bold tracking-tight text-[#181614]">
                TOK2EM CMS & Operations Hub
              </h1>
              <p className="text-[11px] text-[#7A746B]">Logged in as Brett Lasko (Super Admin)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Supabase Status Indicator */}
            <div
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono-label font-medium ${
                isSupabaseConfigured
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-amber-50 text-amber-800 border border-amber-200"
              }`}
            >
              <Database className="h-3 w-3" />
              {isSupabaseConfigured ? "Connected: Supabase Cloud" : "Local / Demo Storage"}
            </div>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A554E] hover:text-[#181614] transition-colors"
            >
              View Live Site <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#E0DBCF] bg-white px-2.5 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-auto max-w-7xl px-6 flex items-center gap-1 overflow-x-auto border-t border-[#EFECE6] bg-[#FAF8F5]">
          <button
            onClick={() => setActiveTab("programs")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "programs"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" /> Programs & Topics ({programs.length})
          </button>

          <button
            onClick={() => setActiveTab("faqs")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "faqs"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <HelpCircle className="h-3.5 w-3.5" /> FAQs ({faqs.length})
          </button>

          <button
            onClick={() => setActiveTab("testimonials")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "testimonials"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <MessageSquareQuote className="h-3.5 w-3.5" /> Testimonials ({testimonials.length})
          </button>

          <button
            onClick={() => setActiveTab("legal")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "legal"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> Legal & Policy Pages
          </button>

          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "settings"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <Settings className="h-3.5 w-3.5" /> Site Settings
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "inquiries"
                ? "border-[#181614] text-[#181614]"
                : "border-transparent text-[#7A746B] hover:text-[#181614]"
            }`}
          >
            <Inbox className="h-3.5 w-3.5" /> Inquiries Inbox ({inquiries.length})
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* TAB 1: PROGRAMS */}
        {activeTab === "programs" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-[#181614]">
                  Speaking Topics & Keynote Programs
                </h2>
                <p className="text-xs text-[#7A746B]">
                  Manage the assemblies, breakout sessions, and keynotes displayed on the public
                  site.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setEditingProgram({
                    id: `prog-${Date.now()}`,
                    title: "",
                    slug: "",
                    tagline: "",
                    description: "",
                    target_audience: "Middle & High School",
                    bullet_points: ["", "", ""],
                    sort_order: programs.length + 1,
                    is_active: true,
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-full bg-[#181614] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                <Plus className="h-4 w-4" /> Add Program
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((prog) => (
                <div
                  key={prog.id}
                  className="rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono-label uppercase tracking-widest text-[#7A746B]">
                        {prog.target_audience}
                      </span>
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          prog.is_active
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {prog.is_active ? "Active" : "Draft"}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#181614] mb-1">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-medium text-[#7A746B] italic mb-3">{prog.tagline}</p>
                    <p className="text-xs text-[#3A352E] line-clamp-3 mb-4">{prog.description}</p>

                    <div className="space-y-1 border-t border-[#EFECE6] pt-3">
                      <p className="text-[11px] font-bold text-[#181614]">Key Takeaways:</p>
                      {prog.bullet_points.map((b, i) => (
                        <p key={i} className="text-[11px] text-[#5A554E] flex items-start gap-1.5">
                          <span className="text-[#181614] font-bold">•</span>
                          <span className="line-clamp-1">{b}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-2 border-t border-[#EFECE6] pt-4">
                    <button
                      type="button"
                      onClick={() => setEditingProgram(prog)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-[#181614] hover:bg-[#FAF8F5] border border-[#E0DBCF]"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteProgram(prog.id)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: FAQS */}
        {activeTab === "faqs" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-[#181614]">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs text-[#7A746B]">
                  Edit questions and answers regarding booking, audio/visual setup, and grant
                  funding.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setEditingFaq({
                    id: `faq-${Date.now()}`,
                    question: "",
                    answer: "",
                    category: "General",
                    sort_order: faqs.length + 1,
                    is_published: true,
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-full bg-[#181614] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                <Plus className="h-4 w-4" /> Add FAQ
              </button>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="rounded-lg border border-[#E0DBCF] bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#FAF8F5] border border-[#E0DBCF] px-2 py-0.5 text-[10px] font-mono-label font-bold text-[#7A746B]">
                        #{idx + 1} &bull; {faq.category}
                      </span>
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          faq.is_published
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {faq.is_published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#181614]">{faq.question}</h3>
                    <p className="text-xs text-[#5A554E] line-clamp-2">{faq.answer}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setEditingFaq(faq)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-[#181614] hover:bg-[#FAF8F5] border border-[#E0DBCF]"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteFaq(faq.id)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: TESTIMONIALS */}
        {activeTab === "testimonials" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-[#181614]">
                  Testimonials & Reviews
                </h2>
                <p className="text-xs text-[#7A746B]">
                  Curate quotes and feedback from high school principals, athletic directors, and
                  counselors.
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setEditingTestimonial({
                    id: `test-${Date.now()}`,
                    author_name: "",
                    author_title: "High School Principal",
                    school_district: "",
                    quote: "",
                    rating: 5,
                    is_featured: true,
                    is_approved: true,
                    sort_order: testimonials.length + 1,
                  })
                }
                className="inline-flex items-center gap-1.5 rounded-full bg-[#181614] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                <Plus className="h-4 w-4" /> Add Testimonial
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex text-amber-500 text-xs">{"★".repeat(test.rating)}</div>
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          test.is_approved
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {test.is_approved ? "Live on Site" : "Draft"}
                      </span>
                    </div>

                    <p className="font-serif italic text-xs text-[#3A352E] mb-4 leading-relaxed">
                      "{test.quote}"
                    </p>

                    <div className="border-t border-[#EFECE6] pt-3">
                      <p className="text-xs font-bold text-[#181614]">{test.author_name}</p>
                      <p className="text-[11px] text-[#7A746B]">{test.author_title}</p>
                      <p className="text-[10px] font-mono-label text-[#7A746B]">
                        {test.school_district}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-end gap-2 border-t border-[#EFECE6] pt-3">
                    <button
                      type="button"
                      onClick={() => setEditingTestimonial(test)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-[#181614] hover:bg-[#FAF8F5] border border-[#E0DBCF]"
                    >
                      <Edit2 className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteTestimonial(test.id)}
                      className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LEGAL & POLICY PAGES (RICH TEXT WYSIWYG) */}
        {activeTab === "legal" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-serif text-[#181614]">
                  Legal & Policy Pages Editor
                </h2>
                <p className="text-xs text-[#7A746B]">
                  Edit the full Privacy Policy and Terms of Service using the rich text editor.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Policy Switcher */}
                <div className="inline-flex rounded-md border border-[#E0DBCF] bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setLegalSlug("privacy-policy")}
                    className={`rounded px-3 py-1 text-xs font-bold transition-colors ${
                      legalSlug === "privacy-policy"
                        ? "bg-[#181614] text-white"
                        : "text-[#7A746B] hover:text-[#181614]"
                    }`}
                  >
                    Privacy Policy
                  </button>
                  <button
                    type="button"
                    onClick={() => setLegalSlug("terms-of-service")}
                    className={`rounded px-3 py-1 text-xs font-bold transition-colors ${
                      legalSlug === "terms-of-service"
                        ? "bg-[#181614] text-white"
                        : "text-[#7A746B] hover:text-[#181614]"
                    }`}
                  >
                    Terms of Service
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleSaveLegal}
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-800 transition-colors shadow-xs"
                >
                  <Save className="h-4 w-4" /> Save & Publish
                </button>
              </div>
            </div>

            {legalPage && (
              <div className="rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E0DBCF] pb-4">
                  <div>
                    <span className="text-[10px] font-mono-label uppercase tracking-widest text-[#7A746B]">
                      Editing: /{legalPage.slug}
                    </span>
                    <input
                      type="text"
                      value={legalPage.title}
                      onChange={(e) => setLegalPage({ ...legalPage, title: e.target.value })}
                      className="mt-1 block w-full font-serif text-2xl font-bold text-[#181614] focus:outline-none focus:ring-1 focus:ring-[#181614] px-2 py-1 rounded"
                    />
                  </div>
                  <a
                    href={`/${legalPage.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
                  >
                    View Live Page <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-2">
                    Document Body (WYSIWYG Rich Text)
                  </label>
                  <RichTextEditor
                    content={legalPage.content_html}
                    onChange={(html) => setLegalPage({ ...legalPage, content_html: html })}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: SITE SETTINGS */}
        {activeTab === "settings" && siteSettings && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-bold font-serif text-[#181614]">
                Site Settings & Global Info
              </h2>
              <p className="text-xs text-[#7A746B]">
                Update contact phone, direct email, base location, and top announcement banner.
              </p>
            </div>

            <form
              onSubmit={handleSaveSettings}
              className="rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xs space-y-5"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Contact Phone Number
                </label>
                <input
                  type="text"
                  value={siteSettings.phone}
                  onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Direct Email Address
                </label>
                <input
                  type="email"
                  value={siteSettings.email}
                  onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Base Location
                </label>
                <input
                  type="text"
                  value={siteSettings.location}
                  onChange={(e) => setSiteSettings({ ...siteSettings, location: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div className="border-t border-[#EFECE6] pt-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-[#181614]">Top Announcement Banner</p>
                    <p className="text-xs text-[#7A746B]">
                      Display an urgent notice at the very top of the website.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={siteSettings.banner_enabled}
                    onChange={(e) =>
                      setSiteSettings({ ...siteSettings, banner_enabled: e.target.checked })
                    }
                    className="h-4 w-4 rounded accent-[#181614]"
                  />
                </div>

                {siteSettings.banner_enabled && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                      Banner Text
                    </label>
                    <input
                      type="text"
                      value={siteSettings.banner_text}
                      onChange={(e) =>
                        setSiteSettings({ ...siteSettings, banner_text: e.target.value })
                      }
                      className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                    />
                  </div>
                )}
              </div>

              <div className="border-t border-[#EFECE6] pt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#181614] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-black transition-colors"
                >
                  <Save className="h-4 w-4" /> Save Site Settings
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 6: INQUIRIES INBOX */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold font-serif text-[#181614]">
                Inquiries & Booking Leads
              </h2>
              <p className="text-xs text-[#7A746B]">
                Inbound requests submitted through the public website booking form.
              </p>
            </div>

            <div className="rounded-lg border border-[#E0DBCF] bg-white shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F5] border-b border-[#E0DBCF] text-[#7A746B] font-mono-label uppercase">
                  <tr>
                    <th className="py-3 px-4">School & District</th>
                    <th className="py-3 px-4">Contact Person</th>
                    <th className="py-3 px-4">Event Details</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFECE6]">
                  {inquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-[#181614]">{inq.school_name}</p>
                        <p className="text-[#7A746B]">{inq.district || "General District"}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-semibold text-[#181614]">{inq.contact_name}</p>
                        <p className="text-[#7A746B]">{inq.email}</p>
                        {inq.phone && <p className="text-[#7A746B] font-mono-label">{inq.phone}</p>}
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-medium text-[#181614]">{inq.event_type || "Assembly"}</p>
                        <p className="text-[#7A746B]">{inq.audience_size || "Standard Cohort"}</p>
                      </td>
                      <td className="py-3.5 px-4 font-mono-label text-[#7A746B]">
                        {inq.requested_date || new Date(inq.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={inq.status}
                          onChange={(e) =>
                            handleStatusChange(inq.id, e.target.value as InquiryLead["status"])
                          }
                          className="rounded border border-[#E0DBCF] bg-white px-2.5 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#181614]"
                        >
                          <option value="new">New Inquiry</option>
                          <option value="contacted">Contacted</option>
                          <option value="quote_sent">Quote Sent</option>
                          <option value="confirmed">Confirmed / Signed</option>
                          <option value="completed">Delivered</option>
                          <option value="archived">Archived</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: PROGRAM EDIT */}
      {editingProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xl animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <h3 className="font-serif text-lg font-bold text-[#181614] mb-4">
              {editingProgram.title ? `Edit "${editingProgram.title}"` : "Add New Program"}
            </h3>

            <form onSubmit={handleSaveProgram} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Program Title
                </label>
                <input
                  type="text"
                  required
                  value={editingProgram.title}
                  onChange={(e) => setEditingProgram({ ...editingProgram, title: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  required
                  value={editingProgram.tagline}
                  onChange={(e) =>
                    setEditingProgram({ ...editingProgram, tagline: e.target.value })
                  }
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Target Audience
                </label>
                <input
                  type="text"
                  required
                  value={editingProgram.target_audience}
                  onChange={(e) =>
                    setEditingProgram({ ...editingProgram, target_audience: e.target.value })
                  }
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Full Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingProgram.description}
                  onChange={(e) =>
                    setEditingProgram({ ...editingProgram, description: e.target.value })
                  }
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Key Takeaways (Bullet Points)
                </label>
                {editingProgram.bullet_points.map((b, i) => (
                  <input
                    key={i}
                    type="text"
                    value={b}
                    onChange={(e) => {
                      const newB = [...editingProgram.bullet_points];
                      newB[i] = e.target.value;
                      setEditingProgram({ ...editingProgram, bullet_points: newB });
                    }}
                    placeholder={`Takeaway bullet #${i + 1}`}
                    className="w-full rounded border border-[#E0DBCF] px-3 py-1.5 text-xs mb-2 focus:outline-none focus:ring-1 focus:ring-[#181614]"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="prog-active"
                  checked={editingProgram.is_active}
                  onChange={(e) =>
                    setEditingProgram({ ...editingProgram, is_active: e.target.checked })
                  }
                  className="h-4 w-4 rounded accent-[#181614]"
                />
                <label htmlFor="prog-active" className="text-xs font-semibold text-[#181614]">
                  Active and visible on public website
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EFECE6]">
                <button
                  type="button"
                  onClick={() => setEditingProgram(null)}
                  className="rounded px-4 py-2 text-xs font-semibold text-[#7A746B] hover:text-[#181614]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#181614] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black"
                >
                  Save Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: FAQ EDIT */}
      {editingFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xl animate-in fade-in zoom-in-95">
            <h3 className="font-serif text-lg font-bold text-[#181614] mb-4">
              {editingFaq.question ? "Edit FAQ" : "Add FAQ"}
            </h3>

            <form onSubmit={handleSaveFaq} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Category
                </label>
                <input
                  type="text"
                  required
                  value={editingFaq.category}
                  onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Question
                </label>
                <input
                  type="text"
                  required
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Answer
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="faq-published"
                  checked={editingFaq.is_published}
                  onChange={(e) => setEditingFaq({ ...editingFaq, is_published: e.target.checked })}
                  className="h-4 w-4 rounded accent-[#181614]"
                />
                <label htmlFor="faq-published" className="text-xs font-semibold text-[#181614]">
                  Published on public website
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EFECE6]">
                <button
                  type="button"
                  onClick={() => setEditingFaq(null)}
                  className="rounded px-4 py-2 text-xs font-semibold text-[#7A746B] hover:text-[#181614]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#181614] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black"
                >
                  Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: TESTIMONIAL EDIT */}
      {editingTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-lg border border-[#E0DBCF] bg-white p-6 shadow-xl animate-in fade-in zoom-in-95">
            <h3 className="font-serif text-lg font-bold text-[#181614] mb-4">
              {editingTestimonial.author_name ? "Edit Testimonial" : "Add Testimonial"}
            </h3>

            <form onSubmit={handleSaveTestimonial} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Author Name
                </label>
                <input
                  type="text"
                  required
                  value={editingTestimonial.author_name}
                  onChange={(e) =>
                    setEditingTestimonial({ ...editingTestimonial, author_name: e.target.value })
                  }
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editingTestimonial.author_title}
                    onChange={(e) =>
                      setEditingTestimonial({ ...editingTestimonial, author_title: e.target.value })
                    }
                    className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                    School / District
                  </label>
                  <input
                    type="text"
                    required
                    value={editingTestimonial.school_district}
                    onChange={(e) =>
                      setEditingTestimonial({
                        ...editingTestimonial,
                        school_district: e.target.value,
                      })
                    }
                    className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A746B] mb-1">
                  Testimonial Quote
                </label>
                <textarea
                  rows={4}
                  required
                  value={editingTestimonial.quote}
                  onChange={(e) =>
                    setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })
                  }
                  className="w-full rounded border border-[#E0DBCF] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#181614]"
                />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="test-featured"
                    checked={editingTestimonial.is_featured}
                    onChange={(e) =>
                      setEditingTestimonial({
                        ...editingTestimonial,
                        is_featured: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded accent-[#181614]"
                  />
                  <label htmlFor="test-featured" className="text-xs font-semibold text-[#181614]">
                    Featured on Home
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="test-approved"
                    checked={editingTestimonial.is_approved}
                    onChange={(e) =>
                      setEditingTestimonial({
                        ...editingTestimonial,
                        is_approved: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded accent-[#181614]"
                  />
                  <label htmlFor="test-approved" className="text-xs font-semibold text-[#181614]">
                    Approved & Live
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#EFECE6]">
                <button
                  type="button"
                  onClick={() => setEditingTestimonial(null)}
                  className="rounded px-4 py-2 text-xs font-semibold text-[#7A746B] hover:text-[#181614]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#181614] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-black"
                >
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
