"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-0 flex-1 w-full overflow-hidden bg-[#9f515e]">
      <div className="mx-auto flex min-h-full w-full max-w-[1440px] flex-col md:grid md:grid-cols-2">
        {/* Coluna esquerda: Imagem */}
        <div className="relative min-h-0 flex-1 w-full md:order-2 md:h-full lg:min-h-[600px]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#9f515e] via-transparent to-transparent md:bg-gradient-to-l md:from-[#9f515e]/60" />
          <div className="relative h-full w-full">
            <Image
              src="/header.jpg"
              alt="Atendimento veterinário com carinho"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Coluna direita: Texto */}
        <div className="flex min-h-0 shrink-0 flex-col justify-center overflow-auto px-6 py-8 text-white md:order-1 md:px-12 md:py-12 lg:px-20 lg:py-24">
          <h1 className="mb-6 max-w-lg text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Amor que <span className="text-[#e8ddde]">cura</span>, cuidado que{" "}
            <span className="text-[#e8ddde]">protege</span>.
          </h1>

          <p className="mb-8 max-w-md text-base text-white/90 md:text-xl font-light leading-relaxed">
            A excelência veterinária que seu melhor amigo merece. Internações 24h,
            consultas e vacinas. Estamos em Matozinhos e atendemos Capim Branco,
            Pedro Leopoldo e região. Aberto todos os dias das 9:00 às 21:00.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#9f515e] shadow-lg shadow-black/10 transition hover:bg-[#e8ddde] hover:shadow-xl hover:-translate-y-0.5"
            >
              Agendar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+5531999991234"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar para nós
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-white/60">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-[#9f515e] bg-white/20"
                />
              ))}
            </div>
            <p>Mais de 5.000 pets atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
