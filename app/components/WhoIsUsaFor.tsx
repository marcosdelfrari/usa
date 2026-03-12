"use client";

import { Bone, Building2, HeartHandshake } from "lucide-react";

const ICON_CLASS = "h-12 w-12 shrink-0 text-[#9f515e]";

const cards = [
  {
    title: "Tutores de pets",
    description:
      "Atendemos quem tem animal de estimação e busca cuidado de qualidade. Seja para consultas de rotina, vacinas ou acompanhamento, estamos prontos para ajudar.",
    icon: HeartHandshake,
  },
  {
    title: "Todas as idades",
    description:
      "Não importa a sua idade: cuidamos dos tutores e dos pets com o mesmo compromisso. Do primeiro filhote ao pet idoso, oferecemos um atendimento acolhedor.",
    icon: Building2,
  },
  {
    title: "Região de Matozinhos",
    description:
      "Atuamos em toda a região de Matozinhos, levando saúde animal perto de você. Facilitamos o acesso a consultas, orientações e cuidados para o seu pet.",
    icon: Bone,
  },
] as const;

export function WhoIsUsaFor() {
  return (
    <section
      id="who"
      className="w-full bg-white px-6 py-24 md:px-10 lg:px-14 xl:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block text-sm font-semibold tracking-wider text-[#9f515e] uppercase">
              Para quem somos
            </span>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Saúde animal com foco no{" "}
              <span className="text-[#9f515e]">bem-estar</span>.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              Somos uma unidade de saúde animal com foco em quem realmente
              importa: você e seu pet. Atendemos tutores de qualquer idade, em
              toda a região de Matozinhos, com cuidado, respeito e
              profissionalismo.
            </p>
            <div className="h-1 w-20 rounded-full bg-[#9f515e]/20" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-[#9f515e] transition group-hover:bg-[#9f515e] group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-base leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
