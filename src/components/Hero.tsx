import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex">
      {/* LEFT: navy text panel */}
      <div className="relative z-10 flex items-center w-full lg:w-[58%] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 px-8 sm:px-14 lg:px-20 py-36 overflow-hidden">
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-navy-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-navy-400 rounded-full opacity-15 blur-3xl" />

        <div className="relative max-w-xl">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>Centro veterinario · Mollina, Málaga</span>
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            El bienestar de
            <br />
            <span className="text-navy-300">tu mascota,</span>
            <br />
            nuestra prioridad
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Atención veterinaria integral con el más alto nivel profesional.
            Cuidamos de tus animales con dedicación, experiencia y tecnología
            de vanguardia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-white text-navy-800 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-center shadow-lg"
            >
              Pedir cita ahora
            </a>
            <a
              href="#servicios"
              className="border-2 border-white/35 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-all text-center"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-10">
            {[
              { value: "+5.000", label: "Pacientes atendidos" },
              { value: "10+", label: "Años de experiencia" },
              { value: "24h", label: "Urgencias" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-white/55 mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: photo panel (hidden on mobile) */}
      <div className="hidden lg:block relative flex-1">
        <Image
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85"
          alt="Veterinario atendiendo a un perro"
          fill
          priority
          className="object-cover"
          sizes="42vw"
        />
        {/* Left-edge blend gradient */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-700 to-transparent" />
        {/* Bottom scrim for wave */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />

        {/* Floating trust badge */}
        <div className="absolute bottom-12 right-10 bg-white rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-4 border border-gray-100">
          <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-navy-800 text-sm">Centro certificado</p>
            <p className="text-gray-400 text-xs mt-0.5">Colegio Oficial de Veterinarios</p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60H1440V30C1200 60 960 0 720 30C480 60 240 0 0 30V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
