import React from "react";
import Logo from "../assets/logo.png";
import herobg from "../assets/hero-bg.png";

const HeroSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-2">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-7">
          <div className="text-2xl font-bold flex items-center">
            <img src={Logo} alt="logo" className="w-30 h-9 mr-2" />
          </div>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer text-xl px-2">Home</li>
            <li className="hover:text-orange-500 cursor-pointer text-xl px-2">Services</li>
            <li className="hover:text-orange-500 cursor-pointer text-xl px-2">About</li>
            <li className="hover:text-orange-500 cursor-pointer text-xl px-2">Team</li>
            <li className="hover:text-orange-500 cursor-pointer text-xl px-2">Contact</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <div className="relative">
          <img
            src={herobg}
            alt="Hero Background"
            className="w-full h-[550px] object-cover brightness-50 rounded-3xl"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-5">
            <h1 className="text-3xl md:text-6xl font-semibold">
              You Handle The <span className="text-orange-500">Business</span>
            </h1>
            <h1 className="text-3xl md:text-6xl font-semibold mt-1">
              We Handle The <span className="text-orange-500">Numbers</span>
            </h1>
            <p className="mt-3 max-w-lg">
              SFR is a highly fragmented asset class. It's easy to lose your way
              amidst billions of data points.
            </p>
            <button className="mt-5 px-6 py-2 bg-orange-500 text-black rounded-full hover:bg-orange-600 transition">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex justify-center space-x-4 mt-5 p-5 bg-white shadow-md rounded-lg mx-auto max-w-4xl">
          {["Bookkeeping", "Payroll Management", "Internal Audit", "Tax Computation"].map((service, index) => (
            <div key={index} className="text-orange-500 font-semibold">
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
