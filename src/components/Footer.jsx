import React from "react";

const Footer = () => {
  const synth = window.speechSynthesis;

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
    <footer
      className="py-6"
      style={{
        backgroundColor: "rgb(31,41,55)",
        color: "white",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Us */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              onClick={() => speakText("Contact us")}
            >
              Contact us
            </h3>
            <p
              className="cursor-pointer"
              onClick={() => speakText("Call Us +2 342 5446 67")}
            >
              Call Us: +2 342 5446 67
            </p>
            <p
              className="cursor-pointer"
              onClick={() =>
                speakText("Business hours Monday to Friday, 8 AM to 5 PM")
              }
            >
              Business hours: Mon - Fri 8 AM - 5 PM
            </p>
            <p
              className="cursor-pointer"
              onClick={() =>
                speakText("Location Franklin Street, Greenpoint Avenue")
              }
            >
              Location: Franklin St, Greenpoint Ave
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              onClick={() => speakText("Quick Links")}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() => speakText("About Us")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() => speakText("Our Classes")}
              >
                Our Classes
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() => speakText("School Teachers")}
              >
                School Teachers
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() => speakText("Recent Events")}
              >
                Recent Events
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() => speakText("Our News")}
              >
                Our News
              </li>
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h3
              className="text-lg font-bold mb-2 cursor-pointer text-orange-500"
              onClick={() => speakText("News")}
            >
              News
            </h3>
            <ul className="space-y-2">
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() =>
                  speakText(
                    "This Long-Awaited Technology May Finally, November 28, 2020"
                  )
                }
              >
                This Long-Awaited Technology May Finally - Nov 28, 2020
              </li>
              <li
                className="cursor-pointer hover:text-orange-500 transition"
                onClick={() =>
                  speakText(
                    "The digital revolution in higher education, November 28, 2020"
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
            className="cursor-pointer text-gray-400 hover:text-orange-500 transition"
            onClick={() =>
              speakText("Copyrights 2021 Shelly. All rights reserved.")
            }
          >
            © Copyrights 2021 Shelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



