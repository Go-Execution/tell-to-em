import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What age groups does Brett speak to?",
    a: "Brett works with middle school (grades 6–8), high school (grades 9–12), alternative learning programs, and young adults (ages 18–24).",
  },
  {
    q: "Can presentations be customized for our campus?",
    a: "Yes. An alignment call prior to every booking ensures the presentation addresses your specific school priorities and climate.",
  },
  {
    q: "What AV equipment is needed?",
    a: "A reliable wireless microphone and standard auditorium/gym PA sound system. Brett does not use slides.",
  },
  {
    q: "Is Brett available for travel outside of Iowa?",
    a: "Yes. Headquartered in Des Moines, Iowa, Brett travels across the Midwest and nationwide for school districts and conferences.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center pb-8 border-b border-[#E8E4DC]">
            <span className="font-mono-label text-xs text-[#7A746B]">Common Questions</span>
            <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">FAQ</h2>
          </div>

          <div className="divide-y divide-[#E8E4DC]">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-baseline justify-between text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#181614]">
                    {faq.q}
                  </span>
                  <span className="ml-4 text-xs font-mono-label text-[#7A746B]">
                    {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {openIndex === i && (
                  <p className="mt-2 text-sm text-[#5A554E] leading-relaxed pr-6">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
