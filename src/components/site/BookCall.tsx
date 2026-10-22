import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

const FORMAT_OPTIONS = [
  "School Assembly (Middle or High School)",
  "Small-Group Intervention Circle",
  "Educator In-Service / PD Workshop",
  "Community or Faith-Based Youth Event",
  "Full-Day Campus Residency / Multi-Keynote",
];

export function BookCall() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    format: "",
    date: "",
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
    <section id="inquire" className="relative py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left: Speaker Contact & Authority */}
            <div className="lg:col-span-5">
              <span className="font-mono-label text-[11px] text-[#7A746B]">
                Booking &amp; Inquiries
              </span>

              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
                Reserve Dates for Your Campus
              </h2>

              <p className="mt-6 text-base text-[#5A554E] leading-relaxed">
                Brett Lasko accepts a limited calendar of school assemblies and intervention
                residencies each semester. To reserve a tentative date hold or receive a transparent
                honorarium quote, submit the form or reach out directly.
              </p>

              <div className="mt-10 border-t border-[#E8E4DC] pt-8 space-y-6 text-sm">
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">
                    Direct Phone (Call or Text)
                  </span>
                  <a
                    href="tel:+15152384806"
                    className="block font-serif text-2xl font-normal text-[#181614] hover:underline mt-1"
                  >
                    515.238.4806
                  </a>
                </div>

                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">Direct Email</span>
                  <a
                    href="mailto:brett.lasko@icloud.com"
                    className="block font-mono text-sm text-[#181614] hover:underline mt-1 break-all"
                  >
                    brett.lasko@icloud.com
                  </a>
                </div>

                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">
                    Location &amp; Travel
                  </span>
                  <p className="font-serif text-base text-[#181614] mt-1">
                    Des Moines, Iowa • Available for Nationwide Travel
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-xs text-[#7A746B] leading-relaxed">
                    Need a W-9, vendor onboarding packet, or insurance verification for your school
                    board? Our booking desk provides all institutional documentation immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Clean Editorial Form */}
            <div className="lg:col-span-7">
              <div className="border border-[#181614] bg-white p-8 sm:p-12">
                {submitted ? (
                  <div className="py-12 text-center">
                    <span className="font-mono-label text-xs text-[#7A746B]">Inquiry Logged</span>
                    <h3 className="font-serif mt-4 text-3xl font-normal text-[#181614]">
                      Thank you, {form.name}.
                    </h3>
                    <p className="mt-3 text-sm text-[#5A554E] max-w-md mx-auto leading-relaxed">
                      Brett has received your campus inquiry. You will receive an email response
                      with calendar availability and honorarium details within 24 hours.
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
                          format: "",
                          date: "",
                          notes: "",
                        });
                      }}
                      className="mt-8 font-mono-label text-xs underline text-[#181614]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#E8E4DC] pb-4">
                      <span className="font-mono-label text-xs text-[#181614]">
                        Schedule Inquiry Form
                      </span>
                      <p className="text-xs text-[#7A746B] mt-1">
                        All fields marked with an asterisk (*) are required.
                      </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          Your Name *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Principal Miller"
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          School or Organization *
                        </label>
                        <input
                          required
                          value={form.org}
                          onChange={(e) => setForm({ ...form, org: e.target.value })}
                          placeholder="e.g. West High School"
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          Professional Email *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@school.edu"
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          Phone Number *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="515.555.0123"
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          Desired Program Format
                        </label>
                        <select
                          value={form.format}
                          onChange={(e) => setForm({ ...form, format: e.target.value })}
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-xs text-[#181614] outline-none focus:border-b-2"
                        >
                          <option value="">Select a format…</option>
                          {FORMAT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono-label text-[10px] text-[#181614]">
                          Target Date or Semester
                        </label>
                        <input
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          placeholder="e.g. Fall 2026 or Oct 14"
                          className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        Campus Demographics &amp; Core Priorities
                      </label>
                      <textarea
                        rows={3}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Tell us about your student body, grade levels, or specific behavioral challenges you would like Brett to address…"
                        className="mt-1.5 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none focus:border-b-2 resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#181614] py-4 text-xs font-bold uppercase tracking-widest text-[#FAF8F5] transition-all hover:bg-black"
                      >
                        Submit Date &amp; Fee Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
