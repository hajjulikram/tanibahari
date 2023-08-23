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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function CardProduct() {
  return (
    <div className="md:container">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        modules={[Pagination, Navigation]}
        className="group"
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
            slidesPerView: 3,
          },
          1520: {
            slidesPerView: 5,
          },
        }}
      >
        {/* BUTTON SWIPPER */}
        <div>
          <div className="top-[50%] absolute z-10 button-next-slide group-hover:right-0 -right-[23rem] duration-500 text-[#FAFF00] w-[40px] h-[40px] bg-[#0F9062] shadow-md rounded-full grid place-items-center">
            <Icon path={mdiArrowRight} size={1} />
          </div>
          <div className="top-[50%] absolute z-10 button-prev-slide group-hover:left-0 -left-[23rem] duration-500 text-[#FAFF00] w-[40px] h-[40px] bg-[#0F9062] shadow-md rounded-full grid place-items-center">
            <Icon path={mdiArrowLeft} size={1} />
          </div>
        </div>

        <div className="flex">
          {data.product.map((product, i) => (
            <SwiperSlide key={i}>
              <div className="w-[227px] h-[374px] bg-gray-100 px-3 py-3 rounded-lg drop-shadow-md ">
                <Image
                  className="h-36 w-full object-cover object-center rounded-md"
                  src={product.image}
                  width={200}
                  height={200}
                  alt={product.slug}
                />

                <div className="pt-2">
                  <h1 className="text-[#0F9062] font-bold text-base">
                    {product.name}
                  </h1>
                </div>

                <div className="pt-2">
                  <h3 className="text-[#FB8200] font-bold text-sm">
                    {product.category}
                  </h3>
                  <p className="text-[#A3A3A3] font-bold line-through text-sm">
                    {product.discount}
                  </p>
                  <p className="text-[#1AC41F] font-bold text-base">
                    {product.price}
                  </p>
                </div>

                <div className="flex flex-col gap-2 fixed bottom-3">
                  <Link href={`product-detail/${product.slug}`}>
                    <div className="bg-[#156C99] w-full rounded-xl py-1 px-3 text-white text-sm font-bold flex gap-1 items-center">
                      <Icon path={mdiInformation} size={1} />
                      Lihat Detail
                    </div>
                  </Link>

                  <Link href={'/product/slug'}>
                    <div className="bg-[#0F9062] w-full rounded-xl py-1 px-3 font-bold text-[#FAFF00] text-sm flex gap-1 justify-center ">
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
