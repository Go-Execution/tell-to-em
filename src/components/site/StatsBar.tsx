import { Award, Compass, School, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  {
    icon: School,
    value: "45+",
    label: "Partner Institutions",
    description: "Schools, districts, youth shelters & diversion initiatives",
    accent: "text-blue-600 bg-blue-50",
  },
  {
    icon: Compass,
    value: "5,000+",
    label: "Youth Reached",
    description: "Direct impact in assemblies, circles & one-on-one sessions",
    accent: "text-teal-600 bg-teal-50",
  },
  {
    icon: Award,
    value: "10+ Yrs",
    label: "Lived Experience",
    description: "Translating adversity into wisdom and practical direction",
    accent: "text-amber-600 bg-amber-50",
  },
  {
    icon: HeartHandshake,
    value: "100%",
    label: "Action-Oriented",
    description: "No lectures. Real talk, self-worth, and mutual respect",
    accent: "text-indigo-600 bg-indigo-50",
  },
];

export function StatsBar() {
  return (
    <section className="relative -mt-6 sm:-mt-8 z-10 mx-auto max-w-7xl px-5 sm:px-8">
      <Reveal>
        <div className="grid gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-all hover:border-slate-200 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold ${stat.accent}`}
                >
                  <stat.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-3xl font-extrabold tracking-tight text-slate-900">
                  {stat.value}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-base font-bold text-slate-900">{stat.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
