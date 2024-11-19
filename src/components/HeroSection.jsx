// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";

// const HeroSection = ({ speechEnabled }) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Function to track mouse movement
//   const handleMouseMove = (e) => {
//     setCursorPosition({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   };

//   // Speech Synthesis Function
//   const speakText = (text) => {
//     if (speechEnabled) {
//       const utterance = new SpeechSynthesisUtterance(text);
//       window.speechSynthesis.speak(utterance);
//     }
//   };

//   return (
//     <div
//       className="bg-white text-gray-900 flex flex-col md:flex-row items-center justify-between p-8 md:h-screen relative"
//       onMouseMove={handleMouseMove} // Adding mousemove event
//     >
//       {/* Left Section */}
//       <div className="md:w-1/2 space-y-6 z-10">
//         {/* Big Heading */}
//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           tabIndex={0}
//           onFocus={() =>
//             speakText("The Smarter Way To Learn, Empowering the Blind")
//           }
//           onClick={() =>
//             speakText("The Smarter Way To Learn, Empowering the Blind")
//           } // Speak only if enabled
//         >
//           The Smarter Way To Learn{" "}
//           <span className="text-[#f37335]">Empowering the Blind</span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           className="text-lg text-gray-600"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           tabIndex={0}
//           onFocus={() =>
//             speakText(
//               "Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow."
//             )
//           }
//           onClick={() =>
//             speakText(
//               "Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow."
//             )
//           }
//         >
//           Providing inclusive education and opportunities to blind individuals.
//           Together, we create a brighter tomorrow.
//         </motion.p>

//         {/* Search Box */}
//         <motion.div
//           className="flex items-center bg-gray-100 rounded-full p-3 shadow-md w-full md:w-3/4"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           <input
//             type="text"
//             placeholder="Search programs, events, or resources"
//             className="bg-transparent outline-none w-full text-gray-700"
//             tabIndex={0}
//             onFocus={() =>
//               speakText("Search programs, events, or resources.")
//             }
//           />
//           <FaSearch className="text-gray-500 ml-2" />
//         </motion.div>
//       </div>

//       {/* Right Section - Circles */}
//       <div className="relative w-full md:w-1/2 h-screen flex justify-center md:justify-end items-center mt-8 md:mt-0">
//        {/* Main Circles */}
//        <motion.div
//           className="absolute w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 rounded-full overflow-hidden shadow-md"
//           style={{ top: "5%", left: "10%" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-1.jpg"
//             alt="Circle 1"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Other Circles */}
//         <motion.div
//           className="absolute w-28 sm:w-40 md:w-48 lg:w-56 h-28 sm:h-40 md:h-48 lg:h-56 rounded-full overflow-hidden shadow-md"
//           style={{ top: "25%", right: "10%" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           <img
//             src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-3.jpg"
//             alt="Circle 2"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <motion.div
//           className="absolute w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 rounded-full overflow-hidden shadow-md"
//           style={{ top: "50%", left: "5%" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           <img
//             src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-2.jpg"
//             alt="Circle 3"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         <motion.div
//           className="absolute w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-40 rounded-full overflow-hidden shadow-md"
//           style={{ top: "75%", right: "5%" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           <img
//             src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-4.jpg"
//             alt="Circle 4"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

        
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const HeroSection = ({ speechEnabled }) => {
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
    if (speechEnabled && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
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
          tabIndex={0}
          onFocus={() =>
            speakText("The Smarter Way To Learn, Empowering the Blind")
          }
          onClick={() =>
            speakText("The Smarter Way To Learn, Empowering the Blind")
          } // Speak only if enabled
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
          tabIndex={0}
          onFocus={() =>
            speakText(
              "Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow."
            )
          }
          onClick={() =>
            speakText(
              "Providing inclusive education and opportunities to blind individuals. Together, we create a brighter tomorrow."
            )
          }
        >
          Providing inclusive education and opportunities to blind individuals.
          Together, we create a brighter tomorrow.
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
            tabIndex={0}
            onFocus={() =>
              speakText("Search programs, events, or resources.")
            }
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
      </div>
    </div>
  );
};

export default HeroSection;
