import { useState, type FormEvent } from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { submitInquiry } from "@/lib/cms-client";

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
      submitInquiry({
        contact_name: form.name,
        school_name: form.org || "Unspecified School",
        email: form.contact.includes("@") ? form.contact : "",
        phone: !form.contact.includes("@") ? form.contact : "",
        notes: form.message,
      });
      setSubmitted(true);
    }
  };

  return (
    <section id="inquire" className="relative py-28 sm:py-36 bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-24">
            {/* Direct Info (5 cols) */}
            <div className="lg:col-span-5">
              <span className="font-mono-label text-xs text-[#7A746B]">
                Scheduling &amp; Inquiries
              </span>
              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
                Book Brett for Your Campus
              </h2>
              <p className="mt-6 text-base text-[#5A554E] leading-relaxed">
                To reserve dates, receive fee details, or discuss an assembly, submit your inquiry
                or reach out directly.
              </p>

              <div className="mt-10 space-y-6 border-t border-[#E8E4DC] pt-8 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-full bg-white border border-[#E8E4DC] p-2 text-[#181614] shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] uppercase tracking-wider text-[#7A746B] block">
                      Toll-Free Phone (Call / Text)
                    </span>
                    <a
                      href="tel:+18444865236"
                      className="font-serif text-2xl font-medium text-[#181614] hover:underline"
                    >
                      (844) I-tok-2-em
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-full bg-white border border-[#E8E4DC] p-2 text-[#181614] shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] uppercase tracking-wider text-[#7A746B] block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info@tok2em.com"
                      className="font-mono text-sm font-semibold text-[#181614] hover:underline"
                    >
                      info@tok2em.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-full bg-white border border-[#E8E4DC] p-2 text-[#181614] shrink-0 mt-0.5">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] uppercase tracking-wider text-[#7A746B] block">
                      Official Domain
                    </span>
                    <a
                      href="https://talk2emllc.com"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs font-semibold text-[#181614] hover:underline"
                    >
                      talk2emllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-full bg-white border border-[#E8E4DC] p-2 text-[#7A746B] shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono-label text-[10px] uppercase tracking-wider text-[#7A746B] block">
                      Headquarters & Base Location
                    </span>
                    <p className="font-serif text-base text-[#181614]">
                      6701 Corporate Dr, Suite N, Johnston, IA 50131
                    </p>
                    <p className="text-xs text-[#7A746B] font-mono-label mt-0.5">
                      Des Moines Metro • Available Nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Clean Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="border border-[#181614] bg-white p-8 sm:p-12 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <h3 className="font-serif text-3xl font-normal text-[#181614]">
                      Inquiry Received
                    </h3>
                    <p className="mt-3 text-base text-[#5A554E]">
                      Thank you, {form.name}. Brett will follow up with availability within 24
                      hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", org: "", contact: "", message: "" });
                      }}
                      className="mt-8 font-mono-label text-xs underline text-[#181614]"
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block font-mono-label text-[10px] text-[#181614]">
                        Your Name *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Principal or Coordinator Name"
                        className="mt-2 w-full border-b border-[#181614] bg-transparent py-3 text-base text-[#181614] placeholder:text-[#A69F94] outline-none"
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
                        className="mt-2 w-full border-b border-[#181614] bg-transparent py-3 text-base text-[#181614] placeholder:text-[#A69F94] outline-none"
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
                        className="mt-2 w-full border-b border-[#181614] bg-transparent py-3 text-base text-[#181614] placeholder:text-[#A69F94] outline-none"
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
                        className="mt-2 w-full border-b border-[#181614] bg-transparent py-3 text-base text-[#181614] placeholder:text-[#A69F94] outline-none resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-[#181614] py-4 text-xs font-bold uppercase tracking-widest text-[#FAF8F5] hover:bg-black transition-colors"
                      >
                        Request Availability &amp; Quote
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
