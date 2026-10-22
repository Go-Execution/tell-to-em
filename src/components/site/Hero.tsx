import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 border-b border-[#E8E4DC]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          {/* Editorial Meta Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
            <span className="font-mono-label text-[11px] text-[#7A746B]">
              Iowa Based • Serving School Districts &amp; Youth Programs Nationwide
            </span>
            <span className="font-mono-label text-[11px] text-[#7A746B]">
              Keynotes • Student Assemblies • Diversion Circles
            </span>
          </div>

          {/* Master Headline */}
          <div className="pt-10 sm:pt-14 pb-8 max-w-5xl">
            <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#181614] sm:text-6xl lg:text-7xl">
              The choices young people make in five unguided minutes can echo for{" "}
              <span className="italic font-normal">fifty years.</span>
            </h1>

            <p className="font-serif mt-6 text-xl italic text-[#5A554E] sm:text-2xl">
              “Our Words, Your Wisdom”
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5A554E] sm:text-lg">
              Brett Lasko brings raw lived truth to middle schools, high schools, and youth
              facilities. No lecturing, no textbook slides—just the honest guidance young people
              need to take pride in their name, navigate peer pressure, and choose a better path.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#inquire"
                className="inline-flex items-center justify-center rounded-full bg-[#181614] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] transition-all hover:bg-black"
              >
                Inquire About Dates &amp; Fees
              </a>

              <a
                href="#reel"
                className="inline-flex items-center justify-center rounded-full border border-[#181614] bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#181614] transition-colors hover:bg-[#181614] hover:text-[#FAF8F5]"
              >
                Watch Brett Speak (Demo Reel)
              </a>
            </div>
          </div>

          {/* Editorial Photo Showcase */}
          <div className="mt-8 relative">
            <div className="overflow-hidden border border-[#E8E4DC] bg-[#181614]">
              <img
                src={heroImage}
                alt="Brett Lasko addressing a crowded student assembly under stage lights"
                className="h-[420px] w-full object-cover object-center grayscale contrast-105 transition-all duration-700 hover:grayscale-0 sm:h-[520px]"
                width={1920}
                height={1080}
                fetchPriority="high"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-[#7A746B] font-mono-label">
              <span>Figure 1.0 — Brett Lasko Live at High School Keynote Session</span>
              <span>Available for Spring &amp; Fall Assemblies</span>
            </div>
          </div>

          {/* Understated Stat Row */}
          <div className="mt-14 pt-8 border-t border-[#E8E4DC] grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">5,000+</p>
              <p className="font-mono-label text-[11px] text-[#7A746B] mt-1">Students Mentored</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">45+</p>
              <p className="font-mono-label text-[11px] text-[#7A746B] mt-1">
                Schools &amp; Programs
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">10+ Yrs</p>
              <p className="font-mono-label text-[11px] text-[#7A746B] mt-1">
                Lived Youth Guidance
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-[#181614] sm:text-4xl">100%</p>
              <p className="font-mono-label text-[11px] text-[#7A746B] mt-1">
                Real, Unscripted Delivery
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
