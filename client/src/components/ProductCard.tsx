import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'wouter';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
}

/**
 * Product Card Component with 3D Tilt
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Mouse-based 3D tilt movement
 * - Shadow depth changes on hover
 * - Image zoom animation
 * - Smooth transitions
 */

export default function ProductCard({ id, name, image }: ProductCardProps) {
  const [, setLocation] = useLocation();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / centerY) * 15;
    const rotationY = ((centerX - x) / centerX) * 15;

    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative h-full bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={() => setLocation(`/product/${id}`)}
      >
        {/* Image Container */}
        <div className="relative w-full h-64 overflow-hidden bg-black/50">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-montserrat font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 font-poppins text-sm mb-4">
            Premium quality steel coil
          </p>
          <motion.button
            className="w-full py-2 bg-accent text-black font-montserrat font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
