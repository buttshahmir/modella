import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ABOUT_SECTIONS = [
  {
    title: 'Our History',
    description: 'Founded in 1976, Modella Enterprise began as a modest steel sourcing office and gradually expanded into a recognized trading partner. Our long-standing relationships with international mills and distributors allow us to ensure stable, consistent and competitive supply.',
    icon: '📜',
  },
  {
    title: 'Our Expertise',
    points: [
      'Prime Flat Rolled Steel',
      'Secondary Flat Rolled Steel',
      'Coils, Sheets, Strips, Industrial Grades',
      'Supplier & Mill Networking',
      'We match customer specifications with reliable global sources.',
    ],
    icon: '🏭',
  },
  {
    title: 'Why Choose Us',
    points: [
      '✔ 48+ years of experience',
      '✔ Global reliable partnerships',
      '✔ Transparent & efficient sourcing',
      '✔ Fast professional communication',
      '✔ Consistent quality & compliance',
    ],
    icon: '⭐',
  },
  {
    title: 'Our Mission',
    description: 'To deliver trustworthy and efficient steel sourcing solutions while building long-term partnerships based on integrity, reliability and customer satisfaction.',
    icon: '🎯',
  },
];

export default function About() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{ backgroundImage: "url('/images/mission_sec.webp')" }}
    >
      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 CONTENT WRAPPER */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Banner */}
        <div className="relative pt-32 bg-gradient-to-b from-black/50 to-transparent">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-4">
              ABOUT US
            </h1>
            <p className="text-xl text-gray-400 font-poppins max-w-3xl mx-auto">
              Modella Enterprise is a long-standing trading company specializing in prime and secondary flat-rolled steel products. Since 1976, we have operated as trusted agents and indentors, connecting reliable global suppliers with regional industries.
            </p>
          </motion.div>
        </div>

        {/* About Cards */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {ABOUT_SECTIONS.map((section, index) => (
                <motion.div key={index} className="group h-full" variants={cardVariants}>
                  <motion.div
                    className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
                    whileHover={{
                      boxShadow: '0 0 30px rgba(242, 201, 76, 0.2)',
                      borderColor: 'rgba(242, 201, 76, 0.5)',
                    }}
                  >
                    <div className="text-4xl mb-4">{section.icon}</div>

                    <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {section.title}
                    </h3>

                    {section.points ? (
                        <ul className="text-gray-300 font-poppins space-y-2 text-left">
                          {section.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-300 font-poppins leading-relaxed">
                          {section.description}
                        </p>
                      )}

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 md:py-32 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {[
                { number: '50+', label: 'Years of Excellence' },
                { number: '100+', label: 'Global Clients' },
                { number: '50+', label: 'Product Variants' },
                { number: '24/7', label: 'Customer Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 font-poppins">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 🔥 GLASS FOOTER */}
        <div className="relative z-20 mt-10 bg-white/10 backdrop-blur-lg border-t border-white/20">
          <Footer />
        </div>
      </div>
    </div>
  );
}