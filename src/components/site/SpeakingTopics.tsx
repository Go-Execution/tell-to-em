import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const TOPICS = [
  {
    number: "01",
    title: "The Power of the Next 5 Minutes",
    focus: "Impulse Control, Emotional Regulation & Accountability",
    description:
      "Most life-altering mistakes don't happen after weeks of calculation—they happen in an impulsive 5-minute flash of anger, peer pressure, or defiance. Brett teaches students how to create space between emotional trigger and permanent consequence.",
    outcomes:
      "Teaches impulse pause, breaks automatic defensive reactions, and instills personal pride in taking the high road.",
  },
  {
    number: "02",
    title: "Who's In Your Circle?",
    focus: "Peer Influence, True Loyalty vs. Self-Sabotage",
    description:
      "Show me your friends, and I will show you your future. Brett challenges young people to re-examine the company they keep, exposing the critical difference between friends who want the best for you and friends who just want company in bad decisions.",
    outcomes:
      "Helps students set healthy boundaries with peers, avoid toxic crowd dynamics, and seek positive mentorship.",
  },
  {
    number: "03",
    title: "Turning Adversity Into Armor",
    focus: "Resilience, Overcoming Trauma & Refusing to Be a Statistic",
    description:
      "Many teens believe family adversity, economic hardship, or past mistakes trap them in a cycle. Brett flips hardship on its head—showing youth how to transform pain and adversity into an unbreakable work ethic and purpose.",
    outcomes:
      "Breaks victim mindsets, reframes adversity as strength, and inspires long-term academic and personal ambition.",
  },
  {
    number: "04",
    title: "Owning Your Name",
    focus: "Reputation, Digital Responsibility & Self-Respect",
    description:
      "In a culture obsessed with viral validation, young people frequently sacrifice their long-term name for 15 seconds of online clout. This keynote restores dignity in personal character, online footprint, and self-respect.",
    outcomes:
      "Addresses social media drama, digital permanence, and standing tall with integrity even when standing alone.",
  },
];

export function SpeakingTopics() {
  return (
    <section id="topics" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Keynote Curriculum
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Signature Speaking Topics
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Each keynote is delivered with gripping personal stories, intense humor, and practical
              psychological tools that students recall long after the event.
            </p>
          </div>
        </Reveal>

        {/* Clean Editorial List with Generous Whitespace */}
        <div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">
          {TOPICS.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 80}>
              <div className="py-10 sm:py-12 grid gap-6 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-1">
                  <span className="font-display text-2xl font-bold text-slate-400">
                    {topic.number}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl font-bold text-slate-950">{topic.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {topic.focus}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {topic.description}
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    <strong className="font-semibold text-slate-700">Student Takeaway:</strong>{" "}
                    {topic.outcomes}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:underline"
                    >
                      <span>Inquire About This Topic</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
