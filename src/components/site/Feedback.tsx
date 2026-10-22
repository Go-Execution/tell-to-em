import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import { Reveal } from "./Reveal";

const ENDORSEMENTS = [
  {
    quote:
      "In fifteen years as an administrator, I have rarely seen an assembly hold 800 high schoolers in total silence without a single phone out. Several students waited afterward just to shake his hand.",
    name: "Marcus Vance",
    role: "Vice Principal, Midwest High School",
    avatar: avatar1,
  },
  {
    quote:
      "The small-group circle was a turning point for three of our highest-tier disciplinary students. Weeks later, they still quote his advice on owning their next five minutes.",
    name: "Elena Rodriguez, M.Ed.",
    role: "Director of Alternative Education",
    avatar: avatar2,
  },
];

export function Feedback() {
  return (
    <section
      id="endorsements"
      className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="font-mono-label text-xs text-[#7A746B]">From Administrators</span>
          <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
            Endorsements
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {ENDORSEMENTS.map((item) => (
              <div
                key={item.name}
                className="border border-[#E8E4DC] bg-white p-8 shadow-xs flex flex-col justify-between"
              >
                <blockquote className="font-serif text-xl font-normal text-[#181614] leading-relaxed italic">
                  “{item.quote}”
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[#E8E4DC] flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[#E8E4DC] shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-full w-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-[#181614]">{item.name}</p>
                    <p className="font-mono-label text-[11px] text-[#7A746B] mt-0.5">{item.role}</p>
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
