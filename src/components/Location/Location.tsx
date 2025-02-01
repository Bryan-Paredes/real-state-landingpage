"use client";

import { Transition } from "../Transition";
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerHouse } from "./MarkerHouse";

export function Location() {
  const coordinatePoint = {
    lat: 40.416775,
    lng: -3.70379,
  };
  const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
    fnMap.flyTo({
      lat: position.lat,
      lng: position.lng,
    });
  };

  return (
    <Transition className="px-4 py-8 md:py-46 md:px-36">
      <h2 className="text-center text-secondary text-xl" id="location">
        Localización
      </h2>
      <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">
        Disponibles en toda España, con la comunidad de propiedades mas grande
        desde 2020.
      </h2>
      <MapContainer
        center={coordinatePoint}
        zoom={6}
        scrollWheelZoom={false}
        className="h-[700px] rounded-2xl"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png" />
        <MarkerHouse selectMarker={centerMarker} />
      </MapContainer>
    </Transition>
  );
}
