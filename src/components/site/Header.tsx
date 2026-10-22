import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { label: "About", href: "#story" },
  { label: "Programs", href: "#programs" },
  { label: "Topics", href: "#topics" },
  { label: "Reel", href: "#reel" },
  { label: "Reviews", href: "#endorsements" },
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
          : "border-b border-[#E8E4DC]/80 bg-[#FAF8F5]"
      }`}
    >
      <div className="mx-auto flex h-auto max-w-7xl items-center justify-between px-6 sm:px-10 gap-6">
        {/* Brand Logo - text removed, official logo used */}
        <a href="#home" className="shrink-0 flex items-center py-2">
          <img
            src={logo}
            alt="Talk2em — Our Words, Your Wisdom"
            className="h-[150px] w-auto object-contain sm:h-[180px]"
            width={160}
            height={56}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 shrink-0" aria-label="Main Navigation">
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

        {/* Action Group */}
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="tel:+15152384806"
            className="hidden sm:inline-block font-mono-label text-xs font-semibold text-[#5A554E] hover:text-[#181614] transition-colors"
          >
            515.238.4806
          </a>

          <a
            href="#inquire"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#181614] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FAF8F5] transition-all hover:bg-black shadow-xs"
          >
            Check Availability
          </a>

          {/* Hamburger for mobile / tablet screens */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="p-2 text-[#181614] xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {open && (
        <div className="border-b border-[#E8E4DC] bg-[#FAF8F5] px-6 py-8 shadow-xl xl:hidden">
          <nav className="flex flex-col gap-5">
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
            <div className="pt-6 border-t border-[#E8E4DC] flex flex-col gap-4">
              <a href="tel:+15152384806" className="font-mono-label text-xs text-[#5A554E]">
                Direct Line: 515.238.4806
              </a>
              <a
                href="#inquire"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-[#181614] py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF8F5]"
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
