'use client';
import Image from 'next/image';
import React from 'react';
import Icon from '@mdi/react';
import {
  mdiInformation,
  mdiCartPlus,
  mdiArrowLeft,
  mdiArrowRight,
} from '@mdi/js';
import Link from 'next/link';
import data from '@/utils/data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function CardProduct() {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        modules={[Pagination, Navigation]}
        className="relative group"
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          412: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1520: {
            slidesPerView: 5,
          },
        }}
      >
        <div className="top-[50%] absolute z-10 button-next-slide group-hover:right-0 -right-[23rem] duration-500 text-[#FAFF00] w-[40px] h-[40px] bg-[#0F9062] shadow-md rounded-full grid place-items-center">
          <Icon path={mdiArrowRight} size={1} />
        </div>

        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:left-0 -left-[23rem] duration-500 text-[#FAFF00] w-[40px] h-[40px] bg-[#0F9062] shadow-md rounded-full grid place-items-center">
          <Icon path={mdiArrowLeft} size={1} />
        </div>
        <div className="flex gap-1  ">
          {data.product.map((product, i) => (
            <SwiperSlide key={i}>
              <div className="w-64 bg-gray-100 px-3 py-3 rounded-lg drop-shadow-md ">
                <Image
                  className="h-52 w-full object-cover object-center rounded-md"
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.slug}
                />

                <div className="pt-2">
                  <h1 className="text-[#0F9062] font-bold max-[640px]:text-sm">
                    {product.name}
                  </h1>
                </div>

                <div className="pt-2">
                  <h3 className="text-[#FB8200] font-bold max-[640px]:text-sm">
                    {product.category}
                  </h3>
                  <p className="text-[#A3A3A3] font-bold line-through max-[640px]:text-sm">
                    {product.discount}
                  </p>
                  <p className="text-[#1AC41F] font-bold text-[24px] max-[640px]:text-[19px]">
                    {product.price}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Link href={`product-detail/${product.slug}`}>
                    <div className="bg-[#156C99] w-full rounded-xl p-1 text-white text-sm font-bold flex gap-1 max-[640px]:text-[12px] items-center">
                      <Icon path={mdiInformation} size={1} />
                      Lihat Detail
                    </div>
                  </Link>

                  <Link href={'/product/slug'}>
                    <div className="bg-[#0F9062] w-full rounded-xl p-1 font-bold text-[#FAFF00] text-sm flex gap-1 max-[640px]:text-sm items-center">
                      <Icon
                        path={mdiCartPlus}
                        size={1}
                        className="text-white"
                      />
                      Masukan Keranjang
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
