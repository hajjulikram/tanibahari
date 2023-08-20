import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ProductCategory from '@/components/ProductCategory/ProductCategory';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategory />
    </>
  );
}
