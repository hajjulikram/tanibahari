import Image from 'next/image';
import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

export default function AllProduct() {
  return (
    <>
      <div className="container min-w-full mt-10 bg-gradient-to-r from-emerald-600 from-10% via-sky-600 via-50% to-indigo-600 to-90%">
        <h1 className="text-center text-xl font-bold text-white p-5">
          {`"Harmoni Agro dan Marine: Menghasilkan Kesejahteraan dari Tanah dan
        Gelombang"`}
        </h1>
      </div>

      <div className="container mt-5">
        <h1 className="font-bold text-lg text-[#0F9062]">
          Produk Di Tanibahari
        </h1>

        {/* PRODUK BIBIT */}
        <div className="relative mt-5">
          <Image
            className="h-[374px] rounded-md"
            src="/assets/images/daun.jpg"
            width={200}
            height={200}
            alt="s"
          />
          <div className="absolute -inset-x-4 inset-y-40 flex-col w-[227px] text-center">
            <div>
              <h1 className="text-white font-bold text-base mb-5 drop-shadow-2xl">
                Tumbuhkan Peluang Bersama Bibit Lokal Berkualitas
              </h1>
              <button className="bg-[#0F9062] w-[109px] h-[35px] text-white font-bold rounded-lg">
                Lihat Bibit
              </button>
            </div>
          </div>

          <div className="absolute inset-x-24 inset-y-40  flex items-center w-full mx-10">
            <CardProduct />
          </div>
        </div>

        {/* PRODUK PUPUK LOKAL */}
        <div className="relative mt-10">
          <Image
            className="h-[374px] rounded-md"
            src="/assets/images/pupuk.jpg"
            width={200}
            height={200}
            alt="s"
          />
          <div className="absolute -inset-x-4 inset-y-40 flex-col w-[227px] text-center">
            <div>
              <h1 className="text-white font-bold text-base mb-5 drop-shadow-2xl">
                Harmoni Alam dan Pertumbuhan Berkualitas Melalui Pupuk Lokal
              </h1>
              <button className="bg-[#0F9062] w-[109px] h-[35px] text-white font-bold rounded-lg">
                Lihat Pupuk
              </button>
            </div>
          </div>

          <div className="absolute inset-x-24 inset-y-40  flex items-center w-full mx-10">
            <CardProduct />
          </div>
        </div>

        {/* PRODUK ALAT PERTANIAN */}
        <div className="relative mt-10">
          <Image
            className="h-[374px] rounded-md"
            src="/assets/images/alat.jpg"
            width={200}
            height={200}
            alt="s"
          />
          <div className="absolute -inset-x-4 inset-y-40 flex-col w-[227px] text-center">
            <div>
              <h1 className="text-white font-bold text-base mb-5 drop-shadow-2xl px-5">
                Inovasi Alat Pertanian Lokal: Mengubah Tanah, Mewujudkan Hasil
                Terbaik
              </h1>
              <button className="bg-[#0F9062] w-[109px] h-[35px] text-white font-bold rounded-lg">
                Lihat Alat
              </button>
            </div>
          </div>

          <div className="absolute inset-x-24 inset-y-40  flex items-center w-full mx-10">
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  );
}
