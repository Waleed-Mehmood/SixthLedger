import React, { useState, useEffect, useRef, useCallback } from 'react';
import bgImage from '../assets/Servicesbg.jpg';
import overlay from '../assets/servicesrec.png'
// Import service images
import bookkeepingImg from '../assets/bookkeeping.png';
import payrollImg from '../assets/payroll.png';
import taxImg from '../assets/tax.png';

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  
  const services = [
    {
      title: "Bookkeeping",
      description: "Streamline employee payroll processes for seamless and timely salary disbursements.",
      image: bookkeepingImg
    },
    {
      title: "Payroll Management",
      description: "Streamline employee payroll processes for seamless and timely salary disbursements.",
      image: payrollImg
    },
    {
      title: "Tax Computation",
      description: "Streamline employee payroll processes for seamless and timely salary disbursements.",
      image: taxImg
    },
    {
      title: "Financial Consulting",
      description: "Streamline employee payroll processes for seamless and timely salary disbursements.",
      image: bookkeepingImg // Using a placeholder image, replace with actual image
    }
  ];

  // Calculate maximum visible slides and total possible positions
  // Using useCallback to memoize this function so it can be added to useEffect dependencies
  const getMaxPositions = useCallback(() => {
    // For small screens: 1 visible item, positions = services.length
    // For medium screens: 2 visible items, positions = services.length - 1
    // For large screens: 3 visible items, positions = services.length - 2
    if (window.innerWidth < 768) return services.length;
    if (window.innerWidth < 1024) return Math.max(1, services.length - 1);
    return Math.max(1, services.length - 2);
  }, [services.length]);

  const [maxPositions, setMaxPositions] = useState(2); // Default value will be overridden
  const [visibleItems, setVisibleItems] = useState(3); // Track visible items for translateX calculation

  // Auto-scroll functionality with fixed dependencies
  useEffect(() => {
    const handleResize = () => {
      const newMaxPositions = getMaxPositions();
      setMaxPositions(newMaxPositions);
      
      // Set visible items based on screen size
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
      
      // Adjust activeIndex if needed after resize
      if (activeIndex >= newMaxPositions) {
        setActiveIndex(newMaxPositions - 1);
      }
    };

    // Initial set
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    // Start the auto-scroll interval
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % maxPositions);
    }, 5000); // Scroll every 5 seconds
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [maxPositions, activeIndex, getMaxPositions]); // Properly including all dependencies

  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset the interval when user clicks
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % maxPositions);
    }, 5000);
  };

  return (
    <div className='mt-4 text-white pt-1 px-12 bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-5 z-0" style={{ backgroundImage: `url(${overlay})` }}></div>
      <div className="absolute inset-0 z-0 bg-[#202427] bg-opacity-40" ></div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <h1 className='font-bold text-4xl mt-10 pl-6'>Our Service <span className='font-bold text-[#f94713]'>List</span></h1>
        <p className='font-[300] mt-3 w-[90%] text-xl pl-6'>We specialize in providing innovative and effective solutions to meet the unique challenges of our clients. Our goal is to deliver high-quality services that drive success and growth for businesses.</p>
        
        <div className="relative mt-12 overflow-hidden">
          <div 
            className="flex transition-transform duration-500" 
            style={{ transform: `translateX(-${activeIndex * 100 / visibleItems}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-6 transition-all duration-500 w-full md:w-1/2 lg:w-1/3"
              >
                <div className="bg-opacity-20 bg-black rounded-xl overflow-hidden border border-[#D9D9D9] h-full">
                  <div className="p-4 border border-[#D9D9D9]">
                    <h3 className="text-xl font-semibold mb-1 text-center">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 px-8 py-2 text-lg">{service.description}</p>
                  <div className="w-30 h-50 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover p-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2 pb-8">
          {Array.from({ length: maxPositions }).map((_, index) => (
            <button 
              key={index}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-orange-500' : 'w-2 bg-gray-500'}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;