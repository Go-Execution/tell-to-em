import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { fetchPrograms } from "@/lib/cms-client";
import type { ProgramTopic } from "@/types/cms";

export function SpeakingTopics() {
  const [topics, setTopics] = useState<ProgramTopic[]>([]);

  useEffect(() => {
    fetchPrograms().then((data) => {
      setTopics(data.filter((t) => t.is_active));
    });
  }, []);

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
            {topics.map((topic, idx) => (
              <div
                key={topic.id || topic.title}
                className="border-t border-[#181614] pt-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-label text-xs text-[#7A746B]">
                    0{idx + 1} • {topic.target_audience || topic.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#181614] mt-3">
                    {topic.title}
                  </h3>
                  <p className="mt-4 text-base text-[#5A554E] leading-relaxed">
                    {topic.description}
                  </p>

                  {topic.bullet_points && topic.bullet_points.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-[#E8E4DC] pt-4">
                      {topic.bullet_points.map((b, i) => (
                        <li key={i} className="text-xs text-[#5A554E] flex items-start gap-2">
                          <span className="text-[#181614] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
