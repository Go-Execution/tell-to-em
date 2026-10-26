import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { fetchFaqs } from "@/lib/cms-client";
import type { FaqItem } from "@/types/cms";

export function Faq() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    fetchFaqs().then((data) => {
      setFaqs(data.filter((f) => f.is_published));
    });
  }, []);

  return (
    <section id="faq" className="relative py-20 sm:py-28 border-b border-[#E8E4DC] bg-[#FAF8F5]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <div className="text-center pb-8 border-b border-[#E8E4DC]">
            <span className="font-mono-label text-xs text-[#7A746B]">Common Questions</span>
            <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">FAQ</h2>
          </div>

          <div className="divide-y divide-[#E8E4DC]">
            {faqs.map((faq, i) => (
              <div key={faq.id || faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-baseline justify-between text-left cursor-pointer"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-[#181614]">
                    {faq.question}
                  </span>
                  <span className="ml-4 text-xs font-mono-label text-[#7A746B]">
                    {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {openIndex === i && (
                  <p className="mt-2 text-sm text-[#5A554E] leading-relaxed pr-6">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
