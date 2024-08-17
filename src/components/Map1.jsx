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
        <div className="relative h-[300px] w-full">
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-68.11327904462816%2C-16.523811670260663%2C-68.11102598905565%2C-16.521769937600688&amp;layer=mapnik&amp;marker=-16.522790806628556%2C-68.11215251684189"
              className="absolute inset-0 w-full h-[300px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="-mt-[20px] mq1125:-mt-[0px]">
          <a
            href="https://maps.app.goo.gl/LHHW59REBcgMBQkQ7"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer py-2.5 px-[23px] bg-[transparent] rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-base-base-black hover:bg-darkslategray-500 hover:border-darkslategray-100 focus:outline-none focus:ring-2 focus:ring-darkslategray-100 no-underline"
          >
            <span className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-base-base-black text-left min-w-[52px] font-bold no-underline">
              Ver Mapa
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

Map1.propTypes = {
  className: PropTypes.string,
};

export default Map1;
