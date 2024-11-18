

// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
// import OurOfferings from "./components/OurOfferings";
// import UpcomingEvent from "./components/UpcomingEvent";
// import OurClasses from "./components/OurClasses";
// import OurAwesomeReviews from "./components/OurAwesomeReviews";
// import StudyProcessGallery from "./components/Gallery";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// function App() {
//   const [speechEnabled, setSpeechEnabled] = useState(false);

//   const toggleSpeech = () => {
//     if (speechEnabled) {
//       // Stop all ongoing speech synthesis when toggling off
//       window.speechSynthesis.cancel();
//     }
//     setSpeechEnabled((prev) => !prev);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Floating Toggle Button */}
//         <button
//           onClick={toggleSpeech}
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             right: "20px",
//             zIndex: 1000,
//             backgroundColor: speechEnabled ? "#34D399" : "#EF4444", // Green for ON, Red for OFF
//             color: "white",
//             border: "none",
//             borderRadius: "50%",
//             width: "60px",
//             height: "60px",
//             fontSize: "16px",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             cursor: "pointer",
//           }}
//         >
//           {speechEnabled ? "ON" : "OFF"}
//         </button>

//         {/* Header Section */}
//         <Header speechEnabled={speechEnabled} />

//         {/* Main Sections */}
//         <main>
//           <HeroSection speechEnabled={speechEnabled} />
//           <OurOfferings speechEnabled={speechEnabled} />
//           <UpcomingEvent speechEnabled={speechEnabled} />
//           <OurClasses speechEnabled={speechEnabled} />
//           <StudyProcessGallery speechEnabled={speechEnabled} />
//           <OurAwesomeReviews speechEnabled={speechEnabled} />
//         </main>

//         {/* Footer Section */}
//         <Footer speechEnabled={speechEnabled} />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import OurOfferings from "./components/OurOfferings";
import UpcomingEvent from "./components/UpcomingEvent";
import OurClasses from "./components/OurClasses";
import OurAwesomeReviews from "./components/OurAwesomeReviews";
import StudyProcessGallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Load speechEnabled state from localStorage, default to false if not set
  const [speechEnabled, setSpeechEnabled] = useState(() => {
    const savedSpeechEnabled = localStorage.getItem("speechEnabled");
    return savedSpeechEnabled === "true"; // Convert from string to boolean
  });

  // Function to speak text
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.cancel(); // Stop any ongoing speech
    synth.speak(utterance);
  };

  const toggleSpeech = () => {
    const newStatus = !speechEnabled; // Determine the new state
    setSpeechEnabled(newStatus);

    // Store the new status in localStorage
    localStorage.setItem("speechEnabled", newStatus);

    // Speak "Switch On" or "Switch Off"
    speakText(newStatus ? "Switch On" : "Switch Off");
  };

  useEffect(() => {
    // Optionally, if you want to speak the initial state after loading
    speakText(speechEnabled ? "Switch On" : "Switch Off");
  }, [speechEnabled]);

  return (
    <Router>
      <div className="App">
        {/* Floating Toggle Button */}
        <button
          onClick={toggleSpeech}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: speechEnabled ? "#34D399" : "#EF4444", // Green for ON, Red for OFF
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          {speechEnabled ? "ON" : "OFF"}
        </button>

        {/* Header Section */}
        <Header speechEnabled={speechEnabled} />

        {/* Main Sections */}
        <main>
          <HeroSection speechEnabled={speechEnabled} />
          <OurOfferings speechEnabled={speechEnabled} />
          <UpcomingEvent speechEnabled={speechEnabled} />
          <OurClasses speechEnabled={speechEnabled} />
          <StudyProcessGallery speechEnabled={speechEnabled} />
          <OurAwesomeReviews speechEnabled={speechEnabled} />
        </main>

        {/* Footer Section */}
        <Footer speechEnabled={speechEnabled} />
      </div>
    </Router>
  );
}

export default App;

