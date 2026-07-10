import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { StorySection } from "@/components/marketing/story-section";
import { CategoriesSection } from "@/components/marketing/categories-section";
import { StatsSection } from "@/components/marketing/stats-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <StatsSection />
        <CategoriesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
