import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Reviews = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      name: "Ravi Sharma",
      text: "Excellent service at Kudi Hospital. The doctors are very caring and the staff is friendly. Got treated quickly for my fever.",
      time: "2 weeks ago",
      rating: 5,
    },
    {
      name: "Priya Patel",
      text: "Visited for a check-up. The hospital is clean and well-maintained. Dr. Rajesh Kumar explained everything clearly. Highly recommend!",
      time: "1 month ago",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      text: "Emergency care was top-notch. They handled my accident case promptly. No unnecessary delays, and the ambulance arrived fast.",
      time: "3 weeks ago",
      rating: 5,
    },
    {
      name: "Sunita Verma",
      text: "Great experience with the skin specialist, Dr. Sangeeta Verma. She treated my skin issue effectively. Will visit again.",
      time: "1 week ago",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      text: "Affordable healthcare in Sangariya. Basic diagnostics were done accurately. The hospital is a blessing for the community.",
      time: "2 months ago",
      rating: 5,
    },
    {
      name: "Meera Joshi",
      text: "Had a consultation for my child. The pediatric care is excellent. Doctors are patient and explain things to parents as well.",
      time: "4 weeks ago",
      rating: 5,
    },
  ];

  // Duplicate reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            <svg
              className="w-5 h-5 text-gray-300 absolute"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400 absolute"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollSpeed = 1; // Adjust speed as needed

    const scroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Patient Reviews
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            We value feedback from our patients.
          </p>
          <div className="flex justify-center items-center mb-8">
            {renderStars(3.8)}
            <span className="ml-2 text-gray-600">3.8 (42 reviews)</span>
          </div>
        </motion.div>
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: (index % reviews.length) * 0.1,
              }}
              className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 w-80"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {review.time}
                </span>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "{review.text}"
              </blockquote>
              <cite className="text-gray-500">— {review.name}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
