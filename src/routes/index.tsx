import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { SpeakerReel } from "@/components/site/SpeakerReel";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { SpeakingTopics } from "@/components/site/SpeakingTopics";
import { Feedback } from "@/components/site/Feedback";
import { Faq } from "@/components/site/Faq";
import { BookCall } from "@/components/site/BookCall";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brett Lasko — Youth Keynote Speaker & Intervention Specialist | Talk2em" },
      {
        name: "description",
        content:
          "Brett Lasko helps middle school, high school, and at-risk students make life-altering positive choices through lived-experience assemblies, keynote speaking, and intervention circles.",
      },
      { property: "og:title", content: "Brett Lasko — Talk That Inspires Real Change" },
      {
        property: "og:description",
        content:
          "“Our Words, Your Wisdom” — Assemblies, small-group intervention, and workshops for schools and youth organizations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      <Header />
      <main>
        <Hero />
        <SpeakerReel />
        <About />
        <Services />
        <SpeakingTopics />
        <Feedback />
        <Faq />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
