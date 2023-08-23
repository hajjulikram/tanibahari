'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Keyboard } from 'swiper/modules';

export default function HeroSection() {
  const imageList = [
    '/assets/images/swiper/banner-1.jpg',
    '/assets/images/swiper/banner-2.jpg',
    '/assets/images/swiper/banner-3.jpg',
  ];

  return (
    <div className="xl:px-24 px-5">
      <Swiper
        rewind={false}
        pagination={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Keyboard]}
        className="mySwiper w-full  xl:h-96 h-36 rounded-lg"
      >
        {imageList.map((image, i) => (
          <SwiperSlide
            className="swiper-slide rounded-lg bg-cover bg-center"
            key={i}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </Swiper>
    </div>
  );
}
