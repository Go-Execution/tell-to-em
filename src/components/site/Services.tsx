import { Reveal } from "./Reveal";

const PROGRAMS = [
  {
    num: "I.",
    title: "Student Assemblies & Campus Keynotes",
    audience: "Middle & High School Student Bodies (Grades 6–12)",
    duration: "45–60 Minutes + Live Student Q&A",
    description:
      "A high-impact, captivating presentation for whole auditoriums or grade-level cohorts. Brett commands the room through unfiltered storytelling, dismantling peer pressure and challenging students to make decisions they can look back on with pride.",
    outcomes: [
      "Understanding the permanence of impulsive choices",
      "Overcoming toxic peer comparison and street pressure",
      "Building authentic self-worth and character integrity",
      "Cultivating respect for teachers, parents, and community",
    ],
  },
  {
    num: "II.",
    title: "Small-Group Intervention Circles",
    audience: "Alternative Learning Centers, Diversion Programs & At-Risk Youth",
    duration: "60–90 Minute Sessions (Single or Multi-Week Cohorts)",
    description:
      "Intimate, knee-to-knee discussions for youth on behavioral probation, disciplinary referral, or navigating severe family adversity. Provides an authentic, respectful space to defuse hostility and construct an actionable roadmap forward.",
    outcomes: [
      "De-escalating explosive anger and impulse reactions",
      "Concrete strategies to resist negative crowd pressure",
      "Restoring self-worth and personal ambition",
      "Drafting an individual 30-day accountability contract",
    ],
  },
  {
    num: "III.",
    title: "Educator & Community Workshops",
    audience: "Faculty, Counselors, Youth Mentors & Parent Associations",
    duration: "60–90 Minute In-Service or Half-Day Staff Development",
    description:
      "Equips adults on the front lines with practical communication frameworks to connect with resistant, emotionally guarded teenagers. Learn what actually breaks through defensive teenage walls without lowering behavioral expectations.",
    outcomes: [
      "Decoding hidden cries for help beneath defiant behavior",
      "De-escalation frameworks that prevent disciplinary blowups",
      "Trauma-informed guidance without sacrificing standards",
      "Creating unified school, home, and community mentorship networks",
    ],
  },
];

export function Services() {
  return (
    <section
      id="programs"
      className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#E8E4DC]">
            <div>
              <span className="font-mono-label text-[11px] text-[#7A746B]">Program Formats</span>
              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
                How Brett Partners With Your Campus
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#5A554E] leading-relaxed">
              Programs can be scheduled as standalone keynotes or combined into full-day campus
              residencies with assemblies and small-group circles.
            </p>
          </div>

          {/* Editorial Ledger Rows */}
          <div className="divide-y divide-[#E8E4DC]">
            {PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="py-12 sm:py-16 grid gap-8 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-1">
                  <span className="font-serif text-2xl text-[#7A746B] italic font-normal">
                    {program.num}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181614]">
                    {program.title}
                  </h3>
                  <div className="mt-4 space-y-1 text-xs font-mono-label text-[#7A746B]">
                    <p>
                      <strong className="text-[#181614]">Audience:</strong> {program.audience}
                    </p>
                    <p>
                      <strong className="text-[#181614]">Format:</strong> {program.duration}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-base text-[#5A554E] leading-relaxed">{program.description}</p>

                  <div className="mt-6 border-t border-[#E8E4DC]/70 pt-4">
                    <p className="font-mono-label text-[11px] text-[#181614] mb-3">
                      Expected Student &amp; Staff Takeaways:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#5A554E]">
                      {program.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#181614] mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#inquire"
                      className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
                    >
                      Inquire About {program.title} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
