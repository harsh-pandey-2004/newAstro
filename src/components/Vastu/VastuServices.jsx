import React from "react";

const ServicesWeProvide = () => {
  const services = [
    {
      title: "HOME VASTU",
      description:
        "Key principles of Home Vastu include the proper orientation of rooms, placement of furniture, and selection of colors to optimize energy flow.",
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      symbol: "♋", // Replace with your zodiac symbols or SVG paths
    },
    {
      title: "OFFICE VASTU",
      description:
        "Office Vastu focuses on the strategic arrangement of office elements to harness positive energy flow.",
      image: "https://via.placeholder.com/300",
      symbol: "♌",
    },
    {
      title: "COMMERCIAL VASTU",
      description:
        "The layout and orientation of commercial spaces are tailored to enhance financial stability, customer flow, and overall business growth.",
      image: "https://via.placeholder.com/300",
      symbol: "♉",
    },
    {
      title: "VASTU TIPS",
      description:
        "Vastu tips offer practical guidance for aligning your living or working spaces with harmonious energies to enhance well-being and prosperity.",
      image: "https://via.placeholder.com/300",
      symbol: "♊",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-12 px-6">
      <h2 className="text-black text-center text-4xl font-bold mb-10">
        SERVICES WE PROVIDE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white border-2 border-yellow-400 rounded-md p-4 shadow-lg"
          >
            {/* Background Zodiac Symbol */}
            <div className="absolute text-yellow-300 text-8xl font-bold -z-10 opacity-10">
              {service.symbol}
            </div>
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            {/* Title */}
            <h3 className="text-black text-2xl font-bold">{service.title}</h3>
            {/* Description */}
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeProvide;
