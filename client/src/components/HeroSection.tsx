import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useLocation } from 'wouter';

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 🔥 UPDATED SLIDES DATA
  const heroSlides = [
    {
      image: '/images/hero_1.webp',
      title: 'COLD ROLLED COILS',
      subtitle: 'MANUFACTURED WITH PRECISION',
      description:
        'Hot Rolled Coils (HRC) are ideal for structural fabrication, shipbuilding, and general engineering, thanks to their superior strength and workability produced at temperatures above 900°C. They offer durability and corrosion resistance for prolonged industrial performance.',
    },
    {
      image: '/images/hero_2.png',
      title: 'HOT ROLLED STEEL',
      subtitle: 'BUILT FOR STRENGTH',
      description:
        'High-quality Prime Prepainted Steel Coils provide excellent formability, weather resistance, and a smooth finish for strength and longevity. These coils are specially designed to withstand various weather conditions, ensuring durability over time.',
    },
    {
      image: '/images/hero_3.webp',
      title: 'GALVANIZED SHEETS',
      subtitle: 'CORROSION RESISTANT',
      description:
        'High-quality Prime Prepainted Steel Coils provide excellent formability, weather resistance, and a smooth finish for strength and longevity. These coils are specially designed to withstand various weather conditions, ensuring durability over time.',
    },
    {
      image: '/images/hero_4.webp',
      description:
        'Cold Rolled Coils manufactured with precise rolling at ambient temp for dimensional accuracy, smooth finish, & mechanical strength. Widely used in automotive, appliances, furniture, electronics, & engineering for consistent performance.',
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-black"
    >
      {/* 🔥 SLIDER WITH CONTENT INSIDE */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              {/* Background Image */}
              <motion.div
                className="w-full h-full"
                animate={{
                  x: mousePosition.x * 0.02,
                  y: mousePosition.y * 0.02,
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              >
                <img
                  src={slide.image}
                  alt={`Hero slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

              {/* 🔥 TEXT PER SLIDE */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">

                  <motion.p
                    key={slide.description}
                    className="text-lg sm:text-xl text-gray-300 font-poppins mb-8 max-w-4xl mx-auto"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.button
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(242,201,76,0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLocation('/products')}
                    className="px-8 py-4 bg-accent text-black font-montserrat font-bold rounded-lg transition-all duration-300 text-lg"
                  >
                    Explore Products
                  </motion.button>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 font-poppins text-sm">
            Scroll to explore
          </p>
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}