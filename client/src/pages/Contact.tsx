import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

/**
 * Contact Page
 * 
 * Design Philosophy: Neo-Industrial Elegance
 * - Two-column layout: company info and contact form
 * - Glassmorphism form design
 * - Premium animations and interactions
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            GET IN TOUCH
          </h1>
          <p className="text-xl text-gray-400 font-poppins max-w-2xl mx-auto">
            We are here to answer your questions and discuss your steel trading needs
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Company Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-montserrat font-bold text-white mb-8">
                Contact Information
              </h2>

              {/* Address */}
              <motion.div
                className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                whileHover={{ boxShadow: '0 0 20px rgba(242, 201, 76, 0.1)' }}
              >
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                      Head Office
                    </h3>
                    <p className="text-gray-400 font-poppins">
                      Room #210, Business & Finance Center
                      <br />
                      I.I Chundrigar Road
                      <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Key Contacts */}
              <motion.div
                className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                whileHover={{ boxShadow: '0 0 20px rgba(242, 201, 76, 0.1)' }}
              >
                <h3 className="text-lg font-montserrat font-bold text-white mb-4">
                  Key Contacts
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-400 font-poppins">
                    <span className="text-white font-semibold">M. J. Ashraf</span>
                    <br />
                    Director of Operations
                    <br />
                    E-mail: ashraf@modella.com.pk
                    <br />
                    Mobile / WhatsApp / WeChat: +92-300-9292987
                  </p>
                  <p className="text-gray-400 font-poppins">
                    <span className="text-white font-semibold">Aqeel Ahmed</span>
                    <br />
                    Sales Manager
                    <br />
                    E-mail: aqeel@modella.com.pk
                    <br />
                    Gmail: aqeel78@gmail.com
                    <br />
                    Mobile / WhatsApp / WeChat: +92-333-2201925
                  </p>
                </div>
              </motion.div>

              {/* Contacts */}
              <motion.div
                className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-accent/50 transition-all duration-300"
                whileHover={{ boxShadow: '0 0 20px rgba(242, 201, 76, 0.1)' }}
              >
                <div className="flex gap-4 mb-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400 font-poppins">(+92) 241-32412237 , 32425682</p>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                      WeChat
                    </h3>
                    <img className='w-20' src="../images/contact_1.webp" alt="" />
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <MessageCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                      WhatsApp
                    </h3>
                    <img className='w-20' src="../images/contact_2.webp" alt="" />
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-400 font-poppins">info@modella.com.pk</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                      U.A.E BRANCH
                    </h3>
                    <p className="text-gray-400 font-poppins">
                      MODELLA OVERSEAS FZC, Ajman Free Zone,
                      <br />
                      Ajman, UAE. P.O. BOX 20983
                      <br />
                      <br />
                      <span className='text-white font-medium'>Tel:</span> +971-6-7407585 <br />
                      <strong className='text-white font-medium'>Fax:</strong> +971-6-7407393 <br />
                      <strong className='text-white font-medium'>Email:</strong> info@modellaoverseas.com <br />
                      <strong className='text-white font-medium'>Web:</strong> www.modellaoverseas.com
                    </p>
                  </div>
                </div>
              </motion.div>

              
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                {/* Full Name */}
                <div className="mb-6">
                  <label className="block text-white font-poppins font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-white font-poppins font-semibold mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="your@company.com"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-white font-poppins font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="+92-21-XXXX-XXXX"
                  />
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block text-white font-poppins font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-white font-poppins font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="mb-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 font-poppins text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! We will get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="mb-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 font-poppins text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    An error occurred. Please try again.
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-black font-montserrat font-bold rounded-lg hover:shadow-[0_0_30px_rgba(242,201,76,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </motion.div>
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
