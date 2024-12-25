import React from "react";

const PanditBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://your-image-link.com')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white max-w-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Book A Pandit For Your Sacred Rituals
        </h1>
        <form className="bg-white rounded-lg shadow-lg p-6 text-black">
          <div className="mb-4">
            <select
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Pooja Name
              </option>
              <option value="pooja1">Pooja 1</option>
              <option value="pooja2">Pooja 2</option>
              <option value="pooja3">Pooja 3</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Select Pincode"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-600"
          >
            Book a Pandit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PanditBanner;
