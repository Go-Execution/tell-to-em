import { Sparkles, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const IMPACT_POINTS = [
  {
    icon: Sparkles,
    title: "Inspire Confidence",
    text: "Helping young people see their own worth and believe in what they can become.",
  },
  {
    icon: ShieldCheck,
    title: "Encourage Positive Choices",
    text: "Practical guidance that turns reflection into better decisions and direction.",
  },
  {
    icon: Users,
    title: "Strengthen Communities",
    text: "Bringing families, schools, and organizations together around the next generation.",
  },
];

export function Impact() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient background wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-aqua/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            One Conversation Can <span className="text-gradient">Change a Life</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sometimes all it takes is the right message at the right moment to shift a young
            person’s mindset and future.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {IMPACT_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur transition-colors duration-300 hover:border-violet/40">
                <span className="bg-brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-2xl text-background shadow-glow">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-6 text-lg font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
