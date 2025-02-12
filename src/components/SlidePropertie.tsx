/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
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

const styles: CustomCSSProperties = {
  "--swiper-navigation-size": "30px",
  "--swiper-navigation-color": "gray",
  "--swiper-pagination-color": "white",
  "--swiper-navigation-color-background": "black",
};

export default function SlideProperty({ image }: any) {
  return (
    <Swiper
      style={styles}
      slidesPerView={1.1}
      spaceBetween={10}
      navigation={true}
      rewind={true}
      pagination={{ clickable: false, dynamicBullets: true }}
      modules={[Navigation, Pagination, Controller]}
      className="h-[400px] md:h-[530px] w-[330px] md:w-[500px] mx-auto"
      grabCursor
    >
      {image.length > 0 ? (
        image.map((url: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              key={index}
              src={url}
              alt={`Imagen `}
              width={200}
              height={200}
              className="object-cover object-center w-full h-full rounded-2xl"
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No se encuentra ninguna imagen</p>
      )}
    </Swiper>
  );
}
