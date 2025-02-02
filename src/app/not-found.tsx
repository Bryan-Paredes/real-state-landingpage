import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-5">
      <h1 className="text-5xl font-bold mb-6">Error 404</h1>
      <h2 className="text-2xl font-medium mb-5">
        ¡UPS! No se ha encontrado la vivienda que buscas
      </h2>
      <Image
        src="/assets/404-not-found.jpg"
        alt="404 not found"
        width={600}
        height={450}
        className="rounded-lg shadow-light"
      />
      <div className="text-center mt-5">
        <Link
          href="/"
          className="text-secondary-foreground font-bold border-2 border-secondary bg-transparent px-3 py-2 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
