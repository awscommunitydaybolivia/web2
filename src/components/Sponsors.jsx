import React, { forwardRef } from "react";

import SponsorsDia from "./SponsorsDia";
import SponsorsPlati from "./SponsorsPlati";
import SponsorsOro from "./SponsorsOro";
import SponsorsPlata from "./SponsorsPlata";

import PropTypes from "prop-types";

const Sponsors = forwardRef(({ className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-16 px-5 box-border gap-[80px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[20px] mq800:pt-[27px] mq800:pb-[27px] mq800:box-border mq1125:gap-[40px] mq1125:pt-[42px] mq1125:pb-[42px] mq1125:box-border ${className}`}
    >
      <div className="w-[1040px] flex flex-col items-center justify-start max-w-full text-29xl">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Nuestros Sponsors
        </h1>
      </div>
      <SponsorsDia />
      {/*<SponsorsPlati />
      <SponsorsOro heading="Sponsors Oro" />
      <SponsorsPlata heading="Sponsors Plata" />*/}
      <div className="items-center justify-center ">
        <div className="self-stretch relative text-lg leading-[22px]">
          ¿Te interesaría ser nuestro Sponsor y ver tu marca aquí?
        </div>
        <div className="flex flex-row items-center justify-center pt-8 px-0 pb-0">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-primary rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate">
            <a
              href="https://sessionize.com/aws-community-day-bolivia-2024/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left">
                Contáctanos
              </b>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
});

Sponsors.propTypes = {
  className: PropTypes.string,
};

export default Sponsors;
