"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

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
        modules={[Navigation, A11y, Pagination, Scrollbar]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
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
          <SwiperSlide className="flex items-center justify-center" key={index}>
            <div className="group relative border border-solid h-[308px] border-slate-50 rounded-2xl overflow-hidden ">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src={item.link}
                alt={item.title}
                width={400}
                height={400}
              />
              <div className="flex flex-col justify-center w-full h-full top-0 right-[-100%] group-hover:right-0 ease-out duration-500 absolute p-10 bg-[#1f3d4738] text-white backdrop-blur-sm">
                <h2 className="uppercase text-2xl font-medium">{item.title}</h2>
                <p className="text-lg leading-6 font-normal my-8 mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

{
  /* <div className="border-2 border-blue-500 rounded-lg overflow-hidden">
              <Image
                className="w-full h-[308px] object-cover"
                src={item.link}
                alt={item.title}
                width={400}
                height={400}
              />
            </div> */
}
