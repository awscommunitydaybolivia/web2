import React, { forwardRef } from "react";

import SponsorsDia from "./SponsorsDia";
import Comunidades1 from "./Comunidades1";
import SponsorsPlati from "./SponsorsPlati";
import SponsorsOro from "./SponsorsOro";
import SponsorsPlata from "./SponsorsPlata";

import PropTypes from "prop-types";

const ComunidadesAliadas = forwardRef(({ className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-16 px-5 box-border gap-[80px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[20px] mq800:pt-[47px] mq800:pb-[47px] mq800:box-border mq1125:gap-[40px] mq1125:pt-[42px] mq1125:pb-[42px] mq1125:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Comunidades Aliadas
          </h1>
          <div className="self-stretch relative text-lg leading-[22px]">
            Conoce a las comunidades locales que colaboran con la difusión del evento
          </div>
        </div>
      </div>
      <Comunidades1 />
      {/*<SponsorsPlati />
      <SponsorsOro heading="Sponsors Oro" />
      <SponsorsPlata heading="Sponsors Plata" />*/}
    </section>
  );
});

ComunidadesAliadas.propTypes = {
  className: PropTypes.string,
};

export default ComunidadesAliadas;
