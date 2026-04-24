"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  "Veterinarios colegiados con más de 10 años de experiencia",
  "Equipamiento diagnóstico de última generación",
  "Instalaciones modernas y adaptadas para el bienestar animal",
  "Centro de referencia en Mollina y comarca del Guadalhorce",
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="nosotros" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative fade-in">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&w=900&q=85"
                alt="Interior de la clínica veterinaria TROT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle navy overlay */}
              <div className="absolute inset-0 bg-navy-900/10" />
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-navy-200 rounded-3xl -z-10" />

            {/* Floating rating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 flex items-center gap-3">
              <div className="w-11 h-11 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-navy-800 leading-none">4.9</p>
                <p className="text-xs text-gray-400 mt-0.5">Valoración media Google</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="fade-up">
              <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Sobre nosotros
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800 leading-tight">
                Tu clínica veterinaria de confianza en Mollina
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                En TROT llevamos más de una década cuidando la salud y el bienestar
                de las mascotas de Mollina y sus alrededores. Nuestro equipo
                de profesionales combina la cercanía del trato local con los más
                altos estándares clínicos.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Creemos que cada animal merece la mejor atención posible, por eso
                invertimos continuamente en formación, equipamiento y en crear un
                ambiente cómodo y sin estrés para tus mascotas.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <li
                  key={h}
                  className={`flex items-start gap-3 fade-up delay-${(i + 1) * 100}`}
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-navy-700 text-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm">{h}</span>
                </li>
              ))}
            </ul>

            <div className="fade-up delay-500">
              <a
                href="#contacto"
                className="mt-10 inline-flex items-center gap-2 bg-navy-700 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-navy-800 transition-colors shadow-sm"
              >
                Conoce nuestro equipo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
