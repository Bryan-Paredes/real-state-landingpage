import React from "react";
import { forwardRef } from "react";
import CountUp from "./UI/CountUp/CountUp";
import { Transition } from "./Transition";

const stats = [
  {
    name: "Visitantes",
    value: 162,
  },
  {
    name: "Propiedades disponibles",
    value: 50,
  },
  {
    name: "Nuevos clientes",
    value: 100,
  },
];

export default function Example() {
  return (
    <Transition>
      <div className="px-20 md:px-36">
        <h2 className="mt-2 text-secondary text-xl">Metricas</h2>
        <p className="mt-6 text-lg font-semibold text-justify">
          Descubre nuestras métricas clave en <strong>Bienes Raices</strong>: el
          número de <strong>Visitantes</strong>, la cantidad de{" "}
          <strong>propiedades disponibles</strong> y los{" "}
          <strong>nuevos clientes</strong> que confían en nosotros. Estos datos
          reflejan nuestro crecimiento y compromiso en el mercado inmobiliario.
        </p>
        <div className="mt-12 flex flex-col md:flex-row md:py-14 items-center justify-center gap-10 md:gap-20">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center flex flex-col items-center justify-center">
                <dd className="flex bg-gradient-to-b from-[#727C73] to-[#4c554d] bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
                  <CountUp from={0} to={stat.value} duration={1.5} />
                  <span>+</span>
                </dd>
                <dt className="mt-1 text-gray-600 dark:text-gray-400">
                  {stat.name}
                </dt>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </Transition>
  );
}
