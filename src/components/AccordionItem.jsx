import PropTypes from "prop-types";

const AccordionItem = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <div className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start pt-[18px] px-0 pb-5 gap-[24px] max-w-full border-t-[1px] border-solid border-link-primary mq800:flex-wrap">
        <b className="flex-1 relative leading-[22px] inline-block min-w-[160px] max-w-full">
          Question text goes here
        </b>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-base">
        <div className="flex-1 relative leading-[120%] inline-block max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  className: PropTypes.string,
};

export default AccordionItem;
