import React from 'react';
import AstroImage from '../../assets/image/AstroImage.png'

const AstrologyHero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AstroImage})` // Replace with actual image URL in production
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 flex items-center min-h-screen bg-gradient-to-r from-black/70 to-transparent">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
               Our Astrocounselors
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Toward Your True Destiny
            </p>
            
            {/* Call-to-action button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
              Book a call
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 p-8 hidden md:block">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="w-16 h-16 rounded-full bg-orange-600/20 backdrop-blur-sm"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstrologyHero;