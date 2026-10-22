import {
  Mic,
  Users,
  HeartHandshake,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    id: "assemblies",
    icon: Mic,
    title: "Motivational Assemblies & Keynotes",
    tagline: "High-energy, transformative school-wide and campus events",
    description:
      "Captivating presentations that hold the undivided attention of young audiences. Brett shares powerful personal stories, dismantles peer pressure, and challenges students to make decisions they can be proud of ten years from now.",
    audience: "Middle & High Schools, Colleges, Student Athletes",
    duration: "45–60 Minutes + Live Q&A",
    outcomes: [
      "Awakening personal pride & accountability",
      "Overcoming peer pressure & toxic comparison",
      "Recognizing the lifelong impact of impulsive choices",
      "Cultivating respect for teachers, peers, and parents",
    ],
    borderAccent: "border-blue-200 hover:border-blue-400",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-600 text-white",
  },
  {
    id: "intervention",
    icon: Users,
    title: "Targeted Youth Intervention Circles",
    tagline: "Intimate, high-impact guidance for at-risk & diversion groups",
    description:
      "Direct, knee-to-knee discussions for youth navigating behavioral probation, alternative schooling, disciplinary challenges, or trauma. These circles provide a safe container to dismantle anger and discover constructive pathways forward.",
    audience: "Alternative Schools, Detention & Diversion Programs, At-Risk Cohorts",
    duration: "60–90 Min Sessions (Single or Multi-Week Cohorts)",
    outcomes: [
      "De-escalating conflict & managing volatile emotions",
      "Addressing the roots of destructive habits & rebellion",
      "Building a concrete 30-day personal accountability plan",
      "Restoring belief in their own capabilities and worth",
    ],
    borderAccent: "border-amber-200 hover:border-amber-400",
    badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
    iconBg: "bg-amber-600 text-white",
  },
  {
    id: "community",
    icon: HeartHandshake,
    title: "Educator & Community Engagement",
    tagline: "Empowering adults to build genuine trust with today’s youth",
    description:
      "A pragmatic training workshop for teachers, youth pastors, social workers, and mentors. Learn how to bridge the generational divide, decode hidden cries for help, and communicate without triggering defensive hostility.",
    audience: "Educators, Youth Counselors, Churches & Community Orgs",
    duration: "90 Min Keynote or Half-Day Professional Workshop",
    outcomes: [
      "Proven communication methods for resistant teens",
      "Trauma-informed engagement without lowering standards",
      "Creating supportive school & community mentorship cultures",
      "Collaborative intervention strategies with families",
    ],
    borderAccent: "border-teal-200 hover:border-teal-400",
    badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
    iconBg: "bg-teal-600 text-white",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-slate-50/70 border-y border-slate-200/60"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
              <Sparkles className="h-3.5 w-3.5" />
              Programs &amp; Offerings
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Services Designed to Create <span className="text-gradient">Measurable Impact</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Every school and community is unique. Our formats are customized to match your
              institutional goals, student demographics, and specific behavioral priorities.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <div
                className={`group flex h-full flex-col justify-between rounded-3xl border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${service.borderAccent}`}
              >
                <div>
                  {/* Icon & Duration Header */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-xs ${service.iconBg}`}
                    >
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${service.badgeBg}`}
                    >
                      <Clock className="h-3 w-3" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display mt-6 text-xl font-extrabold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-primary">{service.tagline}</p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Metadata */}
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-slate-400 shrink-0" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Best Suited For
                        </span>
                        <p className="text-xs font-semibold text-slate-700">{service.audience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Outcomes Checklist */}
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Key Takeaways &amp; Value:
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {service.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={`#contact`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <span>Inquire About This Format</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Customization Callout */}
        <Reveal delay={250}>
          <div className="mt-12 rounded-3xl border border-blue-200/90 bg-gradient-to-r from-blue-50 via-white to-teal-50 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="max-w-2xl">
                <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                  Need a customized program or multi-day workshop?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  We frequently design tailor-made speaking sessions, advisory series, and
                  whole-district keynote days. Speak with Brett directly to map out your agenda.
                </p>
              </div>
              <a
                href="#contact"
                className="bg-brand-gradient shrink-0 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:scale-105"
              >
                Schedule Custom Consultation
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
