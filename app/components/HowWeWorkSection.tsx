"use client";

import Image from "next/image";
import { CircleCheck, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Agende ou chegue",
    description:
      "Entre em contato ou venha até nós. Explicamos nossos serviços, horários e como podemos ajudar no cuidado do seu pet. Você escolhe a melhor forma de começar.",
  },
  {
    title: "Atendimento personalizado",
    description:
      "Avaliamos o seu pet e as suas necessidades. Cada animal e cada tutor recebem atenção individual, para que o tratamento e as orientações façam sentido para a realidade de vocês.",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Após a consulta ou o procedimento, você pode contar conosco para dúvidas, retornos e acompanhamento. Estamos na região de Matozinhos para estar perto quando precisar.",
  },
] as const;

export function HowWeWorkSection() {
  return (
    <section
      id="como-funciona"
      className="w-full bg-white px-6 py-24 md:px-10 lg:px-14 xl:py-32"
    >
      <div className="mx-auto max-w-7xl bg-[#fdf2f4] rounded-3xl p-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <Image
              src="/CAT.png"
              alt="Cachorro feliz sendo atendido"
              width={200}
              height={200}
              className="h-full w-full object-contain transition duration-500"
              unoptimized
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <span className="mb-4 block text-sm font-semibold tracking-wider text-[#9f515e] uppercase">
                Passo a passo
              </span>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Como funciona o{" "}
                <span className="text-[#9f515e]">atendimento</span>?
              </h2>
            </div>

            <div className="space-y-12 border-l-2 border-rose-200 pl-8 md:pl-12 relative">
              {steps.map(({ title, description }, i) => (
                <div key={title} className="relative group">
                  <div className="absolute -left-[41px] top-1 md:-left-[57px] flex h-6 w-6 items-center justify-center rounded-full bg-[#9f515e] ring-4 ring-rose-100 transition group-hover:scale-125 group-hover:bg-[#8a424e]">
                    <span className="text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-[#9f515e] transition">
                    {title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
