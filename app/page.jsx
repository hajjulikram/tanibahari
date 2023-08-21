import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import CardProduct from '@/components/CardProduct/CardProduct';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategory />
      <CardProduct />
    </>
  );
}
