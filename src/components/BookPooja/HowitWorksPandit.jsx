import React from 'react';
import { Calendar, FileText, Phone, CreditCard, CheckCircle, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-yellow-400" />,
      number: 1,
      title: "Book Appointment",
      description: "Schedule an appointment with a pandit by choosing a suitable date and time."
    },
    {
      icon: <FileText className="w-12 h-12 text-yellow-400" />,
      number: 2,
      title: "Fill Details",
      description: "Complete the form with the required details for the pooja."
    },
    {
      icon: <Phone className="w-12 h-12 text-yellow-400" />,
      number: 3,
      title: "Receive Call",
      description: "A call from our team to confirm the details and discuss any special requirements."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yellow-400" />,
      number: 4,
      title: "Make Payment",
      description: "Proceed with the payment for the booked service."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-yellow-400" />,
      number: 5,
      title: "Confirm Booking",
      description: "Confirm the booking and receive a confirmation message with details."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-400" />,
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