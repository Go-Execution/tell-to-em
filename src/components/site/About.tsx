import { CheckCircle, ShieldAlert, Sparkles, UserCheck, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const METHOD_POINTS = [
  {
    icon: Sparkles,
    title: "Speaking Their Language Without Pandering",
    text: "Young people possess an incredible radar for authenticity. We skip the clinical jargon and moralizing scripts to speak honestly about real-world struggles, peer pressure, anger, and choices.",
    badge: "Authenticity",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    icon: ShieldAlert,
    title: "Early Intervention That Prevents Permanent Detours",
    text: "A single poor decision can alter a young person's trajectory for years. Our intervention focuses on the critical 5-minute window of impulse control, emotional regulation, and self-worth.",
    badge: "Intervention",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: UserCheck,
    title: "Accountability Grounded in Respect",
    text: "We don't offer excuses, nor do we pass judgment. We challenge young people to take personal pride in their name, their conduct, and their future, giving them actionable tools for lasting change.",
    badge: "Character",
    color: "text-teal-600 bg-teal-50 border-teal-200",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image & Profile Column (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                {/* Background accent */}
                <div
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-100 to-teal-50 opacity-80 blur-lg"
                  aria-hidden="true"
                />

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2 shadow-xl">
                  <img
                    src={aboutImage}
                    alt="Brett Lasko interacting with youth during an open conversation session"
                    className="h-[440px] w-full rounded-2xl object-cover object-top sm:h-[480px]"
                    width={1200}
                    height={912}
                    loading="lazy"
                  />

                  {/* Caption badge */}
                  <div className="mt-3 rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display text-base font-bold text-slate-900">
                          Brett Lasko
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">
                          Founder &amp; Youth Speaker, Talk2em LLC
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-100/80 px-2.5 py-1 text-[11px] font-bold text-blue-800">
                        Direct Mentorship
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quote bubble */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-6 max-w-xs rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xl">
                  <p className="text-xs font-medium italic text-slate-700">
                    “When you speak with genuine truth and respect, young people don't shut down —
                    they listen, reflect, and choose better.”
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
                <span>Who We Are &amp; Why We Serve</span>
              </div>

              <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Guiding Youth Toward{" "}
                <span className="text-gradient">Wisdom, Pride &amp; Better Choices</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                Talk2em LLC was established out of a crucial community necessity: young people are
                inundated with rules and lectures, but rarely offered authentic spaces to untangle
                their reality without judgment.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Whether standing before an entire student body in an auditorium or sitting
                knee-to-knee with adolescents in an intervention circle, our purpose is singular:{" "}
                <strong className="font-semibold text-slate-900">
                  to awaken self-worth and provide the moral roadmap needed to navigate critical
                  life decisions.
                </strong>
              </p>

              {/* Pillars */}
              <div className="mt-8 space-y-4">
                {METHOD_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:border-blue-200 hover:shadow-md sm:flex-row sm:items-start sm:gap-4"
                  >
                    <div className="flex items-center gap-3 sm:block">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${point.color}`}
                      >
                        <point.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wide sm:hidden">
                        {point.badge}
                      </span>
                    </div>
                    <div className="mt-3 sm:mt-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-bold text-slate-900">
                          {point.title}
                        </h3>
                        <span className="hidden rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wide sm:inline-block">
                          {point.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="bg-brand-gradient inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-[1.02]"
                >
                  <span>Connect With Brett</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span>Serving Iowa &amp; Available Nationwide</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
