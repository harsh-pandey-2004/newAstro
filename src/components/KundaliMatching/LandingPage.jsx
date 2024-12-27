import React from 'react';

const CompatibilityHero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background with dark maroon color and constellation overlay */}
      <div 
        className="absolute inset-0 bg-[#2D0909] overflow-hidden"
        style={{
          backgroundImage: `url('/api/placeholder/1920/1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay with additional darkening */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything you need to know
            <br />
            about your compatibility
          </h1>
          
          <p className="text-gray-200 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Kundli Milan or Kundali Matching holds significant importance when planning for marriage. It 
            involves matching the Kundlis of the prospective bride and groom, ensuring compatibility 
            before marriage. Considered as a crucial part in Vedic astrology and an integral process 
            before a part of India's cultural heritage for centuries. If you're contemplating marriage, seeking 
            compatibility with someone you admire, Astroexplain can assist you.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Match Now
          </button>
        </div>
      </div>

      {/* Decorative elements - zodiac symbols */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* This would be where the constellation/zodiac pattern would go */}
        <div className="absolute top-1/4 left-1/4 text-white text-4xl">♈</div>
        <div className="absolute top-1/3 right-1/4 text-white text-4xl">♊</div>
        <div className="absolute bottom-1/4 left-1/3 text-white text-4xl">♎</div>
        <div className="absolute top-1/2 right-1/3 text-white text-4xl">♏</div>
      </div>
    </div>
  );
};

export default CompatibilityHero;