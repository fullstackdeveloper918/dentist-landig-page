"use client";
import BannerSection from "@/components/BannerSection";
import BenefitsSection from "@/components/BenefitsSection";
import BringBusinessSection from "@/components/BringBusinessSection";
import FeatureSection from "@/components/FeatureSection";
import FrequentlySection from "@/components/FrequentlySection";
import JoinFintuSection from "@/components/JoinFintuSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import WhatDoSection from "@/components/WhatDoSection";
import WhatMakesSection from "@/components/WhatMakesSection";

const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <BannerSection />
      <FeatureSection />
      <WhatMakesSection />
      <BenefitsSection />
      <BringBusinessSection />
      <WhatDoSection />
      <JoinFintuSection />
      <FrequentlySection />
      <Footer />
    </main>
  );
};

export default LandingPage;
