import React from "react";
import Home4 from "../../assets/image/home4.png";
import FortuneTeller from "../../assets/image/fortunetellerImage.png";
import vastu from "../../assets/image/vastuImage.png";
import prasad from "../../assets/image/prasad.png";
import planeticon from "../../assets/image/planeticon.png";
const AstrologyServices = () => {
  const services = [
    {
      id: "01",
      title: "Free Kundli",
      description:
        "Decode your cosmic blueprint to uncover your strengths, overcome challenges and align with your destiny.",
      imageUrl: Home4,
    },
    {
      id: "02",
      title: "Compatibility Readings",
      description:
        "Build deeper, more lasting relationships with insights attuned to your unique dynamics.",
      imageUrl: FortuneTeller,
    },
    {
      id: "03",
      title: "Vastu Solutions",
      description:
        "Transform your home into a sanctuary of harmony, abundance and positive energy.",
      imageUrl: vastu,
    },
    {
      id: "04",
      title: "Prasad Offerings",
      description:
        "Strengthen your spiritual connection and invite divine blessings into your life.",
      imageUrl: prasad,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD700] to-[#FFA600] py-12 px-4 md:px-8 relative ">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="sm:w-72 sm:h-72 absolute sm:top-10 sm:left-20 w-20 h-20 top-0 left-5 pt-5">
            <img src={planeticon} alt="img" />
          </div>
          <h2 className="text-2xl font-bold mt-8 sm:mt-0">
            Discover your path in the stars with us
          </h2>
        </div>
        <p className="text-gray-700 mx-auto text-center max-w-2xl">
          Life's uncertainties can leave you overwhelmed- strained
          relationships, an uneasy home, or feeling out of sync with yourself.
          Get clarity, balance, and connection in written stars.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-4xl font-bold text-white">
                  {service.id}
                </span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstrologyServices;
