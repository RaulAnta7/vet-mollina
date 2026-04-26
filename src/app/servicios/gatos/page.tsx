import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinario para Gatos en Mollina, Málaga | Centro Veterinario Mollina",
  description:
    "Clínica veterinaria felina en Mollina. Medicina preventiva, cirugía, medicina interna y geriatría para gatos en Antequera, Humilladero y el Valle del Guadalhorce. Urgencias 24H.",
  keywords:
    "veterinario gatos Mollina, clínica veterinaria felina Málaga, veterinario gatos Antequera, veterinario felino Guadalhorce, vacunas gatos Mollina, esterilización gatos Málaga",
  openGraph: {
    title: "Veterinario para Gatos en Mollina – Centro Veterinario Mollina",
    description:
      "Especialistas en medicina felina en Mollina, Málaga. Vacunas, cirugía, medicina interna, dental y geriatría para gatos. Urgencias 24H.",
    locale: "es_ES",
    type: "website",
  },
};

const icon = (path: string) => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const services = [
  {
    icon: icon("M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"),
    title: "Medicina Preventiva Felina",
    desc: "Vacunación trivalente y leucemia felina, desparasitaciones, microchip, prueba FIV/FeLV y plan sanitario anual adaptado a gatos de interior y exterior.",
  },
  {
    icon: icon("M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"),
    title: "Cirugía Felina",
    desc: "Esterilización de machos y hembras, extirpación de tumores mamarios, resolución de obstrucción urinaria, cirugía abdominal y laparoscopia.",
  },
  {
    icon: icon("M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"),
    title: "Medicina Interna",
    desc: "Diagnóstico y manejo de diabetes felina, enfermedad renal crónica, hipertiroidismo, enfermedades inflamatorias intestinales y cardiomiopatía.",
  },
  {
    icon: icon("M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18zm0-15.75c-.69 0-1.368.064-2.025.19a.75.75 0 00-.614.74v.204a3 3 0 01-.926 2.16 3.375 3.375 0 01-2.373.972H6c-.828 0-1.5.672-1.5 1.5v.75a.75.75 0 00.75.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 00-.75.75v.75c0 .828.672 1.5 1.5 1.5h.375c.966 0 1.875.399 2.55 1.05l.225.22a.75.75 0 001.05 0l.225-.22A3.75 3.75 0 0112.75 14.25H18c.621 0 1.125-.504 1.125-1.125V12c0-.621-.504-1.125-1.125-1.125h-.375a.75.75 0 010-1.5H18A1.125 1.125 0 0019.125 8.25v-.75A1.125 1.125 0 0018 6.375h-.25A3.375 3.375 0 0115.375 5.4a3 3 0 01-.925-2.16v-.204a.75.75 0 00-.615-.74A12.034 12.034 0 0012 2.25z"),
    title: "Dermatología Felina",
    desc: "Tratamiento de alopecia psicógena, dermatitis alérgica, complejo granuloma eosinofílico, parasitosis cutáneas e infecciones por hongos dermatofitos.",
  },
  {
    icon: icon("M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"),
    title: "Odontología Felina",
    desc: "Limpieza dental profesional, diagnóstico de resorción dental felina (RDC), tratamiento de gingivoestomatitis crónica y extracciones quirúrgicas.",
  },
  {
    icon: icon("M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"),
    title: "Geriatría Felina",
    desc: "Protocolo especializado para gatos mayores de 10 años: analíticas geriátricas, control del dolor crónico, manejo de la demencia felina y cuidados paliativos.",
  },
];

const stats = [
  { value: "Felino", label: "Protocolo especializado" },
  { value: "24H", label: "Urgencias disponibles" },
  { value: "Sin estrés", label: "Ambiente cat-friendly" },
  { value: "4.9★", label: "Valoración Google" },
];

const process = [
  {
    step: "01",
    title: "Reserva tu visita",
    desc: "Llámanos o usa el formulario. Los gatos agradecen citas con calma, evitamos salas de espera con perros.",
  },
  {
    step: "02",
    title: "Exploración felina",
    desc: "Consulta tranquila y sin prisas. Exploramos a tu gato con el mínimo estrés posible en un entorno seguro.",
  },
  {
    step: "03",
    title: "Plan de salud",
    desc: "Te explicamos el diagnóstico y el tratamiento con detalle. Disponibles para resolver dudas después de la visita.",
  },
];

const coverage = {
  heading: "Clínica veterinaria felina en el corazón de Málaga",
  body: "Nuestro centro está diseñado para ofrecer una experiencia cat-friendly, con salas diferenciadas para reducir el estrés de tu gato. Atendemos felinos de toda la comarca de Antequera y el Valle del Guadalhorce. Aparcamiento gratuito y fácil acceso desde la A-92.",
  towns: [
    "Mollina",
    "Antequera",
    "Humilladero",
    "Fuente de Piedra",
    "Archidona",
    "Alameda",
    "Campillos",
    "Cuevas Bajas",
    "Villanueva de Algaidas",
    "Álora",
    "Pizarra",
  ],
};

export default function GatosPage() {
  return (
    <ServicePage
      tag="Servicios · Gatos"
      heroTitle={
        <>
          Especialistas en salud felina{" "}
          <span className="text-navy-500">en Mollina, Málaga.</span>
        </>
      }
      heroSubtitle="Atención veterinaria especializada para gatos en un entorno cat-friendly. Medicina preventiva, cirugía, medicina interna, dental y geriatría felina en la comarca de Antequera."
      heroImage="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85"
      heroImageAlt="Gato siendo atendido en el veterinario en Mollina, Málaga"
      callToAction="Pedir cita para mi gato"
      services={services}
      stats={stats}
      process={process}
      coverage={coverage}
    />
  );
}
