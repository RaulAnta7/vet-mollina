"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 flex flex-col items-center justify-center gap-4">
        <svg
          className="w-28 h-28 text-white/20"
          viewBox="0 0 64 64"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horse silhouette */}
          <path d="M52 8c-1 0-2 .4-2.8 1L46 12l-3-1c-2-.7-4.2-.8-6.2-.3L34 12c-2 .6-3.6 2-4.4 3.8L28 19l-6 2-4 5-6 2-4 6 2 2 4-2 2 4-2 4h4l2-4 4 2v8h4v-8l4-2 2 4h4l-2-6 4-4 4 2 2-2-2-4 4-2 2-6-2-2zm-8 6 2 4-4 2-2-4z" />
        </svg>
        <p className="text-white/30 text-sm font-medium tracking-wide uppercase">
          Foto de instalaciones
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
