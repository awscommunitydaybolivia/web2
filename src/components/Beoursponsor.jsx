import PropTypes from "prop-types";

const Beoursponsor = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-primary-primary overflow-hidden flex flex-col items-center justify-start py-28 px-[200px] box-border max-w-full text-left text-29xl text-background-color-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:pl-5 mq800:pr-5 mq800:box-border mq450:gap-[20px] mq450:pt-[73px] mq450:pb-[78px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full mq800:gap-[20px] mq800:flex-col mq800:items-center mq1125:gap-[40px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-full mq800:items-center">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq800:text-center mq450:text-10xl mq450:leading-[35px]">
            ¡Sé Sponsor del AWS Community Day Bolivia 2024!
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full text-lg mq800:items-center">
          <div className="self-stretch relative leading-[120%] mq800:text-center">
            ¿Tu empresa está en el mundo de la tecnología o la nube?
            <br></br>
            <br></br>
            Patrocina el AWS Community Day Bolivia y conecta con los mejores del
            sector.
            <br></br>
            <br></br>
            ¡Contáctanos para más detalles y participa en esta gran oportunidad!
          </div>
          <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0">
            <a
              href="https://calendar.app.google/f5FuSsheh1GzgoEN6"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-31xl flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-background-color-primary hover:bg-gainsboro-200 hover:border-gainsboro-100 focus:outline-none focus:ring-2 focus:ring-gainsboro-100 no-underline relative"
            >
              <b className="relative text-base leading-[120%] font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left">
                Agendar una reunión
              </b>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Beoursponsor.propTypes = {
  className: PropTypes.string,
};

export default Beoursponsor;
