import React from "react";
import Aboutus from "../assets/about-us.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center">
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          About <span className="text-[#F94714]">Us</span>
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mt-3">
          Simplifying Financial Management for Growth
        </h3>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          At Sixth Ledger, we combine expertise and advanced tools like
          QuickBooks and Xero to deliver comprehensive financial services. From
          accurate bookkeeping and custom Excel solutions to efficient payroll
          management, our team ensures every aspect of your business’s financial
          needs is handled with precision.
        </p>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          With professional services like budgeting and forecasting, year-end
          financial statements, and strategic competitor analysis, we empower
          startups and established enterprises alike to thrive in a competitive
          market.
        </p>
        <p className="text-base md:text-lg text-gray-600 mt-4">
          Led by a team of experienced ACCA Affiliates in Pakistan, we
          prioritize accuracy, compliance, and efficiency. Partner with us for
          tailored financial solutions, ensuring clarity and success every step
          of the way.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-[#F94714] text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-md hover:text-white">
            Get Started
          </button>
          <button className="bg-[#F94714] text-black border border-orange-500 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-md hover:text-white">
            Discover More
          </button>
        </div>
      </div>
      <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
        <div className="relative md:w-[90%]">
          <div className="absolute inset-0 bg-[#F94714] rounded-3xl md:w-full md:h-80 z-3 top-40"></div>
          <img
            src={Aboutus}
            alt="Business Professional"
            className="relative w-full lg:w-[50rem] h-[27rem] md:h-[30rem] rounded-lg z-4"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
