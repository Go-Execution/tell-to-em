import { Reveal } from "./Reveal";

const TOPICS = [
  {
    num: "01",
    title: "The Power of the Next 5 Minutes",
    focus: "Impulse Control & Decision Making",
    summary:
      "Most life-altering mistakes happen in a five-minute flash. Students learn how to create space between an emotional trigger and a permanent consequence.",
  },
  {
    num: "02",
    title: "Who’s in Your Circle?",
    focus: "Peer Influence & Loyalty",
    summary:
      "Show me your friends, and I will show you your future. Brett exposes the fatal difference between real friends and those who only want company in poor decisions.",
  },
  {
    num: "03",
    title: "Turning Adversity Into Armor",
    focus: "Resilience & Overcoming Hardship",
    summary:
      "Students learn how to reframe family struggle, socioeconomic adversity, and past mistakes into an unbreakable work ethic and self-directed purpose.",
  },
  {
    num: "04",
    title: "Owning Your Name",
    focus: "Reputation & Digital Footprint",
    summary:
      "In a culture addicted to viral clout, Brett rebuilds student pride in long-term character, digital permanence, and standing tall with integrity.",
  },
];

export function SpeakingTopics() {
  return (
    <section id="topics" className="relative py-28 sm:py-36 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="max-w-xl">
            <span className="font-mono-label text-xs text-[#7A746B]">Curriculum</span>
            <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-[#181614]">
              Keynote Topics
            </h2>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-2">
            {TOPICS.map((topic) => (
              <div
                key={topic.title}
                className="border-t border-[#181614] pt-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-label text-xs text-[#7A746B]">
                    {topic.num} • {topic.focus}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181614] mt-3">
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-base text-[#5A554E] leading-relaxed">{topic.summary}</p>
                </div>
                <div className="mt-8">
                  <a
                    href="#inquire"
                    className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
                  >
                    Request Topic →
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
