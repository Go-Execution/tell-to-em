import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Impact } from "@/components/site/Impact";
import { Feedback } from "@/components/site/Feedback";
import { BookCall } from "@/components/site/BookCall";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Talk2em LLC — Our Words, Your Wisdom" },
      {
        name: "description",
        content:
          "Talk2em LLC empowers young people through motivational public speaking, youth intervention, and community engagement. Book a discovery call today.",
      },
      { property: "og:title", content: "Talk2em LLC — Talk That Inspires Change" },
      {
        property: "og:description",
        content:
          "Youth empowerment, public speaking, and intervention. Helping youth grow through guidance, inspiration, and real conversation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Feedback />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
}
