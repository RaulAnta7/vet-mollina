"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// 5 fotos en grid 3×2: fila 1 = [wide(2cols) | small], fila 2 = [small | small | small]
const photos = [
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    alt: "Perros en la naturaleza",
    cls: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80",
    alt: "Gato en consulta",
    cls: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
    alt: "Veterinario atendiendo a un perro",
    cls: "",
  },
  {
    src: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
    alt: "Golden retriever",
    cls: "",
  },
  {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80",
    alt: "Perro feliz",
    cls: "",
  },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800">
            Nuestras instalaciones y pacientes
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
            Un espacio diseñado para el bienestar de tus mascotas y la
            tranquilidad de sus familias.
          </p>
        </div>

        {/* Grid 3 cols × 2 rows = 6 celdas exactas para 5 fotos:
            Fila 1: [wide 2cols] [small 1col]
            Fila 2: [small] [small] [small]           */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[480px] fade-in delay-200">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${photo.cls}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/25 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
