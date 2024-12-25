import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative h-screen">
        {/* Background Images */}
        <div className="absolute inset-0">
          {/* Main background */}
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Space background"
            className="w-full h-full object-cover"
          />
          
          {/* Planets */}
          <img 
            src="/api/placeholder/200/200" 
            alt="Planet 1"
            className="absolute top-20 right-20 w-24 h-24 rounded-full"
          />
          <img 
            src="/api/placeholder/150/150" 
            alt="Planet 2"
            className="absolute top-40 left-20 w-16 h-16 rounded-full"
          />
          
          {/* Curved overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Navigating You<br />
              Through Life's<br />
              Challenges
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
              Toward Your True Destiny
            </p>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              Discover Now
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-12 flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-8 bg-yellow-400' : 'bg-gray-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;