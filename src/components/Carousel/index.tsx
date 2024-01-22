'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

type CarouselItem = {
    title: string,
    description: string,
    image: string
}

type CarouselProps = {
    items: CarouselItem[]
}

export function Carousel({items}: CarouselProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        480: {slidesPerView: 2},
        740: {slidesPerView: 3},
        1275: {slidesPerView: 4},
      }}
    >
        {items.map((item, index) => (
            <SwiperSlide key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <Image src={item.image} alt={item.title}/>
            </SwiperSlide>
        ))}
    </Swiper>
  );
}
