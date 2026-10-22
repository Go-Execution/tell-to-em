import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What age groups does Brett speak to?",
    a: "Brett primarily works with middle school students (grades 6–8), high school students (grades 9–12), alternative education centers, and transitional young adults (ages 18–24). He also conducts specialized workshops for educators, youth pastors, and parent groups.",
  },
  {
    q: "Can presentations be tailored to our campus's specific behavioral challenges?",
    a: "Yes. Customization is standard. Prior to every booking, Brett conducts an alignment call with your administrative or counseling team to address your school's specific focus areas—whether that is peer pressure, vaping and substance abuse, chronic truancy, or online drama.",
  },
  {
    q: "What AV equipment is needed for an assembly?",
    a: "A reliable wireless microphone (handheld or lapel) and a functioning PA sound system capable of reaching your gymnasium or auditorium. Brett does not use slides—his delivery is active and grounded in direct eye contact with every student.",
  },
  {
    q: "Is Brett available for travel outside of Iowa?",
    a: "Yes. While based in Des Moines, Iowa, Brett frequently travels across the Midwest and nationwide for school districts, state youth conferences, athletic summits, and juvenile justice initiatives.",
  },
  {
    q: "How do you coordinate with on-site school counselors?",
    a: "It is common for students to stay behind after an assembly. Talk2em adheres to strict youth safety guidelines. Any vulnerable disclosures or mental health flags are immediately introduced and handed off to your designated on-site counselors or administrators.",
  },
  {
    q: "How far in advance should we reserve dates?",
    a: "We recommend booking 4 to 8 weeks in advance, especially for high-demand seasons including Back-to-School orientations, Red Ribbon Week (October), MLK Jr. week (January), and Spring graduation assemblies.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center pb-12 border-b border-[#E8E4DC]">
            <span className="font-mono-label text-[11px] text-[#7A746B]">
              Logistics &amp; Scheduling
            </span>
            <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E8E4DC]">
            {FAQS.map((faq, i) => (
              <div key={faq.q} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-baseline justify-between text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-serif text-xl font-medium text-[#181614] group-hover:text-black">
                    {faq.q}
                  </span>
                  <span className="ml-4 text-xs font-mono-label text-[#7A746B]">
                    {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {openIndex === i && (
                  <div className="mt-3 pr-6">
                    <p className="text-sm text-[#5A554E] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
