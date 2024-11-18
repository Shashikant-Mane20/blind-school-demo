// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [synth] = useState(window.speechSynthesis);

//   const stopSpeaking = () => {
//     if (synth.speaking) {
//       synth.cancel();
//     }
//   };

//   const speakText = (text) => {
//     stopSpeaking();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;
//     synth.speak(utterance);
//   };

//   return (
//     <header className="bg-gray-100 shadow-md">
//       {/* Top Bar */}
//       <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-orange-500 text-white text-sm">
//         <div
//           className="font-semibold cursor-pointer text-center md:text-left"
//           onClick={() => speakText("Bright Vision – Empowering the Blind")}
//         >
//           <span className="text-lg">Bright Vision</span> – Empowering the Blind
//         </div>
//         <div className="space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
//           <span
//             className="cursor-pointer block md:inline"
//             onClick={() => speakText("Call Us: +1 800 123 456")}
//           >
//             Call Us: +1 800 123 456
//           </span>
//           <span
//             className="cursor-pointer block md:inline"
//             onClick={() => speakText("Open hours: Monday to Friday, 9 AM to 6 PM")}
//           >
//             Open hours: Mon - Fri 9 AM - 6 PM
//           </span>
//           <span
//             className="cursor-pointer block md:inline"
//             onClick={() => speakText("Address: 123 Vision Lane, Hope City")}
//           >
//             Address: 123 Vision Lane, Hope City
//           </span>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div
//           className="text-2xl font-bold text-orange-500 cursor-pointer"
//           onClick={() => speakText("Bright Vision")}
//         >
//           Bright Vision
//         </div>

//         {/* Hamburger Menu */}
//         <button
//           className="md:hidden block text-gray-800 text-2xl focus:outline-none"
//           onClick={() => setIsMenuOpen(true)}
//         >
//           ☰
//         </button>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
//             <button
//               className="absolute top-4 right-4 text-3xl text-gray-800 focus:outline-none"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               ✕
//             </button>
//             <ul className="space-y-6 font-medium text-gray-700">
//               <li>
//                 <Link
//                   to="/home"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Home");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("About Us");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/programs"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Programs");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Programs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/team"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Our Team");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Our Team
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/events"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Events");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Events
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/resources"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Resources");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contacts"
//                   className="hover:text-orange-500 transition duration-300"
//                   onClick={() => {
//                     speakText("Contact Us");
//                     setIsMenuOpen(false);
//                   }}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//           <li>
//             <Link
//               to="/home"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Home Menu")}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("About Us Menu")}
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/programs"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Programs Menu")}
//             >
//               Programs
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/team"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Our Team Menu")}
//             >
//               Our Team
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/events"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Events Menu")}
//             >
//               Events
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/resources"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Resources Menu")}
//             >
//               Resources
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contacts"
//               className="hover:text-orange-500 transition duration-300"
//               onClick={() => speakText("Contact Us Menu")}
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ speechEnabled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [synth] = useState(window.speechSynthesis);

  const stopSpeaking = () => {
    if (synth.speaking) {
      synth.cancel();
    }
  };

  const speakText = (text) => {
    if (speechEnabled) { // Only speak if speechEnabled is true
      stopSpeaking();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      synth.speak(utterance);
    }
  };

  return (
    <header className="bg-gray-100 shadow-md">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-orange-500 text-white text-sm">
        <div
          className="font-semibold cursor-pointer text-center md:text-left"
          onClick={() => speakText("Bright Vision – Empowering the Blind")}
        >
          <span className="text-lg">Bright Vision</span> – Empowering the Blind
        </div>
        <div className="space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Call Us: +1 800 123 456")}
          >
            Call Us: +1 800 123 456
          </span>
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Open hours: Monday to Friday, 9 AM to 6 PM")}
          >
            Open hours: Mon - Fri 9 AM - 6 PM
          </span>
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Address: 123 Vision Lane, Hope City")}
          >
            Address: 123 Vision Lane, Hope City
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-orange-500 cursor-pointer"
          onClick={() => speakText("Bright Vision")}
        >
          Bright Vision
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden block text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="space-y-6 font-medium text-gray-700">
              <li>
                <Link
                  to="/home"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Home");
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("About Us");
                    setIsMenuOpen(false);
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Programs");
                    setIsMenuOpen(false);
                  }}
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Our Team");
                    setIsMenuOpen(false);
                  }}
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Events");
                    setIsMenuOpen(false);
                  }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Resources");
                    setIsMenuOpen(false);
                  }}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Contact Us");
                    setIsMenuOpen(false);
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li>
            <Link
              to="/home"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Home Menu")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("About Us Menu")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Programs Menu")}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Our Team Menu")}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Events Menu")}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Resources Menu")}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Contact Us Menu")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
