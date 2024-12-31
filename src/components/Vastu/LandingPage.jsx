import React from 'react';
import Vastubg from '../../assets/image/Vastubg.png';

const VastuShastraCard = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${Vastubg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative text-white max-w-4xl p-8 rounded-md shadow-md bg-gray-800">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Vastu Shastra: Harmonizing Your Space
        </h1>

        {/* Items Grid */}
        <div className="grid grid-cols-3 gap-6 items-center">
          {/* Left Items */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-teal-500 w-16 h-16 rounded-full shadow-md"></div>
            <div className="bg-green-500 w-10 h-10 rounded-full shadow-md"></div>
          </div>

          {/* Center Section */}
          <div className="bg-[#1F1F1F] p-6 rounded-md shadow-lg relative">
            <div className="absolute top-4 left-4 text-sm text-gray-500">Paper Layout</div>
            <div className="border border-gray-700 rounded-md h-48"></div>
          </div>

          {/* Right Items */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-red-500 w-16 h-16 rounded-full shadow-md"></div>
            <div className="bg-blue-500 w-10 h-10 rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VastuShastraCard;
