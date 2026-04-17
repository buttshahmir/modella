import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

/**
 * Products Section Component
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
 * - Product cards with 3D tilt effect
 * - Staggered animation on scroll
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

export default function ProductsSection() {
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
    <section className="py-20 md:py-32 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            OUR PRODUCTS
          </h2>
          <p className="text-lg text-gray-400 font-poppins max-w-2xl mx-auto">
            Comprehensive range of premium flat rolled steel products for global markets
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
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
  );
}
