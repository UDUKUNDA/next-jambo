import { HeroSection } from "@/components/landing/HeroSection";
import { JamboNav } from "@/components/landing/JamboNav";
import { StepsSection } from "@/components/landing/StepsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#00473B] via-[#003D33] to-[#002F28]">
      <JamboNav />
      <HeroSection />
      <StepsSection />
    </main>
  );
}

