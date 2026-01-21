import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sample reviews - Replace these with real reviews from Google
  const reviews = [
    {
      id: 1,
      name: 'Sarah Thompson',
      rating: 5,
      date: 'December 2025',
      text: 'Absolutely wonderful stay at Melrose Apartments! The location is perfect - close to the hospital and CBD. The apartment was spotlessly clean, modern, and had everything we needed. Staff were incredibly helpful and friendly. Would definitely recommend!',
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: 'January 2026',
      text: 'Outstanding accommodation! Stayed here while visiting family at the Royal Children\'s Hospital. The apartments are well-appointed, comfortable, and the staff went above and beyond to make our stay comfortable during a difficult time. Thank you!',
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      rating: 4,
      date: 'November 2025',
      text: 'Great value for money in North Melbourne. The studio apartment was spacious and clean. Easy tram access to the CBD and plenty of cafes and restaurants nearby. Perfect for a short business stay.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Martinez',
      rating: 5,
      date: 'October 2025',
      text: 'We stayed for two weeks during a relocation to Melbourne. The apartments are modern, well-maintained, and in a quiet leafy area. Kitchen facilities were excellent. Highly recommend for extended stays!',
      verified: true,
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      rating: 5,
      date: 'December 2025',
      text: 'Perfect location for hospital visits and exploring Melbourne. The apartment was clean, comfortable, and had everything we needed including parking. Staff were helpful with local recommendations. Will definitely return!',
      verified: true,
    },
  ];

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextReview();
      }, 5000); // Change review every 5 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#36b3a8' }}>
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real reviews from guests who have stayed at Melrose Apartments
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-20 h-20" style={{ color: '#36b3a8' }} />
              </div>

              {/* Review Content */}
              <div className="relative z-10">
                {/* Star Rating */}
                <div className="mb-6">
                  <StarRating rating={reviews[currentIndex].rating} />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="font-bold text-xl" style={{ color: '#36b3a8' }}>
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">{reviews[currentIndex].date}</p>
                  </div>
                  {reviews[currentIndex].verified && (
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      ✓ Verified Guest
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white hover:bg-[#36b3a8] text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white hover:bg-[#36b3a8] text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#36b3a8]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
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
