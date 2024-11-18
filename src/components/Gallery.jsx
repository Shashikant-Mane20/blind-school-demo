// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const StudyProcessGallery = () => {
//   // Images for gallery
//   const galleryImages = [
//     {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 1',
//     },
//     {
//       id: 2,
//       url: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 2',
//     },
//     {
//       id: 3,
//       url: 'https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 3',
//     },
//     {
//       id: 4,
//       url: 'https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 4',
//     },
//     {
//       id: 5,
//       url: 'https://plus.unsplash.com/premium_photo-1691962725044-d80a7145f7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 5',
//     },
//     {
//       id: 6,
//       url: 'https://images.unsplash.com/photo-1531674842274-9563aa15686f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 6',
//     },
//   ];

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Open modal with selected image
//   const openModal = (index) => {
//     setCurrentImageIndex(index);
//     setModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => setModalOpen(false);

//   return (
//     <section className="py-10 bg-gray-100 px-4 md:px-16">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-extrabold text-gray-800">
//           Study Process <span className="text-[rgb(243,115,53)]">Gallery</span>
//         </h2>
//         <p className="text-lg text-gray-700 mt-4">
//           Instructor-led training, digital learning, CBT completion criteria, learning management system, cognitive load, BYOD, self-directed learning, knowledge in process.
//         </p>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryImages.map((image, index) => (
//           <div
//             key={image.id}
//             className={`overflow-hidden cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 ${
//               index % 3 === 0
//                 ? 'rounded-full'
//                 : index % 3 === 1
//                 ? 'rounded-lg'
//                 : 'rounded-2xl'
//             }`}
//             onClick={() => openModal(index)}
//           >
//             <img
//               src={image.url}
//               alt={image.alt}
//               className="w-full h-48 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for Full-Screen Slider */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
//           onClick={closeModal} // Close modal when clicking outside the content
//         >
//           <div
//             className="relative w-full max-w-4xl mx-auto"
//             onClick={(e) => e.stopPropagation()} // Prevent click propagation to the overlay
//           >
//             {/* Close Button (X icon) */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-[rgb(243,115,53)] hover:bg-orange-600 p-2 rounded-full"
//             >
//               ✕
//             </button>

//             {/* Image Slider */}
//             <Swiper
//               modules={[Navigation]}
//               navigation
//               slidesPerView={1}
//               initialSlide={currentImageIndex}
//               className="swiper-container"
//             >
//               {galleryImages.map((image) => (
//                 <SwiperSlide key={image.id}>
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     className="w-full h-96 object-cover rounded-lg"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default StudyProcessGallery;

// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const StudyProcessGallery = () => {
//   // Images for gallery
//   const galleryImages = [
//     {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 1',
//     },
//     {
//       id: 2,
//       url: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 2',
//     },
//     {
//       id: 3,
//       url: 'https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 3',
//     },
//     {
//       id: 4,
//       url: 'https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 4',
//     },
//     {
//       id: 5,
//       url: 'https://plus.unsplash.com/premium_photo-1691962725044-d80a7145f7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 5',
//     },
//     {
//       id: 6,
//       url: 'https://images.unsplash.com/photo-1531674842274-9563aa15686f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       alt: 'Study Image 6',
//     },
//   ];

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Initialize speech synthesis
//   const synth = window.speechSynthesis;

//   const speakText = (text) => {
//     // Stop any ongoing speech
//     synth.cancel();

//     // Create and speak new utterance
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     synth.speak(utterance);
//   };

//   // Open modal with selected image and speak its description
//   const openModal = (index) => {
//     setCurrentImageIndex(index);
//     speakText(galleryImages[index].alt);
//     setModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setModalOpen(false);
//     synth.cancel(); // Stop speech when modal closes
//   };

//   return (
//     <section className="py-10 bg-gray-100 px-4 md:px-16">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2
//           className="text-4xl font-extrabold text-gray-800"
//           onClick={() =>
//             speakText(
//               'Study Process Gallery. Instructor-led training, digital learning, and self-directed learning.'
//             )
//           }
//         >
//           Study Process <span className="text-[rgb(243,115,53)]">Gallery</span>
//         </h2>
//         <p className="text-lg text-gray-700 mt-4">
//           Instructor-led training, digital learning, CBT completion criteria, learning management system, cognitive load, BYOD, self-directed learning, knowledge in process.
//         </p>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryImages.map((image, index) => (
//           <div
//             key={image.id}
//             className={`overflow-hidden cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 ${
//               index % 3 === 0
//                 ? 'rounded-full'
//                 : index % 3 === 1
//                 ? 'rounded-lg'
//                 : 'rounded-2xl'
//             }`}
//             onClick={() => openModal(index)}
//           >
//             <img
//               src={image.url}
//               alt={image.alt}
//               className="w-full h-48 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for Full-Screen Slider */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
//           onClick={closeModal} // Close modal when clicking outside the content
//         >
//           <div
//             className="relative w-full max-w-4xl mx-auto"
//             onClick={(e) => e.stopPropagation()} // Prevent click propagation to the overlay
//           >
//             {/* Close Button (X icon) */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-[rgb(243,115,53)] hover:bg-orange-600 p-2 rounded-full"
//             >
//               ✕
//             </button>

//             {/* Image Slider */}
//             <Swiper
//               modules={[Navigation]}
//               navigation
//               slidesPerView={1}
//               initialSlide={currentImageIndex}
//               className="swiper-container"
//               onSlideChange={({ activeIndex }) => {
//                 speakText(galleryImages[activeIndex].alt); // Speak the description of the current image
//               }}
//             >
//               {galleryImages.map((image) => (
//                 <SwiperSlide key={image.id}>
//                   <img
//                     src={image.url}
//                     alt={image.alt}
//                     className="w-full h-96 object-cover rounded-lg"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default StudyProcessGallery;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const StudyProcessGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 1',
    },
    {
      id: 2,
      url: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 2',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1677594334053-afe4b41aa0a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 3',
    },
    {
      id: 4,
      url: 'https://plus.unsplash.com/premium_photo-1691962725045-57ff9e77f0bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 4',
    },
    {
      id: 5,
      url: 'https://plus.unsplash.com/premium_photo-1691962725044-d80a7145f7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 5',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1531674842274-9563aa15686f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Study Image 6',
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize speech synthesis
  const synth = window.speechSynthesis;

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance); // Add utterance to the queue
  };

  // Open modal with selected image and speak its description
  const openModal = (index) => {
    setCurrentImageIndex(index);
    speakText(galleryImages[index].alt); // Speak the image description
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    synth.cancel(); // Stop all speech when modal closes
  };

  return (
    <section className="py-10 bg-gray-100 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl font-extrabold text-gray-800 cursor-pointer"
          onClick={() => speakText('Study Process Gallery')}
        >
          Study Process <span className="text-[rgb(243,115,53)]">Gallery</span>
        </h2>
        <p
          className="text-lg text-gray-700 mt-4 cursor-pointer"
          onClick={() =>
            speakText(
              'Instructor-led training, digital learning, CBT completion criteria, learning management system, cognitive load, BYOD, self-directed learning, knowledge in process.'
            )
          }
        >
          Instructor-led training, digital learning, CBT completion criteria,
          learning management system, cognitive load, BYOD, self-directed
          learning, knowledge in process.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`overflow-hidden cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 ${
              index % 3 === 0
                ? 'rounded-full'
                : index % 3 === 1
                ? 'rounded-lg'
                : 'rounded-2xl'
            }`}
            onClick={() => openModal(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full-Screen Slider */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={closeModal} // Close modal when clicking outside the content
        >
          <div
            className="relative w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to the overlay
          >
            {/* Close Button (X icon) */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-[rgb(243,115,53)] hover:bg-orange-600 p-2 rounded-full"
            >
              ✕
            </button>

            {/* Image Slider */}
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              initialSlide={currentImageIndex}
              className="swiper-container"
              onSlideChange={({ activeIndex }) => {
                speakText(galleryImages[activeIndex].alt); // Speak the description of the current image
              }}
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default StudyProcessGallery;

