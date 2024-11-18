import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize SpeechSynthesis
  const [synth] = useState(window.speechSynthesis);

  const stopSpeaking = () => {
    if (synth.speaking) {
      synth.cancel();
    }
  };

  const speakText = (text) => {
    stopSpeaking();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.speak(utterance);
  };

  return (
    <header className="bg-gray-100 shadow-md">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-orange-500 text-white text-sm">
        <div
          className="font-semibold cursor-pointer text-center md:text-left"
          onClick={() => speakText("Shelly – Primary School")}
        >
          <span className="text-lg">Shelly</span> – Primary School
        </div>
        <div className="space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Call Us: +2 342 5446 67")}
          >
            Call Us: +2 342 5446 67
          </span>
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Business hours: Monday to Friday, 8 AM to 5 PM")}
          >
            Business hours: Mon - Fri 8 AM - 5 PM
          </span>
          <span
            className="cursor-pointer block md:inline"
            onClick={() => speakText("Location: Franklin Street, Greenpoint Avenue")}
          >
            Location: Franklin St, Greenpoint Ave
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-orange-500 cursor-pointer"
          onClick={() => speakText("Shelly")}
        >
          Shelly
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
                  to="/classes"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Classes");
                    setIsMenuOpen(false);
                  }}
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  to="/teachers"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Teachers");
                    setIsMenuOpen(false);
                  }}
                >
                  Teachers
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
                  to="/blog"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Blog");
                    setIsMenuOpen(false);
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    speakText("Contacts");
                    setIsMenuOpen(false);
                  }}
                >
                  Contacts
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
              onClick={() => speakText("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("About Us")}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/classes"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Classes")}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to="/teachers"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Teachers")}
            >
              Teachers
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Events")}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Blog")}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="hover:text-orange-500 transition duration-300"
              onClick={() => speakText("Contacts")}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
