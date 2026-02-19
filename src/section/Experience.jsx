// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experience = [
  {
    role: "IT Trainer & Web Developer",
    company: "Kyanite Technologies",
    duration: "6 Months",
    description: [
      "Trained students in HTML, CSS, JavaScript, and basic React.",
      "Developed and maintained responsive websites using modern web technologies.",
      "Guided students through real-time projects and debugging sessions.",
      "Worked closely with the team to deliver client-based web solutions.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient from-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-600 pl-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              {/* Dot */}
              <span className="absolute -left-10.25 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></span>

              {/* Card */}
              <div className="bg-white shadow-xl rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>

                <p className="text-blue-600 font-semibold">
                  Kyanite Technologies
                </p>

                <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>

                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
