import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Centro Veterinario Mollina | Veterinario en Mollina, Málaga",
  description:
    "Centro Veterinario Mollina — tu clínica veterinaria de referencia en la Comarca de Antequera. Especialistas en medicina equina, perros y gatos. Urgencias 24H.",
  keywords:
    "veterinario Mollina, clínica veterinaria Mollina, veterinario Antequera, veterinario equino Málaga, urgencias veterinarias Mollina, veterinario comarca Antequera",
  openGraph: {
    title: "Centro Veterinario Mollina | Veterinario en Mollina, Málaga",
    description:
      "Especialistas en medicina equina, perros y gatos en Mollina, Málaga. Más de 15 años de experiencia. Urgencias 24H.",
    locale: "es_ES",
    type: "website",
  },
};

const highlights = [
  {
    title: "Disponibilidad Total",
    desc: "Atención continuada para emergencias y consultas programadas, siempre que nos necesites.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expertos en Équidos",
    desc: "Referentes en medicina equina en la región con equipamiento móvil para intervenciones a finca.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Trato Humano",
    desc: "Priorizamos el bienestar emocional del animal y la tranquilidad del propietario en cada visita.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const specialties = [
  { label: "EQUINOS", href: "/servicios/equinos" },
  { label: "PERROS", href: "/servicios/perros" },
  { label: "GATOS", href: "/servicios/gatos" },
];

const installations = [
  {
    title: "Quirófano Avanzado",
    src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80",
    className: "lg:col-span-6 lg:row-span-2",
    titleClass: "text-2xl",
    padClass: "p-8",
  },
  {
    title: "Documentación y Asistencia personalizada",
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    className: "lg:col-span-6 lg:row-span-1",
    titleClass: "text-xl",
    padClass: "p-8",
  },
  {
    title: "Sala de Pruebas",
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    className: "lg:col-span-3 lg:row-span-1",
    titleClass: "text-lg",
    padClass: "p-6",
  },
  {
    title: "Área de Boxes",
    src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80",
    className: "lg:col-span-3 lg:row-span-1",
    titleClass: "text-lg",
    padClass: "p-6",
  },
];

const testimonials = [
  {
    text: "Excelente trato y profesionalidad. Llevaron el seguimiento de mi yegua durante todo el embarazo y no pude estar en mejores manos.",
    name: "María García",
    role: "Propietaria",
    initials: "MG",
    bg: "bg-teal-600",
  },
  {
    text: "La rapidez con la que atendieron nuestra urgencia nocturna fue vital. Eternamente agradecidos con todo el equipo de Mollina.",
    name: "Juan Rodríguez",
    role: "Cliente local",
    initials: "JR",
    bg: "bg-navy-700",
  },
  {
    text: "Grandes especialistas. Se nota que aman lo que hacen. Las instalaciones son modernas y muy limpias. Recomendable 100%.",
    name: "Elena Martínez",
    role: "Criadora",
    initials: "EM",
    bg: "bg-emerald-600",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. Hero ── */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-1.jpg"
              alt="Caballos pastando en el campo cerca de Mollina, Málaga"
              fill
              className="object-cover brightness-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-800/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                Compromiso y cercanía
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
                Tu veterinario de confianza en la Comarca de Antequera
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
                Disponibilidad total y compromiso absoluto con la salud de tus animales, desde mascotas domésticas hasta ganadería equina.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contacto"
                  className="bg-white text-navy-800 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl"
                >
                  Pedir Cita Online
                </a>
                <a
                  href="#especialidades"
                  className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Ver Servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Highlight cards ── */}
        <section className="bg-gray-50 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 -mt-20 relative z-20">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="group bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/60 border border-gray-100 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-navy-700 mb-8 group-hover:scale-110 transition-transform">
                    {h.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-800">{h.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Compasión y profesionalidad ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy-100 rounded-full -z-10" />
                  <div className="relative rounded-[3rem] shadow-2xl w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1700665537604-412e89a285c3?auto=format&fit=crop&w=800&q=80"
                      alt="Equipo veterinario profesional del Centro Veterinario Mollina"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-navy-700 p-8 rounded-3xl text-white shadow-xl hidden lg:block">
                    <span className="block text-4xl font-bold">20+</span>
                    <span className="text-sm font-medium opacity-80 uppercase tracking-wider">
                      Años de experiencia
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-extrabold mb-6 text-navy-800 leading-tight">
                  Compasión y profesionalidad en cada consulta
                </h2>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                  En Centro Veterinario Mollina, entendemos que tu mascota es parte de la familia. Con más de 15 años de experiencia en la Comarca de Antequera, combinamos la tecnología médica más avanzada con un trato humano y cercano.
                </p>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Nuestra especialización en medicina equina nos sitúa como referentes en la región, ofreciendo servicios integrales tanto en clínica como desplazamientos a finca.
                </p>
                <a
                  href="/nosotros"
                  className="inline-flex items-center gap-2 font-bold text-navy-700 group hover:text-navy-900 transition-colors"
                >
                  Conoce a nuestro equipo
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Cuidado Avanzado ── */}
        <section id="especialidades" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Horse portrait */}
              <div className="w-full lg:w-1/3">
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden group">
                  <Image
                    src="/equinos-hero.jpg"
                    alt="Veterinario examinando un caballo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Center text */}
              <div className="w-full lg:w-1/3 text-center">
                <span className="text-navy-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                  Especialidades
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-navy-800">
                  Cuidado Avanzado
                </h2>
                <div className="space-y-8">
                  {specialties.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="group flex items-center justify-center text-4xl font-extrabold text-gray-300 hover:text-navy-700 transition-all"
                    >
                      <span className="relative inline-flex items-center">
                        {s.label}
                        <svg
                          className="absolute -right-7 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Dog portrait */}
              <div className="w-full lg:w-1/3">
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden group">
                  <Image
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=85"
                    alt="Perro golden retriever en el veterinario"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Instalaciones ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-navy-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Instalaciones
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-navy-800">
              Instalaciones de Primer Nivel
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
              Equipamiento de alta gama en un entorno diseñado para reducir el estrés del animal y
              facilitar una recuperación óptima.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
              {installations.map((item) => (
                <div
                  key={item.title}
                  className={`${item.className} relative group overflow-hidden rounded-3xl shadow-xl`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end text-left">
                    <div className={item.padClass}>
                      <h3 className={`${item.titleClass} font-bold text-white`}>{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Testimonials ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-navy-800">
                Lo que dicen nuestros clientes
              </h2>
              <div className="flex justify-center gap-1 text-yellow-400 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                  <p className="text-gray-500 italic mb-8 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 ${t.bg} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-navy-800">{t.name}</p>
                      <p className="text-sm text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA final ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy-700 rounded-full opacity-40" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-navy-900 rounded-full opacity-40" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                  ¿Tu compañero necesita atención?
                </h2>
                <p className="text-navy-200 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  Estamos disponibles para consultas generales y urgencias. Nuestro equipo experto está
                  listo para cuidar de lo que más quieres.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="/contacto"
                    className="bg-white text-navy-800 px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    Reservar Cita Online
                  </a>
                  <a
                    href="tel:+34952000000"
                    className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
