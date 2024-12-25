import React, { useState } from 'react';

const horoscopeData = [
  {
    id: 1,
    title: "ARIES",
    date: "MAR 21 - APR 19",
    description: "Aris is the first astrological sign in a zodiac."
  },
  {
    id: 2,
    title: "ARIES",
    date: "MAR 21 - APR 19",
    description: "Aris is the first astrological sign in a zodiac."
  },
  {
    id: 3,
    title: "ARIES",
    date: "MAR 21 - APR 19",
    description: "Aris is the first astrological sign in a zodiac."
  },
  {
    id: 4,
    title: "ARIES",
    date: "MAR 21 - APR 19",
    description: "Aris is the first astrological sign in a zodiac."
  }
];

const HoroscopeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-12">TODAY'S HOROSCOPE</h1>
      
      <div className="relative">
        {/* Blue line */}
        <div className="absolute top-24 left-0 w-full h-0.5 bg-blue-500"></div>
        
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {horoscopeData.map((horoscope, index) => (
            <div key={horoscope.id} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mb-6">
                {/* Aries symbol - replace with actual SVG if needed */}
                <svg viewBox="0 0 24 24" className="w-full h-full p-4 text-white">
                  <path 
                    fill="currentColor"
                    d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
                  />
                </svg>
              </div>
              <p className="text-center text-sm mb-2">{horoscope.description}</p>
              <h3 className="font-bold text-lg mb-1">{horoscope.title}</h3>
              <p className="text-sm text-gray-600">{horoscope.date}</p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-yellow-400 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeSlider;