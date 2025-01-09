import React from 'react';
import Vastubg from '../../assets/image/Vastubg.png';

const VastuShastraCard = () => {
  return (
    <div
      className="relative flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${Vastubg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw', 
        height: '130vh', 
        margin: 0, 
        padding: 0, 
      }}
    >
      {/* Content */}
      <div className="relative text-white max-w-4xl p-8 rounded-md shadow-md">
        {/* Header */}
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Vastu Shastra: Harmonizing Your Space
        </h1>
      </div>
    </div>
  );
};

export default VastuShastraCard;
