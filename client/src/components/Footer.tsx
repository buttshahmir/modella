import { motion } from 'framer-motion';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

/**
 * Footer Component - Corporate Layout
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Four-column layout with company info, links, contact, and social
 * - Dark background with subtle borders
 * - Professional typography and spacing
 */

export default function Footer() {
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
    <footer className="bg-black/80 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-montserrat font-bold text-white mb-4">
              MODELLA ENTERPRISE
            </h3>
            <p className="text-gray-400 text-sm font-poppins mb-2">
              Established 1976 • Trading | Flat Rolled Steel Products
            </p>
            <p className="text-accent font-poppins font-semibold text-sm">
              Connecting reliable global suppliers with regional industries.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Products', 'About Us', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent font-poppins text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Details */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-400 font-poppins text-sm">
                  Room #210, Business & Finance Center
                  <br />
                  I.I Chundrigar Road
                  <br />
                  Karachi, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="text-gray-400 font-poppins text-sm">
                  Phone: (+92) 241-32412237 , 32425682
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="text-gray-400 font-poppins text-sm">
                  Email: Info@modella.com.pk
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-montserrat font-bold text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <motion.a target='_blank'
                href="https://www.facebook.com/share/185ZLTv29w/"
                className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-black transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/modellakarachi/"
                className="p-3 bg-white/10 rounded-lg hover:bg-accent hover:text-black transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-500 font-poppins text-sm">
            © 2026 Modella Enterprise. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
