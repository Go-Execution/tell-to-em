import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image + overlays */}
      <img
        src={heroImage}
        alt="Speaker addressing a young audience under stage lights"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      {/* Accent glows */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-aqua/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-40 sm:px-8">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-aqua backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
            Youth Empowerment • Public Speaking • Intervention
          </p>

          {/* Headline */}
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Talk That <span className="text-gradient">Inspires Change.</span>
          </h1>

          {/* Slogan */}
          <div className="mt-7 flex items-center gap-4">
            <span className="bg-brand-gradient h-px w-12 shrink-0" aria-hidden="true" />
            <p className="font-display text-2xl font-medium italic tracking-wide text-foreground/95 sm:text-3xl">
              “Our Words, <span className="text-gradient font-semibold not-italic">Your Wisdom</span>”
            </p>
          </div>

          {/* Supporting text */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Talk2em LLC helps young people discover a better direction through powerful
            conversations, motivational speaking, and meaningful youth intervention.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-brand-gradient rounded-full px-7 py-3.5 text-base font-semibold text-background shadow-glow transition-transform hover:scale-[1.03]"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="rounded-full border border-border bg-card/50 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:border-aqua/50 hover:text-aqua"
            >
              Explore Our Services
            </a>
          </div>

          {/* Supporting line */}
          <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground/90">
            Helping youth grow through guidance, inspiration, and real conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
