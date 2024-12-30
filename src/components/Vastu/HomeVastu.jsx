import React from 'react';
import { Check } from 'lucide-react';

const GrahPoojaBenefits = () => {
  const benefits = [
    'Brings positive energy into space',
    'Ensures peace and prosperity',
    'Create auspicious atmosphere',
    'Protects blessing from deities'
  ];

  return (
    <div className="bg-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Congrats on Getting Your New Home!
        </h1>
        
        <p className="text-gray-600 text-center mb-12">
          Moving into a new home is a significant milestone. To ensure prosperity and peace in your new abode, it is essential to perform a Grah Pooja. This ancient ritual helps purify the space, ward off negative energies, and invite positive vibrations, ensuring a harmonious living environment.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold mb-4">Why Grah Pooja is Important</h2>
            <p className="text-gray-600">
              Grah Pooja is a traditional ritual ceremony performed to cleanse and purify new spaces energetically. It is believed to remove any negative energies and bring positive vibes to the household. The ritual also creates an auspicious beginning, making way for blessings to repeatedly and consistently flow into your household.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold mb-4">Benefits of Grah Pooja</h2>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrahPoojaBenefits;