// import React from 'react';
// import { FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'; // Importing the icons

// const OurOfferings = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
//           Welcome to Shelly's <span className="text-[rgb(243,115,53)]">Ecosystem</span>
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-700 mt-4">
//           Blended learning, off-the-shelf learning, storytelling, explainer animation, and completion criteria.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="flex justify-center gap-10 flex-wrap">
//         {/* Left Card: Experienced Teachers */}
//         <div className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
//           <div className="flex items-center justify-center mb-6">
//             <FaChalkboardTeacher className="text-5xl text-[rgb(243,115,53)]" />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Experienced Teachers
//           </h3>
//           <p className="text-gray-600">
//             Morbi vel augue et metus pellentesque lacinia eu non odio.
//           </p>
//         </div>

//         {/* Middle Card: Best Learning Program */}
//         <div className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 relative text-center min-h-[350px] flex flex-col items-center justify-center">
//           {/* Image inside the card */}
//           <div className="w-32 h-32 mb-6">
//             <img 
//               src="https://shelly.merku.love/wp-content/uploads/2021/08/kids-at-lesson-SEUX7GM-150x150.jpg" 
//               alt="Best Learning Program" 
//               className="w-full h-full rounded-full border-4 border-[rgb(243,115,53)]"
//             />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Best Learning Program
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Morbi vel augue et metus pellentesque lacinia eu non odio.
//           </p>
//           <div className="text-center mt-6">
//             <button className="bg-white text-[rgb(243,115,53)] py-2 px-4 rounded-lg border-2 border-[rgb(243,115,53)] hover:bg-gradient-to-r hover:from-[rgb(243,115,53)] hover:to-[#f37335] hover:text-white transition duration-300">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Card: Global Certificate */}
//         <div className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
//           <div className="flex items-center justify-center mb-6">
//             <FaCertificate className="text-5xl text-[rgb(243,115,53)]" />
//           </div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Global Certificate
//           </h3>
//           <p className="text-gray-600">
//             Etiam risus neque, volutpat vel laoreet a, finibus volutpat.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurOfferings;

import React from 'react';
import { FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'; // Importing the icons

const OurOfferings = () => {
  // Speech synthesis function
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-3xl sm:text-4xl font-extrabold text-gray-800"
          onClick={() => speakText("Welcome to Shelly's Ecosystem")}> {/* Added onClick event */}
          Welcome to Shelly's <span className="text-[rgb(243,115,53)]">Ecosystem</span>
        </h2>
        <p 
          className="text-lg sm:text-xl text-gray-700 mt-4"
          onClick={() => speakText("Blended learning, off-the-shelf learning, storytelling, explainer animation, and completion criteria.")}> {/* Added onClick event */}
          Blended learning, off-the-shelf learning, storytelling, explainer animation, and completion criteria.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-10 flex-wrap">
        {/* Left Card: Experienced Teachers */}
        <div 
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          onClick={() => speakText("Experienced Teachers: Morbi vel augue et metus pellentesque lacinia eu non odio.")}> {/* Added onClick event */}
          <div className="flex items-center justify-center mb-6">
            <FaChalkboardTeacher className="text-5xl text-[rgb(243,115,53)]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Experienced Teachers
          </h3>
          <p className="text-gray-600">
            Morbi vel augue et metus pellentesque lacinia eu non odio.
          </p>
        </div>

        {/* Middle Card: Best Learning Program */}
        <div 
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 relative text-center min-h-[350px] flex flex-col items-center justify-center"
          onClick={() => speakText("Best Learning Program: Morbi vel augue et metus pellentesque lacinia eu non odio.")}> {/* Added onClick event */}
          {/* Image inside the card */}
          <div className="w-32 h-32 mb-6">
            <img 
              src="https://shelly.merku.love/wp-content/uploads/2021/08/kids-at-lesson-SEUX7GM-150x150.jpg" 
              alt="Best Learning Program" 
              className="w-full h-full rounded-full border-4 border-[rgb(243,115,53)]"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Best Learning Program
          </h3>
          <p className="text-gray-600 mb-6">
            Morbi vel augue et metus pellentesque lacinia eu non odio.
          </p>
          <div className="text-center mt-6">
            <button
              className="bg-white text-[rgb(243,115,53)] py-2 px-4 rounded-lg border-2 border-[rgb(243,115,53)] hover:bg-gradient-to-r hover:from-[rgb(243,115,53)] hover:to-[#f37335] hover:text-white transition duration-300"
              onClick={() => speakText("Learn More about the Best Learning Program.")}> {/* Added onClick event */}
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card: Global Certificate */}
        <div 
          className="w-full sm:w-72 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center"
          onClick={() => speakText("Global Certificate: Etiam risus neque, volutpat vel laoreet a, finibus volutpat.")}> {/* Added onClick event */}
          <div className="flex items-center justify-center mb-6">
            <FaCertificate className="text-5xl text-[rgb(243,115,53)]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Global Certificate
          </h3>
          <p className="text-gray-600">
            Etiam risus neque, volutpat vel laoreet a, finibus volutpat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurOfferings;
