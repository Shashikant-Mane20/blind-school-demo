import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaClock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation"; // For navigation buttons
import { Navigation } from "swiper/modules"; // Navigation module

const OurClasses = () => {

  const sliderData = [
    {
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      days: "Mon - Fri",
      time: "10 AM - 2 PM",
      lecture: "Intro to Programming",
      teacher: "John Doe",
      price: "$50",
    },
    {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Mon - Thu",
        time: "3 PM - 6 PM",
        lecture: "Web Development",
        teacher: "Michael Lee",
        price: "$60",
      },
      {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Fri - Sun",
        time: "9 AM - 1 PM",
        lecture: "Data Structures",
        teacher: "Sarah Johnson",
        price: "$80",
      },
      {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Mon - Fri",
        time: "6 PM - 9 PM",
        lecture: "Machine Learning",
        teacher: "Emily Davis",
        price: "$100",
      },
      {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Tue - Thu",
        time: "4 PM - 7 PM",
        lecture: "React Development",
        teacher: "Alice Williams",
        price: "$90",
      },
      {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Mon - Fri",
        time: "10 AM - 1 PM",
        lecture: "AI & ML",
        teacher: "David Clark",
        price: "$120",
      },
      {
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D", 
        days: "Wed - Fri",
        time: "2 PM - 5 PM",
        lecture: "Blockchain",
        teacher: "George Moore",
        price: "$150",
      },
    // Additional items...
  ];

  // Speech synthesis initialization
  const synth = window.speechSynthesis;

  const speakText = (text) => {
    // Stop any ongoing speech
    synth.cancel();

    // Create a new speech utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    // Start speaking the new utterance
    synth.speak(utterance);
  };

  // Function to handle arrow clicks and always speak "Left" or "Right"
  const handleArrowClick = (direction) => {
    speakText(direction === "left" ? "Left" : "Right");
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <b>
        <h1
          className="text-3xl sm:text-4xl font-bold text-gray-800"
          onClick={() => speakText("Our classes section ,Application programming interface voice-over (VO), instructor-led training, and curated user-created content.")}
        >
          Our <span className="text-[#f37335]">Classes</span>
        </h1>
        </b>
        <p className="text-base sm:text-lg mt-4 text-gray-700">
          Application programming interface voice-over (VO), instructor-led training, and curated user-created content.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative max-w-full sm:max-w-5xl mx-auto">
        <Swiper
          spaceBetween={30} // Space between slides
          loop={true} // Infinite loop
          slidesPerView={1} // Default to 1 slide visible
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }} // Custom navigation buttons
          modules={[Navigation]} // Enable navigation module
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="p-6 border rounded-lg bg-white shadow-xl"
                onClick={() =>
                  speakText(
                    `Lecture: ${item.lecture}, Teacher: ${item.teacher}, Days: ${item.days}, Time: ${item.time}, Price: ${item.price}`
                  )
                }
              >
                <img
                  src={item.image}
                  alt={item.lecture}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between text-orange-500">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{item.days}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{item.time}</span>
                  </div>
                </div>
                <h3 className="mt-4 font-semibold text-lg text-gray-800">
                  {item.lecture}
                </h3>
                <p className="text-gray-600">{item.teacher}</p>
                <p className="mt-2 font-bold text-xl text-orange-500">
                  {item.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 left-[-50px] sm:left-[-57px] transform -translate-y-1/2 z-10">
          <button
            className="custom-prev p-3 sm:p-3 bg-orange-500 text-black rounded-full hover:bg-orange-600"
            aria-label="Previous Slide"
            onClick={() => handleArrowClick("left")}
          >
            <FaArrowLeft size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 right-[-50px] sm:right-[-57px] transform -translate-y-1/2 z-10">
          <button
            className="custom-next p-3 sm:p-3 bg-orange-500 text-black rounded-full hover:bg-orange-600"
            aria-label="Next Slide"
            onClick={() => handleArrowClick("right")}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;

