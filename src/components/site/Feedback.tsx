import { useEffect, useState } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import { Reveal } from "./Reveal";
import { fetchTestimonials } from "@/lib/cms-client";
import type { TestimonialItem } from "@/types/cms";

export function Feedback() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    fetchTestimonials().then((data) => {
      setTestimonials(data.filter((t) => t.is_approved && t.is_featured));
    });
  }, []);

  return (
    <section
      id="endorsements"
      className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <span className="font-mono-label text-xs text-[#7A746B]">From Administrators</span>
          <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
            Endorsements
          </h2>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {testimonials.map((item, idx) => (
              <div
                key={item.id || item.author_name}
                className="border border-[#E8E4DC] bg-white p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-500 text-xs mb-3">
                    {"★".repeat(item.rating || 5)}
                  </div>
                  <blockquote className="font-serif text-xl font-normal text-[#181614] leading-relaxed italic">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E4DC] flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border border-[#E8E4DC] shrink-0">
                    <img
                      src={idx % 2 === 0 ? avatar1 : avatar2}
                      alt={item.author_name}
                      className="h-full w-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-[#181614]">
                      {item.author_name}
                    </p>
                    <p className="font-mono-label text-[11px] text-[#7A746B] mt-0.5">
                      {item.author_title}
                      {item.school_district && ` • ${item.school_district}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
