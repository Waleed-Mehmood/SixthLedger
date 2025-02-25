import React from "react";
import formimg from "../assets/Formsideimg.png";

function Contactsus() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-[#272B2E]">
          Get in <span className="text-orange-500">touch</span>
        </h1>
        <p className="text-gray-600 mt-2 font-semibold">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row bg-[#202427D9] rounded-lg shadow-lg overflow-hidden w-full max-w-6xl p-4">
        {/* Left Side - Form */}
        <div className=" text-white p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
          <p className="mb-6 text-gray-300">
            Reach out and let the magic of collaboration illuminate our skies.
          </p>
          <form className="space-y-4">
            <div className="flex space-x-4 ">
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-[#FFFFFF33] border-2 border-[#FFFFFF33]/10 text-white h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#F94714] text-white py-3 rounded hover:bg-orange-600 transition"
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
