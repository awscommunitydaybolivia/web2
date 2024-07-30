import PropTypes from "prop-types";

const Map1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-start py-16 px-5 box-border max-w-full text-center text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[20px] mq1125:gap-[40px] mq1125:pt-[42px] mq1125:pb-[42px] mq1125:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border ${className}`}
    >
      <div className="w-[1040px] flex flex-col items-center justify-start gap-[80px] max-w-full mq800:gap-[20px] mq1125:gap-[40px]">
        <div className="w-[768px] flex flex-col items-center justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <b className="relative leading-[120%]">Ubicación del Evento</b>
              <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
                <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq800:text-19xl mq800:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                  Universidad Católica Boliviana “San Pablo” Sede La Paz 
                </h1>
                <h3 className="m-0 self-stretch relative text-5xl leading-[29px] font-normal font-inherit mq450:text-lgi mq450:leading-[23px]">
                  Calle 14 de Septiembre esq. 2 de Obrajes Nro. 4807
                </h3>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/screenshot-20240610-at-1659-1@2x.png"
        />
      </div>
    </section>
  );
};

Map1.propTypes = {
  className: PropTypes.string,
};

export default Map1;
