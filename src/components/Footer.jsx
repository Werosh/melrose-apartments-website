import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="box-heading text-xl mb-4" style={{ color: '#36b3a8' }}>
              Contact Us
            </h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>171 Melrose Street</p>
              <p>North Melbourne VIC 3051</p>
              <p>Australia</p>
              <p className="mt-4">
                <strong>Phone:</strong>{' '}
                <a href="tel:1800779971" className="hover:text-[#36b3a8] transition-colors">
                  1800 779 971
                </a>
              </p>
              <p>
                <strong>International:</strong>{' '}
                <a href="tel:+61383791100" className="hover:text-[#36b3a8] transition-colors">
                  +61 3 8379 1100
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@melroseapartments.com.au"
                  className="hover:text-[#36b3a8] transition-colors"
                >
                  info@melroseapartments.com.au
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="box-heading text-xl mb-4" style={{ color: '#36b3a8' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#36b3a8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/accommodation"
                  className="hover:text-[#36b3a8] transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/things-to-do" className="hover:text-[#36b3a8] transition-colors">
                  Things to Do
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-[#36b3a8] transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#36b3a8] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="box-heading text-xl mb-4" style={{ color: '#36b3a8' }}>
              Office Hours
            </h3>
            <div className="text-gray-300 space-y-1 text-sm">
              <p>
                <strong>Mon-Fri:</strong> 8:30 AM - 6:30 PM
              </p>
              <p>
                <strong>Sat:</strong> 9 AM - 4 PM
              </p>
              <p>
                <strong>Sun:</strong> 9 AM - 2 PM
              </p>
              <p>
                <strong>Public Holidays:</strong> 10 AM - 2 PM
              </p>
              <div className="mt-4">
                <a
                  href="https://www.thebookingbutton.com.au/properties/melrosedirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-block mt-4"
                >
                  Book Online 24/7
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Melrose Apartments. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Website by{' '}
              <a
                href="https://www.nextgenwebsites.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#36b3a8] transition-colors underline"
              >
                Next Gen Websites
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
