import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="story" className="relative py-28 sm:py-36 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
            {/* Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden border border-[#E8E4DC] shadow-sm">
                <img
                  src={aboutImage}
                  alt="Brett Lasko in small group session"
                  className="h-80 w-full object-cover object-top sm:h-[440px]"
                  width={1200}
                  height={912}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-mono-label text-xs text-[#7A746B]">The Story</span>

              <blockquote className="font-serif mt-5 text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#181614] italic">
                “When an adult speaks with genuine truth and respect, young people don’t shut down.
                They listen, reflect, and choose better.”
              </blockquote>

              <div className="mt-8 space-y-4 text-base text-[#5A554E] leading-relaxed sm:text-lg">
                <p>
                  Having stood at critical crossroads himself, Brett Lasko understands the invisible
                  pressures modern teens carry—peer expectations, reactive anger, and the quick
                  impulses that can derail a lifetime.
                </p>
                <p>
                  Talk2em skips the clinical scripts and moralizing lectures to give students
                  practical tools for personal responsibility, resilience, and self-respect.
                </p>
              </div>

              <div className="mt-10">
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
