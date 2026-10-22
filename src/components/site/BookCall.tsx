import { useState, type FormEvent } from "react";
import { CalendarCheck, Mail, Phone, FileText, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "Motivational Public Speaking",
  "Youth Intervention",
  "Community & School Engagement",
  "Other / Not Sure Yet",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  service: string;
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
  callDate: "",
  message: "",
  consent: false,
};

const inputClasses =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-aqua/60 focus:ring-2 focus:ring-aqua/20";

export function BookCall() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  // Frontend-only validation for this mockup — no backend involved.
  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email.";
    if (!/^[\d\s()+-]{7,}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (!form.service) next.service = "Please choose a service.";
    if (form.message.trim().length < 10) next.message = "Please write at least a short message.";
    if (!form.consent) next.consent = "Please confirm consent to be contacted.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulated success for the mockup — wired for email-based contact later.
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-violet/10 blur-[140px]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aqua">Book a Call</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Let’s Start the <span className="text-gradient">Conversation</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you’re looking for a speaker, youth-focused support, or a meaningful session
              for your organization, we’d love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-3xl border border-aqua/30 bg-card p-10 text-center">
                <CheckCircle2 className="text-aqua h-12 w-12" aria-hidden="true" />
                <h3 className="font-display mt-5 text-2xl font-semibold">Request Received</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you, {form.fullName.split(" ")[0]}. Your call request has been recorded in
                  this demo. We’ll be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm font-semibold transition-colors hover:border-aqua/50 hover:text-aqua"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                      Full Name <span className="text-pink">*</span>
                    </label>
                    <input
                      id="fullName"
                      className={inputClasses}
                      placeholder="Jane Doe"
                      value={form.fullName}
                      onChange={(e) => set("fullName", e.target.value)}
                    />
                    {errors.fullName && <p className="mt-1.5 text-xs text-destructive">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email <span className="text-pink">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClasses}
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                      Phone <span className="text-pink">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="(555) 000-0000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="organization" className="mb-2 block text-sm font-medium">
                      Organization <span className="text-xs text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="organization"
                      className={inputClasses}
                      placeholder="School, church, program…"
                      value={form.organization}
                      onChange={(e) => set("organization", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium">
                      Service Interested In <span className="text-pink">*</span>
                    </label>
                    <select
                      id="service"
                      className={`${inputClasses} appearance-none`}
                      value={form.service}
                      onChange={(e) => set("service", e.target.value)}
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-card text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="callDate" className="mb-2 block text-sm font-medium">
                      Preferred Call Date
                    </label>
                    <input
                      id="callDate"
                      type="date"
                      className={`${inputClasses} [color-scheme:dark]`}
                      value={form.callDate}
                      onChange={(e) => set("callDate", e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message <span className="text-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us a little about what you have in mind…"
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>

                <label htmlFor="consent" className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--aqua)]"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                  />
                  <span>
                    I agree to be contacted about my inquiry. <span className="text-pink">*</span>
                  </span>
                </label>
                {errors.consent && <p className="mt-1.5 text-xs text-destructive">{errors.consent}</p>}

                <button
                  type="submit"
                  className="bg-brand-gradient mt-8 w-full rounded-full px-8 py-4 text-base font-semibold text-background shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
                >
                  Request a Call
                </button>
              </form>
            )}
          </Reveal>

          {/* Contact details + forms */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold">Contact Directly</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary">
                      <Mail className="text-aqua h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                      <a href="mailto:brett.lasko@icloud.com" className="font-medium transition-colors hover:text-aqua">
                        brett.lasko@icloud.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary">
                      <Phone className="text-aqua h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                      <a href="tel:+15152384806" className="font-medium transition-colors hover:text-aqua">
                        (515) 238-4806
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  href="tel:+15152384806"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-aqua/40 bg-aqua/10 px-6 py-3 text-sm font-semibold text-aqua transition-colors hover:bg-aqua/20"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <h3 className="font-display text-xl font-semibold">Consent &amp; Important Forms</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Consent forms and additional documents can be provided based on the type of
                  program or engagement.
                </p>
                <a
                  href="mailto:brett.lasko@icloud.com?subject=Consent%20Forms%20Request"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-violet/50 hover:text-violet"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Request Consent Forms
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
