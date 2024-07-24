import AccordionItem from "./AccordionItem";
import PropTypes from "prop-types";

const FAQ = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-28 px-16 box-border max-w-full z-[2] text-left text-29xl text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq450:gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full mq800:gap-[40px] mq450:gap-[20px] mq1325:flex-wrap">
        <div className="w-[500px] flex flex-col items-start justify-start gap-[32px] min-w-[500px] max-w-full mq800:gap-[16px] mq800:min-w-full mq1325:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Preguntas Frecuentes
            </h1>
            <div className="self-stretch h-[88px] relative text-lg tracking-[-0.02px] leading-[120%] inline-block">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </div>
          </div>
          <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] w-[100px] rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-base-base-black hover:bg-darkslategray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
            <b className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-base-base-black text-left min-w-[52px]">
              Button
            </b>
          </button>
        </div>
        <div className="flex-1 box-border flex flex-col items-start justify-start min-w-[476px] max-w-full text-lg border-b-[1px] border-solid border-link-primary mq800:min-w-full">
          <AccordionItem />
          <AccordionItem />
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
