import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 border-b border-[#E8E4DC]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          {/* Top metadata badge */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#181614]" />
            <p className="font-mono-label text-xs text-[#7A746B]">
              Youth Keynote Speaker &amp; Intervention Specialist
            </p>
          </div>

          {/* Master Headline with spacious line-height */}
          <h1 className="font-serif mt-8 text-4xl font-normal leading-[1.15] tracking-tight text-[#181614] sm:text-6xl lg:text-7xl">
            Talk That Inspires Real Change.{" "}
            <span className="italic block sm:inline mt-2 sm:mt-0">Wisdom That Sticks.</span>
          </h1>

          {/* Slogan */}
          <p className="font-serif mt-6 text-2xl sm:text-3xl italic text-[#5A554E]">
            “Our Words, Your Wisdom”
          </p>

          {/* 1-Sentence Value Statement */}
          <p className="mt-6 max-w-2xl text-base text-[#5A554E] leading-relaxed sm:text-xl">
            Brett Lasko brings lived experience to student assemblies and youth circles—helping
            young people make positive choices before decisions become consequences.
          </p>

          {/* Clean Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#inquire"
              className="inline-flex rounded-full bg-[#181614] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] transition-all hover:bg-black shadow-xs"
            >
              Check Availability
            </a>
            <a
              href="#reel"
              className="inline-flex rounded-full border border-[#181614] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#181614] transition-colors hover:bg-[#181614] hover:text-[#FAF8F5]"
            >
              Watch Video Reel
            </a>
          </div>

          {/* Clean Photo Container with Open Margins */}
          <div className="mt-16 overflow-hidden border border-[#E8E4DC] shadow-sm">
            <img
              src={heroImage}
              alt="Brett Lasko speaking to student assembly"
              className="h-80 w-full object-cover object-center sm:h-[500px]"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </div>

          {/* Stats Bar with Generous Spacing */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[#E8E4DC] grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-normal text-[#181614]">5,000+</p>
              <p className="font-mono-label text-xs text-[#7A746B] mt-2">Students Mentored</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-normal text-[#181614]">45+</p>
              <p className="font-mono-label text-xs text-[#7A746B] mt-2">Schools &amp; Programs</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-normal text-[#181614]">10+ Yrs</p>
              <p className="font-mono-label text-xs text-[#7A746B] mt-2">
                Lived Guidance Experience
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
