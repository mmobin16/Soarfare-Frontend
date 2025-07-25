import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navigation />
      </div>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
    </div>
  );
};

export default Index;
