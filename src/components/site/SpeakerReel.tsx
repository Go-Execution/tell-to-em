import { useState } from "react";
import { Play, X } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function SpeakerReel() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="reel" className="relative py-24 sm:py-32 bg-[#181614] text-[#FAF8F5]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-[#302D29]">
            <div>
              <span className="font-mono-label text-[11px] text-[#A69F94]">
                Audio &amp; Visual Reel
              </span>
              <h2 className="font-serif mt-3 text-3xl sm:text-5xl font-normal text-white">
                Experience the room when Brett takes the floor.
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#A69F94] leading-relaxed">
              No podiums, no teleprompters, no rehearsed clichés. Just intense presence, infectious
              humor, and total student engagement.
            </p>
          </div>

          {/* Cinema Frame */}
          <div className="mt-12 relative">
            <div
              className="group relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-[#302D29] bg-black cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <img
                src={heroImage}
                alt="Brett Lasko addressing students"
                className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  type="button"
                  aria-label="Play Speaker Reel"
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="h-7 w-7 fill-white translate-x-0.5" />
                </button>
                <span className="mt-4 font-mono-label text-xs text-white tracking-widest">
                  Watch Assembly Reel (3:15)
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Notes */}
          <div className="mt-12 grid gap-8 sm:grid-cols-3 pt-8 border-t border-[#302D29]">
            <div>
              <span className="font-mono-label text-xs text-[#A69F94]">01. Command</span>
              <h4 className="font-serif text-lg text-white mt-1">Full-Floor Movement</h4>
              <p className="mt-1 text-xs text-[#A69F94] leading-relaxed">
                Brett walks the auditorium aisles, engaging directly with distracted students and
                bringing the back rows forward.
              </p>
            </div>
            <div>
              <span className="font-mono-label text-xs text-[#A69F94]">02. Connection</span>
              <h4 className="font-serif text-lg text-white mt-1">No Scripted Condescension</h4>
              <p className="mt-1 text-xs text-[#A69F94] leading-relaxed">
                Speaks like an older brother who survived the streets, not an administrator passing
                judgment.
              </p>
            </div>
            <div>
              <span className="font-mono-label text-xs text-[#A69F94]">03. Safety</span>
              <h4 className="font-serif text-lg text-white mt-1">Staff Hand-Off Protocol</h4>
              <p className="mt-1 text-xs text-[#A69F94] leading-relaxed">
                Full compliance with school safety standards. Any vulnerable disclosures are
                immediately bridged to on-site counselors.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Reel Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-xl border border-[#302D29] bg-[#181614] p-8 text-center text-white">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="font-serif text-2xl font-normal text-white">Speaker Sizzle Reel</h3>
            <p className="mt-3 text-sm text-[#A69F94] max-w-md mx-auto">
              To review an unedited, full-length 45-minute assembly video or connect with previous
              principal references, please submit a date inquiry.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#inquire"
                onClick={() => setOpenModal(false)}
                className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-black"
              >
                Inquire for Full Recording
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
