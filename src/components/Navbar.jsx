/* eslint-disable no-unused-vars */
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import clickSoundFile from "../assets/click.mp3";

const clickSound = new Audio(clickSoundFile);
clickSound.volume = 0.3;

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-8 w-full">
      <div className="flex items-center justify-between">
        {/* Navigation links */}
        <div className="flex gap-6">
          <motion.div
            whileHover={{ scale: 1.15 }}
            onClick={() => clickSound.play()}
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.15 }}
            onClick={() => clickSound.play()}
          >
            <Link to="/about">About</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            onClick={() => clickSound.play()}
          >
            <Link to="/project">Projects</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            onClick={() => clickSound.play()}
          >
            <Link to="/contact">Contact</Link>
          </motion.div>
        </div>

        {/* Social icons */}
        <div className="flex gap-6">
          <motion.a
            whileHover={{ rotate: 360, scale: 1.15 }}
            onMouseEnter={() => clickSound.play()}
            href="https://www.linkedin.com/in/mugil700/
"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </motion.a>

          <motion.a
            whileHover={{ rotate: 360, scale: 1.15 }}
            onMouseEnter={() => clickSound.play()}
            href="https://x.com/Mugilan700"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
          </motion.a>

          <motion.a
            whileHover={{ rotate: 360, scale: 1.15 }}
            onMouseEnter={() => clickSound.play()}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
