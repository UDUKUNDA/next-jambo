import { HeroSection } from "@/components/landing/HeroSection";
import { JamboNav } from "@/components/landing/JamboNav";
import { StepsSection } from "@/components/landing/StepsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#004D40]">
      <div className="mx-auto w-[1512px]">
        <JamboNav />
        <HeroSection />
        <StepsSection />
      </div>
    </main>
  );
}
