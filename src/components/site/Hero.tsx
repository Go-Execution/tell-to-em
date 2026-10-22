import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 border-b border-[#E8E4DC]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#181614]" />
            <p className="font-mono-label text-xs text-[#7A746B]">
              Youth Keynote Speaker &amp; Intervention Specialist
            </p>
          </div>

          <h1 className="font-serif mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-[#181614] sm:text-6xl lg:text-7xl">
            Real Conversations. <span className="italic block sm:inline">Real Direction.</span>
          </h1>

          <p className="font-serif mt-4 text-xl sm:text-2xl italic text-[#5A554E]">
            “Our Words, Your Wisdom”
          </p>

          <p className="mt-4 max-w-lg text-base text-[#5A554E] sm:text-lg">
            Brett Lasko mentors and challenges students before decisions become consequences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#inquire"
              className="rounded-full bg-[#181614] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] hover:bg-black transition-colors"
            >
              Check Availability
            </a>
            <a
              href="#reel"
              className="rounded-full border border-[#181614] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#181614] hover:bg-[#181614] hover:text-white transition-colors"
            >
              Watch Reel
            </a>
          </div>

          {/* Photo */}
          <div className="mt-14 overflow-hidden border border-[#E8E4DC] shadow-sm">
            <img
              src={heroImage}
              alt="Brett Lasko speaking to student assembly"
              className="h-80 w-full object-cover object-center sm:h-[480px]"
              width={1920}
              height={1080}
              fetchPriority="high"
            />
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-[#E8E4DC] grid grid-cols-3 gap-6 text-left">
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-[#181614]">5,000+</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Students Reached
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-[#181614]">45+</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Schools &amp; Programs
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl sm:text-4xl text-[#181614]">10+ Yrs</p>
              <p className="font-mono-label text-[10px] sm:text-xs text-[#7A746B] mt-1">
                Lived Experience
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
