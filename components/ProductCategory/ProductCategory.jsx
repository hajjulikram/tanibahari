'use client';
import dataCategory from '@/utils/dataCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCategory = () => {
  return (
    <div className="container mt-5">
      <h1 className="font-bold md:text-start text-center text-[#0F9062] md:text-lg text-sm pt-5">
        Temukan Produk Berdasarkan Kategori
      </h1>

      <div className="flex flex-nowrap gap-1 -mx-5 overflow-x-scroll md:overflow-x-hidden snap-x py-5 rounded-md drop-shadow-xl">
        {dataCategory.categoryProducts.map((data, i) => (
          <Link href={`category/${data.slug}`} key={i}>
            <div className="flex flex-col px-2 items-center">
              <div className="bg-[#99CCDB] w-16 h-16 rounded-full">
                <Image
                  className="w-full p-4"
                  src={data.image}
                  width={50}
                  height={50}
                  alt={data.description}
                />
              </div>
              <p className="text-center text-[#0F9062] max-[640px]:text-sm">
                {data.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
