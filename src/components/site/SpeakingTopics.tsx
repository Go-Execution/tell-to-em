import { Reveal } from "./Reveal";

const TOPICS = [
  {
    code: "KEYNOTE 01",
    title: "The Power of the Next 5 Minutes",
    theme: "Impulse Control & Critical Decision Frameworks",
    synopsis:
      "Most life-altering mistakes don't happen after weeks of deliberate planning. They happen in a 5-minute flash of peer pressure, reactive anger, or bruised ego. Brett teaches students the psychology of the 'pause'—how to separate feelings from reactions and avoid choices that permanently cost their freedom.",
    keyPoints: [
      "The 'Pause Principle': Breaking the automatic defensive reflex",
      "Why feelings are temporary, but court dates and suspensions are permanent",
      "Taking pride in walking away from situations that lead nowhere",
    ],
  },
  {
    code: "KEYNOTE 02",
    title: "Who's In Your Circle?",
    theme: "Peer Influence, True Loyalty vs. Mutual Sabotage",
    synopsis:
      "Show me your friends, and I will show your future. Brett challenges young people to ruthlessly evaluate the company they keep, exposing the fatal difference between real friends who push you toward greatness and friends who only want company in poor decisions.",
    keyPoints: [
      "The loyalty lie: Friends who push you to do wrong won't sit in the cell for you",
      "How to set boundaries with childhood friends without starting conflicts",
      "Finding mentors and peers who raise your standard of living",
    ],
  },
  {
    code: "KEYNOTE 03",
    title: "Turning Adversity Into Armor",
    theme: "Resilience, Overcoming Family Trauma & Refusing to Be a Statistic",
    synopsis:
      "Many young people believe their neighborhood, socioeconomic background, or family brokenness traps them in a predetermined box. Brett flips hardship on its head—showing youth how struggle qualifies them to lead rather than excuses them from striving.",
    keyPoints: [
      "Breaking generational cycles of incarceration, addiction, and apathy",
      "Reframing shame into an unbreakable personal work ethic",
      "Why your past mistake is a lesson, not a life sentence",
    ],
  },
  {
    code: "KEYNOTE 04",
    title: "Owning Your Name",
    theme: "Reputation, Digital Responsibility & Self-Respect",
    synopsis:
      "In a culture addicted to viral clout, teens frequently sacrifice their long-term name for 15 seconds of online attention. This keynote rebuilds dignity in personal character, online footprint, and self-respect.",
    keyPoints: [
      "The permanency of social media posts, group chats, and digital drama",
      "What it means when people speak your name in rooms you haven't entered yet",
      "Standing tall with integrity even when standing completely alone",
    ],
  },
];

export function SpeakingTopics() {
  return (
    <section id="topics" className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#E8E4DC]">
            <div>
              <span className="font-mono-label text-[11px] text-[#7A746B]">
                Curriculum &amp; Lecture Topics
              </span>
              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
                Signature Keynotes
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#5A554E] leading-relaxed">
              Every topic is customized to your school's specific behavioral and cultural priorities
              during the pre-event discovery call.
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid gap-12 lg:grid-cols-2 pt-12">
            {TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="flex flex-col justify-between border-t border-[#181614] pt-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-label text-[#7A746B]">
                    <span>{topic.code}</span>
                    <span>{topic.theme}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181614] mt-3">
                    {topic.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#5A554E] leading-relaxed">{topic.synopsis}</p>

                  <div className="mt-6 border-t border-[#E8E4DC] pt-4">
                    <p className="font-mono-label text-[11px] text-[#181614] mb-2">
                      Core Learning Objectives:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#5A554E]">
                      {topic.keyPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="text-[#181614]">—</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8E4DC]/60 flex items-center justify-between">
                  <span className="text-xs font-mono-label text-[#7A746B]">
                    Keynote / Circle Format
                  </span>
                  <a
                    href="#inquire"
                    className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
                  >
                    Request this Keynote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
