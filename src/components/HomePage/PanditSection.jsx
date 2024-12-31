import React, { useState } from 'react';
import pandit from '../../assets/image/pandit.png';

const PanditsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const pandits = Array(4).fill({
    name: "Alok Singh",
    image: pandit
  });

  return (
    <div className="bg-yellow-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Our Pandits</h2>
          <button className="text-black hover:text-gray-700">View All</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pandits.map((pandit, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={pandit.image}
                alt={pandit.name}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-center font-medium">{pandit.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === dot ? 'w-8 bg-black' : 'w-2 bg-gray-400'
              }`}
              aria-label={`Slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanditsSlider;