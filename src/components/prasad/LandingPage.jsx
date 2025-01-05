import React from "react";
import bgImage2 from '../../assets/image/bgImage2.png'
const AstrologyYantras = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={bgImage2}

        alt="Yantras Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      
      {/* Content */}
      <div className="relative text-center max-w-lg px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Astrology Yantras</h1>
        <p className="text-lg mb-6">
          Discover powerful yantras to enhance your spiritual journey. Our
          yantras are crafted with precision to help you balance energies and
          bring positivity into your life. Each yantra is designed based on
          ancient astrological principles.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default AstrologyYantras;
