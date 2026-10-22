import { Reveal } from "./Reveal";

const ENDORSEMENTS = [
  {
    quote:
      "In fifteen years as an administrator, I have rarely seen an assembly hold 800 high schoolers in total silence without a single phone out. Several students waited afterward just to shake his hand.",
    name: "Marcus Vance",
    role: "Vice Principal, Midwest High School",
  },
  {
    quote:
      "The small-group circle was a turning point for three of our highest-tier disciplinary students. Weeks later, they still quote his advice on owning their next five minutes.",
    name: "Elena Rodriguez, M.Ed.",
    role: "Director of Alternative Education",
  },
];

export function Feedback() {
  return (
    <section
      id="endorsements"
      className="relative py-20 sm:py-28 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <span className="font-mono-label text-xs text-[#7A746B]">From Administrators</span>
          <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
            Endorsements
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {ENDORSEMENTS.map((item) => (
              <div
                key={item.name}
                className="border-t border-[#181614] pt-6 flex flex-col justify-between"
              >
                <blockquote className="font-serif text-xl sm:text-2xl font-normal text-[#181614] leading-snug italic">
                  “{item.quote}”
                </blockquote>
                <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
                  <p className="font-serif text-base font-bold text-[#181614]">{item.name}</p>
                  <p className="font-mono-label text-xs text-[#7A746B] mt-0.5">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
