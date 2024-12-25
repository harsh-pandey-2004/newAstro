import React from "react";

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-black mb-4">
          Beyond Predictions: Your Holistic Path to Empowerment
        </h2>
        <p className="text-black text-lg">
          At Astro Captain, we offer more than predictions—we provide a
          comprehensive approach to personal growth and self-discovery. Our
          integrated method combines ancient wisdom with modern psychological
          insights to help you transform your life.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Convenience Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl text-yellow-500 mb-4">
            <i className="fas fa-clock"></i>
          </div>
          <h3 className="text-xl font-semibold mb-4">Convenience</h3>
          <p className="text-gray-700">
            Save time and effort by connecting with top astrologers from the
            comfort of your home. Our platform allows you to chat or call
            astrologers at your convenience.
          </p>
        </div>

        {/* Credibility Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl text-yellow-500 mb-4">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="text-xl font-semibold mb-4">Credibility</h3>
          <p className="text-gray-700">
            We ensure our astrologers are highly qualified and rated by users
            for their expertise and service quality. Your satisfaction is our
            priority.
          </p>
        </div>

        {/* Comprehensive Services Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="text-4xl text-yellow-500 mb-4">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-xl font-semibold mb-4">Comprehensive Services</h3>
          <p className="text-gray-700">
            From free Kundli creation and matchmaking to daily horoscopes and
            gem recommendations, we offer a wide range of astrology-related
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
