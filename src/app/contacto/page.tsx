import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Centro Veterinario Mollina",
  description:
    "Pide cita en Centro Veterinario Mollina. Atención para equinos y animales de compañía en Mollina, Málaga. Urgencias 24H.",
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Dirección",
    value: "Calle Principal 12,\n29532 Mollina, Málaga",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Email",
    value: "info@centroveterinariomollina.es",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horario",
    value: "Disponibilidad total los 365 días",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar forceScrolled />

      <main className="pt-32 pb-24">
        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div className="space-y-6">
              <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase">
                Contacto
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-navy-800 leading-[1.08] tracking-tight">
                Cuidamos de los suyos como si fueran{" "}
                <span className="text-navy-400">nuestros.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                Nuestro equipo de especialistas está disponible para atender cualquier
                consulta sobre la salud de su mascota o caballo. Priorizamos la
                excelencia médica y el trato cercano.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:+34952000000"
                  className="flex items-center gap-3 bg-navy-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-navy-800 hover:scale-[1.02] transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +34 952 000 000
                </a>
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-semibold text-navy-800 text-sm">Disponibilidad total</span>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85"
                alt="Veterinario atendiendo a una mascota"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── Bento Contact Layout ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Form card */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-extrabold text-navy-800 mb-8">
                Envíanos un mensaje
              </h2>
              <AppointmentForm />
            </div>

            {/* Info column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Contact details card */}
              <div className="bg-navy-800 text-white p-8 md:p-10 rounded-3xl shadow-xl space-y-8">
                {contactDetails.map((d) => (
                  <div key={d.title} className="flex items-start gap-5">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1">{d.title}</h4>
                      <p className="text-navy-200 text-sm leading-relaxed whitespace-pre-line">
                        {d.value}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Urgencias inline */}
                <div className="border-t border-white/10 pt-7 flex items-start gap-5">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <h4 className="font-bold text-base">Urgencias 24H</h4>
                    </div>
                    <p className="text-navy-200 text-sm mb-1">Para casos críticos y medicina de campo:</p>
                    <p className="font-bold text-lg">+34 600 000 000</p>
                  </div>
                </div>
              </div>

              {/* Map card */}
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-sm group">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-4.685%2C37.130%2C-4.655%2C37.150&layer=mapnik&marker=37.1392%2C-4.6697"
                  className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  title="Ubicación Centro Veterinario Mollina"
                />
                <div className="absolute inset-0 pointer-events-none flex items-end p-4">
                  <div className="bg-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 border border-navy-100">
                    <svg className="w-4 h-4 text-red-500 fill-red-500" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="font-bold text-navy-800 text-sm">Nuestra Clínica</span>
                  </div>
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
