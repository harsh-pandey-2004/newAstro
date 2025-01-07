import React from 'react';
import kalashicon from '../../assets/image/kalashicon.png';
import conformbooking from '../../assets/image/conformbookingicon.png';
import dakshina from '../../assets/image/dakshinaicon.png';
import formicon from '../../assets/image/formicon.png';
import callicon from '../../assets/image/callicon.png';
import bookpandit from '../../assets/image/bookpanditicon.png';


const HowItWorks = () => {
  const steps = [
    {
      icon: <img src={bookpandit} alt="Book Appointment" className="w-28 h-28" /> ,
      number: 1,
      title: "Book Appointment",
      description: "Schedule an appointment with a pandit by choosing a suitable date and time."
    },
    {
      icon: <img src={formicon} alt="Fill Details" className="w-28 h-28" /> ,
      number: 2,
      title: "Fill Details",
      description: "Complete the form with the required details for the pooja."
    },
    {
      icon: <img src={callicon} alt="Receive Call" className="w-28 h-28" /> ,
      number: 3,
      title: "Receive Call",
      description: "A call from our team to confirm the details and discuss any special requirements."
    },
    {
      icon: <img src={dakshina} alt="Make Payment" className="w-38 h-28" /> ,
      number: 4,
      title: "Make Payment",
      description: "Proceed with the payment for the booked service."
    },
    {
      icon: <img src={conformbooking} alt="Confirm Booking" className="w-38 h-28" /> ,
      number: 5,
      title: "Confirm Booking",
      description: "Confirm the booking and receive a confirmation message with details."
    },
    {
      icon: <img src={kalashicon} alt="Pooja Day" className="w-28 h-28" /> ,
      number: 6,
      title: "Pooja Day",
      description: "On the appointed day, the pandit arrives at the scheduled time to perform the pooja."
    }
  ];

  return (
    <div className="py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-12">
        How It <span className="text-yellow-400">Works</span>
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="relative bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
              {step.number}
            </div>
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
