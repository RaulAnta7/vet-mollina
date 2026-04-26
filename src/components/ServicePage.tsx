import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroImage from "@/components/HeroImage";

export type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServicePageProps = {
  tag: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  callToAction: string;
  services: ServiceItem[];
  stats: { value: string; label: string }[];
  process: ProcessStep[];
  coverage: {
    heading: string;
    body: string;
    towns: string[];
  };
};

export default function ServicePage({
  tag,
  heroTitle,
  heroSubtitle,
  heroImage,
  heroImageAlt,
  callToAction,
  services,
  stats,
  process,
  coverage,
}: ServicePageProps) {
  return (
    <>
      <Navbar forceScrolled />

      <main>
        {/* ── Hero ── */}
        <header className="relative pt-32 pb-20 bg-white overflow-hidden">
          {/* Decorative bg blob */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-50 rounded-bl-[80px] -z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block text-navy-600 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 bg-navy-50 rounded-full">
                {tag}
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-navy-800 leading-[1.08] tracking-tight mb-6">
                {heroTitle}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10">
                {heroSubtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-navy-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-navy-800 transition-colors shadow-lg"
                >
                  {callToAction}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <a
                  href="tel:+34952000000"
                  className="inline-flex items-center gap-2 border-2 border-navy-700 text-navy-700 font-bold px-8 py-4 rounded-xl hover:bg-navy-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Llamar ahora
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <HeroImage src={heroImage} alt={heroImageAlt} />
              </div>
              {/* Urgencias badge */}
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-xl px-5 py-3.5 border border-gray-100">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Urgencias</p>
                  <p className="text-navy-800 font-bold text-sm leading-none">24H disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Stats ── */}
        <section className="py-10 bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
                  <p className="text-navy-300 text-sm mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services grid ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-navy-600 text-xs font-bold tracking-widest uppercase mb-3">
                Nuestros Servicios
              </span>
              <h2 className="text-4xl font-extrabold text-navy-800">
                Atención completa y especializada
              </h2>
              <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                Cubrimos todas las necesidades médicas con el equipamiento más avanzado
                y un equipo de especialistas a tu disposición.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-700 mb-5 group-hover:bg-navy-700 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-navy-600 text-xs font-bold tracking-widest uppercase mb-3">
                Cómo funciona
              </span>
              <h2 className="text-4xl font-extrabold text-navy-800">
                Tu primera visita, paso a paso
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-navy-100" />

              {process.map((p) => (
                <div key={p.step} className="relative text-center">
                  <div className="w-16 h-16 bg-navy-700 text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-5 relative z-10">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Local SEO coverage ── */}
        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-navy-600 text-xs font-bold tracking-widest uppercase mb-4">
                  Área de cobertura
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mb-5">
                  {coverage.heading}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {coverage.body}
                </p>
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-navy-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-navy-800 transition-colors"
                >
                  Pedir cita ahora
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">
                  Municipios que atendemos
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {coverage.towns.map((town) => (
                    <span
                      key={town}
                      className="px-4 py-2 bg-white border border-navy-200 rounded-full text-sm font-semibold text-navy-700 shadow-sm"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="py-24 bg-navy-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-5">
              ¿Listo para agendar tu cita?
            </h2>
            <p className="text-navy-200 text-lg mb-10 leading-relaxed">
              Llámanos o rellena el formulario y nuestro equipo te contactará en menos de 24 horas.
              Urgencias disponibles las 24h del año.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-white text-navy-800 font-bold px-8 py-4 rounded-xl hover:bg-navy-50 transition-colors shadow-lg"
              >
                Pedir Cita Online
              </a>
              <a
                href="tel:+34952000000"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                +34 952 000 000
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
