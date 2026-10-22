import { useEffect, useState } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Keynote Topics", href: "#topics" },
  { label: "Speaker Reel", href: "#reel" },
  { label: "Endorsements", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/95 shadow-xs backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 font-display text-sm font-bold text-white">
            T2
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-slate-950">
              Brett Lasko <span className="font-normal text-slate-500">| Talk2em</span>
            </span>
            <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
              Youth Keynote Speaker &amp; Intervention
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+15152384806"
            className="hidden items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-slate-500" />
            <span>(515) 238-4806</span>
          </a>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-slate-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-slate-800 sm:inline-flex"
          >
            <span>Book to Speak</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden">
          <div className="mb-4 pb-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Direct Speaker Inquiries:</span>
            <a
              href="tel:+15152384806"
              className="text-xs font-bold text-slate-950 flex items-center gap-1"
            >
              <Phone className="h-3.5 w-3.5" /> (515) 238-4806
            </a>
          </div>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-slate-800 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-semibold uppercase tracking-wider text-white"
            >
              <span>Check Availability</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
