import PropTypes from "prop-types";

const SponsorsOro = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
        Sponsors Oro
      </h3>
      <div className="flex flex-row items-center justify-center py-0 px-[94px] box-border gap-[48px] max-w-full mq1125:flex-wrap mq800:gap-[24px] mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <a
          href="https://cloudreams.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] pt-8 mq800:pt-4 relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-cloudreams.png"
          />
        </a>
        <a
          href="https://www.assuresoft.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[280px] pt-6 mq800:pt-0 relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-assuresoft.png"
          />
        </a>
        <a
          href="https://www.escala24x7.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[150px]  mq800:pt-0 relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-escala24x7.png"
          />
        </a>
      </div>
    </div>
  );
};

SponsorsOro.propTypes = {
  className: PropTypes.string,
};

export default SponsorsOro;
