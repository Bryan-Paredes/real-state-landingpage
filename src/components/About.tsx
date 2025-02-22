/* eslint-disable @next/next/no-img-element */
import { Slider } from "@/components/Slider";

export function About() {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-16 md:px-36 md:py-32">
      <div
        className="flex flex-col items-center justify-center mb-7"
        id="about"
      >
        <h4 className="text-secondary text-xl">Sobre Nosotros</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Mas de 1,000 propiedades para vernder y comprar en España
        </h2>
        <p className="mb-10 mt-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          asperiores consequatur veritatis quasi iusto minima ex, voluptatibus
          praesentium beatae enim voluptatum consequuntur, vel reprehenderit
          eligendi similique necessitatibus ratione cum neque!
        </p>
      </div>
      <div className="flex mx-auto items-center justify-center">
        <Slider />
      </div>
    </section>
  );
}
