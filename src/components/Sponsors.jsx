import SponsorsDia from "./SponsorsDia";
import SponsorsPlati from "./SponsorsPlati";
import SponsorsOro from "./SponsorsOro";
import PropTypes from "prop-types";

const Sponsors = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-16 px-5 box-border gap-[80px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[20px] mq800:pt-[27px] mq800:pb-[27px] mq800:box-border mq1125:gap-[40px] mq1125:pt-[42px] mq1125:pb-[42px] mq1125:box-border ${className}`}
    >
      <div className="w-[1040px] flex flex-col items-center justify-start max-w-full text-29xl">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Nuestros Sponsors
        </h1>
      </div>
      <SponsorsDia />
      <SponsorsPlati />
      <SponsorsOro heading="Sponsors Oro" />
      <SponsorsOro heading="Sponsors Plata" />
    </section>
  );
};

Sponsors.propTypes = {
  className: PropTypes.string,
};

export default Sponsors;
