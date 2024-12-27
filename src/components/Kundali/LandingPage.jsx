import React from 'react';

const CompatibilityHero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/api/placeholder/1920/1080')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating zodiac symbols */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-1/4 left-1/4 text-white/30 text-4xl">♊</span>
            <span className="absolute top-1/3 right-1/3 text-white/30 text-4xl">♍</span>
            <span className="absolute bottom-1/3 left-1/3 text-white/30 text-4xl">♎</span>
            <span className="absolute top-1/2 right-1/4 text-white/30 text-4xl">♓</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Everything you need to know
            <br />
            about your compatibility
          </h1>
          
          <p className="text-gray-100 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Kundli Milan or Kundali Matching holds significant importance when planning for marriage. It 
            involves matching the Kundlis of the prospective bride and groom, ensuring compatibility 
            before marriage. Considered as a crucial part in Vedic astrology and an integral process, this has 
            been a part of India's cultural heritage for centuries. If you're contemplating marriage, seeking 
            compatibility with someone you admire, AstroExplain can assist you.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>

      {/* Light rays effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-yellow-400/20 to-transparent transform -rotate-45"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-yellow-400/20 to-transparent transform rotate-45"></div>
      </div>
    </div>
  );
};

export default CompatibilityHero;