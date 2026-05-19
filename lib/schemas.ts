import { FAQ_ITEMS } from "./faq";
import {
  SITE_ADDRESS,
  SITE_GEO,
  SITE_HOURS,
  SITE_NAME,
  SITE_PHONE,
  SITE_SOCIAL,
  SITE_URL,
} from "./site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@type": "VeterinaryCare",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: "USA Matozinhos",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [
      `${SITE_URL}/header.jpg`,
      `${SITE_URL}/petsstatic.webp`,
      `${SITE_URL}/logo.png`,
    ],
    telephone: SITE_PHONE,
    priceRange: "$$",
    description:
      "Clínica veterinária em Matozinhos com internação 24h, pronto atendimento, consultas e vacinas. Atendemos Capim Branco, Pedro Leopoldo e região.",
    slogan: "Cuidando de quem você ama.",
    address: {
      "@type": "PostalAddress",
      ...SITE_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    openingHours: SITE_HOURS,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: [SITE_SOCIAL.instagram, SITE_SOCIAL.whatsapp, SITE_SOCIAL.maps],
    areaServed: [
      {
        "@type": "City",
        name: "Matozinhos",
        containedInPlace: { "@type": "State", name: "Minas Gerais" },
      },
      {
        "@type": "City",
        name: "Capim Branco",
        containedInPlace: { "@type": "State", name: "Minas Gerais" },
      },
      {
        "@type": "City",
        name: "Pedro Leopoldo",
        containedInPlace: { "@type": "State", name: "Minas Gerais" },
      },
    ],
    hasMap: SITE_SOCIAL.maps,
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Cartão, Pix",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "Portal oficial da clínica veterinária USA em Matozinhos: informações, contato, localização e canais de atendimento.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    provider: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "pt-BR",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema() {
  return {
    "@type": "Service",
    serviceType: "Atendimento Veterinário",
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed: [
      { "@type": "City", name: "Matozinhos" },
      { "@type": "City", name: "Capim Branco" },
      { "@type": "City", name: "Pedro Leopoldo" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Veterinários",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Internação 24h",
            description:
              "Internação veterinária com monitoramento contínuo 24 horas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pronto Atendimento",
            description: "Atendimento veterinário de emergência imediato",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultas Veterinárias",
            description: "Consultas e acompanhamento veterinário completo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vacinação",
            description: "Vacinas e imunização para pets",
          },
        },
      ],
    },
  };
}

export function howToSchema() {
  return {
    "@type": "HowTo",
    name: "Como funciona o atendimento na USA",
    description: "Passo a passo para atendimento veterinário na clínica",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "É só chegar",
        text: "Não precisa agendar: aqui o atendimento é imediato. Funcionamos todos os dias das 9:00 às 21:00 para cuidar do seu pet quando ele precisar.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Atendimento personalizado",
        text: "Avaliamos o seu pet e as suas necessidades. Cada animal e cada tutor recebem atenção individual, para que o tratamento e as orientações façam sentido para a realidade de vocês.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Acompanhamento contínuo",
        text: "Após a consulta ou o procedimento, você pode contar conosco para dúvidas, retornos e acompanhamento. Estamos na região de Matozinhos para estar perto quando precisar.",
      },
    ],
  };
}

export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      softwareApplicationSchema(),
      serviceSchema(),
      howToSchema(),
    ],
  };
}
