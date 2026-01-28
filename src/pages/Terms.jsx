import { motion } from "framer-motion";

const Terms = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-6">
                By accessing and using the services of Kudi Hospital, you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Medical Services
              </h2>
              <p className="text-gray-700 mb-6">
                Information on the website is for informational purposes only
                and does not replace professional medical advice, diagnosis, or
                treatment. Always seek the advice of your physician or other
                qualified health provider with any questions you may have
                regarding a medical condition.
              </p>
              <p className="text-gray-700 mb-6">
                Kudi Hospital provides healthcare services in accordance with
                applicable laws and regulations. We reserve the right to refuse
                service to anyone at our discretion.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Appointment Booking
              </h2>
              <p className="text-gray-700 mb-6">
                When you book an appointment through our website, you agree to
                provide accurate and complete information. We will contact you
                to confirm your appointment. Appointments are subject to
                availability and may be rescheduled based on medical priorities.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Emergency Services
              </h2>
              <p className="text-gray-700 mb-6">
                For medical emergencies, please call our emergency number
                immediately. The appointment booking system should not be used
                for urgent medical situations. Kudi Hospital is not liable for
                delays in emergency response.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Privacy and Data Protection
              </h2>
              <p className="text-gray-700 mb-6">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of our services, to
                understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-6">
                In no event shall Kudi Hospital be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your use of
                our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                User Responsibilities
              </h2>
              <p className="text-gray-700 mb-6">You agree to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect the rights of other patients and staff</li>
                <li>
                  Not interfere with the proper functioning of our services
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 mb-6">
                The website and its original content, features, and
                functionality are owned by Kudi Hospital and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Modifications to Terms
              </h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our services after changes constitutes
                acceptance of the new terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 mb-6">
                These terms shall be interpreted and governed by the laws of
                India, without regard to conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please
                contact us:
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

export default Terms;
