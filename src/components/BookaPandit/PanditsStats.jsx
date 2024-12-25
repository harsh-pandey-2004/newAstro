import React from "react";

const StatisticsSection = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Total Booking */}
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white">15,324+</div>
          <div className="mt-2 text-lg text-white">Total Booking</div>
        </div>

        {/* Pandits Available */}
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white">120+</div>
          <div className="mt-2 text-lg text-white">Pandits Available</div>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-white">92%</div>
          <div className="mt-2 text-lg text-white">Customer Satisfaction</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
