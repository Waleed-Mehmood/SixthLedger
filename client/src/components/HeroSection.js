import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";
import herobg from "../assets/hero-bg.png";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 pb-20">
      <div className="container mx-auto px-4">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold flex items-center">
            <img src={Logo} alt="logo" className="h-8 md:w-30 md:h-9 mr-2" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            {["Home", "Services", "About", "Team", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-[#F94714] cursor-pointer text-lg md:text-xl px-2"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FiX className="text-3xl text-[#F94714]" />
              ) : (
                <FiMenu className="text-3xl text-gray-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 bg-white p-5 shadow-md rounded-lg absolute top-16 right-4 w-48 z-50">
            {["Home", "Services", "About", "Team", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-[#F94714] cursor-pointer text-base text-gray-700"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        )}

        {/* Hero Section */}
        <div className="relative">
          <img
            src={herobg}
            alt="Hero Background"
            className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover brightness-50 rounded-3xl"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-5">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              You Handle The <span className="text-[#F94714]">Business</span>
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-1">
              We Handle The <span className="text-[#F94714]">Numbers</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm sm:text-base md:text-lg">
              SFR is a highly fragmented asset class. It's easy to lose your way
              amidst billions of data points.
            </p>
            <button className="mt-5 px-5 sm:px-6 py-2 text-sm sm:text-lg bg-[#F94714] text-black rounded-full hover:bg-orange-600 transition">
              Book Consultation
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="relative hidden sm:block">
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex justify-between space-x-4 p-6 sm:p-8 bg-white shadow-md rounded-3xl mx-auto w-[90%] max-w-4xl">
            {[
              "Bookkeeping",
              "Payroll Management",
              "Internal Audit",
              "Tax Computation",
            ].map((service, index) => (
              <div
                key={index}
                className="text-[#F94714] font-semibold text-xs sm:text-sm md:text-base lg:text-lg"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;