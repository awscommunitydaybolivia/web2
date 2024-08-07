import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const EventItemHeader = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-10-12T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-center py-28 px-5 box-border bg-[url('https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-web-imgs/aws-cd-background-2880x1800-2.jpg')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:bg-[url('https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-web-imgs/aws-cd-background-450x800-2.jpg')]  text-center text-37xl text-background-color-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:pt-[73px] mq800:pb-[73px] mq800:box-border mq1125:gap-[40px] mq450:gap-[20px] ${className}`}
    >
      <div className="w-[768px] flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[24px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <b className="self-stretch relative leading-[120%] mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
                AWS Community Day Bolivia
              </b>
              <b className="self-stretch relative text-21xl leading-[120%] mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                12 de Octubre, 2024
              </b>
              <div className="self-stretch relative text-lg leading-[120%]">
                <p className="m-0">{`¡Sé parte de la primera versión del mejor evento de `}</p>
                <p className="m-0">tecnología en la nube en Bolivia!</p>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[102px] flex flex-col items-center justify-center py-0 px-5 box-border max-w-full text-left text-21xl mq450:gap-[16px]">
            <div className="flex-1 box-border overflow-auto overflow-y-hidden flex flex-row items-center justify-start py-4 pr-[19px] pl-6 gap-[16px] max-w-full border-[1px] border-solid border-background-color-primary">
              <CountdownItem value={timeLeft.days} label="Days" />
              <Divider />
              <CountdownItem value={timeLeft.hours} label="Hours" />
              <Divider />
              <CountdownItem value={timeLeft.minutes} label="Min" />
              <Divider />
              <CountdownItem value={timeLeft.seconds} label="Secs" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-0 px-[63px] box-border max-w-full mq800:pl-[31px] mq800:pr-[31px] mq800:box-border">
          <div className="flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap mq450:justify-center ">
            <a
              href="https://www.eventbrite.com/e/aws-community-day-bolivia-2024-tickets-969150825207"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer [border:none] py-3 px-6 bg-primary-primary rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate no-underline inline-block"
            >
              <span className="relative text-base leading-[120%] font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left font-bold">
                ¡Regístrate!
              </span>
            </a>
            <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-31xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-background-color-primary hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
              <b className="relative text-base leading-[120%] font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left">
                ¡Tengo una consulta!
              </b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountdownItem = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center py-0 px-2">
    <b className="relative leading-[120%] inline-block mq800:text-13xl mq800:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
      {value.toString().padStart(2, "0")}
    </b>
    <div className="relative text-lg leading-[22px] inline-block">{label}</div>
  </div>
);

const Divider = () => (
  <div className="self-stretch w-px relative box-border shrink-0 border-r-[1px] border-solid border-background-color-primary" />
);

EventItemHeader.propTypes = {
  className: PropTypes.string,
};

CountdownItem.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default EventItemHeader;
