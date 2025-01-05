import React, { useState } from 'react';

const HoroscopeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const horoscopeData = [
    {
      id: 1,
      title: "ARIES",
      date: "MAR 21 - APR 19",
      description: "Aries is the first astrological sign in the zodiac.",
    },
    {
      id: 2,
      title: "TAURUS",
      date: "APR 20 - MAY 20",
      description: "Taurus is an earth sign represented by the bull.",
    },
    {
      id: 3,
      title: "GEMINI",
      date: "MAY 21 - JUN 20",
      description: "Gemini is an air sign associated with communication.",
    },
    {
      id: 4,
      title: "CANCER",
      date: "JUN 21 - JUL 22",
      description: "Cancer is a water sign ruled by the moon.",
    },
    {
      id: 5,
      title: "LEO",
      date: "JUL 23 - AUG 22",
      description: "Leo is a fire sign ruled by the sun.",
    },
    {
      id: 6,
      title: "VIRGO",
      date: "AUG 23 - SEP 22",
      description: "Virgo is an earth sign known for its attention to detail.",
    },
    {
      id: 7,
      title: "LIBRA",
      date: "SEP 23 - OCT 22",
      description: "Libra is an air sign associated with balance and harmony.",
    },
    {
      id: 8,
      title: "SCORPIO",
      date: "OCT 23 - NOV 21",
      description: "Scorpio is a water sign known for its intensity.",
    },
    {
      id: 9,
      title: "SAGITTARIUS",
      date: "NOV 22 - DEC 21",
      description: "Sagittarius is a fire sign known for its adventurous spirit.",
    },
    {
      id: 10,
      title: "CAPRICORN",
      date: "DEC 22 - JAN 19",
      description: "Capricorn is an earth sign associated with ambition.",
    },
    {
      id: 11,
      title: "AQUARIUS",
      date: "JAN 20 - FEB 18",
      description: "Aquarius is an air sign known for its innovation.",
    },
    {
      id: 12,
      title: "PISCES",
      date: "FEB 19 - MAR 20",
      description: "Pisces is a water sign associated with creativity and empathy.",
    },
  ];

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const handleDotClick = (index) => {
    const visibleSlides = getVisibleSlides();
    // Calculate the starting index that ensures the clicked zodiac sign is visible
    let newIndex = index;
    if (index > horoscopeData.length - visibleSlides) {
      newIndex = horoscopeData.length - visibleSlides;
    }
    setCurrentIndex(newIndex);
  };

  const isSignVisible = (index) => {
    const visibleSlides = getVisibleSlides();
    return index >= currentIndex && index < currentIndex + visibleSlides;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-12">TODAY'S HOROSCOPE</h1>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
            }}
          >
            {horoscopeData.map((horoscope) => (
              <div
                key={horoscope.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 text-white">★</div>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{horoscope.title}</h3>
                  <p className="text-sm text-gray-600">{horoscope.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Dot Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-2 flex-wrap max-w-lg mx-auto gap-y-2">
          {horoscopeData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isSignVisible(index)
                  ? 'bg-yellow-400 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${horoscopeData[index].title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeCarousel;