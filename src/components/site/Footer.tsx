export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF8F5] py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 pb-12 border-b border-[#E8E4DC]">
          <div>
            <span className="font-serif text-3xl font-normal text-[#181614]">Brett Lasko</span>
            <span className="font-mono-label text-xs text-[#7A746B] ml-3">Talk2em LLC</span>
            <p className="font-serif italic text-base text-[#5A554E] mt-2">
              “Our Words, Your Wisdom”
            </p>
          </div>

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

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-label text-[#7A746B]">
          <p>
            © {new Date().getFullYear()} Talk2em LLC. Lived guidance for America’s next generation.
          </p>
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
