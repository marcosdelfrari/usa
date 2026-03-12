"use client";

import Image from "next/image";

export function FamilySection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 md:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl max-w-4xl">
          Porque seu pet faz parte da{" "}
          <span className="text-[#9f515e]">família</span>.
        </h2>

        <div>
          {" "}
          <Image
            src="/petsstatic.jpg"
            alt="Pets felizes - ilustração de cães e gatos"
            width={1200}
            height={600}
            className="h-auto w-full object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
        </div>
      </div>{" "}
    </section>
  );
}
