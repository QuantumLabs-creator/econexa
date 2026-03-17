"use client";


import { HeroSection } from "@/src/components/sections/Hero";
import MethodologySection from "@/src/components/sections/Metodologia";
import PricingSection from "@/src/components/sections/Planes";
import TrustSection from "@/src/components/sections/TrustSection";
import WhyEconexa from "@/src/components/sections/WhyEconexa";


export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <WhyEconexa />
      <TrustSection />
      <MethodologySection/>
      <PricingSection/>
    </main>
  );
}