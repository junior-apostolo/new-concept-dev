"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./styles.css";

type CarouselItem = {
  id: string;
  title: string;
  description: string;
  link: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({ items }: CarouselProps) {
  return (
    <div>
      <Swiper
        className="swiper_container"
        slidesPerView={"auto"}
        effect={"coverflow"}
        loop={true}
        centeredSlides={true}
        modules={[Navigation, Pagination, EffectCoverflow]}
        coverflowEffect={{
          depth: 100,
          stretch: 0,
          rotate: 0,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        }}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 2,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-[22rem] border-slate-50 rounded-2xl overflow-hidden ">
              <Image
                className="h-full object-cover rounded-xl"
                src={item.link}
                alt={item.title}
                width={600}
                height={600}
              />
              <div className="flex flex-col md:justify-center w-full h-full top-0 md:right-[-100%] md:group-hover:right-0 ease-out duration-500 absolute p-10 bg-[#1f3d4738] text-white md:backdrop-blur-sm">
                <h2 className="uppercase text-2xl font-medium">{item.title}</h2>
                <p className="text-lg leading-6 font-normal my-8 mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowLeft className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowRight className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
