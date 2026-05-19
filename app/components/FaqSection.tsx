"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-[#e8ddde] px-6 py-24 md:px-10 lg:px-14 xl:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <span className="mb-4 block text-center text-sm font-semibold tracking-wider text-[#9f515e] uppercase">
          Dúvidas frequentes
        </span>
        <h2
          id="faq-heading"
          className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl"
        >
          Perguntas <span className="text-[#9f515e]">frequentes</span>
        </h2>
        <p className="mb-12 text-center text-lg leading-relaxed text-gray-600">
          Respostas rápidas sobre atendimento, horários e serviços da clínica.
        </p>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-[#9f515e]/10 bg-white"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[#9f515e]/5"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#9f515e] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-5 text-base leading-relaxed text-gray-600"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
