import React from "react";
import bkgimg from "../assets/TeamBg.png";
import img1 from "../assets/5.png";
import img3 from "../assets/6.png";
import img2 from "../assets/4.png";

const teamMembers = [
  {
    name: "Shayan Ahmed Shujaat",
    title: "ACCA Affiliate",
    image: img1, // Replace with actual image path
  },
  {
    name: "Amaz Liaquat Khan",
    title: "Attorney at Law University of London",
    image: img3, // Replace with actual image path
  },
  {
    name: "Hamza Sadaqat",
    title: "ACCA Affiliate",
    image: img2, // Replace with actual image path
  },
];

const OurTeam = () => {
  return (
    <div className="bg-[#202427]">
      <div
        className="py-36 px-6 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bkgimg})` }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
          Meet Our <span className="text-[#f94713]">Team</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative  bg-gradient-to-b from-[#F94714] to-[#401205] pt-6 px-0 pb-0 rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-64 object-cover object-center rounded-md"
                />
                
              </div>
              <h3 className="text-white text-lg font-semibold mt-4">
                {member.name}
              </h3>
              <p className="text-white text-sm bg-[#F94714] px-2 py-1 rounded-md mt-2">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
