import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Story & Mission", href: "#story" },
  { label: "Programs", href: "#programs" },
  { label: "Curriculum", href: "#topics" },
  { label: "Speaker Reel", href: "#reel" },
  { label: "Voices from the Field", href: "#endorsements" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8E4DC] bg-[#FAF8F5]/95 backdrop-blur-md"
          : "border-b border-[#E8E4DC]/60 bg-[#FAF8F5]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Brand mark */}
        <a href="#home" className="flex items-baseline gap-3 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#181614]">
            Brett Lasko
          </span>
          <span className="font-mono-label text-[11px] text-[#7A746B] border-l border-[#E8E4DC] pl-3">
            Talk2em
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#5A554E] hover:text-[#181614] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direct Action */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+15152384806"
            className="hidden font-mono-label text-xs text-[#5A554E] hover:text-[#181614] transition-colors sm:block"
          >
            515.238.4806
          </a>

          <a
            href="#inquire"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#181614] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] transition-all hover:bg-black"
          >
            Check Availability
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="p-2 text-[#181614] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-[#E8E4DC] bg-[#FAF8F5] px-6 py-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-xl font-medium text-[#181614]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E8E4DC] flex flex-col gap-3">
              <a href="tel:+15152384806" className="font-mono-label text-xs text-[#5A554E]">
                Direct line: 515.238.4806
              </a>
              <a
                href="#inquire"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#181614] py-3 text-xs font-bold uppercase tracking-wider text-[#FAF8F5]"
              >
                Check Availability &amp; Fees
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
