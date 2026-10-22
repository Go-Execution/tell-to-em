import { useState, type FormEvent } from "react";
import {
  CalendarCheck,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Clock,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "Motivational Assembly (Middle or High School)",
  "Youth Intervention Circle (Small-Group Cohort)",
  "College / Student-Athlete Keynote",
  "Staff & Educator Professional Development",
  "Community / Church Youth Event",
  "Custom Multi-Day Residency or Keynote Series",
];

const AUDIENCE_SIZES = [
  "Small Group (Under 25 students)",
  "Medium Group (25 – 100 students)",
  "Large Assembly (100 – 500 students)",
  "Full School / Auditorium (500+ students)",
  "Staff / Educator Training",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
  audienceSize: string;
  callDate: string;
  message: string;
  consent: boolean;
};

const INITIAL_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  service: "",
  audienceSize: "",
  callDate: "",
  message: "",
  consent: false,
};

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-blue-100";

export function BookCall() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid telephone number.";
    if (!form.service) next.service = "Please select a program format.";
    if (form.message.trim().length < 8)
      next.message = "Please share a few details about your upcoming event or student needs.";
    if (!form.consent)
      next.consent = "Please confirm consent to be contacted regarding this inquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
              <CalendarCheck className="h-3.5 w-3.5" />
              Schedule &amp; Connect
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Let's Start the <span className="text-gradient">Conversation</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you are scheduling a school-wide assembly, exploring small-group intervention
              for at-risk youth, or seeking a keynote speaker, we are ready to assist.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              {submitted ? (
                <div className="flex h-full min-h-[30rem] flex-col items-center justify-center rounded-3xl border border-teal-200 bg-white p-10 text-center shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-bold text-slate-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                    Thank you, <strong className="text-slate-900">{form.fullName}</strong>. Brett
                    has received your message and will follow up with you within 24 to 48 hours to
                    discuss dates and program details.
                  </p>
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-left text-xs text-slate-600 border border-slate-100 max-w-sm w-full">
                    <p className="font-bold text-slate-900 mb-1">Inquiry Summary:</p>
                    <p>• Service: {form.service}</p>
                    {form.organization && <p>• Organization: {form.organization}</p>}
                    <p>
                      • Contact: {form.email} | {form.phone}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL_FORM);
                      setSubmitted(false);
                    }}
                    className="mt-8 rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs hover:border-primary hover:text-primary transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-card sm:p-9"
                >
                  <div className="border-b border-slate-100 pb-5 mb-6">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Request a Discovery Call &amp; Quote
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the details below. No upfront payment required to explore dates.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        className={inputClasses}
                        placeholder="e.g. Dr. Robert Miller"
                        value={form.fullName}
                        onChange={(e) => set("fullName", e.target.value)}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Work / Professional Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={inputClasses}
                        placeholder="principal@school.edu"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Direct Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className={inputClasses}
                        placeholder="(515) 555-0199"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        School / Organization Name
                      </label>
                      <input
                        id="organization"
                        className={inputClasses}
                        placeholder="e.g. Central High School"
                        value={form.organization}
                        onChange={(e) => set("organization", e.target.value)}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Program Format <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%221.66667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                        value={form.service}
                        onChange={(e) => set("service", e.target.value)}
                      >
                        <option value="" disabled>
                          Select program type…
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="audienceSize"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Audience Size
                      </label>
                      <select
                        id="audienceSize"
                        className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%221.66667%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                        value={form.audienceSize}
                        onChange={(e) => set("audienceSize", e.target.value)}
                      >
                        <option value="" disabled>
                          Select estimated size…
                        </option>
                        {AUDIENCE_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="callDate"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Target Date or Timeframe
                      </label>
                      <input
                        id="callDate"
                        type="date"
                        className={`${inputClasses} [color-scheme:light]`}
                        value={form.callDate}
                        onChange={(e) => set("callDate", e.target.value)}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Event Goals &amp; Student Background <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your campus, age group, or specific challenges you want Brett to address…"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  <label
                    htmlFor="consent"
                    className="mt-6 flex cursor-pointer items-start gap-3 text-xs text-slate-600"
                  >
                    <input
                      id="consent"
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-primary"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                    />
                    <span>
                      I agree to be contacted via phone or email regarding this speaking inquiry.{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.consent}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-brand-gradient mt-8 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-all hover:scale-[1.01] hover:shadow-lg sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Discovery Request</span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* Sidebar Info (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Direct Contact Card */}
            <Reveal delay={120}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-card">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-sm shadow-xs">
                    T2
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      Direct Contact
                    </h3>
                    <p className="text-xs text-slate-500">Brett Lasko, Founder</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100/70 text-primary">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>
                      <a
                        href="tel:+15152384806"
                        className="font-bold text-slate-900 hover:text-primary transition-colors"
                      >
                        (515) 238-4806
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100/70 text-teal-700">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Email
                      </p>
                      <a
                        href="mailto:brett.lasko@icloud.com"
                        className="font-bold text-slate-900 hover:text-primary transition-colors break-all"
                      >
                        brett.lasko@icloud.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3.5 border border-slate-100">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100/70 text-amber-700">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Base Location
                      </p>
                      <p className="font-bold text-slate-900">
                        Des Moines, Iowa (Travels Nationwide)
                      </p>
                    </div>
                  </li>
                </ul>

                <a
                  href="tel:+15152384806"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-blue-50 py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-blue-100 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Directly Now</span>
                </a>
              </div>
            </Reveal>

            {/* What to Expect Timeline */}
            <Reveal delay={200}>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-card">
                <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>What Happens After You Inquire</span>
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                      1
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">15-Min Discovery Call</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        We discuss your schedule, demographics, and key messages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                      2
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Customized Proposal &amp; Date Hold
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Receive transparent pricing and official date reservation for your approval.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                      3
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Pre-Event Alignment &amp; Delivery
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Final prep checklist ensures a smooth, high-impact campus experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consent and Form Documentation */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-slate-400" />
                      <span className="text-xs font-medium text-slate-600">
                        Consent &amp; Intake Forms
                      </span>
                    </div>
                    <a
                      href="mailto:brett.lasko@icloud.com?subject=Request%20Consent%20and%20W9%20Forms"
                      className="text-xs font-bold text-primary hover:underline"
                    >
                      Request Forms
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
