import { BookOpen, Target, Sparkles, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const TOPICS = [
  {
    number: "01",
    title: "The Power of the Next 5 Minutes",
    subtitle: "Impulse Control, Emotional Regulation & Accountability",
    description:
      "Most life-altering mistakes don't happen after weeks of calculation—they happen in a 5-minute flash of anger, peer pressure, or defiance. This session teaches students how to create space between trigger and reaction.",
    takeaways: [
      "The 'Pause Principle': How to break automatic defensive reactions",
      "Understanding that feelings are temporary, but consequences are permanent",
      "Developing emotional ownership rather than blaming external circumstances",
    ],
    tag: "Decision Making",
    accent: "border-blue-200 bg-blue-50/50",
  },
  {
    number: "02",
    title: "Who's In Your Circle?",
    subtitle: "Peer Influence, Loyalty vs. Self-Sabotage & Real Brotherhood",
    description:
      "Show me your friends, and I will show you your future. Brett challenges young people to re-examine the people they allow into their intimate circle, exposing the difference between real loyalty and mutual destruction.",
    takeaways: [
      "Spotting toxic loyalty: friends who push you toward trouble won't sit in the cell for you",
      "How to set boundaries with childhood peers without inciting violence or disrespect",
      "Finding mentors and friends who elevate your standard of character",
    ],
    tag: "Relationships",
    accent: "border-amber-200 bg-amber-50/50",
  },
  {
    number: "03",
    title: "Turning Adversity Into Armor",
    subtitle: "Resilience, Overcoming Trauma & Refusing to Be a Statistic",
    description:
      "Many young people believe their background, socioeconomic status, or family trauma condemns them to repeat the cycle. This message turns hardship on its head—showing youth how to transform pain into an unbreakable foundation.",
    takeaways: [
      "Breaking generational cycles of incarceration, addiction, and apathy",
      "Why hardship qualifies you to lead, rather than excuses you from trying",
      "Reframing shame into strength and self-directed purpose",
    ],
    tag: "Resilience",
    accent: "border-teal-200 bg-teal-50/50",
  },
  {
    number: "04",
    title: "Owning Your Name",
    subtitle: "Reputation, Digital Responsibility & Self-Respect",
    description:
      "In a culture obsessed with viral validation and superficial clout, young people frequently sacrifice their long-term name for 15 seconds of online attention. This keynote rebuilds dignity and pride in one’s personal word.",
    takeaways: [
      "The permanency of social media posts, group chats, and digital footprints",
      "What it means when people speak your name in rooms you haven't entered yet",
      "Standing tall in self-respect even when standing alone",
    ],
    tag: "Character & Legacy",
    accent: "border-indigo-200 bg-indigo-50/50",
  },
];

export function SpeakingTopics() {
  return (
    <section id="topics" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <BookOpen className="h-3.5 w-3.5" />
              Curriculum &amp; Keynote Catalog
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Signature Speaking <span className="text-gradient">Topics</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Each keynote is delivered with raw honesty, gripping storytelling, and practical
              psychological tools that students can remember long after the microphone is put away.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TOPICS.map((topic, i) => (
            <Reveal key={topic.title} delay={i * 100}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-card transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="font-display text-2xl font-black text-slate-300 transition-colors group-hover:text-primary">
                      {topic.number}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      {topic.tag}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors sm:text-2xl">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {topic.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{topic.description}</p>

                  {/* Bullet points */}
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Core Objectives:
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {topic.takeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex items-start gap-2 text-xs text-slate-600"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Available for Assembly &amp; Workshop
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors"
                  >
                    <span>Request Topic</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
