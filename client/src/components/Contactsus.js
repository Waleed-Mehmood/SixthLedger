import React from "react";
import formimg from "../assets/Formsideimg.png";

function Contactsus() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#272B2E]">
          Get in <span className="text-orange-500">touch</span>
        </h1>
        <p className="text-gray-600 mt-2 font-medium sm:font-semibold text-sm sm:text-base md:text-lg">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row bg-[#202427D9] rounded-lg shadow-lg overflow-hidden w-full max-w-6xl p-4">
        {/* Left Side - Form */}
        <div className="text-white p-6 sm:p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Let's connect</h2>
          <p className="mb-6 text-gray-300 text-sm sm:text-base md:text-lg">
            Reach out and let the magic of collaboration illuminate our skies.
          </p>
          <form className="space-y-4" action="https://formsubmit.co/sixthledger@gmail.com" method="POST">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="w-1/2 p-2 sm:p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="w-1/2 p-2 sm:p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 sm:p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              className="w-full p-2 sm:p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
            name="message"
              placeholder="Message"
              className="w-full p-2 sm:p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white h-24 sm:h-32 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#F94714] text-white py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-orange-600 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={formimg}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Contactsus;
