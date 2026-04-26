import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/app/blog/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Veterinario | Centro Veterinario Mollina",
  description:
    "Artículos y consejos sobre salud equina, perros y gatos del equipo de Centro Veterinario Mollina. Guías prácticas para cuidar mejor a tus animales.",
  keywords:
    "blog veterinario Mollina, consejos salud equina, cuidado caballos Málaga, salud perros gatos, medicina veterinaria Antequera",
  openGraph: {
    title: "Blog Veterinario – Centro Veterinario Mollina",
    description:
      "Guías prácticas, consejos y artículos sobre salud animal del equipo de Centro Veterinario Mollina.",
    locale: "es_ES",
    type: "website",
  },
};

const categories = ["Todos", "Equinos", "Perros", "Gatos"];
const featured = articles.find((a) => a.featured)!;
const rest = articles.filter((a) => !a.featured);

export default function BlogPage() {
  return (
    <>
      <Navbar forceScrolled />
      <main>
        {/* ── Hero ── */}
        <header className="pt-32 pb-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-navy-600 text-xs font-bold tracking-widest uppercase mb-5 px-3 py-1 bg-navy-50 rounded-full">
              Blog Veterinario
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-navy-800 leading-tight tracking-tight">
                  Salud animal,{" "}
                  <span className="text-navy-500">explicada sin rodeos.</span>
                </h1>
                <p className="mt-5 text-lg text-gray-500 max-w-xl leading-relaxed">
                  Guías prácticas y consejos del equipo de Centro Veterinario Mollina para que cuides mejor a tus animales.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                      cat === "Todos"
                        ? "bg-navy-700 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-navy-50 hover:text-navy-700 cursor-pointer"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* ── Featured article ── */}
          <a
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-16 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="bg-white p-10 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">Artículo destacado</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-800 leading-snug mb-5 group-hover:text-navy-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="font-semibold text-navy-700">{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} lectura</span>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-navy-700 font-bold group-hover:gap-3 transition-all">
                Leer artículo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </a>

          {/* ── Articles grid ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-navy-200 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className={`self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-navy-800 leading-snug mb-3 group-hover:text-navy-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="font-semibold text-navy-600">{article.author}</span>
                    <div className="flex items-center gap-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="mt-20 bg-navy-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-navy-700 rounded-full opacity-40" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-navy-900 rounded-full opacity-40" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                ¿Tienes una pregunta sobre tu animal?
              </h2>
              <p className="text-navy-200 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Nuestro equipo está disponible para resolver tus dudas. Pide cita o llámanos directamente.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contacto" className="bg-white text-navy-800 px-8 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                  Contactar con el equipo
                </a>
                <a href="tel:+34952000000" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  +34 952 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
