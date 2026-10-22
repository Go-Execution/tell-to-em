import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="story" className="relative py-24 sm:py-32 border-b border-[#E8E4DC]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Left Column: Image & Big Pull Quote */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono-label text-[11px] text-[#7A746B]">
                  Lived Guidance • Real Impact
                </span>
                <blockquote className="font-serif mt-6 text-2xl sm:text-3xl font-normal leading-snug text-[#181614] italic">
                  “When an adult speaks with radical honesty and genuine respect, young people don’t
                  shut down. They listen, they reflect, and they choose better.”
                </blockquote>
                <p className="mt-4 font-mono-label text-xs text-[#7A746B]">
                  — Brett Lasko, Founder of Talk2em
                </p>
              </div>

              <div className="mt-10">
                <div className="overflow-hidden border border-[#E8E4DC]">
                  <img
                    src={aboutImage}
                    alt="Brett Lasko in conversation with youth"
                    className="h-80 w-full object-cover object-top grayscale contrast-105 transition-all duration-700 hover:grayscale-0 sm:h-96"
                    width={1200}
                    height={912}
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-xs font-mono-label text-[#7A746B]">
                  Figure 1.1 — Small-Group Mentorship Circle
                </p>
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Tenets */}
            <div className="lg:col-span-7">
              <span className="font-mono-label text-[11px] text-[#7A746B]">
                The Story Behind Talk2em
              </span>

              <h2 className="font-serif mt-4 text-3xl font-normal tracking-tight text-[#181614] sm:text-4xl lg:text-5xl">
                Young people don't need another lecture. They need someone who has walked the fire
                they are in right now.
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-[#5A554E]">
                <p>
                  Today’s youth navigate pressures that no previous generation ever had to face in
                  the palm of their hands. Between digital permanence, viral peer expectations,
                  fractured families, and the easy trap of impulsive rebellion, one poor choice can
                  derail a decade of potential.
                </p>
                <p>
                  Brett Lasko founded Talk2em to provide what standard curriculums cannot: a bridge
                  of authentic credibility. Having walked through severe adversity and navigated
                  life-defining decisions himself, Brett speaks directly to the hearts and minds of
                  teenagers without judgment, condescension, or empty clichés.
                </p>
              </div>

              {/* Three Editorial Tenets */}
              <div className="mt-12 divide-y divide-[#E8E4DC] border-y border-[#E8E4DC]">
                <div className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-label text-xs text-[#7A746B]">01</span>
                    <h3 className="font-serif text-xl font-medium text-[#181614]">
                      Radical Relatability Over Theory
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm text-[#5A554E] leading-relaxed">
                    We skip the clinical slides and moralizing scripts. Brett addresses the raw
                    reality of peer pressure, street temptations, trauma, and anger head-on.
                  </p>
                </div>

                <div className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-label text-xs text-[#7A746B]">02</span>
                    <h3 className="font-serif text-xl font-medium text-[#181614]">
                      The Critical 5-Minute Window
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm text-[#5A554E] leading-relaxed">
                    Most life-altering mistakes happen in an impulsive five-minute flash. Students
                    learn how to create space between emotional triggers and permanent consequences.
                  </p>
                </div>

                <div className="py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono-label text-xs text-[#7A746B]">03</span>
                    <h3 className="font-serif text-xl font-medium text-[#181614]">
                      Unapologetic Personal Ownership
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-sm text-[#5A554E] leading-relaxed">
                    No excuses, no blame. Students leave understanding that while they may not have
                    chosen their upbringing, they have 100% control over their next decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
