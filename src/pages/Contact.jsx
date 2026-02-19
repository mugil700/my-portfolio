/* eslint-disable no-unused-vars */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5hd74of", // 👉 replace
        "template_b0wo6n9", // 👉 replace
        formRef.current,
        "kv8HJ_96W292cbv08", // 👉 replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        },
      );
  };

  return (
    <motion.section whileHover={{scale: 1.05}}
      id="contact"
      className="min-h-screen flex items-center justify-center  from-white-100 to-blue-100 px-4"
    >
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl space-y-5"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-800"
        >
          Contact Me
        </motion.h2>

        {/* Name */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Message */}
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message 
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
