import { useState } from "react";
import { Play, X } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function SpeakerReel() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="reel" className="relative py-20 sm:py-28 bg-[#181614] text-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono-label text-xs text-[#A69F94]">Audio &amp; Visual Reel</span>
            <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-white">
              Watch Brett in Action
            </h2>
            <p className="mt-3 text-sm text-[#A69F94]">
              No podiums or rehearsed clichés. Just active presence, intense humor, and full student
              engagement.
            </p>
          </div>

          {/* Video Preview */}
          <div className="mt-10 mx-auto max-w-4xl">
            <div
              className="group relative aspect-video overflow-hidden border border-[#302D29] bg-black cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <img
                src={heroImage}
                alt="Brett Lasko addressing student assembly"
                className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  type="button"
                  aria-label="Play Speaker Reel"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:scale-110"
                >
                  <Play className="h-6 w-6 fill-black translate-x-0.5" />
                </button>
                <span className="mt-3 font-mono-label text-xs text-white">
                  Watch Assembly Reel (3 Min)
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg border border-[#302D29] bg-[#181614] p-8 text-center text-white">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-serif text-2xl font-normal text-white">Speaker Demo Reel</h3>
            <p className="mt-3 text-sm text-[#A69F94]">
              To request a full-length unedited assembly video or principal references, please
              submit a date inquiry.
            </p>
            <a
              href="#inquire"
              onClick={() => setOpenModal(false)}
              className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
            >
              Request Full Recording
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
