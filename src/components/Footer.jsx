// import React from "react";

// const Footer = ({ speechEnabled }) => {
//   const synth = window.speechSynthesis;

//   const stopSpeaking = () => {
//     if (synth.speaking) {
//       synth.cancel(); // Stop any ongoing speech
//     }
//   };

//   const speakText = (text) => {
//     if (speechEnabled) {
//       stopSpeaking();
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.lang = "en-US";
//       utterance.pitch = 1;
//       utterance.rate = 1;
//       utterance.volume = 1;
//       synth.speak(utterance);
//     }
//   };

//   return (
//     <footer
//       className="py-6"
//       style={{
//         backgroundColor: "rgb(31,41,55)",
//         color: "white",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Contact Us */}
//           <div>
//             <h3
//               className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
//               tabIndex={0} // Make the title focusable
//               onClick={() => speakText("Contact us Footer")}
//               onFocus={() => speakText("Contact us")}
//             >
//               Contact us
//             </h3>
//             <p
//               className="cursor-pointer"
//               tabIndex={0} // Make the contact details focusable
//               onClick={() => speakText("Call Us +2 342 5446 67")}
//               onFocus={() => speakText("Call Us: +2 342 5446 67")}
//             >
//               Call Us: +2 342 5446 67
//             </p>
//             <p
//               className="cursor-pointer"
//               tabIndex={0}
//               onClick={() =>
//                 speakText("Business hours Monday to Friday, 8 AM to 5 PM")
//               }
//               onFocus={() =>
//                 speakText("Business hours: Mon - Fri 8 AM - 5 PM")
//               }
//             >
//               Business hours: Mon - Fri 8 AM - 5 PM
//             </p>
//             <p
//               className="cursor-pointer"
//               tabIndex={0}
//               onClick={() =>
//                 speakText("Location Franklin Street, Greenpoint Avenue")
//               }
//               onFocus={() =>
//                 speakText("Location Franklin St, Greenpoint Ave")
//               }
//             >
//               Location: Franklin St, Greenpoint Ave
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3
//               className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
//               tabIndex={0} // Make the title focusable
//               onClick={() => speakText("Quick Links Footer")}
//               onFocus={() => speakText("Quick Links")}
//             >
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() => speakText("About Us Footer")}
//                 onFocus={() => speakText("About Us")}
//               >
//                 About Us
//               </li>
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() => speakText("Our Classes Footer")}
//                 onFocus={() => speakText("Our Classes")}
//               >
//                 Our Classes
//               </li>
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() => speakText("School Teachers Footer")}
//                 onFocus={() => speakText("School Teachers")}
//               >
//                 School Teachers
//               </li>
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() => speakText("Recent Events Footer")}
//                 onFocus={() => speakText("Recent Events")}
//               >
//                 Recent Events
//               </li>
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() => speakText("Our News Footer")}
//                 onFocus={() => speakText("Our News")}
//               >
//                 Our News
//               </li>
//             </ul>
//           </div>

//           {/* News Section */}
//           <div>
//             <h3
//               className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
//               tabIndex={0} // Make the title focusable
//               onClick={() => speakText("News")}
//               onFocus={() => speakText("News")}
//             >
//               News
//             </h3>
//             <ul className="space-y-2">
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() =>
//                   speakText(
//                     "This Long-Awaited Technology May Finally, November 28, 2020"
//                   )
//                 }
//                 onFocus={() =>
//                   speakText(
//                     "This Long-Awaited Technology May Finally - Nov 28, 2020"
//                   )
//                 }
//               >
//                 This Long-Awaited Technology May Finally - Nov 28, 2020
//               </li>
//               <li
//                 className="cursor-pointer hover:text-orange-500 transition"
//                 tabIndex={0}
//                 onClick={() =>
//                   speakText(
//                     "The digital revolution in higher education, November 28, 2020"
//                   )
//                 }
//                 onFocus={() =>
//                   speakText(
//                     "The digital revolution in higher education - Nov 28, 2020"
//                   )
//                 }
//               >
//                 The digital revolution in higher education - Nov 28, 2020
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-4 border-t border-gray-700 pt-4 text-center">
//           <p
//             className="cursor-pointer text-gray-400 hover:text-orange-500 transition"
//             tabIndex={0} // Make the copyright text focusable
//             onClick={() =>
//               speakText("Copyrights 2024 Bright Vision. All rights reserved.")
//             }
//             onFocus={() =>
//               speakText("Copyrights 2024 Bright Vision. All rights reserved.")
//             }
//           >
//             © Copyrights 2024 Bright Vision. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useRef } from "react";

const Footer = ({ speechEnabled }) => {
  const synth = window.speechSynthesis;
  const lastFocusableElement = useRef(null);

  const stopSpeaking = () => {
    if (synth.speaking) {
      synth.cancel(); // Stop any ongoing speech
    }
  };

  const speakText = (text) => {
    if (speechEnabled) {
      stopSpeaking();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      synth.speak(utterance);
    }
  };

  // Prevent tabbing after the last element in the footer
  const handleTab = (event) => {
    if (event.key === "Tab" && document.activeElement === lastFocusableElement.current) {
      event.preventDefault(); // Stop tabbing beyond the last element
    }
  };

  return (
    <footer
      className="py-6"
      style={{
        backgroundColor: "rgb(31,41,55)",
        color: "white",
      }}
      onKeyDown={handleTab} // Listen for the Tab key
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Us */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              tabIndex={0} // Make the title focusable
              onClick={() => speakText("Contact us Footer")}
              onFocus={() => speakText("Contact us")}
            >
              Contact us
            </h3>
            <p
              className="cursor-pointer"
              tabIndex={0} // Make the contact details focusable
              onClick={() => speakText("Call Us +2 342 5446 67")}
              onFocus={() => speakText("Call Us: +2 342 5446 67")}
            >
              Call Us: +2 342 5446 67
            </p>
            <p
              className="cursor-pointer"
              tabIndex={0}
              onClick={() =>
                speakText("Business hours Monday to Friday, 8 AM to 5 PM")
              }
              onFocus={() =>
                speakText("Business hours: Mon - Fri 8 AM - 5 PM")
              }
            >
              Business hours: Mon - Fri 8 AM - 5 PM
            </p>
            <p
              className="cursor-pointer"
              tabIndex={0}
              onClick={() =>
                speakText("Location Franklin Street, Greenpoint Avenue")
              }
              onFocus={() =>
                speakText("Location Franklin St, Greenpoint Ave")
              }
            >
              Location: Franklin St, Greenpoint Ave
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              tabIndex={0} // Make the title focusable
              onClick={() => speakText("Quick Links Footer")}
              onFocus={() => speakText("Quick Links")}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() => speakText("About Us Footer")}
                onFocus={() => speakText("About Us")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() => speakText("Our Classes Footer")}
                onFocus={() => speakText("Our Classes")}
              >
                Our Classes
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() => speakText("School Teachers Footer")}
                onFocus={() => speakText("School Teachers")}
              >
                School Teachers
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() => speakText("Recent Events Footer")}
                onFocus={() => speakText("Recent Events")}
              >
                Recent Events
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() => speakText("Our News Footer")}
                onFocus={() => speakText("Our News")}
              >
                Our News
              </li>
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              tabIndex={0} // Make the title focusable
              onClick={() => speakText("News")}
              onFocus={() => speakText("News")}
            >
              News
            </h3>
            <ul className="space-y-2">
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() =>
                  speakText(
                    "This Long-Awaited Technology May Finally, November 28, 2020"
                  )
                }
                onFocus={() =>
                  speakText(
                    "This Long-Awaited Technology May Finally - Nov 28, 2020"
                  )
                }
              >
                This Long-Awaited Technology May Finally - Nov 28, 2020
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                tabIndex={0}
                onClick={() =>
                  speakText(
                    "The digital revolution in higher education, November 28, 2020"
                  )
                }
                onFocus={() =>
                  speakText(
                    "The digital revolution in higher education - Nov 28, 2020"
                  )
                }
              >
                The digital revolution in higher education - Nov 28, 2020
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 border-t border-gray-700 pt-4 text-center">
          <p
            ref={lastFocusableElement} // Reference for the last element
            className="cursor-pointer text-gray-400 hover:text-orange-500 transition"
            tabIndex={0} // Make the copyright text focusable
            onClick={() =>
              speakText("Copyrights 2024 Bright Vision. All rights reserved.")
            }
            onFocus={() =>
              speakText("Copyrights 2024 Bright Vision. All rights reserved.")
            }
          >
            © Copyrights 2024 Bright Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
