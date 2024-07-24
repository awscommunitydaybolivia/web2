import PropTypes from "prop-types";

const Card1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch box-border flex flex-row flex-wrap items-center justify-center py-8 px-0 gap-[32px] max-w-full text-left text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular border-t-[1px] border-solid border-link-primary mq800:gap-[16px] ${className}`}
    >
      <div className="w-24 relative leading-[22px] inline-block shrink-0 whitespace-nowrap">
        8:00 am
      </div>
      <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[666px] max-w-full text-base mq1125:flex-wrap mq1125:min-w-full">
        <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[284px] pl-0 box-border gap-[16px] min-w-[356px] max-w-full text-sm mq800:flex-wrap mq800:pr-[142px] mq800:box-border mq800:min-w-full mq450:pr-5 mq450:box-border">
          <h3 className="m-0 relative text-5xl leading-[29px] font-bold font-inherit mq450:text-lgi mq450:leading-[23px]">
            Event title heading
          </h3>
          <div className="bg-color-neutral-neutral-lightest flex flex-row items-start justify-start py-1 px-2">
            <b className="relative leading-[17px] inline-block min-w-[64px]">
              In-person
            </b>
          </div>
          <div className="bg-color-neutral-neutral-lightest flex flex-row items-start justify-start py-1 px-2">
            <b className="relative leading-[17px] inline-block min-w-[45px]">
              Online
            </b>
          </div>
        </div>
        <div className="w-40 relative leading-[120%] inline-block shrink-0">
          Speaker
        </div>
        <div className="w-40 relative leading-[120%] inline-block shrink-0">
          Location
        </div>
      </div>
      <button className="cursor-pointer py-1.5 px-[19px] bg-[transparent] rounded-31xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-link-primary hover:bg-darkslategray-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-200">
        <div className="relative text-base leading-[150%] font-aws-cd-bo-1-desktop-body-caption-regular text-link-primary text-left inline-block min-w-[88px]">
          View details
        </div>
      </button>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
};

export default Card1;
