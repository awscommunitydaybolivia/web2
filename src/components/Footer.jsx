import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Dialog from "./Dialog";

const Footer = ({ className = "" }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (e) => {
    e.preventDefault();
    console.log("Attempting to open dialog");
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    console.log("Attempting to close dialog");
    setIsDialogOpen(false);
  };

  useEffect(() => {
    console.log("Dialog state changed:", isDialogOpen);
  }, [isDialogOpen]);

  return (
    <>
      <footer
        className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-start justify-start py-16 px-16 box-border max-w-full z-[4] text-left text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq800:gap-[40px] mq800:py-[52px] mq800:px-8 mq800:box-border mq450:gap-[20px] ${className}`}
      >
        <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-12 box-border max-w-full gap-[20px] mq1325:flex-wrap">
          <div className="w-[500px] flex flex-col items-start justify-start gap-[24px] min-w-[500px] max-w-full mq800:min-w-full mq1325:flex-1">
            <img
              className="h-[65px] mq450:h-[55px] relative overflow-hidden"
              loading="lazy"
              alt=""
              src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-logos-web/AWS-CD-BO-logoweb.svg"
            />
            <div className="self-stretch relative leading-[120%]">
              El AWS Community Day Bolivia 2024 es realizado por las
              comunidades:
            </div>
            <a
              href="https://www.meetup.com/aws-user-group-la-paz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[100px] relative overflow-hidden shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
                loading="lazy"
                alt=""
                src="/aws-ug-lpz.png"
              />
            </a>
            <a
              href="https://www.meetup.com/aws-user-group-cochabamba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-[200px] relative overflow-hidden shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"
                loading="lazy"
                alt=""
                src="/aws-ug-cocha.png"
              />
            </a>
          </div>
          <div className="flex flex-row items-start justify-end gap-[40px] max-w-full mq800:flex-wrap mq800:gap-[20px] mq1125:min-w-full mq1325:flex-1">
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px] min-w-[151px]">
              <div className="self-stretch relative leading-[120%]">
                Información Útil
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div>
                    <a
                      href="#"
                      onClick={openDialog}
                      className="font-bold hover:underline"
                    >
                      Código de conducta
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[151px] font-aws-cd-bo-1-desktop-body-caption-bold">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Síguenos en:
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm font-aws-cd-bo-1-desktop-body-caption-regular">
                <a
                  href="https://www.facebook.com/awscommunitydaybolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-stretch flex flex-row items-center justify-start py-2 pr-[105px] pl-0 gap-[12px] no-underline text-current hover:text-current hover:underline focus:text-current visited:no-underline visited:text-current"
                >
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt="Facebook"
                    src="/icon--facebook-1.svg"
                  />
                  <div className="relative leading-[17px] inline-block min-w-[60px]">
                    Facebook
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/awscommunitydaybolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-stretch flex flex-row items-center justify-start py-2 pr-[100px] pl-0 gap-[12px] no-underline text-current hover:text-current hover:underline focus:text-current visited:no-underline visited:text-current"
                >
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt="Instagram"
                    src="/icon--instagram-1.svg"
                  />
                  <div className="relative leading-[17px] inline-block min-w-[65px]">
                    Instagram
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/aws-community-day-bolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-stretch flex flex-row items-center justify-start py-2 pr-[111px] pl-0 gap-[12px] no-underline text-current hover:text-current hover:underline focus:text-current visited:no-underline visited:text-current"
                >
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt="LinkedIn"
                    src="/icon--linkedin-1.svg"
                  />
                  <div className="relative leading-[17px] inline-block min-w-[54px]">
                    LinkedIn
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@awscommunitydaybolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-stretch flex flex-row items-center justify-start py-2 pr-28 pl-0 gap-[12px] no-underline text-current hover:text-current hover:underline focus:text-current visited:no-underline visited:text-current"
                >
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt="YouTube"
                    src="/icon--youtube-1.svg"
                  />
                  <div className="relative leading-[17px] inline-block min-w-[53px]">
                    Youtube
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-sm mq800:gap-[16px]">
          <div className="self-stretch h-px relative bg-link-primary box-border border-[1px] border-solid border-link-primary" />
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq1125:flex-wrap">
            <div className="relative leading-[120%] inline-block max-w-full">
              © 2024 AWS Community Day Bolivia.
            </div>
          </div>
        </div>
      </footer>

      <Dialog isOpen={isDialogOpen} closeDialog={closeDialog} />
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
