import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF8F5] py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-[#E8E4DC]">
          {/* Logo replacement for footer */}
          <a href="#home" className="shrink-0">
            <img
              src={logo}
              alt="TOK2EM — Our Words, Your Wisdom"
              className="h-[180px] w-auto object-contain sm:h-[200px]"
              width={180}
              height={64}
            />
          </a>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-label text-[#7A746B]">
            <a href="tel:+15152384806" className="hover:text-[#181614] transition-colors">
              515.238.4806
            </a>
            <a
              href="mailto:brett.lasko@icloud.com"
              className="hover:text-[#181614] transition-colors"
            >
              brett.lasko@icloud.com
            </a>
            <span>Des Moines, Iowa • Nationwide</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-label text-[#7A746B]">
          <p>© {new Date().getFullYear()} TOK2EM LLC. All Rights Reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[#181614] transition-colors text-left sm:text-right"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
