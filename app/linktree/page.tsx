import Image from "next/image";
import { Instagram, MapPin, Globe, MessageCircle, Share } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links e Contato - WhatsApp, Instagram e Localização",
  description:
    "📱 WhatsApp (31) 98288-5745, Instagram, site e localização da clínica veterinária USA em Matozinhos. Agende atendimento e encontre nossos canais oficiais. Atendemos Capim Branco e Pedro Leopoldo.",
  keywords: [
    "contato veterinário Matozinhos",
    "WhatsApp veterinário Matozinhos",
    "telefone clínica veterinária Matozinhos",
    "Instagram USA Matozinhos",
    "localização clínica veterinária",
  ],
  alternates: {
    canonical: "/linktree",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Links e Contato - USA Matozinhos",
    description: "WhatsApp, Instagram e todos os canais de contato da clínica veterinária USA.",
    url: "/linktree",
  },
};

export default function LinktreePage() {
  const links = [
    {
      title: "Agende pelo WhatsApp",
      url: "https://wa.me/5531984181921",
      icon: MessageCircle,
    },
    {
      title: "Nosso Site",
      url: "https://www.unidadedesaudeanimal.com.br",
      icon: Globe,
    },
    {
      title: "Siga nosso Instagram",
      url: "https://www.instagram.com/unidadedesaudeanimal?igsh=bzh6d2xmbTNyNWQ0",
      icon: Instagram,
    },
    {
      title: "Como Chegar",
      url: "https://maps.app.goo.gl/NHQiTC51xZ6a596r7?g_st=iw",
      icon: MapPin,
    },
  ];

  const socials = [
    { icon: MessageCircle, url: "https://wa.me/5531984181921" },
    { icon: Instagram, url: "https://www.instagram.com/unidadedesaudeanimal?igsh=bzh6d2xmbTNyNWQ0" },
    { icon: Globe, url: "https://www.unidadedesaudeanimal.com.br" },
    { icon: MapPin, url: "https://maps.app.goo.gl/NHQiTC51xZ6a596r7?g_st=iw" },
  ];

  return (
    <div className="min-h-screen bg-[#9f515e] flex flex-col items-center py-12 px-4 relative font-sans">
      <h1 className="sr-only">USA — Links e contato</h1>
      {/* Botão de Compartilhar */}
      <button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#9f515e] hover:bg-gray-100 transition-colors shadow-md">
        <Share size={20} />
      </button>

      {/* Seção de Perfil */}
      <div className="flex flex-col items-center mb-10 mt-4">
        <div className="w-32 h-32 flex items-center justify-center mb-5">
          <Image
            src="/logo.png"
            alt="USA Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <p className="text-white/90 text-base font-medium">Cuidando de quem você ama.</p>
      </div>

      {/* Seção de Links */}
      <div className="w-full max-w-[600px] flex flex-col gap-5 mb-16">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full block"
          >
            {/* Efeito de Sombra/Offset */}
            <div className="absolute inset-0 bg-[#e8ddde] rounded-xl translate-y-1.5 translate-x-1.5 transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></div>
            
            {/* Botão Principal */}
            <div className="relative bg-white rounded-xl p-4 flex items-center justify-center transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
              <div className="absolute left-6 text-[#9f515e]">
                <link.icon size={24} strokeWidth={2} />
              </div>
              <span className="text-[#9f515e] font-semibold text-lg text-center w-full px-12">
                {link.title}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Ícones Sociais */}
      <div className="flex gap-8 mt-auto mb-8">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#e8ddde] transition-colors p-2 border border-transparent hover:border-white/30 rounded-full"
          >
            <social.icon size={28} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </div>
  );
}
