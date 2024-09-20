import React, { forwardRef } from "react";
import Card2 from "./Card2";
import PropTypes from "prop-types";
import { speakersData } from "../data/speakersData";

const Speakers = forwardRef(({ className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-16 px-16 box-border gap-[80px] max-w-full text-center text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:py-[47px] mq800:px-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq450:gap-[20px] ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        {/*<b className="relative leading-[120%] inline-block min-w-[56px]">
          Conoce a los conferencistas
        </b>*/}
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <b className="self-stretch relative leading-[58px] mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Nuestros Speakers
          </b>
          <div className="self-stretch relative text-lg leading-[22px]">{`Conoce a todos los speakers del evento `}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-lg mq800:gap-[48px] mq450:gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start mq800:gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-[32px] grid-cols-[repeat(4,_minmax(228px,_1fr))] mq800:gap-[40px] mq800:grid-cols-[minmax(228px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(228px,_395px))]">
            {speakersData.map((speaker, index) => (
              <Card2 key={index} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Speakers.propTypes = {
  className: PropTypes.string,
};

Speakers.displayName = "Speakers"; // This is optional but good for debugging

export default Speakers;
