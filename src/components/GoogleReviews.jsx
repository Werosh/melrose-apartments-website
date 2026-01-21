import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Load Google Reviews Widget Script
    const script = document.createElement('script');
    script.src = 'https://widgets.sitejabber.com/reviews.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="sitejabber"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#36b3a8' }}>
            Guest Reviews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our guests have to say about their stay at Melrose Apartments
          </p>
        </div>

        {/* Google Reviews Embed */}
        <div className="max-w-4xl mx-auto">
          {/* Google Reviews Widget - This will be populated by the script */}
          <div
            id="google-reviews"
            className="bg-white rounded-lg shadow-lg p-6"
          >
            {/* Fallback Content */}
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">
                Loading our latest reviews from Google...
              </p>
              <a
                href="https://www.google.com/travel/hotels/s/uv7rhkLVm8K6temn6"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block"
              >
                View All Reviews on Google
              </a>
            </div>
          </div>

          {/* Direct Link to Google Reviews */}
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/travel/hotels/s/uv7rhkLVm8K6temn6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#36b3a8] hover:underline font-semibold"
            >
              Read more reviews on Google →
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#36b3a8' }}>
              4.5+
            </div>
            <div className="text-sm text-gray-600">Guest Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#36b3a8' }}>
              1000+
            </div>
            <div className="text-sm text-gray-600">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: '#36b3a8' }}>
              10+
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
