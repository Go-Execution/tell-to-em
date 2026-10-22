import { Calendar, PhoneCall, CheckCircle2, ArrowRight, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Background ambient accents */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-[32rem] w-[32rem] rounded-full bg-blue-100/60 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-teal-100/50 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-amber-100/40 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
                Youth Empowerment • Motivational Speaking • Intervention
              </div>

              {/* Main Headline */}
              <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                Talk That Inspires <span className="text-gradient">Real Change.</span> Guidance That
                Sticks.
              </h1>

              {/* Slogan Banner */}
              <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-5 py-3 shadow-xs">
                <span className="bg-brand-gradient h-8 w-1.5 rounded-full" aria-hidden="true" />
                <p className="font-display text-lg font-bold italic tracking-wide text-slate-800 sm:text-xl">
                  “Our Words, <span className="text-primary not-italic">Your Wisdom</span>”
                </p>
              </div>

              {/* Mission Statement */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                At <span className="font-semibold text-slate-900">Talk2em LLC</span>, we connect
                with young people through authentic, lived-experience conversations. We partner with
                middle schools, high schools, juvenile programs, and community leaders to replace
                hesitation and doubt with personal responsibility, accountability, and hope.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="bg-brand-gradient flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-800 shadow-xs transition-colors hover:border-primary hover:bg-slate-50 hover:text-primary"
                >
                  Explore Speaking Formats
                </a>

                <a
                  href="tel:+15152384806"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-primary">
                    <PhoneCall className="h-3.5 w-3.5" />
                  </span>
                  <span>(515) 238-4806</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 border-t border-slate-200/90 pt-6">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                    <span>School Assemblies &amp; Circles</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Certified Youth Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Users className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>Nationwide &amp; Midwest Reach</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Showcase Column (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border backdrop */}
                <div
                  className="bg-brand-subtle absolute -inset-3 rounded-3xl border border-blue-200/50 shadow-card"
                  aria-hidden="true"
                />

                {/* Main Hero Photo */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Speaker Brett Lasko delivering an engaging presentation to youth and students"
                    className="h-[460px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] sm:h-[500px]"
                    width={1920}
                    height={1080}
                    fetchPriority="high"
                  />
                  {/* Subtle photo vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Card: Reached Students */}
                <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-gradient flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-xs">
                      <Users className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-2xl font-extrabold text-slate-900">5,000+</p>
                      <p className="text-xs font-medium text-slate-600">
                        Youth &amp; Students Mentored
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Card: Real Feedback */}
                <div className="absolute -top-6 -right-4 sm:-top-7 sm:-right-6 rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">98% High Engagement</p>
                      <p className="text-[11px] text-slate-500">Student &amp; Staff Reported</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
