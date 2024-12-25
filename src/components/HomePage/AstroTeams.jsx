import React from "react";

const MultidisciplinaryTeam = () => {
  const features = [
    "Personalized life coaching and strategic guidance",
    "Holistic wellness strategies",
    "In-depth psychological assessments",
    "Emotional intelligence development",
    "Career and personal potential mapping",
    "Relationship dynamics analysis",
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-xl font-bold mb-8">
        Our multidisciplinary team delivers
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Characters and Mobile */}
        <div className="flex justify-center items-center mb-8 relative">
          {/* Mobile illustration */}
          <div className="relative bg-gray-200 w-36 h-72 rounded-md shadow-lg">
            {/* Person inside mobile */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-yellow-300 w-16 h-24 rounded-md"></div>
          </div>
          {/* Two characters */}
          <div className="w-16 h-32 bg-red-200 rounded-md shadow-md ml-4"></div>
          <div className="w-16 h-32 bg-yellow-200 rounded-md shadow-md mr-4"></div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 shadow-md rounded-md p-4 flex items-center"
            >
              <span className="text-yellow-500 text-xl mr-2">•</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultidisciplinaryTeam;
