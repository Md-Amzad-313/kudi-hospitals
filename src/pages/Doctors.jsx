import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "General Physician",
      qualification: "MBBS",
      experience: 12,
      opdDays: "Mon–Sat 10:00–13:00",
      fee: "₹ 200",
      bio: "Experienced general physician with over 12 years of practice, specializing in comprehensive primary healthcare and preventive medicine.",
    },
    {
      name: "Dr. Sangeeta Verma",
      specialization: "Dermatology (Skin Specialist)",
      qualification: "MBBS, Dermatology Diploma",
      experience: 8,
      opdDays: "Tue & Thu 5:00–7:00 PM",
      fee: "₹ 300",
      bio: "Dedicated dermatologist with expertise in skin disorders, cosmetic dermatology, and advanced skin treatments.",
    },
    {
      name: "Dr. Anil Sharma",
      specialization: "Orthopaedics",
      qualification: "MBBS, MS (Ortho)",
      experience: 15,
      opdDays: "Wed & Sat 2:00–4:00 PM",
      fee: "₹ 400",
      bio: "Senior orthopaedic surgeon specializing in joint replacements, fracture management, and sports injuries.",
    },
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Doctors</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Meet the experienced medical staff at Kudi Hospital. For
              appointment timings, select a doctor and request an appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-center mb-2">
                    {doctor.specialization}
                  </p>
                  <p className="text-gray-600 text-center mb-2">
                    {doctor.qualification}
                  </p>
                  <p className="text-gray-600 text-center mb-2">
                    {doctor.experience} years experience
                  </p>
                  <p className="text-gray-600 text-center mb-2">
                    OPD Days & Timings: {doctor.opdDays}
                  </p>
                  <p className="text-gray-600 text-center mb-4">
                    Consultation Fee: {doctor.fee}
                  </p>
                  <p className="text-gray-700 text-sm mb-4">{doctor.bio}</p>
                  <div className="text-center">
                    <Link
                      to="/appointment"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-block"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Consultants Note */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Visiting Consultants
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We also have visiting specialists from nearby hospitals who
              provide advanced care services. Please contact us for their
              availability.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Note for Patients</h3>
              <p className="text-gray-600 mb-4">
                If your preferred doctor is not available on the website, they
                may be marked as a visiting consultant. Please check with our
                reception for the next available date.
              </p>
              <a
                href="tel:+919XXXXXXXXX"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block"
              >
                Call to Check Availability
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
