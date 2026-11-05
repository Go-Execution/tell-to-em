import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  FileText,
  Shield,
  Lock,
} from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF8F5] pt-16 pb-12 text-[#181614]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E8E4DC]">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/#home" className="inline-block">
              <img
                src={logo}
                alt="TOK2EM — Our Words, Your Wisdom"
                className="h-16 w-auto object-contain"
                width={160}
                height={64}
              />
            </a>
            <p className="font-serif italic text-base text-[#181614] font-medium">
              “Our Words, Your Wisdom”
            </p>
            <p className="text-xs text-[#5A554E] leading-relaxed max-w-sm">
              Empowering middle school, high school, and at-risk students through lived-experience
              keynote assemblies, restorative breakout circles, and authentic mentorship.
            </p>
            <div className="pt-2 text-[11px] font-mono-label text-[#7A746B]">
              <span className="font-semibold text-[#181614]">Talk to Them LLC</span> • Operating
              talk2emllc.com
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono-label text-[11px] uppercase tracking-widest text-[#7A746B] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/#home" className="text-[#5A554E] hover:text-[#181614] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#story" className="text-[#5A554E] hover:text-[#181614] transition-colors">
                  About Brett Lasko
                </a>
              </li>
              <li>
                <a
                  href="/#programs"
                  className="text-[#5A554E] hover:text-[#181614] transition-colors"
                >
                  Assembly &amp; Circle Formats
                </a>
              </li>
              <li>
                <a
                  href="/#topics"
                  className="text-[#5A554E] hover:text-[#181614] transition-colors"
                >
                  Keynote Topics
                </a>
              </li>
              <li>
                <a href="/#reel" className="text-[#5A554E] hover:text-[#181614] transition-colors">
                  Live Speaker Reel
                </a>
              </li>
              <li>
                <a
                  href="/#endorsements"
                  className="text-[#5A554E] hover:text-[#181614] transition-colors"
                >
                  Administrator Endorsements
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-[#5A554E] hover:text-[#181614] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="/#inquire"
                  className="text-[#181614] font-semibold hover:underline transition-colors flex items-center gap-1"
                >
                  Book an Assembly <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono-label text-[11px] uppercase tracking-widest text-[#7A746B] font-bold">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-[#5A554E] hover:text-[#181614] transition-colors flex items-center gap-1.5"
                >
                  <Shield className="h-3 w-3 text-[#7A746B]" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-[#5A554E] hover:text-[#181614] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="h-3 w-3 text-[#7A746B]" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#7A746B] hover:text-[#181614] transition-colors text-[11px] font-mono-label flex items-center gap-1"
                >
                  Privacy PDF <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#7A746B] hover:text-[#181614] transition-colors text-[11px] font-mono-label flex items-center gap-1"
                >
                  Terms PDF <ArrowUpRight className="h-2.5 w-2.5" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/admin"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E0DBCF] bg-white px-3 py-1 text-[11px] font-mono-label text-[#5A554E] hover:text-[#181614] hover:border-[#181614] transition-colors"
                >
                  <Lock className="h-3 w-3 text-[#181614]" />
                  Admin Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Availability (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono-label text-[11px] uppercase tracking-widest text-[#7A746B] font-bold">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#7A746B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B] block uppercase tracking-wider">
                    Toll-Free Phone
                  </span>
                  <a
                    href="tel:+18444865236"
                    className="font-serif text-lg font-medium text-[#181614] hover:underline"
                  >
                    (844) I-tok-2-em
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#7A746B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B] block uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href="mailto:info@tok2em.com"
                    className="font-mono text-xs font-semibold text-[#181614] hover:underline"
                  >
                    info@tok2em.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="h-4 w-4 text-[#7A746B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B] block uppercase tracking-wider">
                    Official Domain
                  </span>
                  <a
                    href="https://talk2emllc.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs font-semibold text-[#181614] hover:underline"
                  >
                    talk2emllc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#7A746B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono-label text-[10px] text-[#7A746B] block uppercase tracking-wider">
                    Base Location
                  </span>
                  <p className="text-xs text-[#5A554E]">Des Moines, Iowa • Nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-label text-[#7A746B]">
          <p>© {new Date().getFullYear()} Talk to Them LLC (TOK2EM). All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-[#181614] transition-colors underline-offset-4 hover:underline"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#181614] transition-colors underline-offset-4 hover:underline"
            >
              Terms
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#181614] transition-colors cursor-pointer"
            >
              Back to Top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
