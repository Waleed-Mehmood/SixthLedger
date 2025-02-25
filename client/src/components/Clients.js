// import React from "react";
// import logo1 from "../assets/logos/logo1.jpg";
// import logo2 from "../assets/logos/logo2.jpg";
// import logo3 from "../assets/logos/logo3.jpg";
// import logo4 from "../assets/logos/logo4.jpg";
// import logo5 from "../assets/logos/logo5.jpg";
// import logo6 from "../assets/logos/logo6.jpg";

// export default function Clients() {
//   const clientLogos = [
//     logo1,
//     logo2,
//     logo3,
//     logo4,
//     logo5,
//     logo6,
//   ];

//   return (
//     <section className="py-10">
//         <div className="container mx-auto px-4 mb-4">
//       {/* Title */}
//       <h2 className="text-3xl font-semibold text-black">
//           Our <span className="text-orange-500">Clients</span>
//         </h2>
//         </div>
//       <div className="container-fluid py-5 px-4 bg-gray-900">
//         {/* Scrolling Logos */}
//         <div className="overflow-hidden relative">
//           <div className="flex space-x-6 animate-scroll">
//             {clientLogos.map((logo, index) => (
//               <div key={index} className="flex-none bg-gray-800 p-4 rounded-lg">
//                 <img
//                   src={logo}
//                   alt={`Client ${index + 1}`}
//                   className="h-16 md:h-20 lg:h-24 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import logo1 from "../assets/logos/logo1.jpg";
import logo2 from "../assets/logos/logo2.jpg";
import logo3 from "../assets/logos/logo3.jpg";
import logo4 from "../assets/logos/logo4.jpg";
import logo5 from "../assets/logos/logo5.jpg";
import logo6 from "../assets/logos/logo6.jpg";

export default function Clients() {
  const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 mb-4">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-black">
          Our <span className="text-orange-500">Clients</span>
        </h2>
      </div>
      <div className="container-fluid py-5 px-4 bg-gray-900">
        {/* Scrolling Logos */}
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 animate-scroll">
            {Array(10) // Duplicate the list 10 times for seamless scrolling
              .fill(clientLogos)
              .flat()
              .map((logo, index) => (
                <div
                  key={index}
                  className="flex-none bg-gray-800 p-4 rounded-lg"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-16 md:h-20 lg:h-24 object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
