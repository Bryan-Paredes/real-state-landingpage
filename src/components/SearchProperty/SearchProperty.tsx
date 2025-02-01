import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-full px-3 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrHome />

      <div>
        <p>Propiedad</p>
        <p className="text-xs">Selecciona el tipo de propiedad</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white rounded-lg shadow-md w-[230px] left-0 p-4">
          <p>Casa</p>
          <p>Chalet</p>
          <p>Apartamento</p>
        </div>
      )}
    </div>
  );
}
