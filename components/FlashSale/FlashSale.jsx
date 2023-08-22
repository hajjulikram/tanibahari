import Image from 'next/image';
import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

export default function FlashSale() {
  return (
    <div className="container min-w-full min-h-full bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%">
      <div className="flex justify-between pt-3">
        <Image
          className="w-auto"
          src="/assets/images/flash-sale.png"
          width={200}
          height={200}
          alt="flash sale"
        />
        <button className="bg-[#FAFF00] text-[#0F9062] w-[126px] h-[38px] rounded-md m-3">
          Lihat Semua
        </button>
      </div>
      <CardProduct />
    </div>
  );
}
