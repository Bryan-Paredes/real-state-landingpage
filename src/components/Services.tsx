"use client";

import { Transition } from "./Transition";
import { services } from "@/data/services";
import SpotlightCard from "@/components/UI/SpotlightCard/SpotlightCard";

export function Services() {
  return (
    <section id="services" className="container w-full h-full">
      <h2 className="text-secondary text-center text-xl">Servicios</h2>

      <div className="flex mx-auto w-full h-full px-20 py-16">
        <dl className="flex flex-col lg:flex-row items-center justify-center gap-5">
          {services.map((item) => (
            <SpotlightCard
              spotlightColor="rgba(197,202,197,1)"
              className="bg-white h-full w-full items-center justify-center"
              key={item.name}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-fit rounded-lg p-2 shadow-md shadow-secondary/30 ring-1 ring-black/5">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-secondary "
                  />
                </div>
                <h4 className="flex-1 mt-6 font-semibold text-gray-900 ">
                  {item.name}
                </h4>
                <p className="flex-1 mt-4 leading-7 text-gray-600 text-balance text-center">
                  {item.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </dl>
      </div>
    </section>
  );
}
