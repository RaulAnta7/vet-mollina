import ServicePage from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinario para Perros en Mollina, Málaga | Centro Veterinario Mollina",
  description:
    "Clínica veterinaria canina en Mollina. Medicina general, cirugía, dermatología, odontología y urgencias para perros en Antequera, Archidona y el Valle del Guadalhorce.",
  keywords:
    "veterinario perros Mollina, clínica veterinaria canina Málaga, veterinario perros Antequera, veterinario canino Guadalhorce, vacunas perros Mollina, cirugía canina Málaga",
  openGraph: {
    title: "Veterinario para Perros en Mollina – Centro Veterinario Mollina",
    description:
      "Atención veterinaria integral para perros en Mollina, Málaga. Vacunas, cirugía, dermatología, odontología y urgencias 24H.",
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
    title: "Medicina Preventiva Canina",
    desc: "Vacunas obligatorias y opcionales, microchip homologado, desparasitaciones internas y externas, cartilla sanitaria y revisiones anuales de salud.",
  },
  {
    icon: icon("M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"),
    title: "Cirugía y Traumatología",
    desc: "Esterilización, extirpación de tumores, cirugía ortopédica, reparación de fracturas y luxaciones. Quirófano equipado con monitorización continua.",
  },
  {
    icon: icon("M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18zm0-15.75c-.69 0-1.368.064-2.025.19a.75.75 0 00-.614.74v.204a3 3 0 01-.926 2.16 3.375 3.375 0 01-2.373.972H6c-.828 0-1.5.672-1.5 1.5v.75a.75.75 0 00.75.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 00-.75.75v.75c0 .828.672 1.5 1.5 1.5h.375c.966 0 1.875.399 2.55 1.05l.225.22a.75.75 0 001.05 0l.225-.22A3.75 3.75 0 0112.75 14.25H18c.621 0 1.125-.504 1.125-1.125V12c0-.621-.504-1.125-1.125-1.125h-.375a.75.75 0 010-1.5H18A1.125 1.125 0 0019.125 8.25v-.75A1.125 1.125 0 0018 6.375h-.25A3.375 3.375 0 0115.375 5.4a3 3 0 01-.925-2.16v-.204a.75.75 0 00-.615-.74A12.034 12.034 0 0012 2.25z"),
    title: "Dermatología Canina",
    desc: "Diagnóstico y tratamiento de alergias ambientales y alimentarias, dermatitis atópica, sarna, hongos y otras enfermedades de piel y pelo.",
  },
  {
    icon: icon("M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"),
    title: "Odontología Canina",
    desc: "Limpieza dental ultrasónica bajo anestesia, extracción de piezas con enfermedad periodontal grave, tratamiento de la enfermedad de la encía y endodoncia.",
  },
  {
    icon: icon("M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"),
    title: "Diagnóstico Avanzado",
    desc: "Analítica de sangre y orina con resultados en el mismo día, ecografía abdominal, radiografía digital y pruebas de diagnóstico rápido en clínica.",
  },
  {
    icon: icon("M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"),
    title: "Nutrición y Dietética",
    desc: "Planes de alimentación personalizados según raza, edad y condición clínica. Control de obesidad, dietas de convalecencia y asesoramiento en alimentación BARF.",
  },
];

const stats = [
  { value: "+10", label: "Años atendiendo perros" },
  { value: "24H", label: "Urgencias disponibles" },
  { value: "4.9★", label: "Valoración Google" },
  { value: "100%", label: "Atención personalizada" },
];

const process = [
  {
    step: "01",
    title: "Reserva tu cita",
    desc: "Contacta por teléfono o formulario. Cuéntanos la edad, raza y el motivo de la visita.",
  },
  {
    step: "02",
    title: "Consulta completa",
    desc: "Exploración física detallada, diagnóstico y plan de tratamiento adaptado a tu perro.",
  },
  {
    step: "03",
    title: "Seguimiento y alta",
    desc: "Revisiones de control y asesoramiento continuo hasta la recuperación total de tu mascota.",
  },
];

const coverage = {
  heading: "Veterinario de confianza para perros en la comarca de Antequera",
  body: "Atendemos perros de todas las razas y edades en nuestra clínica de Mollina. Somos el veterinario de referencia para familias de los municipios del Valle del Guadalhorce y la comarca de Antequera. Fácil acceso desde la A-92 y aparcamiento gratuito.",
  towns: [
    "Mollina",
    "Antequera",
    "Humilladero",
    "Fuente de Piedra",
    "Archidona",
    "Alameda",
    "Cuevas Bajas",
    "Villanueva de Algaidas",
    "Álora",
    "Pizarra",
    "Valle del Guadalhorce",
  ],
};

export default function PerrosPage() {
  return (
    <ServicePage
      tag="Servicios · Perros"
      heroTitle={
        <>
          Tu veterinario de confianza{" "}
          <span className="text-navy-500">para perros en Mollina.</span>
        </>
      }
      heroSubtitle="Atención veterinaria integral para perros de todas las razas y edades. Medicina preventiva, cirugía, dermatología y urgencias disponibles las 24 horas en la comarca de Antequera, Málaga."
      heroImage="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85"
      heroImageAlt="Perro siendo atendido en el veterinario en Mollina, Málaga"
      callToAction="Pedir cita para mi perro"
      services={services}
      stats={stats}
      process={process}
      coverage={coverage}
    />
  );
}
