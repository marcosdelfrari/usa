import type { Metadata } from "next";
import { BenefitsSection } from "./components/BenefitsSection";
import { FamilySection } from "./components/FamilySection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { JsonLd } from "./components/JsonLd";
import { UsaHelpSection } from "./components/UsaHelpSection";
import { WhoIsUsaFor } from "./components/WhoIsUsaFor";
import { faqPageSchema } from "@/lib/schemas";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clínica Veterinária em Matozinhos com Internação 24h",
  description:
    "⭐ Internação 24h, pronto atendimento veterinário e consultas em Matozinhos. Atendemos Capim Branco, Pedro Leopoldo e região. Aberto todos os dias das 9h às 21h. Veterinário na clínica 24 horas.",
  keywords: [
    "veterinário Matozinhos",
    "clínica veterinária Matozinhos",
    "internação veterinária 24h Matozinhos",
    "pronto atendimento veterinário Matozinhos",
    "emergência veterinária Matozinhos",
    "veterinário Capim Branco",
    "veterinário Pedro Leopoldo",
    "consulta veterinária Matozinhos",
    "vacina para pet Matozinhos",
    "USA Matozinhos",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `Clínica Veterinária em Matozinhos | ${SITE_NAME}`,
    description:
      "Internação 24h, pronto atendimento e consultas. Veterinário na clínica 24h para emergências. É só chegar.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/header.jpg`,
        width: 1200,
        height: 630,
        alt: "Clínica Veterinária USA Matozinhos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Clínica Veterinária em Matozinhos | ${SITE_NAME}`,
    description:
      "Internação 24h, pronto atendimento e consultas. Veterinário na clínica 24h para emergências.",
    images: [`${SITE_URL}/header.jpg`],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <JsonLd data={faqPageSchema()} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
          ],
        }}
      />
      <div className="relative flex h-screen min-w-0 flex-col overflow-x-hidden">
        <Header />
        <Hero />
      </div>
      <UsaHelpSection />
      <WhoIsUsaFor />
      <HowWeWorkSection />
      <BenefitsSection />
      <FamilySection />
      <FaqSection />
      <Footer />
    </div>
  );
}
