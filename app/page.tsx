import { BenefitsSection } from "./components/BenefitsSection";
import { FamilySection } from "./components/FamilySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { UsaHelpSection } from "./components/UsaHelpSection";
import { WhoIsUsaFor } from "./components/WhoIsUsaFor";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header + Hero ocupam exatamente 100vh (primeira tela). No mobile a nav sobrepõe o hero. */}
      <div className="relative flex h-screen flex-col">
        <Header />
        <Hero />
      </div>
      <UsaHelpSection />
      <HowWeWorkSection />
      <WhoIsUsaFor />

      <BenefitsSection />
      <FamilySection />
      <Footer />
    </div>
  );
}
