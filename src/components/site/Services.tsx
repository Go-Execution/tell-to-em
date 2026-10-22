import { Reveal } from "./Reveal";

const PROGRAMS = [
  {
    title: "Student Assemblies & Keynotes",
    audience: "Middle & High School (Grades 6–12)",
    duration: "45–60 Minutes",
    description:
      "Captivating whole-school presentations that dismantle toxic peer pressure, challenge impulse decisions, and inspire lasting self-respect.",
  },
  {
    title: "Small-Group Intervention Circles",
    audience: "Alternative Education & At-Risk Youth",
    duration: "60–90 Minutes",
    description:
      "Intimate knee-to-knee circles for adolescents navigating disciplinary probation, trauma, or conflict—focused on emotional control and personal ownership.",
  },
  {
    title: "Educator & Staff Workshops",
    audience: "Teachers, Counselors & Youth Mentors",
    duration: "60–90 Minutes",
    description:
      "Equips frontline adults with communication strategies to break through defensive teenage barriers without lowering behavioral expectations.",
  },
];

export function Services() {
  return (
    <section
      id="programs"
      className="relative py-20 sm:py-28 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="max-w-xl">
            <span className="font-mono-label text-xs text-[#7A746B]">Speaking Formats</span>
            <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
              Campus Programs
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
            {PROGRAMS.map((item) => (
              <div key={item.title} className="py-8 grid gap-4 sm:grid-cols-12 sm:items-baseline">
                <div className="sm:col-span-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#181614]">
                    {item.title}
                  </h3>
                  <p className="font-mono-label text-[11px] text-[#7A746B] mt-1">
                    {item.audience} • {item.duration}
                  </p>
                </div>

                <div className="sm:col-span-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <p className="text-sm text-[#5A554E] max-w-lg leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#inquire"
                    className="font-mono-label text-xs font-bold text-[#181614] hover:underline whitespace-nowrap"
                  >
                    Check Dates →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
