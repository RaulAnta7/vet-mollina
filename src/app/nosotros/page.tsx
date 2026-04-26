import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Centro Veterinario Mollina",
  description:
    "Conoce al equipo de Centro Veterinario Mollina. Más de una década cuidando la salud de equinos y animales de compañía en el corazón de Málaga.",
};

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15" />
      </svg>
    ),
    title: "Compromiso Total",
    desc: "Disponibilidad absoluta y dedicación íntegra a la recuperación de cada animal, garantizando tranquilidad a sus propietarios en todo momento.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Experiencia Médica",
    desc: "Formación continua en las últimas técnicas quirúrgicas y diagnósticas, especialmente en traumatología equina y medicina interna.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Cuidado Personalizado",
    desc: "Cada paciente es único. Diseñamos planes de salud específicos adaptados a las necesidades individuales de cada animal y su familia.",
  },
];

const facilities = [
  {
    src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=85",
    label: "Quirófano Avanzado",
    span: "md:col-span-2 md:row-span-2",
    textSize: "text-base",
  },
  {
    src: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&w=800&q=85",
    label: "Atención Personalizada",
    span: "md:col-span-2",
    textSize: "text-base",
  },
  {
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=85",
    label: "Sala de Diagnóstico",
    span: "",
    textSize: "text-sm",
  },
  {
    src: "https://images.unsplash.com/photo-1553284965-5dd4ce31f9c2?auto=format&fit=crop&w=800&q=85",
    label: "Área de Boxes",
    span: "",
    textSize: "text-sm",
  },
];

const team = [
  {
    name: "Dr. Alejandro Ruiz",
    role: "Director Clínico",
    bio: "Especialista en cirugía equina con más de 15 años de experiencia internacional. Lidera el equipo con una visión de medicina integral.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dra. Elena Martínez",
    role: "Medicina Pequeños Animales",
    bio: "Experta en medicina interna y dermatología. Su enfoque empático hace que cada visita sea una experiencia tranquila para las mascotas.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Carlos Mendoza",
    role: "Auxiliar Quirúrgico",
    bio: "Coordinador de quirófano y especialista en cuidados intensivos postoperatorios. Su atención al detalle garantiza la seguridad de cada paciente.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar forceScrolled />

      <main>
        {/* ── Hero ── */}
        <header className="relative pt-32 pb-20 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="z-10">
              <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-6">
                Sobre Nosotros
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-800 leading-[1.08] tracking-tight mb-8">
                Excelencia clínica,{" "}
                <span className="text-navy-500">con el corazón.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10">
                Desde el corazón de Málaga, combinamos tecnología médica de vanguardia
                con un compromiso inquebrantable hacia la salud equina y animal
                doméstico. No solo curamos, cuidamos legados.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-full text-sm font-semibold text-navy-700">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  Medicina Equina
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-navy-50 rounded-full text-sm font-semibold text-navy-700">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  Animales de Compañía
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1566392785474-926a4c6257b5?auto=format&fit=crop&w=900&q=85"
                  alt="Instalaciones ecuestres del Centro Veterinario Mollina"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Quote card */}
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-white p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-navy-700">
                <p className="font-semibold text-navy-800 italic text-sm leading-relaxed">
                  &ldquo;Tratamos a cada paciente como si fuera nuestro propio compañero de vida.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Stats ── */}
        <section className="py-12 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "+15", label: "Años de experiencia" },
                { value: "+3.000", label: "Pacientes atendidos" },
                { value: "24H", label: "Urgencias equinas" },
                { value: "4.9★", label: "Valoración Google" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
                  <p className="text-navy-200 text-sm mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Nuestros Valores
              </span>
              <h2 className="text-4xl font-extrabold text-navy-800">Lo que nos define</h2>
              <div className="mt-4 h-1 w-16 bg-navy-700 rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-6 text-navy-700 group-hover:bg-navy-700 group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Facilities ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
                Instalaciones
              </span>
              <h2 className="text-4xl font-extrabold text-navy-800 mb-4">
                Equipados para lo mejor
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Equipamiento de alta gama en un entorno diseñado para reducir el estrés
                del animal y facilitar una recuperación óptima.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[260px]">
              {facilities.map((f) => (
                <div
                  key={f.label}
                  className={`rounded-2xl overflow-hidden relative group ${f.span}`}
                >
                  <Image
                    src={f.src}
                    alt={f.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className={`font-bold text-white ${f.textSize}`}>{f.label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
                  El Equipo
                </span>
                <h2 className="text-4xl font-extrabold text-navy-800 mb-3">Nuestro Equipo</h2>
                <p className="text-gray-500 max-w-xl">
                  Un grupo multidisciplinar unido por la pasión vocacional y la excelencia técnica.
                </p>
              </div>
              <a
                href="/contacto"
                className="flex items-center gap-2 text-navy-700 font-bold hover:gap-4 transition-all duration-200 group whitespace-nowrap"
              >
                Únete a nosotros
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-navy-50 relative">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-navy-100 bg-navy-700 px-2.5 py-1 rounded mb-3 inline-block">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-navy-800 mb-2">{member.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-navy-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              ¿Listo para conocernos en persona?
            </h2>
            <p className="text-navy-200 text-lg mb-10 leading-relaxed">
              Pide tu cita y comprueba de primera mano por qué somos el centro
              veterinario de referencia en Mollina y la comarca del Guadalhorce.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-navy-800 font-bold px-8 py-4 rounded-xl hover:bg-navy-50 transition-colors shadow-lg text-base"
            >
              Pedir Cita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
