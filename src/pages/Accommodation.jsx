import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Accommodation = () => {
  const roomTypes = [
    {
      id: 1,
      name: 'Studio Apartment',
      description:
        'Our Studio Apartments are well setup for one or two guests staying a few days or a week. They are a similar size to a hotel room with many additional features including:',
      features: [
        'Queen size bed',
        'Fully equipped kitchen with microwave',
        'Colour LED TV',
        'Direct dial phone',
        'Wifi Internet (fee applies)',
        'Voice mail',
        'Radio / alarm clock',
        'Individual air-conditioning and heating',
        'Iron and ironing board',
      ],
      size: 'Similar to hotel room',
      capacity: '1-2 guests',
      image: 'https://picsum.photos/600/400?random=1',
    },
    {
      id: 2,
      name: 'Interconnecting Apartment',
      description:
        'Our Interconnecting Studio Apartments are well setup for three or four guests staying a few days or a week. Two studio apartments connect to form one larger apartment. They are a similar size to a hotel room with many additional features including:',
      features: [
        'Queen size bed',
        'Fully equipped kitchen with microwave',
        'Colour LED TV',
        'Direct dial phone',
        'Wifi Internet (fee applies)',
        'Voice mail',
        'Radio / alarm clock',
        'Individual air-conditioning and heating',
        'Iron and ironing board',
      ],
      size: 'Two connecting studios',
      capacity: '3-4 guests',
      image: 'https://picsum.photos/600/400?random=2',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-800/80 to-gray-900/85"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase md:leading-[1.2]">
            Studio Apartments - North Melbourne Accommodation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Great quality 4 star accommodation handy to Melbourne's CBD
          </p>
        </motion.div>
      </section>

      {/* Introductory Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Apartments on Melrose we take pride in offering you great quality 4 star accommodation 
                handy to Melbourne's CBD.
              </p>
              <p>
                When choosing our accommodation you can be assured that you are selecting from a range of 
                brand new purpose built apartments.
              </p>
              <p>
                Whether you choose to stay for business or pleasure, whether you are relocating to Melbourne 
                or whether you are staying while supporting a family member or friend staying at one of our 
                local hospitals, Melrose Apartments has accommodation to suit your requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Types Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 pb-4">
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#36b3a8' }}>
                    {room.name}
                  </h2>
                </div>
                {/* Room Image */}
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                </div>

                {/* Room Content */}
                <div className="px-8 pb-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">{room.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-[#36b3a8] mr-3 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <CTAButton className="w-full text-center justify-center">
                    Book Online
                  </CTAButton>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Link to Other Apartment Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            {roomTypes.find(r => r.id === 1) && (
              <p className="text-lg text-gray-600">
                Wanting more space?{' '}
                <Link to="/enquiry" className="text-[#36b3a8] font-semibold hover:underline">
                  Check out our Interconnecting Apartments
                </Link>
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36b3a8] to-[#2a9d94] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Check availability and secure your preferred room type today
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Check Availability & Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Accommodation;