import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import { siteGraphSchema } from "@/lib/schemas";
import { SITE_NAME, SITE_SHORT_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description:
    "Clínica veterinária em Matozinhos com internação 24h, pronto atendimento, consultas e vacinas. Atendemos Capim Branco, Pedro Leopoldo e região.",
  keywords: [
    "veterinário Matozinhos",
    "clínica veterinária Matozinhos",
    "internação veterinária 24h",
    "pronto atendimento veterinário",
    "veterinário Capim Branco",
    "veterinário Pedro Leopoldo",
    "vacina para pet",
    "emergência veterinária",
    "consulta veterinária",
    "clínica pet Matozinhos",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/header.jpg`,
        width: 1200,
        height: 630,
        alt: "USA - Unidade de Saúde Animal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
    images: [`${SITE_URL}/header.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${publicSans.variable} font-sans antialiased overflow-x-hidden w-full`}>
        <JsonLd data={siteGraphSchema()} />
        <div className="min-w-0 w-full overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
