import { Reveal } from "./Reveal";

const ENDORSEMENTS = [
  {
    quote:
      "In fifteen years as a public high school administrator, I have rarely seen an assembly hold 800 students in total silence without a single phone out. Brett speaks to their reality without talking down to them. Several students waited afterward just to shake his hand.",
    name: "Marcus Vance",
    role: "Vice Principal & Dean of Students",
    institution: "Midwest High School",
  },
  {
    quote:
      "The small-group circle was a turning point for three of our highest-tier disciplinary students. Brett dismantled their hostility in minutes. Weeks later, our counselors still hear students reference the '5-minute rule' when tempers flare.",
    name: "Elena Rodriguez, M.Ed.",
    role: "Director of Alternative Education",
    institution: "Youth Transition Academy",
  },
  {
    quote:
      "Adolescents can spot insincerity in seconds. Brett earned their respect immediately because his lived experience is undeniable. He gave our diversion youth practical frameworks for handling peer conflict that don't end in handcuffs or suspension.",
    name: "Darnell Jenkins",
    role: "Juvenile Justice & Diversion Coordinator",
    institution: "County Youth Outreach Alliance",
  },
];

export function Feedback() {
  return (
    <section
      id="endorsements"
      className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#E8E4DC]">
            <div>
              <span className="font-mono-label text-[11px] text-[#7A746B]">
                School &amp; District Feedback
              </span>
              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
                Voices From the Field
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#5A554E] leading-relaxed">
              Real endorsements from administrators, juvenile directors, and counselors who have
              brought Brett Lasko to their student bodies.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3 pt-12">
            {ENDORSEMENTS.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between border-t border-[#181614] pt-6"
              >
                <blockquote className="font-serif text-lg sm:text-xl font-normal text-[#181614] leading-relaxed italic">
                  “{item.quote}”
                </blockquote>

                <div className="mt-8 border-t border-[#E8E4DC] pt-4">
                  <h4 className="font-serif text-base font-bold text-[#181614]">{item.name}</h4>
                  <p className="font-mono-label text-[11px] text-[#7A746B] mt-0.5">{item.role}</p>
                  <p className="font-mono-label text-[10px] text-[#A69F94]">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
