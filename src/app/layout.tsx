import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TROT | Centro Veterinario en Mollina",
  description:
    "Centro veterinario de referencia en Mollina. Atención integral para tus mascotas con el más alto nivel profesional.",
  keywords: "veterinario, Mollina, mascotas, clínica veterinaria, Málaga",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
