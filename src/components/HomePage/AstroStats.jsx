import React from 'react';
import poojaicon from '../../assets/image/poojaicon.png';
import minuteicon from '../../assets/image/minuteicon.png';
import usericon from '../../assets/image/usericon.png';
const StatsCounter = () => {
  const stats = [
    {
      icon: poojaicon,
      value: "22,758+",
      label: "Total Pooja"
    },
    {
      icon:minuteicon,
      value: "711 Million Minutes",
      label: "Total Minutes of Live Pooja"
    },
    {
      icon: usericon,
      value: "46 Million",
      label: "Total Customers"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFA600] to-[#FBFF00] py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 text-white mb-4">
              {typeof stat.icon === 'string' ? (
                <img src={stat.icon} alt={stat.label} className="w-full h-full object-cover " />
              ) : (
                stat.icon
              )}
            </div>
            <h3 className="text-3xl font-bold  text-white mb-2">{stat.value}</h3>
            <p className="text-lg text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default StatsCounter;
