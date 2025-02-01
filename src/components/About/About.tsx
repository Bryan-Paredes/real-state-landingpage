/* eslint-disable @next/next/no-img-element */
import { Slider } from "../Services/Slider";
import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className="grid gap-4 px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
      <div
        className="flex flex-col items-center justify-center max-w-xl mb-7"
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
