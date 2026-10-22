import { useEffect, useState } from "react";
import { Phone, ArrowRight, Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Topics", href: "#topics" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#feedback" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/90 shadow-xs backdrop-blur-md"
          : "border-b border-slate-200/40 bg-white/70 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="Talk2em LLC home"
        >
          <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white shadow-glow transition-transform group-hover:scale-105">
            T2
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
              Talk2em <span className="text-primary font-bold">LLC</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Youth Mentorship &amp; Speaking
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Phone quick link */}
          <a
            href="tel:+15152384806"
            className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-primary/40 hover:bg-white hover:text-primary sm:inline-flex"
            title="Direct Phone Line"
          >
            <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>(515) 238-4806</span>
          </a>

          {/* Book Call CTA */}
          <a
            href="#contact"
            className="bg-brand-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-lg sm:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Book a Call</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-b border-slate-200 bg-white/98 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5 sm:px-8">
          <div className="mb-2 flex items-center justify-between rounded-xl bg-slate-50 p-3">
            <span className="text-xs font-medium text-slate-500">Need urgent booking?</span>
            <a
              href="tel:+15152384806"
              className="flex items-center gap-1.5 text-xs font-bold text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> (515) 238-4806
            </a>
          </div>

          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-brand-gradient mt-4 flex items-center justify-center gap-2 rounded-xl py-3 text-center text-sm font-bold uppercase tracking-wider text-white shadow-glow"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
