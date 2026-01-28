import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and
              protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-6">
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Book an appointment through our website</li>
                <li>Contact us via phone, email, or our contact form</li>
                <li>Request information about our services</li>
              </ul>
              <p className="text-gray-700 mb-6">
                This information may include your name, phone number, email
                address, medical concerns, and appointment preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Process and confirm your appointment requests</li>
                <li>Communicate with you about your healthcare needs</li>
                <li>Provide you with information about our services</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Information Sharing
              </h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>When required by law or to protect our rights</li>
                <li>To provide medical services you have requested</li>
                <li>
                  With service providers who assist us in operating our website
                  or conducting our business
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Data Security
              </h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Secure data transmission using SSL encryption</li>
                <li>
                  Limited access to personal information on a need-to-know basis
                </li>
                <li>Regular security assessments and updates</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-6">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for processing your information</li>
                <li>
                  Lodge a complaint with relevant data protection authorities
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-6">
                Our website may use cookies and similar technologies to enhance
                your browsing experience and analyze website traffic. You can
                control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 mb-6">
                Our services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children under 18.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Kudi Hospital</strong>
                </p>
                <p className="text-gray-700">
                  Sangariya, Jodhpur, Rajasthan – 342005
                </p>
                <p className="text-gray-700">Phone: +91 9XXXXXXXXX</p>
                <p className="text-gray-700">
                  Email: info@kudihospital.example
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
