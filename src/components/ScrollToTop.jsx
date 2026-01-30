import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Approximate hero height
      const footer = document.getElementById("footer");
      const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
      const scrollY = window.scrollY + window.innerHeight; // Bottom of viewport

      // Show button if scrolled past hero and footer is not fully in view
      setIsVisible(scrollY > heroHeight && scrollY < footerTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-20 right-4 z-40 cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
    >
      <div className="bg-cyan-50 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default ScrollToTop;
