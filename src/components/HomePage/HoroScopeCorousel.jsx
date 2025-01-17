import React, { useState, useEffect } from "react";
import Aries from "../../assets/image/Aries.png";
import Aquarius from "../../assets/image/Aquarius.png";
import Cancer from "../../assets/image/cancer.png";
import Capricorn from "../../assets/image/capricorn.png";
import Gemini from "../../assets/image/gemini.png";
import leo from "../../assets/image/leo.png";
import Libra from "../../assets/image/libra.png";
import pisces from "../../assets/image/pisces.png";
import scorpio from "../../assets/image/scorpio.png";
import tauras from "../../assets/image/tauras.png";
import virgo from "../../assets/image/virgo.png";
import Sagittarius from "../../assets/image/Sagittauris.png";

const HoroscopeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const horoscopeData = [
    {
      id: 1,
      title: "ARIES",
      image: Aries,
      date: "MAR 21 - APR 19",
      description: "Aries is the first astrological sign in the zodiac.",
    },
    {
      id: 2,
      title: "TAURUS",
      image: tauras,
      date: "APR 20 - MAY 20",
      description: "Taurus is an earth sign represented by the bull.",
    },
    {
      id: 3,
      title: "GEMINI",
      image: Gemini,
      date: "MAY 21 - JUN 20",
      description: "Gemini is an air sign associated with communication.",
    },
    {
      id: 4,
      title: "CANCER",
      image: Cancer,
      date: "JUN 21 - JUL 22",
      description: "Cancer is a water sign ruled by the moon.",
    },
    {
      id: 5,
      title: "LEO",
      image: leo,
      date: "JUL 23 - AUG 22",
      description: "Leo is a fire sign ruled by the sun.",
    },
    {
      id: 6,
      title: "VIRGO",
      image: virgo,
      date: "AUG 23 - SEP 22",
      description: "Virgo is an earth sign known for its attention to detail.",
    },
    {
      id: 7,
      title: "LIBRA",
      image: Libra,
      date: "SEP 23 - OCT 22",
      description: "Libra is an air sign associated with balance and harmony.",
    },
    {
      id: 8,
      title: "SCORPIO",
      image: scorpio,
      date: "OCT 23 - NOV 21",
      description: "Scorpio is a water sign known for its intensity.",
    },
    {
      id: 9,
      title: "SAGITTARIUS",
      image: Sagittarius,
      date: "NOV 22 - DEC 21",
      description:
        "Sagittarius is a fire sign known for its adventurous spirit.",
    },
    {
      id: 10,
      title: "CAPRICORN",
      image: Capricorn,
      date: "DEC 22 - JAN 19",
      description: "Capricorn is an earth sign associated with ambition.",
    },
    {
      id: 11,
      title: "AQUARIUS",
      image: Aquarius,
      date: "JAN 20 - FEB 18",
      description: "Aquarius is an air sign known for its innovation.",
    },
    {
      id: 12,
      title: "PISCES",
      image: pisces,
      date: "FEB 19 - MAR 20",
      description:
        "Pisces is a water sign associated with creativity and empathy.",
    },
  ];

  // Function to calculate visible slides based on the window size
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  // Update visible slides based on window size
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize visible slides on first render
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDotClick = (index) => {
    let newIndex = index;
    if (index > horoscopeData.length - visibleSlides) {
      newIndex = horoscopeData.length - visibleSlides;
    }
    setCurrentIndex(newIndex);
  };

  const isSignVisible = (index) => {
    return index >= currentIndex && index < currentIndex + visibleSlides;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-12">
        TODAY'S HOROSCOPE
      </h1>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleSlides)
              }%)`,
            }}
          >
            {horoscopeData.map((horoscope) => (
              <div
                key={horoscope.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-32 h-32 ">
                    <img
                      src={horoscope.image}
                      alt={horoscope.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-sm text-center">{horoscope.description}</p>
                  <h3 className="font-normal text-sm mb-1 mt-3">
                    {horoscope.title}
                  </h3>
                  <p className="text-sm text-gray-500">{horoscope.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-2 flex-wrap max-w-lg mx-auto gap-y-2">
          {horoscopeData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isSignVisible(index)
                  ? "bg-yellow-400 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
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
