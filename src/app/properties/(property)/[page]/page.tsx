"use client";

import { Error404 } from "@/components/Error404";
import { dataProperties } from "@/components/Properties/Properties.data";
import { Property } from "@/components/Property";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const propertyId = params.page;
  const filteredPage = dataProperties.find(
    (property) => property.id === Number(propertyId)
  );

  return (
    <>
      {/* <TransitionPage /> */}
      {filteredPage ? <Property house={filteredPage} /> : <Error404 />}
    </>
  );
}
