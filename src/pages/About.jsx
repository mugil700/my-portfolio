/* eslint-disable no-unused-vars */
import React from "react";
import { motion, scale } from "motion/react";
import Skills from "../section/Skills";
import Experience from "../section/Experience";

export default function About() {
  return (
    <>
      <section>
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-8"
          >
            <h1 className="flex font-bold text-5xl justify-center ">
              About Me
            </h1>
            <p className="text-gray-700 text-2xl leading-relaxed mt-8" style={{ textAlign: "justify" }}>
              I am a passionate Full Stack Developer with a strong focus on
              building scalable, responsive, and user-centric web applications.
              I specialize in modern technologies such as React, Node.js, and
              MongoDB, enabling me to develop complete end-to-end solutions—from
              intuitive front-end interfaces to robust back-end systems. I enjoy
              crafting clean, efficient UI designs and writing maintainable,
              performance-optimized code. With a problem-solving mindset, I love
              tackling real-world challenges by translating complex requirements
              into practical and impactful digital solutions. 
            </p>
          </motion.div>
        </div>
        <Skills/>
        <Experience/>
      </section>
    </>
  );
}
