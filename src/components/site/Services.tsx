import { useEffect, useState } from "react";
import assemblyImage from "@/assets/assembly.jpg";
import circleImage from "@/assets/circle.jpg";
import workshopImage from "@/assets/workshop.jpg";
import { Reveal } from "./Reveal";
import { fetchCampusPrograms } from "@/lib/cms-client";
import { DEFAULT_CAMPUS_PROGRAMS } from "@/lib/cms-defaults";
import type { CampusProgram } from "@/types/cms";

function getProgramImage(item: CampusProgram, index: number) {
  if (item.image_url && item.image_url.trim()) {
    return item.image_url;
  }
  const title = (item.title || "").toLowerCase();
  if (title.includes("assembl")) return assemblyImage;
  if (title.includes("circle") || title.includes("interven")) return circleImage;
  if (title.includes("workshop") || title.includes("staff") || title.includes("educator")) {
    return workshopImage;
  }
  const fallbacks = [assemblyImage, circleImage, workshopImage];
  return fallbacks[index % fallbacks.length];
}

export function Services() {
  const [programs, setPrograms] = useState<CampusProgram[]>(() =>
    DEFAULT_CAMPUS_PROGRAMS.filter((p) => p.is_active),
  );

  useEffect(() => {
    fetchCampusPrograms().then((data) => {
      if (data && data.length > 0) {
        setPrograms(data.filter((p) => p.is_active));
      }
    });
  }, []);

  return (
    <section
      id="programs"
      className="relative py-24 sm:py-32 border-b border-[#E8E4DC] bg-[#FAF8F5]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 border-b border-[#E8E4DC]">
            <div>
              <span className="font-mono-label text-xs text-[#7A746B]">Speaking Formats</span>
              <h2 className="font-serif mt-2 text-3xl sm:text-4xl font-normal text-[#181614]">
                Campus Programs
              </h2>
            </div>
            <a
              href="#inquire"
              className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
            >
              Check Program Dates →
            </a>
          </div>

          {/* Visual Program Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map((item, idx) => (
              <div
                key={item.id || item.title}
                className="flex flex-col justify-between border border-[#E8E4DC] bg-white p-5 shadow-xs"
              >
                <div>
                  <div className="overflow-hidden border border-[#E8E4DC] h-48 bg-[#FAF8F5]">
                    <img
                      src={getProgramImage(item, idx)}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale contrast-105 transition-all duration-500 hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#181614] mt-5">
                    {item.title}
                  </h3>
                  <p className="font-mono-label text-[10px] text-[#7A746B] mt-1">{item.audience}</p>
                  <p className="mt-3 text-sm text-[#5A554E] leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC]">
                  <a
                    href="#inquire"
                    className="font-mono-label text-xs font-bold text-[#181614] hover:underline"
                  >
                    {item.inquire_label || "Inquire for Dates →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
