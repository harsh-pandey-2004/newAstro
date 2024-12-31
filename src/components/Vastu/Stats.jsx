import React from 'react';
import { Users, CheckSquare, SmilePlus } from 'lucide-react';

const ServiceStats = () => {
  const stats = [
    {
      icon: <CheckSquare className="w-12 h-12 text-white" />,
      value: "15,324+",
      label: "Total Booking"
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      value: "120 Pandits Available",
      label: "Pandits Available"
    },
    {
      icon: <SmilePlus className="w-12 h-12 text-white" />,
      value: "92%",
      label: "Customer Satisfaction"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <div className="mt-4 text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;