import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { fetchLegalPage } from "@/lib/cms-client";
import type { LegalPage } from "@/types/cms";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TOK2EM | Brett Lasko" },
      {
        name: "description",
        content: "Privacy policy and educator data protection standards for TOK2EM LLC.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const [page, setPage] = useState<LegalPage | null>(null);

  useEffect(() => {
    fetchLegalPage("privacy-policy").then(setPage);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181614] flex flex-col justify-between selection:bg-[#E8E4DC] selection:text-[#181614]">
      <Header />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 px-6 sm:px-10">
        <div className="mx-auto max-w-4xl bg-white border border-[#E8E4DC] p-8 sm:p-14 shadow-xs rounded-sm">
          <div className="border-b border-[#E8E4DC] pb-6 mb-8">
            <span className="text-[11px] font-mono-label uppercase tracking-widest text-[#7A746B]">
              Legal & Compliance
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#181614]">
              {page?.title || "Privacy Policy"}
            </h1>
            {page?.last_updated_at && (
              <p className="mt-2 text-xs font-mono-label text-[#7A746B]">
                Last updated:{" "}
                {new Date(page.last_updated_at).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          {page?.content_html ? (
            <div
              className="prose prose-stone max-w-none text-[#3A352E] leading-relaxed space-y-4 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-[#181614] [&>h3]:font-serif [&>h3]:text-xl [&>h3]:text-[#181614] [&>h3]:mt-6 [&>ul]:list-disc [&>ul]:pl-5 [&>a]:text-[#181614] [&>a]:underline"
              dangerouslySetInnerHTML={{ __html: page.content_html }}
            />
          ) : (
            <div className="py-12 text-center text-sm text-[#7A746B]">Loading policy...</div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
