import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import axios from "axios";
import sun from "../../assets/image/Sunimg.png"; // Import the sun image
import { useNavigate } from "react-router-dom";

const AstrologerCard = ({ firstName, languages, experience, Skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
    <div className="w-24 h-24 mx-auto mb-4 relative">
      <img
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

const Astrologers = () => {
  const [astrologer, setAstrologer] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/astrologer-data`
        );
        setAstrologer(response.data.Astrodata);
      } catch (error) {
        console.error("Error fetching astrologer data:", error);
      }
    };
    fetchData();
  }, []);

  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // Desktop
      if (window.innerWidth >= 768) return 2; // Tablet
      return 1; // Mobile
    }
    return 1;
  };

  const handleDotClick = (dotIndex) => {
    const astrologersPerSection = Math.ceil(astrologer.length / 3);
    const newIndex = dotIndex * astrologersPerSection;
    setCurrentIndex(Math.min(newIndex, astrologer.length - getVisibleSlides()));
  };

  const getCurrentDot = () => {
    const astrologersPerSection = Math.ceil(astrologer.length / 3);
    return Math.floor(currentIndex / astrologersPerSection);
  };

  const nextSlide = () => {
    const maxIndex = astrologer.length - getVisibleSlides();
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      className="relative py-12 px-4 "
      style={{
        backgroundImage: `url(${sun})`, // Set the background image to the sun image
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundSize: "700px 500px", // Set a specific size for the background image (you can adjust the size here)
      }}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-black">Our Astrologers</h2>
          <button
            onClick={() => {
              navigate("/astro-page");
            }}
            className="text-yellow-600 hover:text-yellow-700 border-2 border-orange-400 p-2 rounded-md"
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
            {astrologer.map((astro, index) => (
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
        <div className="flex justify-center items-center mt-8 space-x-2">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                getCurrentDot() === dotIndex
                  ? "bg-yellow-400 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Astrologers;
