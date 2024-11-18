import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import HeroSection from "./components/HeroSection";
import OurOfferings from "./components/OurOfferings";
import UpcomingEvent from "./components/UpcomingEvent";
import OurClasses from "./components/OurClasses";
import OurAwesomeReviews from "./components/OurAwesomeReviews";
import StudyProcessGallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="App">
        {/* Header Section */}
        <Header />
        {/* Main Sections */}
        <main>
          <HeroSection />
          <OurOfferings />
          <UpcomingEvent />
          <OurClasses />
          <StudyProcessGallery />
          <OurAwesomeReviews />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
