import React from "react";
import LandingPage from "../components/HomePage/LandingPage";
import HoroScopeCorousel from "../components/HomePage/HoroScopeCorousel";
import ServicesSection from "../components/HomePage/ServicesSection";
import AstrlogerSection from "../components/HomePage/AstrlogerSection";
import PanditSection from "../components/HomePage/PanditSection";
import AstroCouncellor from "../components/HomePage/AstroCouncellorSection";
import StatsCounter from "../components/HomePage/AstroStats";
import WhatweProvide from "../components/HomePage/WhatweProvide";
import MultidisciplinaryTeam from "../components/HomePage/AstroTeams";
import FAQ from "../components/HomePage/Faq";

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <HoroScopeCorousel />
      <ServicesSection />
      <AstrlogerSection />
      <PanditSection />
      <AstroCouncellor />
      <StatsCounter />
      <WhatweProvide />
      <MultidisciplinaryTeam />
      <FAQ />
    </div>
  );
};

export default HomePage;
