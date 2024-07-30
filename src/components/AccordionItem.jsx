import PropTypes from "prop-types";
import { useState } from "react";

const AccordionItem = ({ question, answer, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <div 
        className="self-stretch box-border overflow-hidden flex flex-row items-center justify-start pt-[18px] px-0 pb-5 gap-[24px] max-w-full border-t-[1px] border-solid border-link-primary mq800:flex-wrap cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <b className="flex-1 relative leading-[22px] inline-block min-w-[160px] max-w-full">
          {question}
        </b>
        <img
          className={`h-8 w-8 relative overflow-hidden shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          alt=""
          src="/icon.svg"
        />
      </div>
      {isOpen && (
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-base">
          <div className="flex-1 relative leading-[120%] inline-block max-w-full">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AccordionItem;