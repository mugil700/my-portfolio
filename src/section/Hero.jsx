 
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import Mugilan_K from "../assets/Mugilan_K.pdf";
import { Link } from "react-router-dom";


const MotionLink = motion(Link);

const text = "Fullstack Developer";

export default function Hero() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setKey((prev) => prev + 1);
      },
      text.length * 100 + 1000,
    ); // typing time + pause

    return () => clearTimeout(timer);
  }, [key]);

  return (
    <div className="flex mt-4 items-center justify-center px-4 py-24 gap-20 ">
      {/* LEFT SIDE – IMAGE */}
      <div className="w-1/3 flex justify-center">
        <img
          src={profile}
          alt="My Profile"
          className="w-90 h-94 rounded-full object-cover"
        />
      </div>

      {/* RIGHT SIDE – TEXT */}
      <div className="w-1/2">
        <h2 className="text-xl mb-4 text-gray-600">Hi, I'm Mugilan 👋</h2>

        {/* Typewriter */}
        <h1 className="text-4xl font-bold mb-4">
          <motion.span key={key}>
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* About Me */}
        <p className="text-gray-700 leading-relaxed">
          I am a passionate Full Stack Developer specializing in building
          responsive web applications using React, Node.js, and MongoDB. I love
          creating clean UI and solving real-world problems.
        </p>
        <div className="mt-6 space-y-4">
          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.55 }}
            whileTap={{ scale: 1.05 }}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded"
          >
            Hire Me
          </MotionLink>

          <motion.a
            href={Mugilan_K}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block ml-3.5 px-6 py-2 border border-blue-600 text-blue-600 rounded"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}
