import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingBackButton from "../components/FloatingBackButton";
import EventAgenda from "../components/eventAgenda";

const Agenda = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center leading-[normal] tracking-[normal]">
      <div>
        <Link to="/" className="block w-full h-full">
          <img
            className="h-[65px] mq450:h-[55px] pt-8 relative overflow-hidden"
            loading="lazy"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-logos-web/AWS-CD-BO-logoweb.svg"
          />
        </Link>
      </div>
      <div className="bg-background-color-primary min-h-screen text-base-base-black px-16 mq800:px-8 font-aws-cd-bo-1-desktop-body-caption-regular">
        <h1 className="text-29xl font-bold my-8 text-center m-0 self-stretch relative leading-[120%] font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Agenda 
        </h1>
        <h3 className="text-center"> Sábado 12 de Octubre, 2024</h3>
        <EventAgenda />
      </div>
      <FloatingBackButton />
      <Footer />
    </div>
  );
};

export default Agenda;
