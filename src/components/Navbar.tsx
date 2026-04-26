"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  { label: "Equinos", href: "/servicios/equinos" },
  { label: "Perros", href: "/servicios/perros" },
  { label: "Gatos", href: "/servicios/gatos" },
];

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceScrolled) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceScrolled]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = `text-sm font-medium transition-colors hover:text-navy-500 ${
    scrolled ? "text-gray-700" : "text-white/90"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-navy-600 rounded-lg flex items-center justify-center group-hover:bg-navy-700 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span
              className={`text-sm font-bold tracking-wide leading-tight transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Centro Veterinario<br />
              <span className="text-navy-500 font-extrabold">Mollina</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="/" className={linkClass}>
              Inicio
            </a>

            {/* Servicios dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-navy-500 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
                onClick={() => setServicesOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Servicios
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 overflow-hidden">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-700 transition-colors font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/nosotros" className={linkClass}>
              Sobre Nosotros
            </a>

            <a href="/blog" className={linkClass}>
              Blog
            </a>

            <a
              href="/contacto"
              className="bg-navy-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Pedir Cita
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <div className="w-5 space-y-1.5">
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-1">
          <a
            href="/"
            className="text-gray-700 font-medium hover:text-navy-600 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>

          {/* Mobile Servicios accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-navy-600 transition-colors py-2"
              onClick={() => setMobileServicesOpen((o) => !o)}
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              {services.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="block pl-4 py-2 text-sm text-gray-600 hover:text-navy-600 transition-colors border-l-2 border-navy-100 ml-2 mb-1"
                  onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/nosotros"
            className="text-gray-700 font-medium hover:text-navy-600 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Sobre Nosotros
          </a>

          <a
            href="/blog"
            className="text-gray-700 font-medium hover:text-navy-600 transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </a>

          <a
            href="/contacto"
            className="bg-navy-600 text-white font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-navy-700 transition-colors mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Pedir Cita
          </a>
        </nav>
      </div>
    </header>
  );
}
