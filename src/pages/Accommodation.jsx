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
      <title>Studio Apartments North Melbourne - Melrose Apartments | 4 Star Accommodation</title>
      <meta name="description" content="Discover our modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped kitchens, WiFi, parking, and all amenities. Perfect for 1-4 guests. Book now!" />
      <meta name="keywords" content="studio apartments Melbourne, studio apartments North Melbourne, interconnecting apartments Melbourne, Melbourne studio accommodation, 1 bedroom apartments Melbourne, 2 bedroom apartments Melbourne, furnished studio apartments Melbourne, self contained apartments Melbourne, apartments with kitchen Melbourne, Melbourne apartment rentals, Melbourne serviced apartments, Melbourne extended stay apartments, Melbourne short stay apartments, Melbourne business apartments, Melbourne family apartments, Melbourne relocation apartments, Melbourne temporary accommodation, Melbourne furnished apartments, Melbourne apartment hotel, Melbourne apartment accommodation, Melbourne apartment booking, Melbourne apartment deals, Melbourne apartment rates, Melbourne apartment prices, best studio apartments Melbourne, top rated apartments Melbourne, Melbourne apartment reviews, Melbourne apartment ratings, Melbourne apartment amenities, Melbourne apartment features, Melbourne apartment facilities, Melbourne apartment services, Melbourne apartment WiFi, Melbourne apartment parking, Melbourne apartment air conditioning, Melbourne apartment heating, Melbourne apartment TV, Melbourne apartment phone, Melbourne apartment kitchen, Melbourne apartment microwave, Melbourne apartment queen bed, Melbourne apartment capacity, Melbourne apartment size, Melbourne apartment layout, Melbourne apartment floor plan, Melbourne apartment virtual tour, Melbourne apartment photos, Melbourne apartment images, Melbourne apartment gallery, Melbourne apartment availability, Melbourne apartment booking online, Melbourne apartment instant booking, Melbourne apartment 24/7 booking, Melbourne apartment check in, Melbourne apartment check out, Melbourne apartment early check in, Melbourne apartment late check out, Melbourne apartment flexible check in, Melbourne apartment contactless check in, Melbourne apartment self check in, Melbourne apartment keyless entry, Melbourne apartment access, Melbourne apartment directions, Melbourne apartment location, Melbourne apartment map, Melbourne apartment nearby, Melbourne apartment close to, Melbourne apartment walking distance, Melbourne apartment tram stop, Melbourne apartment public transport, Melbourne apartment CBD access, Melbourne apartment hospital access, Melbourne apartment airport access, Melbourne apartment CityLink access, Melbourne apartment M2 access, Melbourne apartment route 79 access, Melbourne apartment Boundary Road access, Melbourne apartment Melrose Street access, Melbourne apartment North Melbourne access, Melbourne apartment VIC 3051 access, Melbourne apartment postcode 3051 access, Melbourne apartment area code 3051 access, Melbourne apartment suburb North Melbourne access, Melbourne apartment inner city access, Melbourne apartment inner north access, Melbourne apartment inner Melbourne access, Melbourne apartment metropolitan access, Melbourne apartment Victoria access, Melbourne apartment Australia access" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/accommodation" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/accommodation" />
      <meta property="og:title" content="Studio Apartments North Melbourne - Melrose Apartments" />
      <meta property="og:description" content="Modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped with all amenities. Perfect for 1-4 guests." />
      <meta property="og:image" content="https://picsum.photos/1920/1080?random=3" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Studio Apartments North Melbourne - Melrose Apartments" />
      <meta name="twitter:description" content="Modern Studio and Interconnecting Studio Apartments in North Melbourne. Fully equipped with all amenities." />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          "name": "Melrose Apartments - Studio Accommodation",
          "url": "https://www.melroseapartments.com.au/accommodation",
          "description": "Modern Studio and Interconnecting Studio Apartments in North Melbourne with fully equipped kitchens, WiFi, and all amenities",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "171 Melrose Street",
            "addressLocality": "North Melbourne",
            "addressRegion": "VIC",
            "postalCode": "3051",
            "addressCountry": "AU"
          },
          "containsPlace": [
            {
              "@type": "HotelRoom",
              "name": "Studio Apartment",
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": 2
              },
              "bed": {
                "@type": "BedDetails",
                "numberOfBeds": 1,
                "bedType": "Queen"
              }
            },
            {
              "@type": "HotelRoom",
              "name": "Interconnecting Apartment",
              "occupancy": {
                "@type": "QuantitativeValue",
                "maxValue": 4
              }
            }
          ]
        })}
      </script>
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