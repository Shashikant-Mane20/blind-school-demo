

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const OurAwesomeReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      designation: "Web Developer",
      review:
        "This service is amazing! The user interface is intuitive and easy to navigate. Highly recommended.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      designation: "Graphic Designer",
      review:
        "An excellent platform with fantastic customer support. I am impressed with the design and user experience.",
      rating: 4,
    },
    {
      name: "Michael Lee",
      designation: "Product Manager",
      review:
        "Great experience! The features are incredibly useful, and the team was super responsive to my queries.",
      rating: 4,
    },
    {
      name: "Emily Davis",
      designation: "Marketing Specialist",
      review:
        "Wonderful service! It's streamlined and efficient. I can easily keep track of everything I need.",
      rating: 5,
    },
  ];

  // Initialize speech synthesis and state
  const synth = window.speechSynthesis;

  // Function to stop any ongoing speech
  const stopSpeaking = () => {
    if (synth.speaking) {
      synth.cancel(); // Stop ongoing speech
    }
  };

  // Function to speak text
  const speakText = (text) => {
    stopSpeaking(); // Stop any ongoing speech before starting new one
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance); // Speak the new text
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Section Header */}
      <div
        className="text-center mb-8"
        onClick={() =>
          speakText(
            "Our Awesome Reviews. Our clients love the work we do. Here's what they have to say."
          )
        }
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Our Awesome <span className="text-orange-500">Reviews</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Our clients love the work we do. Here's what they have to say:
        </p>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            onClick={() =>
              speakText(
                `Review by ${item.name}, ${item.designation}. "${item.review}" Rated ${item.rating} stars.`
              )
            }
          >
            <div className="flex items-center mb-4">
              {/* Render stars based on the rating */}
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < item.rating ? "text-orange-500" : "text-gray-300"}
                  size={20}
                />
              ))}
            </div>
            <p className="text-orange-500 italic mb-4">{`"${item.review}"`}</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAwesomeReviews;
