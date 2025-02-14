"use client";

import dynamic from "next/dynamic";

export const LocationMap = dynamic(
  () =>
    import("@/components/Location/Location").then((module) => module.Location),
  {
    ssr: false,
  }
);
