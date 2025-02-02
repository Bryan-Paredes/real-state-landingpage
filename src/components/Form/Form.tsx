import Link from "next/link";
import { dataProperties } from "../Properties/Properties.data";
import { PropertyProps } from "../Property/Property.types";

/* eslint-disable @next/next/no-img-element */
export function Form({ house }: PropertyProps) {
  console.log(house.phone);

  return (
    <div className="px-3">
      <div className="py-4 px-3 rounded-lg shadow-2xl">
        <div className="flex gap-4">
          <img
            src="/assets/comercial.png"
            alt="Comercial"
            width={50}
            height={50}
            className="border-2 border-secondary rounded-full"
          />
          <div>
            <p>Bryan Paredes</p>
            <p className="text-secondary font-semibold">Comercial</p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <label className="text-sm text-secondary">Nombre</label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-3 py-1.5 text-sm border-0 border-secondary rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <label className="text-sm text-secondary">Teléfono</label>
            <div className="mt-2">
              <input
                type="phone"
                placeholder="Telefono"
                className="w-full px-3 py-1.5 text-sm border-0 border-secondary rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <label className="text-sm text-secondary">Descripción</label>
            <div className="mt-2">
              <textarea
                name="description"
                rows={3}
                defaultValue={""}
                className="w-full px-3 py-1.5 text-sm border-0 border-secondary rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 my-4">
            <button className="bg-secondary px-4 py-2 rounded-lg text-white text-sm hover:bg-black transition-all duration-300">
              Enviar mensaje
            </button>
            <button className="border-[1px] border-secondary text-secondary px-4 py-2 rounded-lg text-sm hover:bg-black transition-all duration-300 hover:text-white hover:border-black">
              <Link href={`tel:${house.phone}`}>Llamar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
