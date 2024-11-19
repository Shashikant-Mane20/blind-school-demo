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
          tabIndex={0}
          onFocus={() => speakText("Bright Vision – Empowering the Blind")}
          onClick={() => speakText("Bright Vision – Empowering the Blind")}
        >
          <span className="text-lg">Bright Vision</span> – Empowering the Blind
        </div>
        <div className="space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
          <span
            className="cursor-pointer block md:inline"
            tabIndex={0}
            onFocus={() => speakText("Call Us: +1 800 123 456")}
            onClick={() => speakText("Call Us: +1 800 123 456")}
          >
            Call Us: +1 800 123 456
          </span>
          <span
            className="cursor-pointer block md:inline"
            tabIndex={0}
            onFocus={() => speakText("Open hours: Monday to Friday, 9 AM to 6 PM")}
            onClick={() => speakText("Open hours: Monday to Friday, 9 AM to 6 PM")}
          >
            Open hours: Mon - Fri 9 AM - 6 PM
          </span>
          <span
            className="cursor-pointer block md:inline"
            tabIndex={0}
            onFocus={() => speakText("Address: 123 Vision Lane, Hope City")}
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
          tabIndex={0}
          onFocus={() => speakText("Bright Vision")}
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
              {["Home", "About Us", "Programs", "Our Team", "Events", "Resources", "Contact Us"].map((menuItem) => (
                <li key={menuItem}>
                  <Link
                    to={`/${menuItem.toLowerCase().replace(" ", "")}`}
                    className="hover:text-orange-500 transition duration-300"
                    tabIndex={0}
                    onFocus={() => speakText(menuItem)}
                    onClick={() => {
                      speakText(menuItem);
                      setIsMenuOpen(false);
                    }}
                  >
                    {menuItem}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {["Home", "About Us", "Programs", "Our Team", "Events", "Resources", "Contact Us"].map((menuItem) => (
            <li key={menuItem}>
              <Link
                to={`/${menuItem.toLowerCase().replace(" ", "")}`}
                className="hover:text-orange-500 transition duration-300"
                tabIndex={0}
                onFocus={() => speakText(`${menuItem} Menu`)}
                onClick={() => speakText(`${menuItem} Menu`)}
              >
                {menuItem}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
