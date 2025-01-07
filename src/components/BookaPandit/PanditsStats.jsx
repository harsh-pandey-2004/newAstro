import React from "react";
import smile from '../../assets/image/smileicon.png';
import panditgroup from '../../assets/image/panditgroupicon.png';
import bookingicon from '../../assets/image/bookingicon.png';

const StatisticsSection = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-orange-500 py-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Total Booking */}
        <div className="flex flex-col items-center">
          <div className="w-16 mb-4">
            <img src={bookingicon} alt="Total Booking Icon" className="w-full" />
          </div>
          <div className="text-4xl font-bold text-white">15,324+</div>
          <div className="mt-2 text-lg text-white">Total Booking</div>
        </div>

        {/* Pandits Available */}
        <div className="flex flex-col items-center">
          <div className="w-16 mb-4">
            <img src={panditgroup} alt="Pandits Available Icon" className="w-full" />
          </div>
          <div className="text-4xl font-bold text-white">120+</div>
          <div className="mt-2 text-lg text-white">Pandits Available</div>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex flex-col items-center">
          <div className="w-16 mb-4">
            <img src={smile} alt="Customer Satisfaction Icon" className="w-full" />
          </div>
          <div className="text-4xl font-bold text-white">92%</div>
          <div className="mt-2 text-lg text-white">Customer Satisfaction</div>
        </div>
        
      </div>
    </div>
  );
};

export default StatisticsSection;
