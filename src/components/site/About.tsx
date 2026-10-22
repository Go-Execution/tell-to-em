import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Photo Column (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  <img
                    src={aboutImage}
                    alt="Brett Lasko mentoring young students in a small group session"
                    className="h-[480px] w-full object-cover object-top sm:h-[520px]"
                    width={1200}
                    height={912}
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-slate-900">Brett Lasko</span>
                  <span>Founder &amp; Youth Speaker, Talk2em LLC</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Meet Brett Lasko
              </span>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Young People Don't Need Another Lecture. They Need Truth from Someone Who Has Stood
                in Their Shoes.
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Having navigated severe adversity and pivotal crossroads in his own youth, Brett
                  Lasko understands the invisible pressures today's teenagers carry—the pressure to
                  project toughness, the temptation to choose fast validation over long-term
                  character, and the reckless impulse that can dismantle years of potential in five
                  seconds.
                </p>
                <p>
                  Talk2em was built on a straightforward conviction:{" "}
                  <strong className="font-semibold text-slate-950">
                    when an adult speaks with radical honesty and genuine respect, young people
                    don't put up their guard—they lean in.
                  </strong>
                </p>
              </div>

              {/* 3 Foundational Principles */}
              <div className="mt-8 border-t border-slate-100 pt-8 space-y-5">
                <div>
                  <h3 className="font-display text-base font-bold text-slate-950">
                    1. Real-World Relatability
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We discard academic slides and moralizing scripts. Brett speaks directly to the
                    realities of peer pressure, trauma, anger, and choices.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-slate-950">
                    2. The 5-Minute Window
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Most life-altering mistakes happen in an emotional 5-minute flash. We train
                    youth to recognize that pause and take control of their reaction.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-base font-bold text-slate-950">
                    3. Unapologetic Personal Ownership
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    No excuses, no blame games. Students leave understanding that their background
                    doesn't dictate their destination—their decisions do.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 hover:underline"
                >
                  <span>Inquire About Having Brett at Your School or Program →</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
