/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Transition } from "../Transition";
import { dataProperties } from "./Properties.data";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";

export function Properties() {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = dataProperties.slice(0, counterHouses);

  const loadMoreHouses = () => {
    setCounterHouses(counterHouses + 4);
  };

  return (
    <Transition className="px-4 py-8 md:py-32 md:px-4 z-20">
      <h2 id="propierties" className="text-secondary text-center text-xl my-10">
        Propiedades
      </h2>
      <div className="z-20 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {dataFilteredHouses.map(
          ({
            id,
            location,
            price,
            bedrooms,
            bathroom,
            images,
            star,
            meters,
          }) => (
            <Link
              key={id}
              href={`/properties/${id}`}
              className="shadow-light hover:shadow-2xl rounded-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative -z-[1]">
                <div className="relative">
                  <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
                    <LiaStarSolid />
                    <span className="ml-1 font-semibold">{star}</span>
                  </div>
                  <img
                    src={`${images ? images[0] : "/assets/404-not-found.jpg"}`}
                    alt={location}
                    width={150}
                    height={150}
                    className="object-cover w-full min-w-full h-[200px] rounded-t-2xl"
                  />
                  <div className="px-3 py-5">
                    <p className="text-secondary">{location}</p>
                    <p className="font-semibold">{formatPrice(price)}</p>
                    <div className="gap-4 mt-2 xl:flex">
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaBedSolid />
                        <span className="ml-2">{bedrooms}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaBathSolid />
                        <span className="ml-2">{bathroom}</span>
                      </div>
                      <div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 bg-slate-300/30">
                        <LiaRulerCombinedSolid />
                        <span className="ml-2">{meters}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      <div className="text-center my-7">
        {counterHouses < dataProperties.length && (
          <button
            className="font-bold text-lg px-6 py-5 text-secondary transition-color duration-150 cursor-pointer border-[3px] border-secondary bg-transparentd rounded-xl hover:bg-secondary hover:text-white"
            onClick={loadMoreHouses}
          >
            Ver más propiedades
          </button>
        )}
      </div>
    </Transition>
  );
}
