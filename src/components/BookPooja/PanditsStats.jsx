import React from 'react';
import { CheckCheck, Users, SmileIcon } from 'lucide-react';

const StatsShowcase = () => {
  const stats = [
    {
      icon: <CheckCheck className="w-12 h-12 text-white" />,
      value: "15,324+",
      label: "Total Booking"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      value: "120 Pandits Available",
      label: "Pandits Available"
    },
    {
      icon: <SmileIcon className="w-12 h-12 text-white" />,
      value: "92%",
      label: "Customer Satisfaction"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <div className="mt-4 text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-white text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsShowcase;