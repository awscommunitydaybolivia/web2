import PropTypes from "prop-types";

const SponsorsPlata = ({ className = "", heading }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 w-[560px] relative text-inherit leading-[29px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
        {heading}
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-center py-0 px-[74px] gap-[48px_47px] mq800:gap-[23px] mq1125:pl-[37px] mq1125:pr-[37px] mq1125:box-border">
        <img
          className="self-stretch w-[100px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          loading="lazy"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="self-stretch w-[100px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          loading="lazy"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="self-stretch w-[100px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="self-stretch w-[100px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="self-stretch w-[110px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/company-logo.svg"
        />
      </div>
    </div>
  );
};

SponsorsPlata.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

export default SponsorsPlata;
