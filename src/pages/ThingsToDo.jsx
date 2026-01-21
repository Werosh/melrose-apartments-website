import { motion } from 'framer-motion';
import { TramFront, Car, ExternalLink, Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const ThingsToDo = () => {
  const attractions = [
    {
      name: 'Melbourne Zoo',
      description:
        'Discover over 320 species of animals from around the world at Australia\'s oldest zoo. Perfect for families and animal lovers.',
      distance: '1.5 km',
      category: 'Family',
      link: 'https://www.zoo.org.au/melbourne/',
      image: 'https://picsum.photos/400/300?random=4',
    },
    {
      name: 'Royal Botanic Gardens',
      description:
        'Explore 38 hectares of beautifully landscaped gardens with stunning views of the city skyline. Free entry and perfect for a relaxing stroll.',
      distance: '2 km',
      category: 'Nature',
      link: 'https://www.rbg.vic.gov.au/',
      image: 'https://picsum.photos/400/300?random=5',
    },
    {
      name: 'Queen Victoria Market',
      description:
        'Experience Melbourne\'s iconic market with fresh produce, international foods, clothing, and souvenirs. A must-visit for foodies and shoppers.',
      distance: '1.8 km',
      category: 'Shopping',
      link: 'https://qvm.com.au/',
      image: 'https://picsum.photos/400/300?random=6',
    },
    {
      name: 'Melbourne CBD',
      description:
        'Explore the heart of Melbourne with world-class shopping, dining, arts, and entertainment. Just a short tram ride away.',
      distance: '2.5 km',
      category: 'City',
      link: 'https://www.visitmelbourne.com/Regions/Melbourne',
      image: 'https://picsum.photos/400/300?random=7',
    },
    {
      name: 'Royal Children\'s Hospital',
      description:
        'Located right next door, perfect for visitors with medical appointments or visiting family members.',
      distance: '0.5 km',
      category: 'Medical',
      link: 'https://www.rch.org.au/',
      image: 'https://picsum.photos/400/300?random=8',
    },
    {
      name: 'Flemington Racecourse',
      description:
        'Home to the famous Melbourne Cup. Experience horse racing or attend special events at this iconic venue.',
      distance: '2 km',
      category: 'Entertainment',
      link: 'https://www.flemington.com.au/',
      image: 'https://picsum.photos/400/300?random=9',
    },
    {
      name: 'Melbourne Museum',
      description:
        'Discover Victoria\'s history, culture, and natural environment through engaging exhibitions and interactive displays.',
      distance: '2.2 km',
      category: 'Culture',
      link: 'https://museumsvictoria.com.au/melbournemuseum/',
      image: 'https://picsum.photos/400/300?random=10',
    },
    {
      name: 'State Library of Victoria',
      description:
        'Visit one of Australia\'s oldest public libraries with stunning architecture and beautiful reading rooms.',
      distance: '2.5 km',
      category: 'Culture',
      link: 'https://www.slv.vic.gov.au/',
      image: 'https://picsum.photos/400/300?random=11',
    },
  ];

  const transportInfo = [
    {
      icon: TramFront,
      title: 'Tram Route 55',
      description: 'Leaves from William Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
    },
    {
      icon: TramFront,
      title: 'Tram Route 59',
      description: 'Leaves from Elizabeth Street in the CBD, get off at stop 19, Royal Children\'s Hospital',
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'Easy access via CityLink network and major arterials. Close to M2 for airport access.',
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
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=12)'
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
            Things to Do
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover Melbourne\'s best attractions, all within easy reach of Melrose Apartments
          </p>
        </motion.div>
      </section>

      {/* Transport Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: '#36b3a8' }}
          >
            Getting Around Melbourne
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {transportInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    <IconComponent className="w-12 h-12" style={{ color: '#36b3a8' }} />
                  </div>
                  <h3 className="box-heading text-xl mb-3" style={{ color: '#36b3a8' }}>
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Attractions Grid */}
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
              Nearby Attractions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore what Melbourne has to offer, all within easy reach of your accommodation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <motion.img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#36b3a8] text-white px-3 py-1 rounded text-sm font-semibold">
                    {attraction.distance}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-700 px-3 py-1 rounded text-xs font-semibold">
                    {attraction.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#36b3a8' }}>
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {attraction.description}
                  </p>
                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#36b3a8] font-semibold hover:underline text-sm"
                  >
                    Visit Website <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: '#36b3a8' }}
          >
            More Things to Explore
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Art galleries and museums',
              'Live music venues and bars',
              'Restaurants and cafes',
              'Sports events at MCG',
              'Shopping on Bourke Street',
              'Yarra River walks',
              'Botanical gardens',
              'Night markets',
              'Street art tours',
            ].map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <p className="text-gray-700 font-medium flex items-center">
                  <Check className="text-[#36b3a8] mr-2 flex-shrink-0" size={18} />
                  {activity}
                </p>
              </motion.div>
            ))}
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
            Ready to Explore Melbourne?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book your stay at Melrose Apartments and discover everything Melbourne has to offer
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Your Stay Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default ThingsToDo;