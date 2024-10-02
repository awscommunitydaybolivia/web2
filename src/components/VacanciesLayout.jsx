import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const VacanciesLayout = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full text-center text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq450:gap-[20px] mq450:pt-[47px] mq450:pb-[47px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px]">
        <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[400px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <b className="relative leading-[120%] inline-block">¡Póstula!</b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-29xl">
              <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Vacantes laborales
              </h1>
              <div className="self-stretch relative text-lg tracking-[-0.02px] leading-[120%] inline-block">
                Explora las increíbles oportunidades laborales que nuestros
                Sponsors tienen para ti
              </div>
            </div>
          </div>
          <div className="w-[100px] flex flex-row items-center justify-start pt-4 px-0 pb-0 box-border">
            <Link
              to="/vacantes-sponsors"
              className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-base-base-black hover:bg-darkslategray-500 hover:border-darkslategray-100 focus:outline-none focus:ring-2 focus:ring-darkslategray-100 no-underline"
            >
              <span className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-base-base-black text-left min-w-[100px] font-bold no-underline">
                Ver Vacantes
              </span>
            </Link>
          </div>
        </div>
        <img
          className="h-max flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-web-imgs/vacancies-aws-cd-bo.webp"
        />
      </div>
    </section>
  );
};

VacanciesLayout.propTypes = {
  className: PropTypes.string,
};

export default VacanciesLayout;
