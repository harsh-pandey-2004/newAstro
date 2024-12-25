import React from "react";

const events = [
  {
    title: "Ganesha Chaturthi",
    date: "September 07 2024, Saturday",
    description:
      "Ganesha Chaturthi is celebrated to honor Lord Ganesha. The festival begins on the fourth day of the Hindu month Bhadrapada.",
    image: "https://your-image-link.com/ganesha.jpg",
    day: "07",
    dayName: "Saturday",
  },
  {
    title: "Diwali",
    date: "September 17 2024, Tuesday",
    description:
      "The full Moon day in the month of Ashadha is referred to as Sharadpurnima.",
    image: "https://your-image-link.com/diwali.jpg",
    day: "17",
    dayName: "Tuesday",
  },
  {
    title: "Maha Shivaratri",
    date: "September 17 2024, Tuesday",
    description:
      "Maha Shivaratri is a key period in the Hindu calendar when Hindus pay homage to their ancestors through rituals and food offerings.",
    image: "https://your-image-link.com/shivaratri.jpg",
    day: "17",
    dayName: "Tuesday",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Upcoming <span className="text-black">Events</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-80 transform hover:scale-105 transition-transform"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
            <div className="bg-yellow-500 text-white font-bold text-center py-2">
              <p className="text-lg">{event.day}</p>
              <p className="text-sm">{event.dayName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
