import React, { useState, useEffect } from "react";
import axios from "axios";

const PanditsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pandits, setPandits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/getAllPandits`
        );
        console.log(response.data.PanditData);
        setPandits(response.data.PanditData);
      } catch (error) {
        console.error("Error fetching pandit data:", error);
      }
    };
    fetchData();
  }, []);

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 3; // Tablet
      return 2; // Mobile
    }
    return 2;
  };

  const getTotalSections = () => {
    const visibleSlides = getVisibleSlides();
    return Math.ceil(pandits.length / visibleSlides);
  };

  const handleDotClick = (dotIndex) => {
    const visibleSlides = getVisibleSlides();
    const newIndex = dotIndex * visibleSlides;
    setCurrentIndex(Math.min(newIndex, pandits.length - visibleSlides));
  };

  const getCurrentDot = () => {
    const visibleSlides = getVisibleSlides();
    return Math.floor(currentIndex / visibleSlides);
  };

  return (
    <div className="bg-gradient-to-b from-[#FFD700] to-[#FFA600] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold">Our Pandits</h2>
          <button
            onClick={() => {
              const newUrl = window.location.pathname + "?view=all";
              window.history.pushState({ path: newUrl }, "", newUrl);
            }}
            className="text-black hover:text-gray-700 bg-white px-3 rounded-lg border py-2 font-semibold"
          >
            View All
          </button>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getVisibleSlides())
              }%)`,
            }}
          >
            {pandits.map((pandit, index) => (
              <div key={index} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 px-2">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
                  <img
                    src={pandit.image}
                    alt={pandit.firstName}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white text-center font-medium">
                      {pandit.firstName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Dot Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: getTotalSections() }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`h-2 rounded-full transition-all ${
                getCurrentDot() === dotIndex
                  ? "w-8 bg-black"
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

export default PanditsSlider;
