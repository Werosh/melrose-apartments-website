import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Home as HomeIcon, Car, ChevronDown } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description:
        'Located in North Melbourne with easy access to CBD, public transport, and major attractions like Royal Children\'s Hospital',
    },
    {
      icon: HomeIcon,
      title: 'Modern Accommodation',
      description:
        'Spacious and well-equipped apartments with all the comforts of home, perfect for short or extended stays',
    },
    {
      icon: Car,
      title: 'Easy Access',
      description:
        'Convenient parking, close to CityLink network, and minutes away from Melbourne Airport via M2',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://www.visitvictoria.com/-/media/atdw/melbourne/places-to-stay/apartments/4374e13b7f1327d5e49e390c2959297d_1600x1200.jpeg?ts=20231016310638)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80"></div>
        </div>
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wide">
            Come home and relax at Melrose Apartments
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
            Good quality 4 star accommodation in leafy North Melbourne
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Handy to Melbourne's CBD, close to hospital precincts, and perfect for business or pleasure
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <CTAButton className="text-lg px-8 py-4">
              Book Your Stay Now
            </CTAButton>
            <Link
              to="/accommodation"
              className="cta-button-secondary text-lg px-8 py-4"
            >
              View Rooms
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <ChevronDown className="w-3 h-3 text-white" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#36b3a8' }}>
              About Melrose Apartments
            </h2>
            <div className="text-lg text-gray-600 max-w-4xl mx-auto space-y-6 text-left">
              <p>
                Melrose Apartments offers good quality 4 star accommodation in leafy North Melbourne, 
                handy to Melbourne's CBD. Close to Melbourne's hospital precincts including the Royal 
                Children's Hospital and Royal Women's Hospital, accessible by a short tram ride or 
                minutes walk.
              </p>
              <p>
                Opened in May 2015, our brand new, purpose built studio and interconnecting studio 
                apartments offer great value 4 star accommodation.
              </p>
              <p>
                Our North Melbourne Serviced Apartments cater for business or pleasure, relocating to 
                Melbourne, or supporting a family member or friend staying at one of our local hospitals.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    <IconComponent className="w-16 h-16" style={{ color: '#36b3a8' }} />
                  </div>
                  <h3 className="box-heading text-2xl mb-4" style={{ color: '#36b3a8' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Quick Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36b3a8' }}>
                Visit Us
              </h2>
              <div className="space-y-4 text-lg">
                <p className="font-semibold">171 Melrose Street</p>
                <p>North Melbourne VIC 3051</p>
                <p>Australia</p>
                <div className="mt-6 space-y-2">
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                      1800 779 971
                    </a>
                  </p>
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:info@melroseapartments.com.au"
                      className="text-[#36b3a8] hover:underline"
                    >
                      info@melroseapartments.com.au
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="box-heading text-2xl mb-6" style={{ color: '#36b3a8' }}>
                Office Hours
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Mon-Fri:</strong> 8:30 AM - 6:30 PM
                </li>
                <li>
                  <strong>Sat:</strong> 9 AM - 4 PM
                </li>
                <li>
                  <strong>Sun:</strong> 9 AM - 2 PM
                </li>
                <li>
                  <strong>Public Holidays:</strong> 10 AM - 2 PM
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Book online 24/7 instantly at{' '}
                <a
                  href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#36b3a8] hover:underline"
                >
                  apartmentsonmelrose.com.au
                </a>
              </p>
            </motion.div>
          </div>
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
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the comfort and convenience of Melrose Apartments. 
            Book your accommodation today and start your Melbourne adventure.
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white">
            Book Now - Available 24/7
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;