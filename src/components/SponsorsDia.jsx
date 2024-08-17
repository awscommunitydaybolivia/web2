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
        <a
          href="https://aws.amazon.com/es/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            className="self-stretch w-[160px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="/aws-logo.svg"
          />
        </a>
        <a
          href="https://lpz.ucb.edu.bo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/12/Colores-Horizontal-1.png"
          />
        </a>
        <a
          href="https://www.encora.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="self-stretch w-[250px] relative max-h-full overflow-hidden shrink-0 min-h-[56px] transition-transform duration-300 ease-in-out hover:scale-110"
            alt=""
            src="https://www.encora.com/hubfs/Website%20v2%20Assets/Homepage/Nav/Encora%20Nav.svg"
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
