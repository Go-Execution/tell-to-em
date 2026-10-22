import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "What age groups does Talk2em LLC specialize in?",
    answer:
      "We primarily serve middle school, junior high, high school, and transitional young adults (ages 11–24). We also deliver targeted workshops for college freshmen, student-athletes, and community mentorship cohorts.",
  },
  {
    question: "Can presentations be customized to our school's specific issues?",
    answer:
      "Absolutely. In fact, customization is our standard practice. During our initial discovery call, we discuss your campus climate—whether your primary concerns are peer pressure, chronic truancy, impulse control, online drama, or disciplinary escalation—and weave targeted solutions into the message.",
  },
  {
    question: "What AV equipment is needed for an assembly or keynote?",
    answer:
      "Brett requires a reliable wireless handheld or lapel microphone and a functioning PA sound system. He does not rely on boring, slide-heavy PowerPoint decks—his delivery is active, dynamic, and focused on eye-to-eye connection with the student body.",
  },
  {
    question: "Are you available for travel outside of Iowa?",
    answer:
      "Yes. While Talk2em LLC is headquartered in Des Moines, Iowa, we travel across the Midwest and nationwide for school districts, conferences, state youth summits, and juvenile justice programs.",
  },
  {
    question: "How do you handle students who open up emotionally after a session?",
    answer:
      "It is very common for students to stay behind to speak with Brett. Talk2em maintains strict adherence to youth safety standards. Any critical disclosures or mental health flags are immediately introduced and handed off to your designated on-site guidance counselors, social workers, or administrators.",
  },
  {
    question: "How far in advance should our school or organization book?",
    answer:
      "We recommend scheduling 3 to 8 weeks in advance, especially for high-demand seasons like Back-to-School orientations, Red Ribbon Week (October), MLK Jr. week (January), and Spring graduation lead-ups.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Everything You Need to <span className="text-gradient">Know Before Booking</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Have questions regarding logistics, safety, or format details? Here are the most
              common inquiries from principals, program managers, and coordinators.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 50}>
              <div
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  openIndex === i
                    ? "border-primary/50 bg-blue-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180 bg-primary text-white" : "text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {openIndex === i && (
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Still have questions card */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Have a specific question not covered here?
              </h3>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Call Brett directly or send us an email to get immediate answers for your board or
                committee.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href="tel:+15152384806"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>(515) 238-4806</span>
              </a>
              <a
                href="#contact"
                className="bg-brand-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow"
              >
                <span>Inquire Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
