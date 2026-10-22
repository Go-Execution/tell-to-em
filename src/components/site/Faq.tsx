import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "What age groups does Brett speak to?",
    answer:
      "Brett primarily speaks to middle school (grades 6–8), high school (grades 9–12), alternative education programs, and transitional young adults (ages 18–24). He also conducts workshops for educators, parent associations, and youth mentors.",
  },
  {
    question: "Can keynotes be tailored to our campus's specific issues?",
    answer:
      "Yes. Prior to every booking, Brett conducts an alignment call with your administration or counseling team to identify your campus culture, recent disciplinary concerns, and core learning goals so the presentation addresses what matters most.",
  },
  {
    question: "What AV equipment is required for an assembly?",
    answer:
      "A quality wireless handheld or lapel microphone and a sound system capable of reaching your auditorium or gymnasium. Brett does not rely on slides—his delivery is active, moving across the floor to maintain eye contact with every student.",
  },
  {
    question: "Is Brett available for travel outside Iowa?",
    answer:
      "Yes. While based in Des Moines, Iowa, Brett frequently travels across the Midwest and nationwide for school districts, conferences, state youth summits, and juvenile justice programs.",
  },
  {
    question: "How do you handle students who open up after the presentation?",
    answer:
      "It is common for students to stay behind to talk. Talk2em maintains strict youth safety standards. Any sensitive disclosures or mental health flags are immediately introduced and handed off to your designated on-site guidance counselors or social workers.",
  },
  {
    question: "How far in advance should our school schedule?",
    answer:
      "We recommend booking 4 to 8 weeks in advance, especially for high-demand seasons including Back-to-School orientations, Red Ribbon Week (October), MLK Jr. week (January), and Spring graduation assemblies.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Frequently Asked Questions
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Logistics, Travel &amp; Booking Details
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, i) => (
            <div key={faq.question} className="py-6">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-lg font-bold text-slate-950">
                  {faq.question}
                </span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                  {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>

              {openIndex === i && (
                <div className="mt-3 pr-10">
                  <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
