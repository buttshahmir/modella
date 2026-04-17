import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ImageGridSection from '@/components/ImageGridSection';
import ProductsSection from '@/components/ProductsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ImageGridSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
