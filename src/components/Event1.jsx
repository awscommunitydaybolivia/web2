import React, { forwardRef } from 'react';

import Card1 from "./Card1";
import PropTypes from "prop-types";

const Event1 = forwardRef(({ className = "" }, ref) => {
  return (
    <section ref={ref}
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full z-[1] text-center text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <b className="self-stretch relative leading-[120%]">Tagline</b>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Agenda
          </h1>
          <div className="self-stretch relative text-lg leading-[22px]">
            Horarios de las conferencias, charlas y talleres del AWS Community
            Day Bolivia 2024
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full text-left text-9xl mq800:gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-center py-0 px-5">
          <h2 className="m-0 relative text-inherit leading-[34px] font-bold font-inherit mq450:text-3xl mq450:leading-[27px]">
            Sábado 12 de Octubre
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-lg">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
      </section>
  );
});



Event1.propTypes = {
  className: PropTypes.string,
};

export default Event1;
