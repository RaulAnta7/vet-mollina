import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinario Equino en Mollina, Málaga | Centro Veterinario Mollina",
  description:
    "Especialistas en medicina equina en Mollina. Atendemos caballos, ponis y equinos en Antequera, Humilladero, Archidona y toda la comarca del Guadalhorce. Urgencias 24H.",
  keywords:
    "veterinario equino Mollina, veterinario caballos Málaga, clínica equina Antequera, veterinario caballos Guadalhorce, medicina equina Mollina, urgencias equinas Málaga",
  openGraph: {
    title: "Veterinario Equino en Mollina – Centro Veterinario Mollina",
    description:
      "Medicina equina de referencia en el corazón de Andalucía. Cirugía, odontología, reproducción y medicina de campo. Urgencias 24H.",
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
    title: "Medicina Preventiva",
    desc: "Planes de vacunación anuales, desparasitaciones internas y externas, identificación con microchip y gestión del pasaporte equino.",
  },
  {
    icon: icon("M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"),
    title: "Cirugía Equina",
    desc: "Tratamiento quirúrgico del cólico, cirugía ortopédica de miembros, reparación de heridas complejas y laparoscopia mínimamente invasiva.",
  },
  {
    icon: icon("M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"),
    title: "Odontología Equina",
    desc: "Revisión y nivelado dental con equipamiento motorizado, extracción de dientes de lobo, corrección de maloclusiones y tratamiento de enfermedad periodontal.",
  },
  {
    icon: icon("M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"),
    title: "Diagnóstico por Imagen",
    desc: "Ecografía de tendones y ligamentos, radiografía digital de extremidades y columna, endoscopia de vías respiratorias altas y diagnóstico de cojeras.",
  },
  {
    icon: icon("M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"),
    title: "Medicina de Campo",
    desc: "Nuestro veterinario equino se desplaza a tu finca o cuadra en toda la comarca. Atención in situ para minimizar el estrés del animal en traslados.",
  },
  {
    icon: icon("M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"),
    title: "Reproducción Equina",
    desc: "Control de gestación por ecografía, inseminación artificial con semen refrigerado o congelado, diagnóstico de preñez y manejo de la yegua gestante.",
  },
];

const stats = [
  { value: "+15", label: "Años en medicina equina" },
  { value: "24H", label: "Urgencias equinas" },
  { value: "In situ", label: "Medicina de campo" },
  { value: "100%", label: "Compromiso veterinario" },
];

const process = [
  {
    step: "01",
    title: "Solicita tu cita",
    desc: "Llámanos o rellena el formulario online indicando el tipo de caballo y el motivo de la consulta.",
  },
  {
    step: "02",
    title: "Valoración inicial",
    desc: "Nuestro veterinario equino realiza un examen clínico completo y propone el plan de tratamiento más adecuado.",
  },
  {
    step: "03",
    title: "Seguimiento continuo",
    desc: "Te mantenemos informado de la evolución y ajustamos el tratamiento hasta la recuperación total del animal.",
  },
];

const coverage = {
  heading: "Tu veterinario equino en la comarca de Antequera",
  body: "Desde nuestra clínica en Mollina atendemos equinos en todo el entorno rural de la provincia de Málaga. Con el servicio de medicina de campo nos desplazamos directamente a tu finca o cuadra, evitando traslados innecesarios que estresen al animal.",
  towns: [
    "Mollina",
    "Antequera",
    "Humilladero",
    "Fuente de Piedra",
    "Archidona",
    "Villanueva de la Concepción",
    "Álora",
    "Pizarra",
    "Valle del Guadalhorce",
    "Campillos",
    "Cuevas Bajas",
  ],
};

export default function EquinosPage() {
  return (
    <ServicePage
      tag="Servicios · Equinos"
      heroTitle={
        <>
          Medicina equina de referencia{" "}
          <span className="text-navy-500">en Mollina, Málaga.</span>
        </>
      }
      heroSubtitle="Más de 15 años cuidando caballos, ponis y équidos en la comarca de Antequera. Medicina preventiva, cirugía, diagnóstico y atención de urgencias las 24 horas del año."
      heroImage="/equinos-hero.jpg"
      heroImageAlt="Veterinario examinando un caballo en Mollina, Málaga"
      callToAction="Pedir cita para mi caballo"
      services={services}
      stats={stats}
      process={process}
      coverage={coverage}
    />
  );
}
