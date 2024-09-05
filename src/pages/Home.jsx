import React, { useRef, useState, useEffect } from "react";

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const speakersRef = useRef(null);
  const cfsRef = useRef(null);
  const sponsorsRef = useRef(null);
  const agendaRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-primary-primary hover:bg-darkslategray-300 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
