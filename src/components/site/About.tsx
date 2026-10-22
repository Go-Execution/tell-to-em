import aboutImage from "@/assets/about.jpg";
import speakingStage from "@/assets/speaking-stage.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="story" className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Visual Photography Collage (6 cols) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="overflow-hidden border border-[#E8E4DC] shadow-sm">
                <img
                  src={aboutImage}
                  alt="Brett Lasko in small group session"
                  className="h-72 w-full object-cover object-top sm:h-96"
                  width={600}
                  height={800}
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden border border-[#E8E4DC] shadow-sm translate-y-6">
                <img
                  src={speakingStage}
                  alt="Brett Lasko live on stage"
                  className="h-72 w-full object-cover object-center sm:h-96"
                  width={600}
                  height={800}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Concise Editorial Story (6 cols) */}
            <div className="lg:col-span-6 lg:pl-6">
              <span className="font-mono-label text-xs text-[#7A746B]">The Mission</span>

              <blockquote className="font-serif mt-4 text-2xl sm:text-3xl font-normal leading-snug text-[#181614] italic">
                “When you speak with honesty and respect, young people don’t shut down. They
                listen.”
              </blockquote>

              <p className="mt-5 text-base text-[#5A554E] leading-relaxed">
                Brett Lasko skips moralizing lectures to give students practical tools for personal
                accountability, impulse control, and self-respect.
              </p>

              <div className="mt-8">
                <a
                  href="#inquire"
                  className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
                >
                  Connect with Brett →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
