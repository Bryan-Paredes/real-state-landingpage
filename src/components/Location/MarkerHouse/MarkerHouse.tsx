/* eslint-disable @next/next/no-img-element */
import { Marker, Popup, useMap } from "react-leaflet";
import { MarkerHouseProps } from "@/types/marker-house";
import { icon } from "leaflet";
import { housesData } from "@/data/marker-house";
import { FaMapMarkerAlt } from "react-icons/fa";

export function MarkerHouse(props: MarkerHouseProps) {
  const { selectMarker } = props;
  const fnMap = useMap();
  const customIcon = icon({
    iconUrl: "assets/marker.svg",
    iconSize: [40, 40],
  });

  return housesData.map(({ id, name, position, image }) => (
    <Marker
      key={id}
      position={position}
      icon={customIcon}
      eventHandlers={{ click: () => selectMarker(position, fnMap) }}
    >
      <Popup>
        <div className="flex items-center mb-2">
          <span className="mr-4 text-secondary">
            <FaMapMarkerAlt />
          </span>
          <h5 className="text-md text-secondary">{name}</h5>
        </div>
        <img
          src={`/assets/houses/${image}`}
          alt={name}
          width={100}
          height={100}
          className="w-full h-auto rounded-lg"
        />
        <button className="px-3 py-2 mt-2 text-white rounded-lg bg-secondary hover:bg-black transition-all duration-300">
          Ver Propiedad
        </button>
      </Popup>
    </Marker>
  ));
}
