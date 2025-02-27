// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { MdLocationOn, MdPhone } from "react-icons/md";
// import { HiMail } from "react-icons/hi";
// import footer from "../assets/sixthLedger-footer.png";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-5">
//       {/* Newsletter Section */}
//       <div className="bg-[#979797] mx-auto max-w-6xl rounded-lg p-6 text-center">
//       <div className="flex justify-center items-center p-8 rounded-lg w-full">
//       <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
//         {/* Left Text Section */}
//         <div className="text-left mb-4 md:mb-0">
//           <h2 className="text-[2rem] font-bold text-black">
//             Subscribe Newsletters
//           </h2>
//           <p className="text-black mt-3">Stay Informed, Stay Ahead</p>
//         </div>

//         {/* Right Input Section */}
//         <div className="flex bg-black rounded-lg overflow-hidden w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="bg-black text-white px-4 py-2 outline-none flex-1"
//           />
//           <button className="bg-orange-500 text-white px-6 py-2 font-semibold">
//             Subscribe
//           </button>
//         </div>
//       </div>
//     </div>
//       </div>

//       {/* Footer Content */}
//       <div className="container mx-auto px-24 py-10">
//         <div className="flex flex-wrap justify-between">
//           {/* Navigation Links */}
//           <nav className="mb-6 md:mb-0">
//             <ul className="flex space-x-6 text-gray-400">
//               <li><a href="#" className="hover:text-white">Home</a></li>
//               <li><a href="#" className="hover:text-white">Services</a></li>
//               <li><a href="#" className="hover:text-white">About</a></li>
//               <li><a href="#" className="hover:text-white">Team</a></li>
//               <li><a href="#" className="hover:text-white">Contact</a></li>
//             </ul>
//           </nav>

//           {/* Social Media */}
//           <div className="flex space-x-4">
//             <span className="text-gray-400">Social Media</span>
//             <FaFacebookF className="text-[#F94714] cursor-pointer hover:text-white mt-1" />
//             <FaLinkedinIn className="text-[#F94714] cursor-pointer hover:text-white mt-1" />
//             <FaInstagram className="text-[#F94714] cursor-pointer hover:text-white mt-1" />
//           </div>

//           {/* Contact Details */}
//           <div className="text-gray-400">
//             <p className="flex items-center">
//               <MdLocationOn className="text-[#F94714] mr-4" />
//               DHA Phase 2, Islamabad
//             </p>
//             <p className="flex items-center">
//               <MdPhone className="text-[#F94714] mr-4" />
//               +92 347 5105144
//             </p>
//             <p className="flex items-center">
//               <HiMail className="text-[#F94714] mr-4" />
//               info@sixthledger.com
//             </p>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-500 text-sm">
//           <p>© 2025 SixthLedger. All rights reserved.</p>
//           <img src={footer} alt="Sixth Ledger" className="h-10" />
//           <div className="flex space-x-6">
//             <a href="#" className="hover:text-white">Terms of Service</a>
//             <a href="#" className="hover:text-white">Privacy Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import footer from "../assets/sixthLedger-footer.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-5 flex justify-center">
      <div className="container">
        {/* Newsletter Section */}
      <div className="bg-[#979797] mx-auto max-w-6xl rounded-lg p-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 w-full">
          {/* Left Text Section */}
          <div className="text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-black text-center md:text-left">
              Subscribe Newsletters
            </h2>
            <p className="text-black mt-2 text-center md:text-left">
              Stay Informed, Stay Ahead
            </p>
          </div>

          {/* Right Input Section */}
          <div className="flex flex-col sm:flex-row w-full max-w-md bg-black rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white px-4 py-2 outline-none flex-1 w-full"
            />
            <button className="bg-orange-500 text-white px-6 py-2 font-semibold w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-12 sm:px-0 py-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          {/* Navigation Links */}
          <nav className="text-center md:text-left">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </nav>

          {/* Social Media */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
            <span className="text-gray-400">Social Media</span>
            <div className="flex space-x-3">
              <FaFacebookF className="text-[#F94714] cursor-pointer hover:text-white" />
              <FaLinkedinIn className="text-[#F94714] cursor-pointer hover:text-white" />
              <FaInstagram className="text-[#F94714] cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="text-gray-400 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start">
              <MdLocationOn className="text-[#F94714] mr-2" />
              DHA Phase 2, Islamabad
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <MdPhone className="text-[#F94714] mr-2" />
              +92 347 5105144
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <HiMail className="text-[#F94714] mr-2" />
              info@sixthledger.com
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-gray-500 text-sm space-y-4 md:space-y-0">
          <p className="text-center">© 2025 SixthLedger. All rights reserved.</p>
          <img src={footer} alt="Sixth Ledger" className="h-10 mx-auto md:mx-0" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
