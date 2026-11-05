import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { fetchLegalPage } from "@/lib/cms-client";
import type { LegalPage } from "@/types/cms";
import { Download } from "lucide-react";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "TALK2EM LLC — Website Terms and Conditions" },
      {
        name: "description",
        content:
          "Official terms and conditions for booking and speaking services provided by TALK2EM LLC operating talk2emllc.com.",
      },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  const [page, setPage] = useState<LegalPage | null>(null);

  useEffect(() => {
    fetchLegalPage("terms-of-service").then(setPage);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181614] flex flex-col justify-between selection:bg-[#E8E4DC] selection:text-[#181614]">
      <Header />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-10">
        <div className="mx-auto max-w-4xl bg-white border border-[#E8E4DC] p-8 sm:p-14 shadow-xs rounded-sm">
          <div className="border-b border-[#E8E4DC] pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono-label uppercase tracking-widest text-[#7A746B]">
                Legal & Compliance • talk2emllc.com
              </span>
              <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#181614]">
                {page?.title || "Talk2Em LLC — Website Terms and Conditions"}
              </h1>
              {page?.last_updated_at && (
                <p className="mt-2 text-xs font-mono-label text-[#7A746B]">
                  Last updated: Nov 5, 2026
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/TOK2EM_Terms_and_Conditions.docx"
                download="TOK2EM_Terms_and_Conditions.docx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#181614] bg-white px-4 py-2 text-xs font-mono-label font-bold uppercase tracking-wider text-[#181614] hover:bg-[#181614] hover:text-white transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                Download Document (.docx)
              </a>
            </div>
          </div>

          {page?.content_html ? (
            <div
              className="prose prose-stone max-w-none text-[#3A352E] leading-relaxed space-y-4 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-[#181614] [&>h3]:font-serif [&>h3]:text-xl [&>h3]:text-[#181614] [&>h3]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>a]:text-[#181614] [&>a]:underline"
              dangerouslySetInnerHTML={{ __html: page.content_html }}
            />
          ) : (
            <div className="py-12 text-center text-sm text-[#7A746B]">Loading terms...</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
