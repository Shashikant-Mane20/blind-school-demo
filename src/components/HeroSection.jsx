import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to track mouse movement
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  // Speech Synthesis Function
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="bg-white text-gray-900 flex flex-col md:flex-row items-center justify-between p-8 md:h-screen relative"
      onMouseMove={handleMouseMove} // Adding mousemove event
    >
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6 z-10">
        {/* Big Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onClick={() => speakText("Bright Vision – Empowering the Blind")} // Added onClick to speak text
        >
          The Smarter Way To Learn{" "}
          <span className="text-[#f37335]">Empowering the Blind</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          onClick={() =>
            speakText(
              "Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow."
            )
          }
        >
         Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow.
        </motion.p>

        {/* Search Box */}
        <motion.div
          className="flex items-center bg-gray-100 rounded-full p-3 shadow-md w-full md:w-3/4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Search programs, events, or resources"
            className="bg-transparent outline-none w-full text-gray-700"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </motion.div>
      </div>

      {/* Right Section - Circles */}
      <div className="relative w-full md:w-1/2 h-screen flex justify-center md:justify-end items-center mt-8 md:mt-0">
        {/* Main Circles */}
        <motion.div
          className="absolute w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 rounded-full overflow-hidden shadow-md"
          style={{ top: "5%", left: "10%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-1.jpg"
            alt="Circle 1"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Other Circles */}
        <motion.div
          className="absolute w-28 sm:w-40 md:w-48 lg:w-56 h-28 sm:h-40 md:h-48 lg:h-56 rounded-full overflow-hidden shadow-md"
          style={{ top: "25%", right: "10%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-3.jpg"
            alt="Circle 2"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 rounded-full overflow-hidden shadow-md"
          style={{ top: "50%", left: "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-2.jpg"
            alt="Circle 3"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-40 rounded-full overflow-hidden shadow-md"
          style={{ top: "75%", right: "5%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img
            src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-4.jpg"
            alt="Circle 4"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Decorative Circles with cursor movement effect
        <motion.div
          className="absolute w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 rounded-full bg-[rgb(243,115,53)]"
          style={{
            top: "20%",
            left: "20%",
            x: cursorPosition.x / 100, // Move slightly based on cursor X position
            y: cursorPosition.y / 100, // Move slightly based on cursor Y position
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        ></motion.div>

        <motion.div
          className="absolute w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full bg-[rgb(247,147,48)]"
          style={{
            top: "50%",
            right: "30%",
            x: cursorPosition.x / 100, // Move slightly based on cursor X position
            y: cursorPosition.y / 100, // Move slightly based on cursor Y position
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>

        <motion.div
          className="absolute w-4 sm:w-6 md:w-8 lg:w-10 h-4 sm:h-6 md:h-8 lg:h-10 rounded-full bg-[rgb(253,193,42)]"
          style={{
            top: "75%",
            left: "10%",
            x: cursorPosition.x / 100, // Move slightly based on cursor X position
            y: cursorPosition.y / 100, // Move slightly based on cursor Y position
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>

        <motion.div
          className="absolute w-3 sm:w-4 md:w-6 lg:w-8 h-3 sm:h-4 md:h-6 lg:h-8 rounded-full bg-[rgb(249,164,46)]"
          style={{
            top: "95%",
            right: "25%",
            x: cursorPosition.x / 100, // Move slightly based on cursor X position
            y: cursorPosition.y / 100, // Move slightly based on cursor Y position
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        ></motion.div> */}
      </div>
    </div>
  );
};

export default HeroSection;
