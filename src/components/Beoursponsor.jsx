import PropTypes from "prop-types";

const Beoursponsor = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-darkslategray-300 overflow-hidden flex flex-col items-start justify-start pt-28 px-[200px] pb-[120px] box-border max-w-full text-left text-29xl text-background-color-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:pl-[100px] mq800:pr-[100px] mq800:box-border mq450:gap-[20px] mq450:pt-[73px] mq450:px-5 mq450:pb-[78px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full mq800:gap-[20px] mq1125:gap-[40px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start min-w-[312px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            ¡Sé Sponsor del AWS Community Day Bolivia 2024!
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[312px] max-w-full text-lg">
          <div className="self-stretch relative leading-[120%]">
            ¿Tu empresa está en el mundo de la tecnología o el cloud?
            <br></br>
            <br></br>
            Patrocina el AWS Community Day Bolivia y conecta con los mejores del
            sector.
            <br></br>
            <br></br>
            ¡Contáctanos para más detalles y participa en esta gran oportunidad!
          </div>
          <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-primary rounded-31xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate">
              <b className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left min-w-[99px]">
                Más infomación
              </b>
            </button>
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
