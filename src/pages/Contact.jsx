import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Printer } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <main className="pt-20">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team - we're here to help make your stay perfect
          </p>
        </motion.div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#36b3a8' }}>
                Visit Us At
              </h2>
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 mr-2" style={{ color: '#36b3a8' }} />
                    <h3 className="box-heading text-lg" style={{ color: '#36b3a8' }}>
                      Address
                    </h3>
                  </div>
                  <address className="not-italic text-gray-700 ml-7">
                    <p>Melrose Apartments</p>
                    <p>171 Melrose Street</p>
                    <p>North Melbourne VIC 3051</p>
                    <p>Australia</p>
                  </address>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 mr-2" style={{ color: '#36b3a8' }} />
                    <h3 className="box-heading text-lg" style={{ color: '#36b3a8' }}>
                      Phone
                    </h3>
                  </div>
                  <div className="text-gray-700 ml-7 space-y-1">
                    <p>
                      <a href="tel:1800779971" className="hover:text-[#36b3a8] transition-colors">
                        1800 779 971
                      </a>
                    </p>
                    <p>
                      International:{' '}
                      <a href="tel:+61383791100" className="hover:text-[#36b3a8] transition-colors">
                        +61 3 8379 1100
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 mr-2" style={{ color: '#36b3a8' }} />
                    <h3 className="box-heading text-lg" style={{ color: '#36b3a8' }}>
                      Email
                    </h3>
                  </div>
                  <p className="text-gray-700 ml-7">
                    <a
                      href="mailto:info@melroseapartments.com.au"
                      className="hover:text-[#36b3a8] transition-colors"
                    >
                      info@melroseapartments.com.au
                    </a>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center mb-2">
                    <Printer className="w-5 h-5 mr-2" style={{ color: '#36b3a8' }} />
                    <h3 className="box-heading text-lg" style={{ color: '#36b3a8' }}>
                      Fax
                    </h3>
                  </div>
                  <p className="text-gray-700 ml-7">+61 3 8379 1110</p>
                </motion.div>
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 mr-2" style={{ color: '#36b3a8' }} />
                  <h3 className="box-heading text-lg" style={{ color: '#36b3a8' }}>
                    Office Hours
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
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
              </motion.div>

              {/* Reservations Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="box-heading text-lg mb-4" style={{ color: '#36b3a8' }}>
                  Reservations Hours
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Book online 24/7 instantly at{' '}
                  <a
                    href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#36b3a8] hover:underline"
                  >
                    www.apartmentsonmelrose.com.au
                  </a>
                </p>
                <p className="text-gray-700 text-sm">
                  Speak with our team by calling or emailing during our office hours
                </p>
              </motion.div>

              {/* Check-in Times */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="box-heading text-lg mb-4" style={{ color: '#36b3a8' }}>
                  Check-In Times
                </h3>
                <p className="text-gray-700 text-sm">
                  Check-In from 3pm each day, earlier may be possible subject to availability of rooms.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  Check-In outside of Office Hours by appointment, you can check in 24 hours a day 
                  by contacting us prior to arrival.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#36b3a8' }}>
                Send Us a Message
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-500 text-green-700 p-6 rounded-lg"
                >
                  <p className="font-semibold mb-2">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#36b3a8] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="cta-button w-full text-center py-4 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              )}
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