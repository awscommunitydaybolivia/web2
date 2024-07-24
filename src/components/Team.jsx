import Card from "./Card";
import PropTypes from "prop-types";

const Team = ({ className = "" }) => {
  return (
    <section 
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border gap-[80px] max-w-full z-[3] text-center text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px] ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <b className="relative leading-[120%] inline-block min-w-[41px]">
          Team
        </b>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Nuestro Equipo
          </h1>
          <div className="self-stretch relative text-lg leading-[22px]">
            Conoce al Equipo organizador del AWS Community Day Bolivia 2024
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-lg mq800:gap-[48px] mq450:gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start mq800:gap-[32px] mq450:gap-[16px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[32px] mq800:gap-[16px]">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = {
  className: PropTypes.string,
};

export default Team;
