import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const GoogleReviews = () => {

  // Real reviews from Google and Tripadvisor
  const reviews = [
    {
      id: 1,
      name: 'Florin Bora',
      rating: 5,
      date: '2 weeks ago',
      text: 'My stay at Melrose Apartments was nothing short of outstanding. From the moment I arrived, everything felt effortless, welcoming, and genuinely cared for—and that is entirely thanks to Lisa, who runs the place with incredible warmth and professionalism.',
      avatar: 'F',
      color: '#FF6B6B',
    },
    {
      id: 2,
      name: 'Ana Vranceanu',
      rating: 5,
      date: '2 weeks ago',
      text: 'The apartment was absolutely perfect. It was sparkling clean and equipped with everything you could possibly need for a comfortable stay. The owner, Lisa, was incredibly kind and helpful, going above and beyond to make us feel welcome.',
      avatar: 'A',
      color: '#9B59B6',
    },
    {
      id: 3,
      name: 'Alicia González-Lafita',
      rating: 5,
      date: '1 week ago',
      text: 'We had a very nice stay in Melrose Apartments. The apartment was modern, comfortable and very clean. The location is very convenient since it is quiet for a good rest and well connected to the city centre. We would definitely go back.',
      avatar: 'A',
      color: '#E74C3C',
    },
    {
      id: 4,
      name: 'Mike Chadwick',
      rating: 5,
      date: '3 months ago',
      text: 'The studio apartment was clean and comfortable, in a peaceful residential area but handy to trams, trains, and freeway to airport. Free street parking worked well, as did the facilities in the room. Lisa at reception was very engaging and helpful during my 10 night stay.',
      avatar: 'M',
      color: '#16A085',
    },
    {
      id: 5,
      name: 'triciacar69',
      rating: 5,
      date: '3 months ago',
      text: 'My husband and I stayed here due to the location, near the Parkville sports complex. Easy walk there. The Melbourne zoo is next door. CBD 3ks. Shops and Eateries nearby. Great location and lovely apartment!',
      avatar: 't',
      color: '#8E44AD',
    },
    {
      id: 6,
      name: 'Barb Webb-Self',
      rating: 5,
      date: '4 months ago',
      text: 'From check in to departure the experience was 5+ stars. The apartment was elegant, had everything we needed, the bed and pillows were comfortable, the bathroom was a good size with a double shower with a central shower head. Outstanding stay!',
      avatar: 'B',
      color: '#E67E22',
    },
    {
      id: 7,
      name: 'Michael Li',
      rating: 5,
      date: '3 months ago',
      text: 'Owner was very lovely and rooms were very nice and clean. 10/10 thank you for a great stay. Everything was perfect and exceeded our expectations!',
      avatar: 'M',
      color: '#9B59B6',
    },
    {
      id: 8,
      name: 'Robert Haus',
      rating: 4,
      date: '10 months ago',
      text: 'Upon arrival, I received a warm welcome from a lovely receptionist, who I believe was the owner, and whose exceptional professionalism was on par with high-end hotels. After checking in, I was kindly walked to my room which added a personal touch.',
      avatar: 'R',
      color: '#3498DB',
    },
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 overflow-hidden mx-5 md:mx-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#36b3a8' }}>
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from guests who have stayed at Melrose Apartments
          </p>
        </motion.div>

        {/* Infinite Scrolling Reviews */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            initial={{ x: -400 }}
            animate={{
              x: [-400, -2800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="shrink-0 w-[350px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100"
              >
                {/* Google Review Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">Google Review</span>
                  </div>
                </div>

                {/* Star Rating */}
                <StarRating rating={review.rating} />

                {/* Review Text */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center bg-white rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-4xl font-bold ml-2" style={{ color: '#36b3a8' }}>
                4.5
              </span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Guest Rating</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center bg-white rounded-lg p-6 shadow-lg"
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#36b3a8' }}>
              1000+
            </div>
            <div className="text-sm text-gray-600 font-semibold">Happy Guests</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center bg-white rounded-lg p-6 shadow-lg"
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#36b3a8' }}>
              10+
            </div>
            <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
          </motion.div>
        </motion.div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/travel/hotels/s/uv7rhkLVm8K6temn6"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block"
          >
            View All Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
