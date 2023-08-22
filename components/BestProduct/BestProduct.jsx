import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

export default function BestProduct() {
  return (
    <div className="container mt-10 min-w-full">
      <h1 className="font-bold text-xl text-[#0F9062]">Produk Terlaris</h1>
      <CardProduct />
    </div>
  );
}
