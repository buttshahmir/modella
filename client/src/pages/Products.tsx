import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

/**
 * Products Page
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Full product listing with detailed grid
 * - Product cards with 3D tilt effect
 * - Smooth animations and transitions
 */

const PRODUCTS = [
  { id: 'hot-rolled', name: 'Hot Rolled Steel Coils', image: 'images/product_1.webp' },
  { id: 'cold-rolled', name: 'Cold Rolled Steel Coils', image: 'images/product_2.webp' },
  { id: 'galvanized', name: 'Prime Hot Dipped Galvanized', image: 'images/product_3.jpg' },
  { id: 'galvalume', name: 'Prime Galvalume Steel Coils', image: 'images/product_4.webp' },
  { id: 'zam', name: 'ZAM Coils (Zinc-Aluminium-Magnesium)', image: 'images/product_5.webp' },
  { id: 'prepainted', name: 'Prime Prepainted Steel Coils', image: 'images/product_6.webp' },
  { id: 'he-she', name: 'Prime HE-SHE Coils (Aluzinc)', image: 'images/product_7.webp' },
  { id: 'bright-he-she', name: 'Bright HE-SHE Coils (GI Zero Spangle)', image: 'images/product_8.webp' },
  { id: 'crngo', name: 'CRNGO Coils (Electrical Steel)', image: 'images/product_9.webp' },
  { id: 'eg', name: 'EG Coils (Electro-Galvanized)', image: 'images/product_10.webp' },
  { id: 'hr-pup', name: 'HR PUP Coils', image: 'images/product_11.webp' },
  { id: 'long-products', name: 'Long Products', image: 'images/product_12.webp' },
  { id: 'non-fer', name: 'NON-FERROUS METALS & SCRAP', image: 'images/product_13.webp' },
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: "url('/images/mission_sec.webp')" }}>
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative pt-32">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4">
            OUR PRODUCTS
          </h1>
          <p className="text-xl text-gray-400 font-poppins max-w-2xl mx-auto">
            Comprehensive range of premium flat rolled steel products for global markets
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {PRODUCTS.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative z-20 mt-10 bg-white/10 backdrop-blur-lg border-t border-white/20">
        <Footer />
      </div>
      </div>
    </div>
  );
}
