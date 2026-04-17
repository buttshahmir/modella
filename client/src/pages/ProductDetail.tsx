import { motion } from 'framer-motion';
import { useParams } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Key } from 'react';

const PRODUCT_DETAILS: Record<string, any> = {
  'cold-rolled': {
    name: 'Cold Rolled Steel Coils',
    image: '../images/product_2.webp',
    description: 'Cold Rolled Steel Coils provide superior surface finish, dimensional accuracy, and uniform thickness. Ideal for precision applications, panels, round and square pipes, and  different components and part of auto.',
    specs: {
      'Grades': 'SPCC-SD, SPCC-1B , & OTHER AS PER RQUIRMENT',
      'Thickness Range': '0.15 – 2.0 MM',
      'Width': '1260 – 1500 MM',
    },
    thumbnails: [
      '../images/product_2.webp',
      '../images/product_2_1.webp',
    ],
    features: [
      'Dimensional accuracy and consistency',
      'Superior surface quality',
      'Excellent mechanical properties',
      'Suitable for automotive and appliance industries',
      'Compliant with international standards',
    ],
  },
  'hot-rolled': {
    name: 'Hot Rolled Steel Coils',
    image: '../images/product_1.webp',
    thumbnails: [
      '../images/product_1.webp',
      '../images/product_1_1.avif',
      '../images/product_1_2.avif'
    ],
    description: 'Hot Rolled Steel Coils are widely used in structural fabrication, general engineering, and heavy industrial applications. These coils offer excellent formability, strength, and surface quality, making them suitable for construction, machinery, and manufacturing sectors.',
    specs: {
      'Grades': 'Q235 / SS400 / Q195 / SAE1006',
      'Thickness Range': '0.80 – 12.0 MM',
      'Width': '1220 / 1250 MM',
    },
    features: [
      'High strength and durability',
      'Excellent formability',
      'Cost-effective solution',
      'Suitable for construction and machinery',
      'Wide range of grades available',
    ],
  },
  'galvanized': {
      name: 'PRIME HOT DIPPED GALVANIZED STEEL SHEET IN COILS',
      image: '../images/product_3.jpg',
      thumbnails: [
        '../images/product_3.jpg',
        '../images/product_3_1.jpg',
        '../images/product_3_2.webp',
      ],
      description: 'Prime Galvanized Steel Coils offer excellent corrosion resistance through zinc coating and are suitable Door & Window frame  solar panel frame, make pipes for roofing, cladding, ducting, and outdoor applications.',
      specs: {
        'Grades': 'DX51 , SGCC',
        'Zinc Coating': 'Z40 – Z275 (Regular Spangle)',
        ' Thickness': ' 0.30 – 4.0 MM',
        'Width': '1000MM – 1500 MM',
      },
    },

    'galvalume': {
      name: 'PRIME GALVALUME STEEL COILS AFP & CHORAMTED',
      image: '../images/product_4.webp',
      thumbnails: [
        '../images/product_4.webp',
        '../images/product_4_1.avif',
        '../images/product_4_2.avif',
      ],
      description: 'Galvalume Steel Coils with 55% aluminum, commonly used in roofing , home appliance and pre-engineered buildings.',
      specs: {
        'Type': 'Full Hard & CQ , AFP',
        'Thickness Range': '0.15 – 0.80 M',
        'Width': '914 – 1200 M',
      },
    },

    'zam': {
      name: 'ZAM Coils (Zinc-Aluminium-Magnesium)',
      image: '../images/product_5.webp',
      thumbnails: [
        '../images/product_5.webp',
        '../images/product_5_1.avif',
        '../images/product_5_2.avif',
      ],
      description: 'ZAM Coils offer superior corrosion protection compared to conventional galvanized steel and are ideal for long-life structural and industrial applications.',
      specs: {
        'Standard': 'JIS G3323',
        'Grade': 'SGMCC',
        'Thickness': '0.50 – 2.5 MM',
        'Width': '1220 MM',
      },
    },

    'prepainted': {
      name: 'Prime Prepainted Steel Coils',
      image: '../images/product_6.webp',
      thumbnails: [
        '../images/product_6.webp',
        '../images/product_6_1.avif',
        '../images/product_6_2.webp',
      ],
      description: 'PPGL & PPGI  Coils are color-coated products offering aesthetic appeal along with corrosion protection, suitable for roofing, wall panels, and industrial buildings.',
      specs: {
        'RAL': 'as per end users requirement',
        'Thickness': '0.16 – 1.5MM M',
        'Width': '914MM  - 1200 M',
      },
    },

    'he-she': {
      name: 'Prime HE-SHE Coils (Aluzinc)',
      image: '../images/product_7.webp',
      thumbnails: [
        '../images/product_7.webp',
        '../images/product_7_1.avif',
        '../images/product_7_2.webp',
      ],
      description: 'Prime HE-SHE Aluzinc Coils combine aluminum and zinc coating for improved durability, corrosion resistance, and long service life.',
      specs: {
        'Thickness': ' 0.15 – 0.80 MM',
        'Width': '914 / 1200 MM',
      },
    },

    'bright-he-she': {
      name: 'Bright HE-SHE Coils (GI Zero Spangle)',
      image: '../images/product_8.webp',
      thumbnails: [
        '../images/product_8.webp',
        '../images/product_8_1.avif',
        '../images/product_8_2.avif',
      ],
      description: 'Bright HE-SHE Coils deliver a zero-spangle finish engineered to produce a uniformly smooth, radiant surface without visual defects. This specialized coating technology creates an impeccably polished appearance essential for high-end applications where aesthetic standards are paramount. The advanced finish eliminates surface irregularities while maintaining the materials structural properties, making these coils the preferred choice for sectors demanding both visual excellence and reliable performance.',
      specs: {
        'Thickness': '0.15 – 0.40 M',
        'Width': '914 / 1000 / 1200 M',
      },
    },

    'crngo': {
      name: 'CRNGO Coils (Electrical Steel)',
      image: '../images/product_9.webp',
      thumbnails: [
        '../images/product_9.webp',
        '../images/product_9_1.avif',
      ],
      description: 'CRNGO Electrical Steel Coils are used in transformers, motors, and generators, offering excellent magnetic properties and energy efficiency.',
      specs: {
        'Grades': '50W800',
        'Thickness Range': ' 0.50 MM',
        'Width': '800 – 1200 MM',
      },
    },

    'eg': {
      name: 'EG Coils (Electro-Galvanized)',
      image: '../images/product_10.webp',
      thumbnails: [
        // '../images/product_10.webp'
      ],
      description: 'Electro-Galvanized Steel Coils provide uniform zinc coating and superior surface quality, mainly used in the automotive and appliance industries.',
      specs: {
        'Thickness': '0.50 – 2.0 MM',
      },
    },

    'hr-pup': {
      name: 'HR PUP Coils',
      image: '../images/product_11.webp',
      thumbnails: [
        '../images/product_11.webp',
        '../images/product_11_1.webp'
      ],
      description: 'HR PUP Coils are specially processed for insulated panel manufacturing, offering strength and consistency for sandwich panel applications.',
      specs: {
        'Thickness': ' 0.80 – 3.0 MM',
        'Width': '1000 – 1250 MM',
        'Coil Weight': '500 KG – 2 MT',
        'Origin': 'UAE & South',
      },
    },

    'long-products': {
      name: 'Long Products',
      image: '../images/product_12.webp',
      thumbnails: [
        '../images/product_12.webp',
        '../images/product_12_1.avif',
        '../images/product_12_2.avif',
      ],
      description: 'Long Products are essential raw materials used in construction, infrastructure, and fabrication industries.',
      specs: {
        'Product': 'Flat Bar • Billets • Wire Rod • Rebar',
      },
    },

    'non-fer': {
      name: 'NON-FERROUS METALS & SCRAP',
      image: '../images/product_13.webp',
      thumbnails: [
        '../images/product_13.webp',
        '../images/product_13_1.avif',
        '../images/product_13_2.avif',
        '../images/product_13_3.webp',
        '../images/product_13_4.jpg',
        '../images/product_13_5.webp',
        '../images/product_13_6.webp',
        '../images/product_13_7.avif',
        '../images/product_13_8.webp',
      ],
      description: 'We supply a wide range of non-ferrous metals and industrial scrap materials catering to recycling and manufacturing industries worldwide.',
      specs: {
        'Materials': '• Iron Ore • Aluminum Scrap • Copper Scrap • UBC',
        'Material': '• Used Motors • Compressors • Railway Scrap • HMS 1 & 2',
      },
    },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCT_DETAILS[id || 'cold-rolled'] || PRODUCT_DETAILS['cold-rolled'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

      {/* Product Detail Section */}
      <section className="pt-32 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Product Image */}
            <motion.div variants={itemVariants}>
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {product.thumbnails?.map((img: string | undefined, i: Key | null | undefined) => (
                  <div className="aspect-square w-full overflow-hidden rounded-lg">
                    <motion.img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Details */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-300 font-poppins mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                  Specifications
                </h2>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <span className="text-gray-400 font-poppins">{key}</span>
                      <span className="text-white font-montserrat font-semibold">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {/* <div className="mb-8">
                <h2 className="text-2xl font-montserrat font-bold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-gray-300 font-poppins">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* CTA Button */}
              <motion.button
                className="w-full py-4 bg-accent text-black font-montserrat font-bold rounded-lg hover:shadow-[0_0_30px_rgba(242,201,76,0.4)] transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(242,201,76,0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                REQUEST A QUOTE
              </motion.button>
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
