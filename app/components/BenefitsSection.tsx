"use client";

import { Clock, Smile, Heart, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Internações 24h",
    description:
      "Única clínica da cidade com estrutura completa para internação. Seu pet monitorado e cuidado com todo o carinho, dia e noite.",
    icon: ShieldCheck,
  },
  {
    title: "Pronto Atendimento",
    description:
      "Veterinário na clínica 24h para emergências. Atendimento imediato: é só chegar que seu melhor amigo será acolhido na hora.",
    icon: Heart,
  },
  {
    title: "Matozinhos e Região",
    description:
      "Estamos em Matozinhos, mas atendemos rapidamente quem vem de Capim Branco, Pedro Leopoldo e toda a região vizinha.",
    icon: Smile,
  },
] as const;

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="w-full bg-white px-6 py-24 md:px-10 lg:px-14 xl:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold tracking-wider text-[#9f515e] uppercase">
            Por que nos escolher?
          </span>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Sua clínica de confiança na{" "}
            <span className="text-[#9f515e]">cidade</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            A USA — Unidade de Saúde Animal — oferece atendimento de qualidade
            para o seu pet, com foco em cuidado, transparência e proximidade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#e8ddde] opacity-50 transition group-hover:scale-150 group-hover:bg-[#9f515e]/10"></div>

              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9f515e] to-[#7d4049] text-white shadow-lg shadow-[#9f515e]/30">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="relative mb-3 text-2xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="relative text-base leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
