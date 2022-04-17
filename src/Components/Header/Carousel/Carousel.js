import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Caeousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import CarouselImg from "./Carousel.jpg";
const Carousel = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="font-exo mySwiper md:w-3/6 sm:w-4/6 w-6/6 bg-red-500"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-right "
          style={{
            backgroundImage: `url(${CarouselImg})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className=" title" data-swiper-parallax="-300">
            Quote From
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Opekkha
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="font-semibold  bg-slate-900 bg-opacity-60 p-1 my-1">
              "It doesn't cost money to have the most colorful things in the
              world. They are Available for free. Such as Jochana, rainy days,
              people's love."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Quote From
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Moyurakkhi
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="font-semibold  bg-slate-900 bg-opacity-60 p-1 my-1">
              "It is very easy to recognize a person in laughter. Everyone cries
              in the same way, but when they laugh, they laugh differently."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Quote From
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Ei Megh, Roudro Chaya
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className="font-semibold  bg-slate-900 bg-opacity-60 p-1 my-1">
              "Days have changed, now people are not like before. No one looks
              at Maulana type people with fear-mixed respect like before.
              Maulana is also one to keep in mind, perhaps no one thinks so.
              They ignore Maulana."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
