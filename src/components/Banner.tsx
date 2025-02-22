import "@/app/globals.css";

export function Banner() {
  return (
    <div className="w-full h-full my-6">
      <div className="pt-20 md:pt-0 min-h-[75vh] bg-banner-image bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center justify-center brightness-[65%]"></div>
      <div className="max-w-3xl flex flex-col items-center justify-center gap-3 text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Descubre la vivienda ideal para vivir en la ciudad
        </h2>
        <p className="mt-2 text-base sm:text-xl md:mt-8">
          Con mas de 30 años de experiencia en el sector, Real State es la
          opción perfecta con profesionales calificados.
        </p>
      </div>
    </div>
  );
}
