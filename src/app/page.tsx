"use client";

import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import CountSection from "@/components/CountSection";
import { JoinCommunity } from "@/components/JoinCommunity";
import { Properties } from "@/components/Properties";
import { Services } from "@/components/Services/Services";
import { TransitionPage } from "@/components/TransitionPage";
import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () => import("../components/Location").then((module) => module.Location),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <TransitionPage />
      <main className="container mx-auto">
        <Banner />
        <Properties />
        <section>
          <Services />
          <CountSection />
          <LocationMap />
          <About />
        </section>
        <JoinCommunity />
      </main>
    </>
  );
}
