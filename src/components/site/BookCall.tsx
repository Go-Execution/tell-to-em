import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PROGRAM_CHOICES = [
  "School Assembly (Middle or High School)",
  "Youth Intervention Circle (Small Group)",
  "Educator In-Service / PD Workshop",
  "Community or Faith-Based Youth Event",
  "Custom Campus Residency / Multi-Day",
];

export function BookCall() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    program: "",
    date: "",
    attendance: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Speaker Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Book Brett to Speak
              </span>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Check Dates &amp; Fees for Your Campus
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-300">
                Planning an assembly, staff in-service, or youth diversion circle? Complete the form
                to receive fee details, custom program options, and date holds within 24 hours.
              </p>

              {/* Direct Contacts */}
              <div className="mt-10 space-y-6 border-t border-slate-800 pt-8 text-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Speaker Direct Line
                  </span>
                  <a
                    href="tel:+15152384806"
                    className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>(515) 238-4806</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </span>
                  <a
                    href="mailto:brett.lasko@icloud.com"
                    className="mt-1 flex items-center gap-2 font-medium text-white hover:text-blue-400 transition-colors break-all"
                  >
                    <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                    <span>brett.lasko@icloud.com</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Base Location
                  </span>
                  <div className="mt-1 flex items-center gap-2 text-slate-300">
                    <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                    <span>Des Moines, Iowa (Travels Nationwide)</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 sm:p-10 shadow-2xl">
                {submitted ? (
                  <div className="py-12 text-center">
                    <CheckCircle2 className="mx-auto h-14 w-14 text-teal-400" />
                    <h3 className="font-display mt-5 text-2xl font-bold">Inquiry Received</h3>
                    <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{form.name}</strong>. Brett has
                      received your event inquiry and will follow up with availability and fee
                      details within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          org: "",
                          email: "",
                          phone: "",
                          program: "",
                          date: "",
                          attendance: "",
                          notes: "",
                        });
                      }}
                      className="mt-8 rounded-full border border-slate-700 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-500"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Your Full Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Principal Sarah Miller"
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-white focus:ring-1 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          School / Organization Name *
                        </label>
                        <input
                          required
                          value={form.org}
                          onChange={(e) => setForm({ ...form, org: e.target.value })}
                          placeholder="e.g. Roosevelt High School"
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-white focus:ring-1 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Work Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="smiller@school.edu"
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-white focus:ring-1 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(515) 555-0144"
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-white focus:ring-1 focus:ring-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Program Format
                        </label>
                        <select
                          value={form.program}
                          onChange={(e) => setForm({ ...form, program: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white"
                        >
                          <option value="">Select a format…</option>
                          {PROGRAM_CHOICES.map((choice) => (
                            <option key={choice} value={choice} className="bg-slate-900 text-white">
                              {choice}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                          Estimated Event Date
                        </label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-white focus:ring-1 focus:ring-white [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                        Event Goals &amp; Student Demographics
                      </label>
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Tell us about your campus, age group, or specific challenges you want Brett to speak on…"
                        className="mt-1.5 w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-white focus:ring-1 focus:ring-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-slate-200"
                    >
                      <span>Request Availability &amp; Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
