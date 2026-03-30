import { HeroSection } from "@/components/landing/HeroSection";
import { JamboNav } from "@/components/landing/JamboNav";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#004D40] snap-y snap-mandatory md:snap-none">
      <JamboNav />
      <HeroSection />
    </main>
  );
}
