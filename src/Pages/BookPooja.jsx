import React from "react";
import PanditBanner from "../components/BookPooja/PanditBanner";
import ExperiencePoojas from "../components/BookPooja/PanditInfo";
import UpcomingEvents from "../components/BookPooja/UpcomingEvents";
import HowItWorks from "../components/BookPooja/HowitWorksPandit";
import StatsShowcase from "../components/BookPooja/PanditsStats";
import Testimonials from "../components/BookPooja/Testimonials";

const BookPooja = () => {
  return (
    <div>
      <PanditBanner />
      <ExperiencePoojas />
      <UpcomingEvents />
      <HowItWorks />
      <StatsShowcase />
      <Testimonials />  
    </div>
  );
};

export default BookPooja;
