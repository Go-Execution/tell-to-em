import { Lightbulb, Compass, Building2 } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: Lightbulb,
    title: "Empowering Young Minds",
    text: "Encouraging self-belief and confidence in every young person we meet.",
    color: "text-aqua",
  },
  {
    icon: Compass,
    title: "Inspiring Better Decisions",
    text: "Real conversations that help youth reflect, reset, and choose a better path.",
    color: "text-violet",
  },
  {
    icon: Building2,
    title: "Building Stronger Futures",
    text: "Working with families, schools, and communities to create lasting change.",
    color: "text-pink",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image column */}
        <Reveal>
          <div className="relative">
            <div className="bg-brand-gradient absolute -inset-3 rounded-3xl opacity-20 blur-2xl" aria-hidden="true" />
            <img
              src={aboutImage}
              alt="A mentor having a genuine conversation with a group of teenagers"
              className="relative rounded-3xl border border-border object-cover shadow-card"
              width={1200}
              height={912}
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Text column */}
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aqua">Who We Are</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Guiding Youth Toward <span className="text-gradient">Better Choices</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At Talk2em LLC, we believe words have the power to influence direction, restore
              confidence, and inspire transformation. Through public speaking and youth
              intervention, we aim to create meaningful impact in the lives of young people,
              families, and communities.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                    <item.icon className={`h-5 w-5 ${item.color}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-aqua/50 hover:text-aqua"
            >
              Connect With Us
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
