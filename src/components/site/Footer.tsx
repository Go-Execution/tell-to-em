import { Mail, Phone, MapPin, ArrowUp, Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Mission", href: "#about" },
  { label: "Services & Formats", href: "#services" },
  { label: "Speaking Topics", href: "#topics" },
  { label: "Behavioral Impact", href: "#impact" },
  { label: "Endorsements", href: "#feedback" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a Discovery Call", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* Brand accent gradient stripe */}
      <div className="bg-brand-gradient h-1.5 w-full" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-3">
              <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white shadow-glow">
                T2
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
                Talk2em <span className="text-primary">LLC</span>
              </span>
            </a>

            <p className="font-display mt-4 text-base font-bold italic text-slate-800">
              “Our Words, Your Wisdom”
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Dedicated to uplifting, mentoring, and redirecting youth through honest conversations,
              motivational speaking, and community-rooted intervention.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>Headquartered in Des Moines, Iowa • Nationwide Availability</span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Navigation
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-semibold">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Line & Inquiries (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900">
              Direct Contact
            </h3>
            <ul className="mt-5 space-y-3.5 text-xs">
              <li>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Speaker &amp; Founder
                </span>
                <span className="font-bold text-slate-900 text-sm">Brett Lasko</span>
              </li>
              <li>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Direct Telephone
                </span>
                <a
                  href="tel:+15152384806"
                  className="font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-1.5 mt-0.5 text-sm"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> (515) 238-4806
                </a>
              </li>
              <li>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Direct Email
                </span>
                <a
                  href="mailto:brett.lasko@icloud.com"
                  className="font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-1.5 mt-0.5 break-all text-xs"
                >
                  <Mail className="h-3.5 w-3.5 text-teal-600 shrink-0" /> brett.lasko@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-100 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Talk2em LLC. All Rights Reserved. Empowering the Next
            Generation.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-bold text-slate-600 transition-colors hover:border-primary hover:text-primary"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
