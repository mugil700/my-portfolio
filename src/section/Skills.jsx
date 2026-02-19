// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// put icons in /src/assets/
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import flask from "../assets/flask.png";
import tailwind from "../assets/tailwind.png";


const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "MongoDB", icon: mongo },
  { name: "Flask", icon: flask },
  { name: "Tailwind CSS", icon: tailwind },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient from-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Skills
        </motion.h2>

        {/* Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="bg-white p-4 rounded-2xl shadow-xl">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <p className="mt-3 font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
