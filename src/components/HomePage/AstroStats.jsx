import React from 'react';

const StatsCounter = () => {
  const stats = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4"/>
        </svg>
      ),
      value: "22,758+",
      label: "Total Pooja"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 7v10m0-10L7 9m5-2l5 2M5 3v18m14-18v18"/>
        </svg>
      ),
      value: "711 Million Minutes",
      label: "Total Minutes of Live Pooja"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      value: "46 Million",
      label: "Total Customers"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 text-white mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;