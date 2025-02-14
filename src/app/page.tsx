import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import Categories from "@/components/Categories";
import CountSection from "@/components/CountSection";
import { JoinCommunity } from "@/components/JoinCommunity";
import { LocationMap } from "@/components/LocationMap";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <Banner />
        <Categories />
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
