import PropTypes from "prop-types";

const SponsorsCobre = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[24px] max-w-full text-center text-5xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <h3 className="m-0 self-stretch relative text-inherit leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
        Sponsor Cobre
      </h3>

      <div className="flex flex-row items-center justify-center py-8 px-[94px] box-border gap-[48px] max-w-full mq1125:flex-wrap mq800:gap-[24px] mq800:pl-[47px] mq800:pr-[47px] mq800:box-border mq450:py-4 mq450:pl-5 mq450:pr-5 mq450:box-border">
      <a
          href="https://www.solydesaceleradora.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            className="self-stretch w-[200px] relative max-h-full overflow-hidden mq800:pt-4 mq450:w-[190px] shrink-0  transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-sponsors-files/sponsors-logos/logo-solydez1a.png"
          />
        </a>
        
      </div>
      
    </div>
  );
};

SponsorsCobre.propTypes = {
  className: PropTypes.string,
};

export default SponsorsCobre;
