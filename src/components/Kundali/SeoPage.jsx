import React from "react";
import Wheel from '../../assets/image/Wheel.png'

const KundliInfoSection = () => {
  return (
    <div className="min-h-screen">
      <div className="border-b border-blue-400">
        <h2 className="text-center text-lg py-3">
          Get Your Free Kundli Online and Unveil Your Future
        </h2>
        <p className="text-center text-sm text-gray-600 pb-3">
          Generate Your Kundli by Date of Birth Online
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left Content Section */}
        <div className="col-span-8 p-6">
          {/* Repeated content blocks */}
          {[...Array(10)].map((_, index) => (
            <div key={index} className="mb-4 text-sm text-gray-700">
              <p className="leading-relaxed">
                A person's Kundli is one of the most sought-after elements in
                astrology. It provides detailed information about the positions
                of stars and planets at the time of your birth, which are then
                used to make further predictions. These predictions cover
                various aspects of the birth native like career, health,
                business, finance, and marriage. Due to this diversity in
                readings, a Kundli is essential for anyone looking to improve
                their decision-making capabilities over time.
              </p>
            </div>
          ))}
        </div>

        {/* Right Panel - Fixed Position */}
        <div className="col-span-4 relative">
          <div className="sticky top-4 p-6 bg-[#1a1a1a] text-white rounded-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Discover your ideal partner with our match making service
              </h2>

              {/* Zodiac Wheel Image */}
              <div className="my-6 flex justify-center">
                <img
                  src={Wheel}
                  alt="Zodiac Wheel"

                  className="w-48 h-48 rounded-full"
                />
              </div>

              <button className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                Visit here..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KundliInfoSection;
