import React, { useState } from 'react';

const TempleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const temples = [
    {
      name: "Tirupati Balaji Temple",
      location: "Tirumala, Andhra Pradesh",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Kashi Vishwanath Temple",
      location: "Varanasi, Uttar Pradesh",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Vaishno Devi Temple",
      location: "Katra, Jammu and Kashmir",
      image: "/api/placeholder/400/300"
    },
    {
      name: "Meenakshi Temple",
      location: "Madurai, Tamil Nadu",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">
          Top <span className="text-white">E-Pooja</span> Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {temples.map((temple, index) => (
            <div key={index} className="relative group">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{temple.name}</h3>
                  <p className="text-sm opacity-90">{temple.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {temples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempleCarousel;