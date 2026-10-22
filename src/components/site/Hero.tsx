import { Play, ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="h-2 w-2 rounded-full bg-slate-950" />
                <span>Brett Lasko • Keynote Speaker &amp; Youth Advocate</span>
              </div>

              <h1 className="font-display mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                Helping Teens Find Direction Before Choices Become Consequences.
              </h1>

              <p className="font-display mt-4 text-xl font-medium italic text-slate-700 sm:text-2xl">
                “Our Words, <span className="font-bold text-slate-950 not-italic">Your Wisdom</span>
                ”
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Talk2em bridges the generational divide through unfiltered, lived-experience
                assemblies and small-group circles. We give students the moral courage, impulse
                control, and self-respect required to navigate today's heaviest pressures.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#reel"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-50"
                >
                  <Play className="h-4 w-4 fill-slate-950 text-slate-950" />
                  <span>Watch Speaker Reel</span>
                </a>
              </div>

              {/* Direct Authority Proof */}
              <div className="mt-12 border-t border-slate-100 pt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Trusted by Educators &amp; Youth Programs Across Iowa &amp; Nationwide
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-8 text-slate-900 font-display">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Users className="h-4 w-4 text-slate-600" />
                    <span>5,000+ Students Reached</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <Award className="h-4 w-4 text-slate-600" />
                    <span>45+ Partner Institutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <ShieldCheck className="h-4 w-4 text-slate-600" />
                    <span>Certified Youth Mentorship</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean, Uncluttered Speaker Photography */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                  <img
                    src={heroImage}
                    alt="Brett Lasko addressing a student assembly"
                    className="h-[480px] w-full object-cover object-center sm:h-[540px]"
                    width={1920}
                    height={1080}
                    fetchPriority="high"
                  />
                </div>
                {/* Clean, subtle caption strip */}
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>Brett Lasko on stage at student assembly</span>
                  <span className="font-semibold text-slate-700">
                    Assemblies • Circles • Keynotes
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
