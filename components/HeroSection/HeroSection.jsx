'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Keyboard } from 'swiper/modules';

export default function HeroSection() {
  return (
    <div className="container">
      <Swiper
        rewind={true}
        cssMode={true}
        pagination={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Keyboard]}
        className="mySwiper"
      >
        {[...Array(3).keys()].map((i) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide className="swiper-slide">
            <img src={`/assets/images/swiper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
