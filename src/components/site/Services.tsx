import { Mic, MessagesSquare, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Mic,
    title: "Motivational Public Speaking",
    text: "Inspiring talks designed to encourage confidence, self-awareness, responsibility, and positive growth.",
    gradient: "from-aqua/25 to-sky/10",
    iconColor: "text-aqua",
  },
  {
    icon: MessagesSquare,
    title: "Youth Intervention",
    text: "Supportive conversations and guidance that help youth reflect, reset, and choose a better path.",
    gradient: "from-violet/25 to-pink/10",
    iconColor: "text-violet",
  },
  {
    icon: Handshake,
    title: "Community & School Engagement",
    text: "Meaningful sessions for schools, youth groups, churches, and organizations that want to make a positive difference.",
    gradient: "from-pink/25 to-coral/10",
    iconColor: "text-pink",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aqua">What We Do</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Services That Create <span className="text-gradient">Real Impact</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-aqua/40">
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${service.gradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="bg-brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-2xl text-background shadow-glow">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
