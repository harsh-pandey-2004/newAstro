import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import Dheeresh from '../../assets/image/Dheeresh.png'

const SpecialistProfile = () => {
  const specialists = [
    {
      name: "Dr. Dhanwesh Nayak",
      occupation: "Structural Engineer",
      qualifications: [
        "BTECH-Civil Engineering - Motion Minder Mahaviya University of Technology",
        "MTECH-Structural Engineering - Indian Institute of Technology (Banaras Hindu University), Varanasi"
      ],
      achievements: [
        "Seasoned Structural Consultant with extensive experience in designing various types of structures",
        "Expertise includes design of steel structures, water tanks, industrial facilities, commercial structures, and high-rise buildings"
      ],
      experience: "15 years"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="text-3xl font-bold">Our </span>
          <span className="text-3xl font-bold text-yellow-400">Specialists</span>
        </h2>

        <div className="space-y-8">
          {specialists.map((specialist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
              <div className="w-48 h-48 flex-shrink-0">
                <img src= {Dheeresh} alt={specialist.name} className="w-full h-full object-cover rounded" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">{specialist.name}</h3>
                <p className="text-gray-600 mb-4">Occupation: {specialist.occupation}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">🎓 Qualifications</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {specialist.qualifications.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">🏆 Achievements</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {specialist.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-gray-600">Experience: {specialist.experience}</p>
                  <div className="flex gap-3">
                    <Linkedin className="w-5 h-5 text-blue-600 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-blue-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialistProfile;