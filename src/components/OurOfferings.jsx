// import React from 'react';
// import { FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'; // Importing the icons

// const OurOfferings = () => {
//   // Speech synthesis function
//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 
//           className="text-3xl sm:text-4xl font-extrabold text-gray-800"
//           onClick={() => speakText("Welcome to Blind School's Educational Program")}> {/* Added onClick event */}
//           Welcome to Blind School's <span className="text-[rgb(243,115,53)]">Educational Program</span>
//         </h2>
//         <p 
//           className="text-lg sm:text-xl text-gray-700 mt-4"
//           onClick={() => speakText("We provide specialized education, accessibility, and support to empower students with visual impairments.")}> {/* Added onClick event */}
//           We provide specialized education, accessibility, and support to empower students with visual impairments.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="flex justify-center gap-10 flex-wrap">
//         {/* Left Card: Specialized Educators */}
//         <div 
//           className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
//           onClick={() => speakText("Specialized Educators: Our teachers are trained to provide a supportive and accessible learning environment for visually impaired students.")}> {/* Added onClick event */}
//           <div className="flex items-center justify-center mb-6">
//             <FaChalkboardTeacher className="text-5xl text-[rgb(243,115,53)]" />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Specialized Educators
//           </h3>
//           <p className="text-gray-600">
//             Our teachers are trained to provide a supportive and accessible learning environment for visually impaired students.
//           </p>
//         </div>

//         {/* Middle Card: Inclusive Learning Programs */}
//         <div 
//           className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 relative text-center min-h-[350px] flex flex-col items-center justify-center"
//           onClick={() => speakText("Inclusive Learning Programs: Our programs are designed to provide equal learning opportunities using adaptive tools and resources.")}> {/* Added onClick event */}
//           {/* Image inside the card */}
//           <div className="w-32 h-32 mb-6">
//             <img 
//               src="https://shelly.merku.love/wp-content/uploads/2021/08/kids-at-lesson-SEUX7GM-150x150.jpg" 
//               alt="Inclusive Learning Programs" 
//               className="w-full h-full rounded-full border-4 border-[rgb(243,115,53)]"
//             />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Inclusive Learning Programs
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Our programs are designed to provide equal learning opportunities using adaptive tools and resources.
//           </p>
//           <div className="text-center mt-6">
//             <button
//               className="bg-white text-[rgb(243,115,53)] py-2 px-4 rounded-lg border-2 border-[rgb(243,115,53)] hover:bg-gradient-to-r hover:from-[rgb(243,115,53)] hover:to-[#f37335] hover:text-white transition duration-300"
//               onClick={() => speakText("Learn more about our inclusive learning programs.")}> {/* Added onClick event */}
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Card: Certification and Support */}
//         <div 
//           className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
//           onClick={() => speakText("Certification and Support: We offer globally recognized certifications and continued support for our students.")}> {/* Added onClick event */}
//           <div className="flex items-center justify-center mb-6">
//             <FaCertificate className="text-5xl text-[rgb(243,115,53)]" />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Certification and Support
//           </h3>
//           <p className="text-gray-600">
//             We offer globally recognized certifications and continued support for our students.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurOfferings;

import React from "react";
import { FaChalkboardTeacher, FaCertificate } from "react-icons/fa"; // Importing the icons

const OurOfferings = ({ speechEnabled }) => {
  // Initialize speech synthesis
  const synth = window.speechSynthesis;

  // Stop any ongoing speech
  const stopSpeaking = () => {
    synth.cancel();
  };

  // Speech synthesis function
  const speakText = (text) => {
    if (!speechEnabled) {
      stopSpeaking(); // Stop speech if toggled off
      return;
    }

    stopSpeaking(); // Stop any ongoing speech before starting new one
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-800"
          onClick={() =>
            speakText(
              "Welcome to Blind School's Educational Program"
            )
          }
        >
          Welcome to Blind School's{" "}
          <span className="text-[rgb(243,115,53)]">Educational Program</span>
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-700 mt-4"
          onClick={() =>
            speakText(
              "We provide specialized education, accessibility, and support to empower students with visual impairments."
            )
          }
        >
          We provide specialized education, accessibility, and support to empower students with visual impairments.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-10 flex-wrap">
        {/* Left Card: Specialized Educators */}
        <div
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          onClick={() =>
            speakText(
              "Specialized Educators: Our teachers are trained to provide a supportive and accessible learning environment for visually impaired students."
            )
          }
        >
          <div className="flex items-center justify-center mb-6">
            <FaChalkboardTeacher className="text-5xl text-[rgb(243,115,53)]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Specialized Educators
          </h3>
          <p className="text-gray-600">
            Our teachers are trained to provide a supportive and accessible learning environment for visually impaired students.
          </p>
        </div>

        {/* Middle Card: Inclusive Learning Programs */}
        <div
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 relative text-center min-h-[350px] flex flex-col items-center justify-center"
          onClick={() =>
            speakText(
              "Inclusive Learning Programs: Our programs are designed to provide equal learning opportunities using adaptive tools and resources."
            )
          }
        >
          {/* Image inside the card */}
          <div className="w-32 h-32 mb-6">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2021/08/kids-at-lesson-SEUX7GM-150x150.jpg"
              alt="Inclusive Learning Programs"
              className="w-full h-full rounded-full border-4 border-[rgb(243,115,53)]"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Inclusive Learning Programs
          </h3>
          <p className="text-gray-600 mb-6">
            Our programs are designed to provide equal learning opportunities using adaptive tools and resources.
          </p>
          <div className="text-center mt-6">
            <button
              className="bg-white text-[rgb(243,115,53)] py-2 px-4 rounded-lg border-2 border-[rgb(243,115,53)] hover:bg-gradient-to-r hover:from-[rgb(243,115,53)] hover:to-[#f37335] hover:text-white transition duration-300"
              onClick={() =>
                speakText(
                  "Learn more about our inclusive learning programs."
                )
              }
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card: Certification and Support */}
        <div
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          onClick={() =>
            speakText(
              "Certification and Support: We offer globally recognized certifications and continued support for our students."
            )
          }
        >
          <div className="flex items-center justify-center mb-6">
            <FaCertificate className="text-5xl text-[rgb(243,115,53)]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Certification and Support
          </h3>
          <p className="text-gray-600">
            We offer globally recognized certifications and continued support for our students.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
