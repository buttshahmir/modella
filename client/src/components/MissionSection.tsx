import { motion } from 'framer-motion';

/**
 * Mission Section Component
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Centered text with background image
 * - Dark overlay for text readability
 * - Fade-in scroll animation
 * - Premium typography and spacing
 */

export default function MissionSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url(images/mission_sec.webp)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-1" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
          OUR MISSION
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-poppins leading-relaxed">
          Modella Enterprise aims to be a trusted partner in the steel trade, offering superior materials, reliable service, and unparalleled client satisfaction. We focus on building lasting relationships through honesty, efficiency, and top-tier sourcing solutions to empower clients and industries globally.
        </p>
      </motion.div>
    </section>
  );
}
