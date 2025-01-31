/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderDataImages } from "./Slider.data";

export function Slider() {
  return (
    <Swiper
      effect={"cards"}
      slidesPerView={1.5}
      spaceBetween={12}
      freeMode={true}
      navigation={true}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, EffectCards]}
      className="h-[240px] md:h-[320px] w-[300px] md:w-[500px]"
      grabCursor
    >
      {sliderDataImages.map(({ id, urlImage }) => (
        <SwiperSlide key={id}>
          <img
            src={`/assets/houses/${urlImage}`}
            alt="house"
            width={200}
            height={700}
            className="w-auto h-auto rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
