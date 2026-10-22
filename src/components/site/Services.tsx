import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PROGRAMS = [
  {
    title: "School Assemblies & Student Keynotes",
    audience: "Middle & High School Student Bodies (Grades 6–12)",
    duration: "45–60 Minutes + Live Student Q&A",
    description:
      "A high-energy, captivating presentation designed for entire auditoriums or class cohorts. Brett commands the room without gimmicks, sharing raw personal stories that challenge students to respect themselves, their peers, and their future.",
    takeaways: [
      "Dismantling toxic peer pressure & comparison",
      "Recognizing how a 5-minute impulse can alter a lifetime",
      "Building authentic self-worth and character",
      "Fostering mutual respect with educators and family",
    ],
  },
  {
    title: "Small-Group Intervention Circles",
    audience: "Alternative Learning Programs, Diversion & At-Risk Youth",
    duration: "60–90 Minute Circles (Single or Multi-Week Series)",
    description:
      "Intimate, knee-to-knee discussions for adolescents on behavioral probation, disciplinary referral, or navigating severe trauma. These circles provide a safe, respectful environment to untangle anger and chart an actionable way forward.",
    takeaways: [
      "De-escalating explosive anger and impulsive rebellion",
      "Concrete strategies for avoiding negative street influences",
      "Restoring personal pride and goal orientation",
      "Creating an individual 30-day accountability plan",
    ],
  },
  {
    title: "Educator & Community Workshops",
    audience: "Teachers, Counselors, Youth Pastors & Parent Associations",
    duration: "60–90 Minute In-Service or Professional Development",
    description:
      "Equips adults on the front lines with practical communication tools to reach guarded, distrustful youth. Brett shares what actually breaks through defensive teenage barriers and how to maintain high expectations while offering real support.",
    takeaways: [
      "Decoding hidden cries for help beneath defiant behavior",
      "Communication frameworks that de-escalate defensive teens",
      "Trauma-informed engagement without lowering behavioral standards",
      "Building unified school and community mentorship networks",
    ],
  },
];

export function Services() {
  return (
    <section
      id="programs"
      className="relative py-24 sm:py-32 bg-slate-50 border-y border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Speaking Formats &amp; Offerings
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Tailored Programs for Schools, Districts &amp; Communities
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Every campus faces unique behavioral dynamics. Programs can be delivered as standalone
              keynotes or combined into full-day campus residencies with assemblies and small-group
              circles.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.title} delay={i * 100}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-xs transition-shadow hover:shadow-md">
                <div>
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {program.duration}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-bold text-slate-950">
                      {program.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    <strong className="text-slate-700">Audience:</strong> {program.audience}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {program.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-950">
                      Key Outcomes:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {program.takeaways.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-950 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:underline"
                  >
                    <span>Check Dates for This Format</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
