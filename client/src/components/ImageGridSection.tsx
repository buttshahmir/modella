import { motion } from 'framer-motion';

/**
 * Image Grid Section Component
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Asymmetric layout: one large image on left, two stacked on right
 * - Rounded corners and soft shadows
 * - Hover zoom animation for premium feel
 * - Responsive design for all screen sizes
 */

export default function ImageGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-background">
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
            OUR MANUFACTURING EXCELLENCE
          </h2>
          <p className="text-lg text-gray-400 font-poppins max-w-2xl mx-auto">
            State-of-the-art facilities and precision engineering for superior steel products
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Large Image */}
          <motion.div
            className="md:col-span-2 row-span-2"
            variants={itemVariants}
          >
            <motion.img
              src="images/mission_sec_2.webp"
              alt="Steel manufacturing facility"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              variants={imageVariants}
            />
          </motion.div>

          {/* Right Top Image */}
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
          >
            <motion.img
              src="images/mission_sec_3.webp"
              alt="Steel coils"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              variants={imageVariants}
            />
          </motion.div>

          {/* Right Bottom Image */}
          <motion.div
            className="md:col-span-1"
            variants={itemVariants}
          >
            <motion.img
              src="images/mission_sec_4.webp"
              alt="Steel processing"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              variants={imageVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
