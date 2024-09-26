import PropTypes from "prop-types";

const SponsorsDia = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
        Sponsors Diamante
      </h3>
      <div className="flex flex-row items-center justify-center py-0 px-[94px] box-border gap-[48px] max-w-full mq1125:flex-wrap mq800:gap-[24px] mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <a
          href="https://lpz.ucb.edu.bo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-ucb.png"
          />
        </a>
        <a
          href="https://www.encora.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] mq800:py-4 transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/encora-logo.svg"
          />
        </a>
        <a
          href="https://digitalharborbolivia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-dh1.png"
          />
        </a>
        
      </div>
      
    </div>
  );
};

SponsorsDia.propTypes = {
  className: PropTypes.string,
};

export default SponsorsDia;
