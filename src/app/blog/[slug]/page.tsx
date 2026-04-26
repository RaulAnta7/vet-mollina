import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/app/blog/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Centro Veterinario Mollina`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      locale: "es_ES",
      type: "article",
    },
  };
}

const categoryTextColor: Record<string, string> = {
  Equinos: "text-navy-600",
  Perros: "text-emerald-600",
  Gatos: "text-amber-600",
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const authorInitials = article.author
    .split(" ")
    .filter((w) => w.match(/^[A-ZÁÉÍÓÚ]/))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a) => (a.category === article.category ? -1 : 1))
    .slice(0, 2);

  return (
    <>
      <Navbar forceScrolled />
      <main>
        {/* ── Hero image ── */}
        <div className="relative h-72 md:h-[26rem] w-full overflow-hidden mt-16 md:mt-20">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-3 gap-14">

            {/* ── Article body ── */}
            <article className="lg:col-span-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${article.categoryColor}`}>
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-navy-800 leading-snug mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400 mb-10 pb-8 border-b border-gray-100">
                <span className="font-semibold text-navy-700">{article.author}</span>
                <span>·</span>
                <span>{article.authorRole}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime} de lectura
                </span>
              </div>

              {/* Content blocks */}
              <div className="space-y-5">
                {article.content.map((block, i) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed text-[1.0625rem]">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="text-2xl font-extrabold text-navy-800 !mt-10 !mb-1">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "subheading") {
                    return (
                      <h3 key={i} className="text-lg font-bold text-navy-700 !mt-6 !mb-1">
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="space-y-3 pl-1">
                        {block.items.map((item, j) => (
                          <li key={j} className="flex gap-3 text-gray-600 text-[1.0625rem] leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === "tip") {
                    return (
                      <div key={i} className="border-l-4 border-navy-500 bg-navy-50 rounded-r-xl px-6 py-4 !my-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-navy-600 mb-1">
                          {block.label}
                        </p>
                        <p className="text-navy-800 leading-relaxed text-sm">{block.text}</p>
                      </div>
                    );
                  }
                  if (block.type === "warning") {
                    return (
                      <div key={i} className="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl px-6 py-4 !my-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1">
                          {block.label}
                        </p>
                        <p className="text-amber-900 leading-relaxed text-sm">{block.text}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Back link */}
              <div className="mt-14 pt-8 border-t border-gray-100">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:gap-3 transition-all"
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  Volver al blog
                </a>
              </div>
            </article>

            {/* ── Sidebar ── */}
            <aside className="space-y-6 lg:pt-20">
              {/* Author */}
              <div className="bg-navy-50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-navy-700 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4">
                  {authorInitials}
                </div>
                <p className="font-bold text-navy-800">{article.author}</p>
                <p className="text-sm text-gray-500 mb-3">{article.authorRole}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Veterinario del equipo de Centro Veterinario Mollina con más de 15 años de experiencia en la Comarca de Antequera.
                </p>
              </div>

              {/* CTA */}
              <div className="bg-navy-800 rounded-2xl p-6 text-white">
                <h3 className="font-extrabold text-lg mb-3">¿Necesitas una consulta?</h3>
                <p className="text-navy-200 text-sm leading-relaxed mb-5">
                  Nuestro equipo está disponible para atender a tu animal. Urgencias 24H.
                </p>
                <a
                  href="/contacto"
                  className="block w-full bg-white text-navy-800 text-center font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                >
                  Pedir cita
                </a>
                <a
                  href="tel:+34952000000"
                  className="block w-full mt-2 border border-white/30 text-white text-center font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                >
                  +34 952 000 000
                </a>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-navy-800 text-xs uppercase tracking-widest mb-4">
                    Artículos relacionados
                  </h3>
                  <div className="space-y-4">
                    {related.map((a) => (
                      <a
                        key={a.slug}
                        href={`/blog/${a.slug}`}
                        className="group flex gap-4 items-start hover:opacity-80 transition-opacity"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={a.image}
                            alt={a.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="min-w-0">
                          <span className={`text-[10px] font-bold uppercase tracking-widest mb-1 block ${categoryTextColor[a.category] ?? "text-gray-500"}`}>
                            {a.category}
                          </span>
                          <p className="text-sm font-semibold text-navy-800 leading-snug line-clamp-2">
                            {a.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">{a.readTime} lectura</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
