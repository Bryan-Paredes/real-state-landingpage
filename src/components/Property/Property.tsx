/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { Form } from "../Form";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-color-background"?: string;
}

// Usar el tipo extendido en tu componente
const styles: CustomCSSProperties = {
  "--swiper-navigation-size": "30px",
  "--swiper-navigation-color": "gray",
  "--swiper-pagination-color": "white",
  "--swiper-navigation-color-background": "black",
};

export function Property(props: PropertyProps) {
  const { house } = props;

  return (
    <main className="max-w-5xl mx-auto my-7">
      <Link href="/" className="w-36">
        <div className="flex items-center justify-start gap-2 w-fit px-6 hover:-translate-x-2 transition-transform duration-300 cursor-pointer">
          <FaArrowLeft />
          <span className="text-secondary text-lg">Regresar</span>
        </div>
      </Link>
      <div className="grid md:grid-cols-[70%,1fr] my-3 py-5">
        <div className="px-6">
          <h1 className="text-3xl font-bold mb-4 text-secondary flex justify-between items-center">
            <span>House {house.id}</span>
            <span className="font-semibold">{formatPrice(house.price)}</span>
          </h1>
          <div className="flex gap-5 my-4">
            <h2 className="flex gap-3 text-xl items-center">
              <TfiLocationPin /> {house.location}
            </h2>
            <div className="flex items-center px-2 py-1 rounded-lg bg-secondary text-white top-2 right-2">
              <LiaStarSolid />
              <span className="ml-1 font-semibold">{house.star}</span>
            </div>
          </div>
          <Swiper
            style={styles}
            slidesPerView={1.1}
            spaceBetween={10}
            navigation={true}
            rewind={true}
            pagination={{ clickable: false, dynamicBullets: true }}
            modules={[Navigation, Pagination, Controller]}
            className="h-[400px] md:h-[500px] w-[330px] md:w-[500px] mx-auto"
            grabCursor
          >
            {house.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={image}
                  alt={house.location}
                  width={150}
                  height={150}
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <img
            src={`${
              house.images ? house.images[0] : "/assets/404-not-found.jpg"
            }`}
            alt={`Casa en ${house.location}`}
            width={1200}
            height={1200}
            className="w-full h-[700px] rounded-2xl object-cover"
          /> */}
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
              <LiaBedSolid />
              <span className="ml-2">{house.bedrooms}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
              <LiaBathSolid />
              <span className="ml-2">{house.bathroom}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300/30">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{house.meters}</span>
            </div>
          </div>
          <div className="my-3">
            <p>{house.description}</p>
          </div>
        </div>
        <Form house={house} />
      </div>
    </main>
  );
}
