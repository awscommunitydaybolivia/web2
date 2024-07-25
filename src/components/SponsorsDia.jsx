import PropTypes from "prop-types";

const SponsorsDia = ({ className = "" }) => {
  return (
    <div
      className={`w-[560px] flex flex-col items-center justify-center gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
        Sponsors Diamante
      </h3>
      <div className="flex flex-row items-center justify-center py-0 px-[94px] box-border gap-[48px] max-w-full mq800:flex-wrap mq800:gap-[24px] mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="self-stretch w-[160px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/company-logo.svg"
        />
        <img
          className="self-stretch w-[160px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/company-logo.svg"
        />
      </div>
    </div>
  );
};

SponsorsDia.propTypes = {
  className: PropTypes.string,
};

export default SponsorsDia;
