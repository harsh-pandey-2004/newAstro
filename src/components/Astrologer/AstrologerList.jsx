import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// const astrologers = [
//   {
//     id: 1,
//     name: "Rishabh Tiwari",
//     experience: "Vedic Astrology",
//     price: "₹10/min",
//     rating: 4.5,
//     reviews: 25,
//     languages: "English, Hindi, kannada",
//     isOnline: true,
//   },
//   {
//     id: 2,
//     name: "Rishabh Tiwari",
//     experience: "Vedic Astrology",
//     price: "₹10/min",
//     rating: 4.8,
//     reviews: 34,
//     languages: "English, Hindi, kannada",
//     isOnline: true,
//   },
//   {
//     id: 3,
//     name: "Rishabh Tiwari",
//     experience: "Vedic Astrology",
//     price: "₹10/min",
//     rating: 4.6,
//     reviews: 28,
//     languages: "English, Hindi, kannada",
//     isOnline: true,
//   },
// ];

const AstrologerCard = ({ astrologer, isSelected }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/astrologer/${astrologer._id}`, { state: { astrologer } });
  };
  return (
    <div
      onClick={handleCardClick}
      className={`border p-4 flex items-start gap-4 cursor-pointer ${
        isSelected ? "border-yellow-400" : "border-gray-200"
      }`}
    >
      <div className="w-12 h-12 relative">
        <img
          src={astrologer.image}
          alt={astrologer.firstName}
          className="rounded-full bg-gray-200"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-base">{astrologer.firstName}</h3>
            <p className="text-xs text-gray-600">{astrologer.experience}</p>
          </div>
          <div className="text-xs text-gray-600">
            {astrologer.languages + " "}
          </div>
        </div>

        <div className="flex items-center gap-1 my-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.floor(astrologer.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-600 ml-1">
            {astrologer.reviews}
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="text-sm">₹{astrologer.talkPrice}/min</span>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              Call
            </button>
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AstrologerListing = () => {
  const [astrologer, setAstrologer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/astrologer-data`
        );
        setAstrologer(response.data.Astrodata);
        // console.log(response.data.Astrodata);
      } catch (error) {
        console.error("Error fetching astrologer data:", error);
      }
    };
    fetchData();
  }, []);
  // const location = useLocation();
  // const astrologerData =
  //   location.state?.astrologer ||
  //   JSON.parse(localStorage.getItem("astrologerData") || "[]");
  // console.log(astrologerData);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="bg-yellow-400 text-black py-2 px-4 text-center mb-4">
        <h1 className="text-lg font-medium">Talk to Astrologer</h1>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4 px-4">
        <div className="flex gap-4">
          <select className="border rounded px-2 py-1 text-sm">
            <option>BUDGET SNAPSHOT</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>₹ 0-100</option>
          </select>
        </div>
        <div className="flex gap-4 items-center">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Sort by</option>
          </select>
          <div className="relative">
            <input
              type="search"
              placeholder="Search name..."
              className="border rounded pl-2 pr-8 py-1 text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-xs px-2 rounded">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Astrologer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {astrologer.map((astrologer, index) => (
          <AstrologerCard
            key={astrologer.id}
            astrologer={astrologer}
            isSelected={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default AstrologerListing;
