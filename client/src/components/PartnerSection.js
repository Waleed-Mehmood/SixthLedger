import React from "react";
import Partner from "../assets/partner.png";

const PartnerSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-6 py-12 px-6 md:px-16 lg:px-24">
      {/* Image Section */}
      <div className="relative md:w-1/3">
        <div className="absolute inset-0 bg-[#F94714] rounded-lg md:w-full md:h-80 -z-10 top-28"></div>
        <img
          src={Partner}
          alt="Business Woman"
          className="relative w-full h-[27rem] rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Why Partner With <span className="text-[#F94714]">Us</span>?
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-gray-700 font-semibold">
          Empowering Your Business Through Reliable{" "}
          <span className="text-[#F94714]">Financial Solutions</span>
        </p>
        <p className="mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
          We provide expert financial solutions tailored to your needs,
          including accurate bookkeeping, seamless payroll management, thorough
          audits, and precise tax computations. Simplify your finances and
          focus on growth with our trusted support.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;
