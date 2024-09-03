import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import EventItemHeader from "../components/EventItemHeader";

import Beoursponsor from "../components/Beoursponsor";
import Map1 from "../components/Map1";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import ComunidadesAliadas from "../components/ComunidadesAliadas";
import Layout from "../components/Layout";
import Agenda from "../components/Agenda";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const speakersRef = useRef(null);
  const cfsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const agendaRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

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
        onAgendaClick={() => scrollToSection(agendaRef)}
        onTeamClick={() => scrollToSection(teamRef)}
        onFAQClick={() => scrollToSection(faqRef)}
      />
      <EventItemHeader onConsultaClick={() => scrollToSection(faqRef)} />
      {/*<CFP />*/}
      <Beoursponsor />
      <Map1 />
      <Speakers ref={speakersRef} />
      <Sponsors ref={sponsorsRef} />
      <ComunidadesAliadas />
      {/*<Layout />
      <Layout />
      <Layout />*/}
      {/*<Agenda ref={agendaRef}/>*/}
      <Team ref={teamRef} />
      <FAQ ref={faqRef} />
      <Footer />
    </div>
  );
};

export default Home;
