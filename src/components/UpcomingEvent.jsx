import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const UpcomingEvent = () => {
  // Updated posts data with your image URLs
  const posts = [
    {
      id: 1,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1665520346744-e7925b11bc34?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1690479511578-6f9bf096b5e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  // State to track speech synthesis and stop the current speech
  const [synth] = useState(window.speechSynthesis);

  const stopSpeaking = () => {
    if (synth.speaking) {
      synth.cancel(); // Stop any ongoing speech
    }
  };

  const speakText = (text) => {
    stopSpeaking(); // Stop current speech before starting new one
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.speak(utterance); // Start speaking the new text
  };

  return (
    <section className="py-20 bg-gray-50 mx-4 md:mx-16">
      {/* Section Header */}
      <div className="text-center mb-12" onClick={() => speakText('Upcoming Event, Special sessions and workshops to empower blind students, assistive technology, and advocacy for accessibility in education.')}>
        <h2 className="text-4xl font-extrabold text-gray-800">
          Upcoming <span className="text-[rgb(243,115,53)]">Event</span>
        </h2>
        <p className="text-xl text-gray-700 mt-4">
        Special sessions and workshops to empower blind students, assistive technology, and advocacy for accessibility in education.

        </p>
      </div>

      {/* Layout Container */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Custom Grid for Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:w-1/2">
          {posts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.imageUrl}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Right Side: Event Cards */}
        <div className="flex flex-col gap-6 md:w-1/2 md:block space-y-6">
          {/* Event Card 1 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 hover:bg-gray-100"
            onClick={() => speakText('2022-12-30 12:00, $8, 25 Grafton St, Worcester, Explore Watercolor Illustration')}
          >
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">2022-12-30 12:00</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaClock className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">$8</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaMapMarkerAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">25 Grafton St, Worcester</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Explore Watercolor Illustration
            </h3>
          </div>

          {/* Event Card 2 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 hover:bg-gray-100"
            onClick={() => speakText('2022-12-30 11:00 to 15:00, $16, 9 Grafton St, Worcester, Environment Conference')}
          >
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">2022-12-30 11:00 to 15:00</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaClock className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">$16</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaMapMarkerAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">9 Grafton St, Worcester</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Environment Conference
            </h3>
          </div>

          {/* Event Card 3 */}
          <div
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 hover:bg-gray-100"
            onClick={() => speakText('2022-12-30 17:00, Free, 88 Grafton St, Worcester, Digital Transformation Conference')}
          >
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">2022-12-30 17:00</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaClock className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">$free</span>
            </div>
            <div className="flex items-center text-gray-600 mb-4">
              <FaMapMarkerAlt className="mr-2 text-[rgb(243,115,53)]" />
              <span className="font-semibold">88 Grafton St, Worcester</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Digital Transformation Conference
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;


