import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container mx-auto relative">
      <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-5xl font-bold">
            Descubre la vivienda ideal para vivir en la ciudad
          </h2>
          <p className="mt-2 text-xl md:mt-8">
            Con mas de 30 años de experiencia en el sector, Real State es la
            opción perfecta con profesionales calificados.
          </p>
        </div>
        <FloatedSearch />
      </div>
    </div>
  );
}
