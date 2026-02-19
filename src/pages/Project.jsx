// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// images
import login from "../assets/login.png";
import user from "../assets/user.png";
import userdash from "../assets/userdash.png";
import about from "../assets/aboutus.png";
import chatbot from "../assets/chatbot.png";
import employee from "../assets/employee.png";
import employee2 from "../assets/employee2.png";
import employee3 from "../assets/employee3.png";
import employee4 from "../assets/employee4.png";

export default function Project() {
  const bottomProjects = [
    {
      title: "Park Management (CRM)",
      images: [login, user, userdash, about],
      link: "https://github.com/mugil700/parkmanagement",
    },
    {
      title: "Employee Management System",
      images: [employee, employee2, employee3, employee4],
      link: "https://github.com/mugil700/EMS/tree/main/employee",
    },
  ];

  return (
    <section className="px-8 py-12 bg-gray-100 min-h-screen">
      {/* Container */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="max-w-7xl mx-auto space-y-10"
      >
        {/* ================= TOP PROJECT ================= */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border p-6 rounded-2xl shadow-xl bg-white"
        >
          {/* Image */}
          <div className="flex justify-center">
            <motion.img
              src={chatbot}
              alt="AI Chatbot"
              className="w-full sm:w-1/3 rounded-lg shadow-md"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>

          {/* Title */}
          <a
            href="https://github.com/mugil700/AI-Chatbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-center mt-6 text-2xl font-bold">
              AI Chatbot to Clear Student Queries
            </p>
          </a>
        </motion.div>

        {/* ================= BOTTOM PROJECTS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="border p-5 rounded-2xl shadow-lg bg-white"
            >
              {/* Images */}
              <div className="flex flex-wrap gap-4 justify-center">
                {project.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={project.title}
                    className="w-full sm:w-1/3 rounded-lg shadow-md"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                ))}
              </div>

              {/* Title */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p className="text-center mt-4 text-lg font-semibold">
                  {project.title}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
