import React, { useState, useEffect, useRef } from "react";
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
  const [speechEnabled, setSpeechEnabled] = useState(() => {
    const savedSpeechEnabled = localStorage.getItem("speechEnabled");
    return savedSpeechEnabled === "true";
  });

  const [isButtonAccessible, setIsButtonAccessible] = useState(true);
  const toggleButtonRef = useRef(null);

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.cancel();
    synth.speak(utterance);
  };

  const toggleSpeech = () => {
    const newStatus = !speechEnabled;
    setSpeechEnabled(newStatus);
    localStorage.setItem("speechEnabled", newStatus);
    speakText(newStatus ? "ScreenReader is On" : "ScreenReader is Off");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        // Make button accessible again on Tab key press
        setIsButtonAccessible(true);
      }
      if (event.key === "Escape") {
        // Remove button from tab order on Escape key press
        setIsButtonAccessible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Function to speak the current state when the button is focused
  const handleButtonFocus = () => {
    speakText(speechEnabled ? "ScreenReader is On" : "ScreenReader is Off");
  };

  return (
    <Router>
      <div className="App">
        {/* Floating Toggle Button */}
        <button
          ref={toggleButtonRef}
          onClick={toggleSpeech}
          onFocus={handleButtonFocus}  // Speak the current state when focused
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            backgroundColor: speechEnabled ? "#34D399" : "#EF4444",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          tabIndex={isButtonAccessible ? 0 : -1}
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
