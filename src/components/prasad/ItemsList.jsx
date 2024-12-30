import React, { useState } from "react";

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("Bracelets");

  // Sample products (replace with API data if needed)
  const products = [
    {
      id: 1,
      name: "Black Beaded Rhinestone",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
      price: 95.5,
      reviews: "240 Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
    },
    {
      id: 2,
      name: "Braided Multi-Strand",
      image: "https://via.placeholder.com/150",
      price: 95.5,
      reviews: "240 Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
    },
    {
      id: 3,
      name: "Braided Multi-Strand",
      image: "https://via.placeholder.com/150",
      price: 95.5,
      reviews: "240 Customer Reviews",
      rating: 5,
      status: "Almost Sold Out",
    },
  ];

  // Tabs
  const tabs = ["Gemstones", "Bracelets", "Pendants", "Rudraksha", "Crystals"];

  // Filter products based on the active tab
  const filteredProducts = products.filter(
    (product) => activeTab === "Bracelets" // Example logic for filtering
  );

  return (
    <div className="py-12 px-4 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Our Products</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          lacus dui.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === tab
                ? "bg-yellow-200 text-black"
                : "bg-gray-200 text-gray-600 hover:bg-yellow-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            {/* Details */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.reviews}</p>
              <p className="text-red-500 text-sm mt-1">{product.status}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold">${product.price}</p>
                <button className="text-yellow-500 hover:text-yellow-600 text-sm font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
