import { Quote, MessageCircleHeart } from "lucide-react";
import { Reveal } from "./Reveal";

/**
 * Placeholder sample feedback only — clearly labeled as samples.
 * Replace with real testimonials once supplied by the client.
 */
const SAMPLE_FEEDBACK = [
  {
    quote:
      "Sample feedback: The message landed with our students in a way we hadn’t seen before. Several stayed after to keep talking.",
    role: "School Staff Member",
    tag: "Sample",
  },
  {
    quote:
      "Sample feedback: Our youth group opened up during the session — real, honest conversation instead of short answers.",
    role: "Youth Program Coordinator",
    tag: "Sample",
  },
  {
    quote:
      "Sample feedback: A calm, respectful presence with young people who don’t always respond easily to adults.",
    role: "Community Organization",
    tag: "Sample",
  },
];

export function Feedback() {
  return (
    <section id="feedback" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aqua">Feedback</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Voices of <span className="text-gradient">Encouragement</span>
            </h2>
            <p className="mt-5 text-sm font-medium text-muted-foreground">
              The cards below are <span className="text-foreground">clearly labeled sample placeholders</span> —
              real feedback will be added as it comes in.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SAMPLE_FEEDBACK.map((item, i) => (
            <Reveal key={item.role} delay={i * 120}>
              <figure className="relative h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                <Quote className="text-violet/60 h-7 w-7" aria-hidden="true" />
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-foreground/90">{item.role}</span>
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-pink/50 hover:text-pink"
            >
              <MessageCircleHeart className="h-4 w-4" aria-hidden="true" />
              Share Your Feedback
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
