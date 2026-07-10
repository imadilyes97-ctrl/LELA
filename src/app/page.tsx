import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { StorySection } from "@/components/marketing/story-section";
import { StatsSection } from "@/components/marketing/stats-section";
import { CategoriesSection } from "@/components/marketing/categories-section";
import { FeaturedVendorsSection } from "@/components/marketing/featured-vendors";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { CTASection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturedVendorsSection />
        <StorySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
