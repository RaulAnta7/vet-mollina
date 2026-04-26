"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  animal: string;
  schedule: string;
  reason: string;
};

const initial: FormState = { name: "", phone: "", animal: "", schedule: "", reason: "" };

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all";

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-navy-800 mb-2">¡Solicitud enviada!</h3>
        <p className="text-gray-500 max-w-xs leading-relaxed">
          Nos pondremos en contacto contigo en menos de 24 horas para confirmar tu cita.
        </p>
        <button
          onClick={() => { setForm(initial); setSent(false); }}
          className="mt-8 text-sm font-semibold text-navy-700 hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-navy-800 px-1">Nombre *</label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-navy-800 px-1">Teléfono *</label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 000 000 000"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-navy-800 px-1">Tipo de animal *</label>
          <select
            name="animal"
            required
            value={form.animal}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Selecciona...</option>
            <option value="pequenos">Pequeños animales (Perro, Gato…)</option>
            <option value="equinos">Equinos (Caballo, Poni…)</option>
            <option value="exoticos">Exóticos</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-navy-800 px-1">Horario preferido</label>
          <input
            name="schedule"
            type="text"
            value={form.schedule}
            onChange={handleChange}
            placeholder="Ej: Mañanas de 10:00 a 14:00"
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-navy-800 px-1">Motivo de la visita *</label>
        <textarea
          name="reason"
          required
          rows={4}
          value={form.reason}
          onChange={handleChange}
          placeholder="Cuéntanos brevemente qué necesita tu mascota o caballo..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-navy-700 text-white rounded-xl font-bold text-base hover:bg-navy-800 active:scale-[0.98] transition-all shadow-md"
      >
        Enviar Solicitud
      </button>
    </form>
  );
}
