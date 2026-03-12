"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const NAV_LINKS = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Benefícios", href: "#beneficios" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex h-[88px] w-full min-w-0 items-center justify-between overflow-hidden bg-transparent px-6 md:relative md:top-auto md:left-auto md:right-auto md:shrink-0 md:bg-[#e8ddde] md:border-b md:border-[#e8ddde] md:px-10 lg:px-14">
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
            className="text-[15px] font-bold text-[#9f515e] transition hover:text-[#7d4049]"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Botão de Contato */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://wa.me/5531982885745"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full bg-[#9f515e] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#9f515e]/30 transition hover:bg-[#7d4049] hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Fale conosco
        </a>
      </div>

      {/* Botão Hambúrguer Mobile */}
      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="flex items-center justify-center rounded-md p-2 text-[#9f515e] md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-7 w-7" />
      </button>

      {/* Overlay do menu mobile - tela cheia */}
      <div
        className={`fixed inset-0 z-[100] bg-[#e8ddde] md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-full w-full flex-col">
          {/* Cabeçalho do menu: logo + X */}
          <div className="flex h-[88px] items-center justify-between px-6 border-b border-[#e8ddde]">
            <Link href="/" onClick={closeMenu} className="flex shrink-0">
              <Image
                src="/logo-rosa.png"
                alt="USA"
                width={120}
                height={120}
                className="h-16 w-16 object-contain"
                unoptimized
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="flex h-12 w-12 items-center justify-center rounded-full text-[#9f515e] hover:bg-white/50 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Links do menu */}
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6 py-8">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="rounded-xl py-4 px-4 text-xl font-bold text-[#9f515e] transition hover:bg-white/50 active:bg-white/70"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/5531982885745"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#9f515e] px-6 py-4 text-lg font-bold text-white shadow-md transition active:bg-[#7d4049]"
            >
              <MessageCircle className="h-5 w-5" />
              Fale conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
