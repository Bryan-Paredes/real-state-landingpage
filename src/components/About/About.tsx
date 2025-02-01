/* eslint-disable @next/next/no-img-element */
import { Slider } from "../Services/Slider";
import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className="flex flex-col lg:flex-row items-center justify-center gap-5 px-10 py-16 md:px-36 md:py-32">
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
      <div className="flex items-center justify-center">
        <Slider />
      </div>
    </Transition>
  );
}
