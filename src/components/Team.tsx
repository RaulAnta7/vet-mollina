"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Dra. María López",
    role: "Directora · Cirujana",
    specialty: "Cirugía de tejidos blandos y ortopedia",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Carlos Ruiz",
    role: "Especialista",
    specialty: "Diagnóstico por imagen y medicina interna",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dra. Ana Martínez",
    role: "Veterinaria",
    specialty: "Medicina preventiva y nutrición animal",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Laura Sánchez",
    role: "Auxiliar Senior",
    specialty: "Cuidados intensivos y hospitalización",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
  },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function Team() {
  const ref = useScrollAnimation();

  return (
    <section id="equipo" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <span className="inline-block text-navy-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-800">
            Profesionales a tu servicio
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            Un equipo comprometido, formado continuamente y apasionado por el
            cuidado animal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300 fade-up ${delays[i]}`}
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden bg-navy-50">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-navy-800">{member.name}</h3>
                <p className="text-navy-600 text-xs font-semibold mt-0.5 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
