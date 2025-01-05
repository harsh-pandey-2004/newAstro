import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import axios from "axios";

const AstrologerCard = ({ firstName, languages, experience, Skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
    <div className="w-24 h-24 mx-auto mb-4 relative">
      <img
        src="/api/placeholder/96/96"
        alt={firstName}
        className="rounded-full w-full h-full object-cover border-4 border-yellow-400"
      />
    </div>
    <h3 className="font-bold text-lg mb-1">{firstName}</h3>
    <p className="text-gray-600 text-sm mb-1">{languages}</p>
    <p className="text-yellow-500 text-sm mb-1">{experience}</p>
    <p className="text-gray-600 text-sm mb-2">{Skills}</p>
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  </div>
);

const AstroCouncellor = () => {
  const [astroCouncellor, setAstroCouncellor] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://astrobackend.onrender.com/api/astroCouncelor-data"
        );
        setAstroCouncellor(response.data.Astrodata);
      } catch (error) {
        console.error("Error fetching astrologer data:", error);
      }
    };
    fetchData();
  }, []);

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const handleDotClick = (dotIndex) => {
    const counselorsPerSection = Math.ceil(astroCouncellor.length / 3);
    const newIndex = dotIndex * counselorsPerSection;
    setCurrentIndex(Math.min(newIndex, astroCouncellor.length - getVisibleSlides()));
  };

  const getCurrentDot = () => {
    const counselorsPerSection = Math.ceil(astroCouncellor.length / 3);
    return Math.floor(currentIndex / counselorsPerSection);
  };

  return (
    <div className="relative py-12 px-4 overflow-hidden">
      {/* Sun Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-yellow-100 rounded-full opacity-20"></div>
        <div className="absolute w-[700px] h-[700px] animate-spin-slow">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-8 bg-yellow-200 opacity-20"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Our Councellors</h2>
          <button
            onClick={() => {
              const newUrl = window.location.pathname + "?view=all";
              window.history.pushState({ path: newUrl }, '', newUrl);
            }}
            className="text-yellow-600 hover:text-yellow-700"
          >
            View All
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
            }}
          >
            {astroCouncellor.map((astro, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4"
              >
                <AstrologerCard
                  firstName={astro.firstName}
                  languages={astro.languages}
                  experience={astro.experience}
                  Skills={astro.Skills}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Three Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`h-2 rounded-full transition-all ${
                getCurrentDot() === dotIndex
                  ? "w-8 bg-yellow-400"
                  : "w-2 bg-gray-400"
              }`}
              aria-label={`Go to section ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstroCouncellor;