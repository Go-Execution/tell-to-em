import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "./Reveal";

const IMPACT_POINTS = [
  {
    icon: Sparkles,
    title: "Breakthrough Engagement",
    subtitle: "Reaching the unreachable students",
    text: "Principals and counselors consistently remark on how students who normally sleep through assemblies or resist authority are the very ones waiting in line to speak with Brett afterwards.",
    accent: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Diversion",
    subtitle: "Intervening before mistakes become criminal",
    text: "By exposing the real-world trajectory of seemingly small missteps, Talk2em empowers youth to recognize destructive influences and make intentional course corrections in real time.",
    accent: "text-teal-600 bg-teal-50 border-teal-200",
  },
  {
    icon: HeartHandshake,
    title: "Rebuilding Trust With Adults",
    subtitle: "Bridging the defensive barrier",
    text: "We validate students' genuine struggles while simultaneously stripping away excuses, helping them see teachers, coaches, and parents as allies rather than adversaries.",
    accent: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: TrendingUp,
    title: "Tangible School Climate Shift",
    subtitle: "Equipping staff with shared language",
    text: "Talk2em provides schools with key terminology and principles that educators, counselors, and deans can reference weeks and months after the presentation to reinforce positive behavior.",
    accent: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
              <TrendingUp className="h-3.5 w-3.5" />
              Community &amp; Behavioral Outcomes
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              One Real Conversation Can <span className="text-gradient">Alter a Lifetime</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Talk2em doesn't leave students with a momentary high that fades by lunchtime. We
              instill foundational self-respect and practical decision frameworks that echo
              throughout their adolescent and adult years.
            </p>
          </div>
        </Reveal>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-card">
                <div>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border font-bold ${point.accent}`}
                  >
                    <point.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-primary">{point.subtitle}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {point.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                  <span>Documented in follow-up feedback</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quote banner */}
        <Reveal delay={250}>
          <div className="mt-14 rounded-3xl border border-slate-200/90 bg-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="mx-auto max-w-4xl text-center">
              <Quote className="mx-auto h-10 w-10 text-blue-400 opacity-60" />
              <blockquote className="font-display mt-5 text-xl font-bold leading-relaxed sm:text-2xl lg:text-3xl">
                “Our youth aren't broken—they are being tested by pressures no previous generation
                ever had to face in the palm of their hands. When we respect their intelligence and
                tell them the raw truth, they rise.”
              </blockquote>
              <div className="mt-6 flex flex-col items-center justify-center gap-1">
                <span className="font-display text-base font-bold text-white">Brett Lasko</span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Founder &amp; Youth Speaker, Talk2em LLC
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
