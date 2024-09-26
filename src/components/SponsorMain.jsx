import PropTypes from "prop-types";

const SponsorsMain = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
        Main Sponsor
      </h3>
      <div className="flex flex-row items-center justify-center py-0 px-[94px] box-border gap-[48px] max-w-full mq1125:flex-wrap mq800:gap-[24px] mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <a
          href="https://aws.amazon.com/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            className="self-stretch w-[200px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="/aws-logo.svg"
          />
        </a>
      </div>
    </div>
  );
};

SponsorsMain.propTypes = {
  className: PropTypes.string,
};

export default SponsorsMain;
