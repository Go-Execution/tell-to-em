import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="font-display text-lg font-bold text-slate-950">
              Brett Lasko <span className="font-normal text-slate-500">| Talk2em LLC</span>
            </span>
            <p className="font-display text-sm italic text-slate-600 mt-1">
              “Our Words, Your Wisdom”
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <a href="tel:+15152384806" className="flex items-center gap-1.5 hover:text-slate-950">
                <Phone className="h-3.5 w-3.5" /> (515) 238-4806
              </a>
              <a
                href="mailto:brett.lasko@icloud.com"
                className="flex items-center gap-1.5 hover:text-slate-950"
              >
                <Mail className="h-3.5 w-3.5" /> brett.lasko@icloud.com
              </a>
              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="h-3.5 w-3.5" /> Des Moines, Iowa (Nationwide)
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={scrollToTop}
              className="font-semibold text-slate-900 hover:underline"
            >
              Back to top ↑
            </button>
            <p>© {new Date().getFullYear()} Talk2em LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
