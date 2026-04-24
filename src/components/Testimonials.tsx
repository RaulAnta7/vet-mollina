"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Elena García",
    pet: "Dueña de Max (Labrador)",
    text: "El equipo de TROT es increíble. Cuando Max tuvo una emergencia a las 2 de la madrugada, atendieron con una profesionalidad y rapidez impresionantes. Quedamos muy agradecidos.",
    rating: 5,
    initials: "EG",
  },
  {
    name: "Antonio Jiménez",
    pet: "Dueño de Luna (Gata persa)",
    text: "Llevamos a Luna desde cachorrita y siempre nos han tratado con muchísimo cariño y profesionalidad. Los diagnósticos son precisos y el trato cercano. ¡Recomendados al 100%!",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Carmen Torres",
    pet: "Dueña de Tobi (Beagle)",
    text: "Me encanta que en TROT se toman el tiempo para explicarte todo en detalle. La Dra. López es excepcional. Mi perro sale de allí contento, cosa que no es fácil.",
    rating: 5,
    initials: "CT",
  },
];

const delays = ["delay-100", "delay-200", "delay-300"];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section className="py-24 bg-navy-800 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-navy-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <span className="inline-block text-navy-300 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 hover:bg-white/15 transition-colors duration-300 fade-up ${delays[i]}`}
            >
              <svg className="w-8 h-8 text-navy-300 mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white/85 leading-relaxed text-sm mb-6">{t.text}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-navy-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-navy-300 text-xs mt-0.5">{t.pet}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={`${t.name}-star-${j}`} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
