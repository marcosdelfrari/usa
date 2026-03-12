"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ACCENT = "#9f515e";

export function UsaHelpSection() {
  return (
    <section className="relative w-full overflow-hidden bg-rose-50 px-6 py-20 md:px-10 lg:px-14 xl:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Coluna esquerda: ilustração */}
        <div className="relative flex justify-center lg:order-2">
          <Image
            src="/pets.png"
            alt="Pets - coelho, cachorro, pássaro e gato"
            width={500}
            height={400}
            className="h-full w-full  transition hover:scale-105 duration-500"
            unoptimized
          />
        </div>

        {/* Coluna direita: texto */}
        <div className="flex flex-col justify-center text-center lg:order-1 lg:text-left">
          <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-[#9f515e] lg:justify-start lg:bg-transparent lg:px-0 lg:py-0">
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#9f515e] lg:block"></span>
            Sobre a clínica
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Cuidamos com <span className="text-[#9f515e]">amor</span> e{" "}
            <span className="text-[#9f515e]">excelência</span>.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl lg:mx-0 mx-auto">
            A USA — Unidade de Saúde Animal — está aqui para cuidar do seu pet
            com atenção e qualidade, atendendo tutores de todas as idades em
            toda a região de Matozinhos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#quem-somos"
              className="inline-flex items-center justify-center rounded-full bg-[#9f515e] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-[#8a424e] hover:-translate-y-0.5"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
