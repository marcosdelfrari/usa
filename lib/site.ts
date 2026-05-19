export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.unidadedesaudeanimal.com.br";

export const SITE_NAME = "USA - Unidade de Saúde Animal";
export const SITE_SHORT_NAME = "USA";
export const SITE_TAGLINE = "Cuidando de quem você ama.";

export const SITE_PHONE = "+5531982885745";
export const SITE_PHONE_DISPLAY = "(31) 98288-5745";

export const SITE_ADDRESS = {
  streetAddress: "Rua Carlos Martins, 65",
  addressLocality: "Matozinhos",
  addressRegion: "MG",
  postalCode: "35720-000",
  addressCountry: "BR",
} as const;

export const SITE_GEO = {
  latitude: -19.5576,
  longitude: -44.0814,
} as const;

export const SITE_HOURS = "Mo-Su 09:00-21:00";

export const SITE_SOCIAL = {
  instagram: "https://www.instagram.com/unidadedesaudeanimal",
  whatsapp: "https://wa.me/5531982885745",
  whatsappContact: "https://wa.me/5531984181921",
  maps: "https://maps.app.goo.gl/NHQiTC51xZ6a596r7",
} as const;
