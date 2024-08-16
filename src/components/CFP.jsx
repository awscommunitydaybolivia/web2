import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const CFP = forwardRef(({ className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={`self-stretch bg-primary-primary overflow-hidden flex flex-col items-center justify-start py-16 px-5 box-border max-w-full text-center text-base text-base-base-white font-aws-cd-bo-1-desktop-body-caption-regular mq1125:gap-[32px] mq450:gap-[16px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <b className="relative leading-[120%] inline-block min-w-[28px]">
            CFS
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-37xl text-background-color-primary">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
              Call for Speakers
            </h1>
            <div className="self-stretch relative text-lg leading-[120%]">
              <p className="m-0">
                ¡Postula hasta el 23 de Agosto para ser Speaker en el
              </p>
              <p className="m-0">AWS Community Day Bolivia 2024!</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 px-0 pb-0">
          <a
            href="https://sessionize.com/aws-community-day-bolivia-2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-31xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-background-color-primary hover:bg-gainsboro-200 hover:border-gainsboro-100 focus:outline-none focus:ring-2 focus:ring-gainsboro-100 no-underline relative"
          >
            <b className="relative text-base leading-[120%] font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left">
              ¡Quiero ser Speaker!
            </b>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-sm px-4 py-1 rounded-full ">
              ¡Últimos días!
            </span>
          </a>
        </div>
      </div>
    </section>
  );
});

CFP.propTypes = {
  className: PropTypes.string,
};

export default CFP;
