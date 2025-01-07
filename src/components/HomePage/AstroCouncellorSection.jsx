import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <p className="text-gray-600 text-sm mb-1">{languages.join(", ")}</p>
    <p className="text-yellow-500 text-sm mb-1">{`Experience: ${experience} Years`}</p>
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
  const [currentSection, setCurrentSection] = useState(0);
  const [itemsPerSection] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/astroCouncelor-data`
        );
        setAstroCouncellor(response.data.Astrodata);
      } catch (error) {
        console.error("Error fetching astrologer data:", error);
      }
    };
    fetchData();
  }, []);

  const totalSections = Math.ceil(astroCouncellor.length / itemsPerSection);
  const displayedAstroCouncellor = astroCouncellor.slice(
    currentSection * itemsPerSection,
    (currentSection + 1) * itemsPerSection
  );

  const handleDotClick = (index) => {
    setCurrentSection(index);
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
          <h2 className="text-2xl font-bold">Our Counsellors</h2>
          <button
            onClick={() => navigate("/astrocouncelor-page")}
            className="text-yellow-600 hover:text-yellow-700"
          >
            View All
          </button>
        </div>

        <div className="overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedAstroCouncellor.map((astro, index) => (
              <AstrologerCard
                key={index}
                firstName={astro.firstName}
                languages={astro.languages}
                experience={astro.experience}
                Skills={astro.skills}
              />
            ))}
          </div>
        </div>

        {/* Three Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSections)].map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`h-2 rounded-full transition-all ${
                currentSection === dotIndex
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
