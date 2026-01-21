import { motion } from 'framer-motion';
import { MapPin, TramFront, Car, Navigation } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Location = () => {
  const address = {
    street: '171 Melrose Street',
    suburb: 'North Melbourne VIC 3051',
    country: 'Australia',
  };

  const directions = {
    publicTransport: [
      {
        title: 'Tram Route 55',
        description: 'Leaves from William Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
      },
      {
        title: 'Tram Route 59',
        description: 'Leaves from Elizabeth Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
      },
    ],
    fromAirport: [
      {
        method: 'By Car',
        steps: [
          'Take the M2 from Melbourne Airport',
          'Take route 79 exit from M2',
          'Follow Boundary Rd to Melrose Street',
        ],
      },
      {
        method: 'By Shuttle',
        description: 'For door to door service call Star Bus on 03 8378 8700 or book online',
        link: 'https://www.star-bus.com.au/',
      },
    ],
  };

  const highlights = [
    {
      icon: TramFront,
      title: 'Public Transport',
      description: 'Tram stops right outside',
    },
    {
      icon: Car,
      title: 'Easy Parking',
      description: 'Secure parking available',
    },
    {
      icon: MapPin,
      title: 'CBD Access',
      description: 'Just minutes from city center',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=13)'
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            Our Location
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Conveniently located in North Melbourne with easy access to the CBD, public transport, and major attractions
          </p>
        </motion.div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#36b3a8' }}>
              Visit Us At
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-2xl font-bold mb-2">Melrose Apartments</p>
              <p className="text-xl text-gray-700">{address.street}</p>
              <p className="text-xl text-gray-700">{address.suburb}</p>
              <p className="text-xl text-gray-700 mb-6">{address.country}</p>
              <div className="space-y-3">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                    1800 779 971
                  </a>
                </p>
                <p>
                  <strong>International:</strong>{' '}
                  <a href="tel:+61383791100" className="text-[#36b3a8] hover:underline">
                    +61 3 8379 1100
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center"
              style={{ color: '#36b3a8' }}
            >
              Find Us on the Map
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093144!2d144.9478!3d-37.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d65c8d8c93f%3A0x0!2zMzfCsDQ4JzIzLjQiUyAxNDTCsDU2JzUyLjEiRQ!5e0!3m2!1sen!2sau!4v1234567890!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Melrose Apartments Location - 171 Melrose Street, North Melbourne VIC 3051"
                  aria-label="Google Maps showing Melrose Apartments location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Public Transport */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#36b3a8' }}>
                  Getting to Us by Public Transport
                </h2>
                <div className="space-y-6">
                  {directions.publicTransport.map((route, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-center mb-3">
                        <TramFront className="w-6 h-6 mr-3" style={{ color: '#36b3a8' }} />
                        <h3 className="box-heading text-xl" style={{ color: '#36b3a8' }}>
                          {route.title}
                        </h3>
                      </div>
                      <p className="text-gray-700">{route.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* From Airport */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#36b3a8' }}>
                  Getting to Us from Melbourne Airport (Tullamarine)
                </h2>
                <div className="space-y-6">
                  {directions.fromAirport.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg"
                    >
                      <div className="flex items-center mb-3">
                        <Car className="w-6 h-6 mr-3" style={{ color: '#36b3a8' }} />
                        <h3 className="box-heading text-xl" style={{ color: '#36b3a8' }}>
                          {method.method}
                        </h3>
                      </div>
                      {method.steps ? (
                        <ul className="space-y-2 text-gray-700">
                          {method.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start">
                              <span className="text-[#36b3a8] mr-2 font-bold">
                                {stepIndex + 1}.
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">
                          {method.description}
                          {method.link && (
                            <>
                              {' '}
                              <a
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#36b3a8] hover:underline font-semibold"
                              >
                                Book online
                              </a>
                            </>
                          )}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8"
              style={{ color: '#36b3a8' }}
            >
              Why Our Location is Perfect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 mb-8"
            >
              When it comes to a great location in North Melbourne, Melrose Apartments is an ideal 
              location with easy access to public transport, major arterials and the CityLink network.
            </motion.p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-4 flex justify-center">
                      <IconComponent className="w-12 h-12" style={{ color: '#36b3a8' }} />
                    </div>
                    <h3 className="box-heading text-xl mb-2" style={{ color: '#36b3a8' }}>
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </motion.div>
                );
              })}
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
            Ready to Visit Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the convenience of our prime North Melbourne location. Book your stay today.
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Location;