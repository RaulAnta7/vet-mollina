"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Dirección",
    value: "Calle Principal, 12 · Mollina, Málaga",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Teléfono",
    value: "+34 952 000 000",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "info@trotveterinario.es",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Horario",
    value: "Lun–Vie 9:00–20:00 · Sáb 9:00–14:00",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pet: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const ref = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800">
            ¿Necesitas pedir cita?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
            Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-navy-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-gray-800 font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Urgencias */}
            <div className="bg-navy-800 rounded-2xl p-5 border border-navy-700">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-white font-semibold">Urgencias 24 horas</p>
              </div>
              <p className="text-navy-300 text-sm">
                Para urgencias fuera del horario habitual llama al:
              </p>
              <p className="text-white font-bold text-xl mt-1">+34 600 000 000</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Nos pondremos en contacto contigo en breve.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-navy-700 font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="600 000 000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.es"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="pet" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tipo de mascota
                  </label>
                  <select
                    id="pet"
                    name="pet"
                    value={form.pet}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-gray-700 bg-white"
                  >
                    <option value="">Selecciona...</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="ave">Ave</option>
                    <option value="reptil">Reptil</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos el motivo de tu consulta..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-700 text-white font-semibold py-3.5 rounded-xl hover:bg-navy-800 transition-colors shadow-sm text-sm"
                >
                  Enviar solicitud de cita
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
