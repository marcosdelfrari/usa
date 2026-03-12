"use client";

import Image from "next/image";

const steps = [
  {
    title: "É só chegar",
    description:
      "Não precisa agendar: aqui o atendimento é imediato. Funcionamos todos os dias das 9:00 às 21:00 para cuidar do seu pet quando ele precisar.",
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
      <div className="mx-auto max-w-7xl bg-[#e8ddde] rounded-3xl p-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Imagem */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <Image
              src="/cat.webp"
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

            {/* Timeline: coluna fixa para círculos + linha, depois conteúdo alinhado */}
            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#9f515e]"
                aria-hidden
              />
              <div className="space-y-12">
                {steps.map(({ title, description }, i) => (
                  <div
                    key={title}
                    className="group relative flex items-start gap-4"
                  >
                    <div className="flex w-10 shrink-0 justify-center pt-0.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9f515e] ring-4 ring-[#9f515e] ring-offset-4 ring-offset-[#e8ddde] shadow-md transition group-hover:scale-110 group-hover:bg-[#7d4049]">
                        <span className="text-xs font-bold text-white">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-[#9f515e] transition">
                        {title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
