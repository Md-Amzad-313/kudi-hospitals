import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Services", path: "/services" },
    { name: "Appointment", path: "/appointment" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms", path: "/terms" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/facebook.png",
      link: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/twitter.png",
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/instagram.png",
      link: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: "https://img.icons8.com/ios-filled/24/ffffff/linkedin.png",
      link: "https://linkedin.com",
    },
  ];

  return (
    <footer id="footer" className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-bold mb-4">Kudi Hospital</h2>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-200"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">
              Stay updated with our latest news and offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mb-4 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Kudi Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
