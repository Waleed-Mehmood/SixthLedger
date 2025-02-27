import React from 'react';

function OurProcess() {
  const steps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "share your needs"
    },
    {
      number: 2,
      title: "Compatibility Check",
      description: "we make sure it's a fit"
    },
    {
      number: 3,
      title: "Hassle-Free Setup",
      description: "we handle the heavy lifting"
    },
    {
      number: 4,
      title: "Custom Agreement",
      description: "no hidden fees,ever"
    },
  ];

  return (
    <div className='bg-[#E7E7E7] '>
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-[#f94713]">Process</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-16 max-w-3xl mx-auto">
          From chaos to clarify your bookkeeping journey with us
        </p>

        {/* Timeline */}
        <div className="relative flex justify-between items-center mb-12">
          <div className="absolute w-full h-0.5 bg-gray-300 top-1/2 left-0 hidden md:block"></div>
          {steps.map((_, index) => (
            <div key={index} className="relative flex flex-col items-center w-1/4">
              <div className="w-5 h-5 bg-gray-900 rounded-full border-4 flex items-center justify-center text-orange-500 font-bold text-lg"></div>
            </div>
          ))}
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative rounded-xl shadow-xl bg-gradient-to-bl from-[#000] via-red-800 to-amber-700 text-white p-8 sm:p-10 md:p-12 h-full flex flex-col justify-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-900 text-orange-500 font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 mt-6 text-white">{step.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
