import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "In fifteen years as a high school administrator, I have rarely seen an assembly hold 800 teenagers in complete silence without a single phone in sight. Brett speaks to their reality without talking down to them. Several students waited afterward just to shake his hand.",
    name: "Marcus Vance",
    title: "Vice Principal & Dean of Students",
    organization: "Midwest High School",
  },
  {
    quote:
      "The small-group circle was a turning point for three of our highest-tier disciplinary students. Brett dismantled their hostility within minutes. Weeks later, our counselors still hear students reference the '5-minute rule' when tempers flare.",
    name: "Elena Rodriguez, M.Ed.",
    title: "Director of Alternative Education",
    organization: "Youth Transition Academy",
  },
  {
    quote:
      "Brett earned their respect immediately because his lived experience is undeniable. He gave our juvenile diversion youth practical frameworks for handling peer conflict that don't end in handcuffs or suspension.",
    name: "Darnell Jenkins",
    title: "Juvenile Justice & Diversion Coordinator",
    organization: "County Youth Outreach Alliance",
  },
];

export function Feedback() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Endorsements &amp; Impact
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              What Educators &amp; Coordinators Say
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Hear directly from school leaders and youth directors who have brought Talk2em to
              their campuses.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-xs">
                <div>
                  <Quote className="h-8 w-8 text-slate-300" aria-hidden="true" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-5">
                  <h4 className="font-display text-base font-bold text-slate-950">{item.name}</h4>
                  <p className="text-xs font-medium text-slate-600">{item.title}</p>
                  <p className="text-[11px] text-slate-400">{item.organization}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
