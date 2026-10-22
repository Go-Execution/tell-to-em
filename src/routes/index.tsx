import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { SpeakingTopics } from "@/components/site/SpeakingTopics";
import { Impact } from "@/components/site/Impact";
import { Feedback } from "@/components/site/Feedback";
import { Faq } from "@/components/site/Faq";
import { BookCall } from "@/components/site/BookCall";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talk2em LLC — Youth Empowerment, Public Speaking & Intervention" },
      {
        name: "description",
        content:
          "Talk2em LLC empowers middle school, high school, and community youth through motivational public speaking, youth intervention circles, and lived-experience mentorship. Founded by Brett Lasko.",
      },
      { property: "og:title", content: "Talk2em LLC — Talk That Inspires Real Change" },
      {
        property: "og:description",
        content:
          "“Our Words, Your Wisdom” — Practical guidance, character development, and youth intervention for schools, alternative programs, and communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <SpeakingTopics />
        <Impact />
        <Feedback />
        <Faq />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
