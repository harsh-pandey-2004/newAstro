import React from 'react';

const UserDetailsForm = () => {
  return (
    <div className="max-w-md mx-auto">
      <div className="border rounded-lg shadow-sm p-4">
        {/* Header */}
        <div className="bg-yellow-400 text-black text-center py-2 rounded mb-4">
          User Details
        </div>

        {/* Form Fields */}
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
            />
          </div>

          {/* Birth Details */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Birth Details</label>
            <div className="grid grid-cols-3 gap-3">
              {/* Day */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Month */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>

              {/* Year */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Year</option>
                  {[...Array(100)].map((_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>{year}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Time Fields */}
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-3">
              {/* Hour */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Hour</option>
                  {[...Array(24)].map((_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>

              {/* Minute */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Minute</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>

              {/* Second */}
              <div>
                <select className="w-full border rounded px-2 py-2 text-sm focus:outline-none focus:border-gray-400">
                  <option value="">Second</option>
                  {[...Array(60)].map((_, i) => (
                    <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Birth Place */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Birth Place</label>
            <input
              type="text"
              placeholder="New Delhi (Delhi, India)"
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;