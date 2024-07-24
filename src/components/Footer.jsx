import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-20 px-16 box-border gap-[80px] max-w-full z-[4] text-left text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:py-[52px] mq800:px-8 mq800:box-border mq450:gap-[20px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-12 box-border max-w-full gap-[20px] mq1325:flex-wrap">
        <div className="w-[500px] flex flex-col items-start justify-start gap-[24px] min-w-[500px] max-w-full mq800:min-w-full mq1325:flex-1">
          <img
            className="w-[63px] h-[27px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
          <div className="self-stretch relative leading-[120%]">
            El AWS Community Day Bolivia 2024 es realizado con el esfuerzo de las comunidades
            de:
          </div>
          <img
            className="w-[63px] h-[27px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
          <img
            className="w-[63px] h-[27px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
        </div>
        <div className="w-[684px] flex flex-row items-start justify-start gap-[40px] min-w-[684px] max-w-full mq800:flex-wrap mq800:gap-[20px] mq1125:min-w-full mq1325:flex-1">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[151px]">
            <div className="self-stretch relative leading-[120%]">
              Column Two
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm">
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Six</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Seven</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Eight</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Nine</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Ten</div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[151px]">
            <div className="self-stretch relative leading-[120%]">
              Column Two
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm">
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Six</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Seven</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Eight</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Nine</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                <div className="flex-1 relative leading-[17px]">Link Ten</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[151px] font-text-regular-semi-bold">
            <div className="self-stretch relative leading-[150%] font-semibold">
              Follow Us
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm font-aws-cd-bo-1-desktop-body-caption-regular">
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[105px] pl-0 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--facebook-1.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[60px]">
                  Facebook
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[100px] pl-0 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--instagram-1.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[65px]">
                  Instagram
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[111px] pl-0 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--linkedin-1.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[54px]">
                  LinkedIn
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-2 pr-28 pl-0 gap-[12px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--youtube-1.svg"
                />
                <div className="relative leading-[17px] inline-block min-w-[53px]">
                  Youtube
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-sm mq800:gap-[16px]">
        <div className="self-stretch h-px relative bg-link-primary box-border border-[1px] border-solid border-link-primary" />
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq1125:flex-wrap">
          <div className="relative leading-[120%] inline-block max-w-full">
            © 2024 AWS Community Day Bolivia. Todos los derechos reservados.
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="relative leading-[17px]">
              Política de Privacidad
            </div>
            <div className="relative leading-[17px]">Términos del Servicio</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
