import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function BookCall() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.contact) {
      setSubmitted(true);
    }
  };

  return (
    <section id="inquire" className="relative py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Direct Info (5 cols) */}
            <div className="lg:col-span-5">
              <span className="font-mono-label text-xs text-[#7A746B]">
                Scheduling &amp; Inquiries
              </span>
              <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
                Book Brett for Your Campus
              </h2>
              <p className="mt-4 text-sm text-[#5A554E] leading-relaxed">
                To reserve dates, receive fee details, or discuss an assembly, submit your inquiry
                or reach out directly.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#E8E4DC] pt-6 text-sm">
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">
                    Phone (Call / Text)
                  </span>
                  <a
                    href="tel:+15152384806"
                    className="block font-serif text-xl text-[#181614] hover:underline mt-0.5"
                  >
                    515.238.4806
                  </a>
                </div>
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">Direct Email</span>
                  <a
                    href="mailto:brett.lasko@icloud.com"
                    className="block font-mono text-xs text-[#181614] hover:underline mt-0.5"
                  >
                    brett.lasko@icloud.com
                  </a>
                </div>
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B]">Base Location</span>
                  <p className="font-serif text-sm text-[#181614] mt-0.5">
                    Des Moines, Iowa • Available Nationwide
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Clean Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="border border-[#181614] bg-white p-6 sm:p-8">
                {submitted ? (
                  <div className="py-8 text-center">
                    <h3 className="font-serif text-2xl font-normal text-[#181614]">
                      Inquiry Received
                    </h3>
                    <p className="mt-2 text-sm text-[#5A554E]">
                      Thank you, {form.name}. Brett will follow up with availability within 24
                      hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", org: "", contact: "", message: "" });
                      }}
                      className="mt-6 font-mono-label text-xs underline text-[#181614]"
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        Your Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Principal or Coordinator Name"
                        className="mt-1 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        School or Organization
                      </label>
                      <input
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        placeholder="School Name"
                        className="mt-1 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        Email or Phone *
                      </label>
                      <input
                        required
                        value={form.contact}
                        onChange={(e) => setForm({ ...form, contact: e.target.value })}
                        placeholder="email@school.edu or (515) 000-0000"
                        className="mt-1 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        Target Date &amp; Notes
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tentative event date, grade levels, or student topics..."
                        className="mt-1 w-full border-b border-[#181614] bg-transparent py-2 text-sm text-[#181614] placeholder:text-[#A69F94] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full bg-[#181614] py-3.5 text-xs font-bold uppercase tracking-widest text-[#FAF8F5] hover:bg-black transition-colors"
                    >
                      Request Availability &amp; Quote
                    </button>
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
