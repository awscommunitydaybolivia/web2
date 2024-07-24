import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import EventItemHeader from "../components/EventItemHeader";
import CFP from "../components/CFP";
import Beoursponsor from "../components/Beoursponsor";
import Map1 from "../components/Map1";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Layout from "../components/Layout";
import Event1 from "../components/Event1";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const speakersRef = useRef(null);
  const sponsorsRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar
        onSpeakersClick={() => scrollToSection(speakersRef)}
        onSponsorsClick={() => scrollToSection(sponsorsRef)}
        onTeamClick={() => scrollToSection(teamRef)}
      />
      <EventItemHeader />
      <CFP />
      <Beoursponsor />
      <Map1 />
      <Speakers ref={speakersRef}  />
      <Sponsors ref={sponsorsRef} />
      <Layout />
      <Layout />
      <Layout />
      <Event1 />
      <Team ref={teamRef} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
