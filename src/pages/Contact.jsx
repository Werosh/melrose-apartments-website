import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Printer } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Contact = () => {
  return (
    <main className="pt-20">
      <title>Contact Melrose Apartments - Phone, Email, Address | North Melbourne</title>
      <meta name="description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne VIC 3051. Phone: 1800 779 971, Email: info@melroseapartments.com.au. Office hours and contact form available." />
      <meta name="keywords" content="Melrose Apartments contact, North Melbourne accommodation contact, Melbourne serviced apartments contact, Melbourne apartment contact, Melbourne hotel contact, Melbourne accommodation phone, Melbourne accommodation email, Melbourne accommodation address, Melbourne accommodation office hours, Melbourne accommodation reservations, Melbourne accommodation booking phone, Melbourne accommodation booking email, Melbourne accommodation enquiry, Melbourne accommodation questions, Melbourne accommodation support, Melbourne accommodation customer service, Melbourne accommodation help, Melbourne accommodation assistance, Melbourne accommodation information, Melbourne accommodation details, Melbourne accommodation contact form, Melbourne accommodation contact us, Melbourne accommodation get in touch, Melbourne accommodation reach us, Melbourne accommodation call us, Melbourne accommodation email us, Melbourne accommodation visit us, Melbourne accommodation find us, Melbourne accommodation location, Melbourne accommodation directions, Melbourne accommodation map, Melbourne accommodation GPS, Melbourne accommodation coordinates, Melbourne accommodation 1800 779 971, Melbourne accommodation +61 3 8379 1100, Melbourne accommodation info@melroseapartments.com.au, Melbourne accommodation fax, Melbourne accommodation +61 3 8379 1110, Melbourne accommodation office, Melbourne accommodation reception, Melbourne accommodation front desk, Melbourne accommodation concierge, Melbourne accommodation staff, Melbourne accommodation team, Melbourne accommodation management, Melbourne accommodation owners, Melbourne accommodation operators, Melbourne accommodation hosts, Melbourne accommodation hosts contact, Melbourne accommodation hosts phone, Melbourne accommodation hosts email, Melbourne accommodation hosts address, Melbourne accommodation hosts office hours, Melbourne accommodation hosts reservations, Melbourne accommodation hosts booking, Melbourne accommodation hosts enquiry, Melbourne accommodation hosts questions, Melbourne accommodation hosts support, Melbourne accommodation hosts customer service, Melbourne accommodation hosts help, Melbourne accommodation hosts assistance, Melbourne accommodation hosts information, Melbourne accommodation hosts details, Melbourne accommodation hosts contact form, Melbourne accommodation hosts contact us, Melbourne accommodation hosts get in touch, Melbourne accommodation hosts reach us, Melbourne accommodation hosts call us, Melbourne accommodation hosts email us, Melbourne accommodation hosts visit us, Melbourne accommodation hosts find us, Melbourne accommodation hosts location, Melbourne accommodation hosts directions, Melbourne accommodation hosts map, Melbourne accommodation hosts GPS, Melbourne accommodation hosts coordinates" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.melroseapartments.com.au/contact" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.melroseapartments.com.au/contact" />
      <meta property="og:title" content="Contact Melrose Apartments - Phone, Email, Address" />
      <meta property="og:description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne. Phone: 1800 779 971, Email: info@melroseapartments.com.au" />
      <meta property="og:image" content="https://picsum.photos/1920/1080?random=14" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Melrose Apartments - Phone, Email, Address" />
      <meta name="twitter:description" content="Contact Melrose Apartments at 171 Melrose Street, North Melbourne. Phone: 1800 779 971" />
      
      {/* Structured Data - ContactPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Melrose Apartments",
          "description": "Contact information for Melrose Apartments in North Melbourne",
          "mainEntity": {
            "@type": "Hotel",
            "name": "Melrose Apartments",
            "telephone": "+61-3-8379-1100",
            "email": "info@melroseapartments.com.au",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "171 Melrose Street",
              "addressLocality": "North Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3051",
              "addressCountry": "AU"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "18:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ]
          }
        })}
      </script>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(https://picsum.photos/1920/1080?random=14)'
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
          <h1 className="text-5xl md:text-6xl  mb-6 uppercase">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team - we're here to help make your stay perfect
          </p>
        </motion.div>
      </section>

      {/* Contact Information and Map Section */}
      <section className="py-20 bg-white mx-5 md:mx-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid - Contact Info Left, Map Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* VISIT US AT */}
                <h2 className="text-3xl  mb-6 uppercase" style={{ color: '#36b3a8' }}>
                  Visit Us At
                </h2>
                <div className="mb-8">
                  <p className="text-xl  mb-2">Melrose Apartments</p>
                  <address className="not-italic text-gray-700 space-y-1 mb-6">
                    <p>171 Melrose Street</p>
                    <p>North Melbourne VIC 3051</p>
                    <p>Australia</p>
                  </address>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Phone</strong>{' '}
                      <a href="tel:1800779971" className="text-[#36b3a8] hover:underline">
                        1800 779 971
                      </a>
                    </p>
                    <p>
                      <strong>International</strong>{' '}
                      <a href="tel:+61383791100" className="text-[#36b3a8] hover:underline">
                        +61 3 8379 1100
                      </a>
                    </p>
                    <p>
                      <strong>Fax</strong> +61 3 8379 1110
                    </p>
                  </div>
                </div>

                {/* EMAIL OUR TEAM */}
                <h2 className="text-3xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Email Our Team
                </h2>
                <div className="mb-8">
                  <p className="text-gray-700 mb-2 font-semibold">General Inquiries</p>
                  <p className="text-gray-700">
                    <a
                      href="mailto:info@melroseapartments.com.au"
                      className="text-[#36b3a8] hover:underline"
                    >
                      info@melroseapartments.com.au
                    </a>
                  </p>
                </div>

                {/* OFFICE HOURS */}
                <h2 className="text-3xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Office Hours
                </h2>
                <div className="mb-8">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>MON-FRI</strong> 8.30AM TO 6.30PM</li>
                    <li><strong>SAT</strong> 9AM TO 4PM</li>
                    <li><strong>SUN</strong> 9AM TO 2PM</li>
                    <li><strong>PUBLIC HOLIDAYS</strong> 10AM TO 2PM</li>
                  </ul>
                </div>
              </motion.div>

              {/* Right Column - Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24 h-96 lg:h-[600px]"
              >
                <div className="bg-gray-100 rounded-lg shadow-xl overflow-hidden h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.06054399264772!2d144.94212291720498!3d-37.79077319954816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d2170d49357%3A0xf47b31520e10a345!2sMelrose%20Apartments!5e0!3m2!1sen!2slk!4v1768970159962!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(50%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Melrose Apartments Location - 171 Melrose Street, North Melbourne VIC 3051"
                    aria-label="Google Maps showing Melrose Apartments location"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            {/* Bottom Row - Reservations Hours and Check-In Times */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {/* RESERVATIONS HOURS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-2xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Reservations Hours
                </h3>
                <p className="text-gray-700 mb-3">
                  Book online 24/7 instantly at{' '}
                  <a
                    href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#36b3a8] hover:underline font-semibold"
                  >
                    www.apartmentsonmelrose.com.au
                  </a>
                </p>
                <p className="text-gray-700">
                  Speak with our team by calling or emailing during our office hours
                </p>
              </motion.div>

              {/* CHECK-IN TIMES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                  <h3 className="text-2xl  mb-4 uppercase" style={{ color: '#36b3a8' }}>
                  Check-In Times
                </h3>
                <p className="text-gray-700 mb-2">
                  Check-In from 3pm each day. Earlier may be possible subject to availability of rooms.
                </p>
                <p className="text-gray-700">
                  Check-In outside of Office Hours by appointment, you can check in 24 hours a day 
                  by contacting us prior to arrival.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#36b3a8] to-[#2a9d94] text-white mx-5 md:mx-0  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl  mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Book online 24/7 or contact us during office hours for personalized assistance
          </p>
          <CTAButton className="bg-white text-[#36b3a8] hover:bg-gray-100 border-white text-lg px-8 py-4">
            Book Now
          </CTAButton>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;