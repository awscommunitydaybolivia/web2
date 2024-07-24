import PropTypes from "prop-types";

const SponsorsPlati = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 w-[560px] relative text-inherit leading-[29px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[23px]">
        Sponsors Platino
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-center py-0 px-[168px] gap-[48px_46.7px] mq800:gap-[23px] mq800:pl-[42px] mq800:pr-[42px] mq800:box-border mq1125:pl-[84px] mq1125:pr-[84px] mq1125:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="self-stretch w-[140px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          loading="lazy"
          alt=""
          src="/webflow--black-1.svg"
        />
        <img
          className="self-stretch w-[140px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/relume--black-1.svg"
        />
        <img
          className="self-stretch w-[140px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/webflow--black.svg"
        />
        <img
          className="self-stretch w-[140px] relative max-h-full overflow-hidden shrink-0 min-h-[56px]"
          alt=""
          src="/relume--black-2.svg"
        />
      </div>
    </div>
  );
};

SponsorsPlati.propTypes = {
  className: PropTypes.string,
};

export default SponsorsPlati;
