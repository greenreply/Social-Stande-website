import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { IndustryUseCases } from "@/components/landing/IndustryUseCases";
import { ProductGallery } from "@/components/landing/ProductGallery";
import { Testimonials } from "@/components/landing/Testimonials";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col bg-black min-h-screen">
      <HeroSection />
      <TrustedBy />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <IndustryUseCases />
      <ProductGallery />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
