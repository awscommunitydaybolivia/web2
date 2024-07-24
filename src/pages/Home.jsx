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
  return (
    <div className="w-full relative flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navbar />
      <EventItemHeader />
      <CFP />
      <Beoursponsor />
      <Map1 />
      <Speakers />
      <Sponsors />
      <Layout />
      <Layout />
      <Layout />
      <Event1 />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
