"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Quem somos", href: "#who" },
  { label: "Como funciona", href: "#how" },
  { label: "Benefícios", href: "#benefits" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[88px] w-full items-center justify-between bg-rose-50 px-6 shadow-sm border-b border-rose-100 md:px-10 lg:px-14">
      {/* Logo */}
      <Link
        href="/"
        className="flex shrink-0 items-center gap-2 transition hover:opacity-90"
      >
        <div className="p-2">
          <Image
            src="/logo-rosa.png"
            alt="USA - Unidade de Saúde Animal"
            width={200}
            height={200}
            className="h-20 w-20 object-contain md:h-26 md:w-26"
            unoptimized
          />
        </div>
      </Link>

      {/* Navegação Desktop */}
      <nav className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-[15px] font-bold text-[#9f515e] transition hover:text-[#8a424e]"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Botão de Contato */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[#9f515e] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-rose-200 transition hover:bg-[#8a424e] hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Fale conosco
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="flex items-center justify-center rounded-md p-2 text-[#9f515e] md:hidden">
        <Menu className="h-7 w-7" />
      </button>
    </header>
  );
}
