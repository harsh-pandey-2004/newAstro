import React from "react";
import { useLocation } from "react-router-dom";

const AvailablePandits = () => {
  const location = useLocation();
  const { availablePandits } = location.state || {};

  if (!availablePandits || availablePandits.length === 0) {
    return (
      <div className="text-center text-lg mt-10">
        No pandits available for the selected date and pincode.
      </div>
    );
  }

  return (
    <div className="h-screen p-4 mt-4">
      <h1 className="text-2xl font-bold mb-6">Available Pandits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availablePandits.map((pandit, index) => (
          <div
            key={pandit._id || index}
            className="border rounded-lg p-4 shadow-lg bg-white"
          >
            <img
              src={pandit.image || "https://via.placeholder.com/150"}
              alt={`${pandit.firstName} ${pandit.lastName}`}
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {pandit.firstName} {pandit.lastName}
            </h2>
            <p className="mb-2">
              <strong>Experience:</strong> {pandit.experience} years
            </p>
            <p className="mb-2">
              <strong>City:</strong> {pandit.city}
            </p>
            <p className="mb-2">
              <strong>Languages:</strong> {pandit.languages.join(", ")}
            </p>
            <p className="mb-2">
              <strong>Skills:</strong> {pandit.Skills?.join(", ") || "N/A"}
            </p>
            <p className="mb-2">
              <strong>Pincode:</strong> {pandit.pincode}
            </p>
            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePandits;
