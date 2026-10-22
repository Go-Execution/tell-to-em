import { useState } from "react";
import { Play, Check, Quote, X } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function SpeakerReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="reel" className="relative py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              See The Energy In Person
            </span>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Watch Brett in Action
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Experience the atmosphere of a Talk2em assembly. No teleprompters, no rehearsed
              clichés—just real, unvarnished conversation that commands the room.
            </p>
          </div>
        </Reveal>

        {/* Video Player Box */}
        <div className="mt-12 mx-auto max-w-4xl">
          <Reveal delay={100}>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              {isPlaying ? (
                <div className="relative h-full w-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 rounded-full bg-slate-800 p-2 text-white hover:bg-slate-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="max-w-md">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 mb-4">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                    <h3 className="font-display text-xl font-bold">Speaker Demo Reel</h3>
                    <p className="mt-2 text-sm text-slate-400">
                      To request a full-length unedited assembly recording or live reference
                      contact, connect with Brett directly.
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-slate-200 transition-colors"
                    >
                      Request Full Preview
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  className="group relative h-full w-full cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={heroImage}
                    alt="Speaker Brett Lasko commanding a student audience"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <button
                      type="button"
                      aria-label="Play speaker reel preview"
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-950 shadow-2xl transition-transform duration-300 group-hover:scale-110"
                    >
                      <Play className="h-8 w-8 fill-slate-950 translate-x-0.5" />
                    </button>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-white">
                      Click to Play Highlight Reel
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* 3 Key Takeaways underneath */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto border-t border-slate-900 pt-10">
          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">Zero Lecturing</h4>
              <p className="mt-1 text-xs text-slate-400">
                Students tune out moral speeches. We connect through mutual respect and lived
                reality.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">Active Stage Command</h4>
              <p className="mt-1 text-xs text-slate-400">
                Brett roams the auditorium floor, making direct eye contact with every section of
                students.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Check className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">
                Seamless Counselor Hand-Off
              </h4>
              <p className="mt-1 text-xs text-slate-400">
                Any sensitive student discussions after the bell are seamlessly coordinated with
                your staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
