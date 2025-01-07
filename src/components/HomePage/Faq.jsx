import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why Should You Choose Astroscopia for An Astrology Horoscope?",
      answer:
        "Astroscopia provides accurate insights and personalized counseling sessions to help you understand your life better.",
    },
    {
      question: "How Can Online Astrology Help Me in Predicting The Future?",
      answer:
        "Online astrology uses your birth chart to analyze trends and provide future predictions based on planetary movements.",
    },
    {
      question: "How reliable is the Astroscopia app?",
      answer:
        "The Astroscopia app is highly reliable, backed by experienced astrologers and advanced astrological tools.",
    },
    {
      question: "How much does Astroscopia cost?",
      answer:
        "Astroscopia offers flexible pricing plans to cater to different needs, starting from free basic features to premium plans.",
    },
  ];

  return (
    <div className="max-w-full mx-auto py-8 px-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
