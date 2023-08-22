import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import FlashSale from '@/components/FlashSale/FlashSale';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductCategory />
      <FlashSale />
    </>
  );
}
