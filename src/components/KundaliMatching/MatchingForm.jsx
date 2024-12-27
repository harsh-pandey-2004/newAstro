import React, { useState } from 'react';

const HoroscopeMatchingForm = () => {
  const [activeTab, setActiveTab] = useState('boy');
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Boy's Details Section */}
        <div className="col-span-5">
          <div className="border rounded-lg p-4">
            <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
              Boy's Detail
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input 
                type="text"
                placeholder="Enter name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Details</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Hour</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Minute</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Second</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Place</label>
              <input 
                type="text"
                placeholder="New Delhi (DEL, INDIA)"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Girl's Details Section */}
        <div className="col-span-5">
          <div className="border rounded-lg p-4">
            <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
              Girl's Detail
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Name</label>
              <input 
                type="text"
                placeholder="Enter name"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Details</label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Hour</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Minute</option>
                  </select>
                </div>
                <div>
                  <select className="w-full border rounded px-2 py-2 text-sm">
                    <option>Second</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm mb-1">Birth Place</label>
              <input 
                type="text"
                placeholder="New Delhi (DEL, INDIA)"
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Saved Matches Section */}
        <div className="col-span-2">
          <div className="border rounded-lg p-4 h-full">
            <div className="text-center mb-4 font-medium">
              Saved Matches
            </div>
            
            <div className="flex items-center justify-center h-48">
              <div className="text-center text-sm text-gray-500">
                Please login to check your saved horoscope!
                <button className="block mx-auto mt-2 bg-yellow-400 text-black px-4 py-1 rounded text-sm">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Horoscope Button */}
      <div className="mt-4 text-center">
        <button className="bg-yellow-400 text-black px-8 py-2 rounded">
          Match Horoscope
        </button>
      </div>
    </div>
  );
};

export default HoroscopeMatchingForm;