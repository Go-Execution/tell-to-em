import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E8E4DC]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          {/* Tag */}
          <p className="font-mono-label text-xs text-[#7A746B]">
            Brett Lasko • Youth Speaker &amp; Intervention Specialist
          </p>

          {/* Big, Clean Headline */}
          <h1 className="font-serif mt-5 text-4xl font-normal leading-tight text-[#181614] sm:text-6xl lg:text-7xl">
            Talk That Inspires Real Change.{" "}
            <span className="italic block sm:inline">Wisdom That Sticks.</span>
          </h1>

          {/* Slogan */}
          <p className="font-serif mt-4 text-xl sm:text-2xl italic text-[#5A554E]">
            “Our Words, Your Wisdom”
          </p>

          {/* Short, punchy 1-sentence value proposition */}
          <p className="mt-4 max-w-xl text-base text-[#5A554E] sm:text-lg">
            Brett Lasko brings lived experience to student assemblies and youth circles—helping
            teens make positive choices before decisions become consequences.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#inquire"
              className="inline-flex rounded-full bg-[#181614] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] transition-colors hover:bg-black"
            >
              Check Availability
            </a>
            <a
              href="#reel"
              className="inline-flex rounded-full border border-[#181614] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#181614] transition-colors hover:bg-[#181614] hover:text-[#FAF8F5]"
            >
              Watch Video Reel
            </a>
          </div>

          {/* Clean Photo */}
          <div className="mt-12 overflow-hidden border border-[#E8E4DC]">
            <img
              src={heroImage}
              alt="Brett Lasko speaking to youth"
              className="h-80 w-full object-cover object-center sm:h-[480px]"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </div>

          {/* 3 Quick Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E8E4DC] pt-8 text-center sm:text-left">
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">5,000+</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Students Reached
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">45+</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Schools &amp; Programs
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">10+ Yrs</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Lived Guidance
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
