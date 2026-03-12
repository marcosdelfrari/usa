"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// Dados de funcionamento simulados
const HOURS = [
  { time: "08:00 – 18:00", label: "Seg" },
  { time: "08:00 – 18:00", label: "Ter" },
  { time: "08:00 – 18:00", label: "Qua" },
  { time: "08:00 – 18:00", label: "Qui" },
  { time: "08:00 – 18:00", label: "Sex" },
  { time: "08:00 – 12:00", label: "Sáb" },
] as const;

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#9f515e] text-white pt-16 pb-6 px-6 md:px-10 lg:px-14 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-8 mb-16 relative">
          {/* Coluna Esquerda: Logo, Menu, Horários */}
          <div className="flex flex-col gap-12">
            {/* Cabeçalho da coluna esquerda: Logo + Menu */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div>
                  <Image
                    src="/logo.png"
                    alt="USA Logo"
                    width={200}
                    height={200}
                    className="h-20 w-20 object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Horários */}
              <div>
                <h3 className="text-sm font-semibold opacity-70 mb-4 uppercase tracking-wider">
                  Horário de Atendimento:
                </h3>
                <div className="flex flex-col gap-2">
                  {HOURS.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-lg sm:text-xl font-light"
                    >
                      <span className="tabular-nums tracking-tight">
                        {item.time}
                      </span>
                      <span className="px-2 py-0.5 rounded border border-white/30 text-[10px] uppercase font-bold tracking-wide bg-white/5">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Endereço, Social, Contatos Grandes */}
          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-10">
            {/* Endereço */}
            <div className="space-y-1">
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <p className="text-white/90 font-light text-lg leading-relaxed max-w-xs lg:ml-auto">
                Rua Carlos Martins, 65
                <br />
                Centro, Matozinhos/MG
                <br />
                CEP 35720-000
              </p>
            </div>

            {/* Social e Contatos Grandes */}
            <div className="w-full flex flex-col items-start lg:items-end gap-6 mt-auto">
              {/* Ícones Sociais */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 border border-white/30 rounded-lg hover:bg-white hover:text-[#9f515e] transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* Contatos Gigantes */}
              <div className="flex flex-col items-start lg:items-end gap-0">
                <a
                  href="tel:+5531999991234"
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight hover:opacity-80 transition-opacity"
                >
                  (31) 99999-1234
                </a>
                <a
                  href="mailto:contato@usa.com.br"
                  className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight opacity-90 hover:opacity-100 transition-opacity break-all lg:break-normal"
                >
                  contato@usa.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé inferior (Copyright e Links Legais) */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/60">
          <p>
            © {new Date().getFullYear()} USA - Unidade de Saúde Animal. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
