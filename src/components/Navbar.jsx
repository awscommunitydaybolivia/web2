import PropTypes from "prop-types";
import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Navbar = ({
  className = "",
  onSpeakersClick,
  onSponsorsClick,
  onAgendaClick,
  onTeamClick,
  onFAQClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  const handleNavClick = (clickHandler) => {
    return () => {
      if (clickHandler) {
        clickHandler();
      }
      setIsMenuOpen(false);
    };
  };

  return (
    <header
      className={`self-stretch bg-background-color-primary overflow-hidden flex flex-col items-center justify-center py-2 px-8 box-border max-w-full mq800:py-4 mq800:pl-8 mq800:pr-8 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[32px] max-w-full mq800:gap-[16px]">
        <div className="flex-1 flex flex-row items-start justify-start min-w-[120px] max-w-full">
          <img
            className="h-[45px] mq450:h-[30px]  relative overflow-hidden "
            loading="lazy"
            alt=""
            src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-logos-web/AWS-CD-BO-logoweb.svg"
          />
        </div>
        <nav className="m-0 overflow-hidden shrink-0 flex flex-row items-start justify-between py-5 px-0 box-border max-w-full whitespace-nowrap gap-[20px] text-left text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq450:flex-wrap mq1125:hidden">
          {/*<div className="relative leading-[120%] inline-block min-w-[39px] hover:underline cursor-pointer">
            Inicio
          </div>*/}
          <div
            onClick={onSpeakersClick}
            className="relative leading-[120%] inline-block min-w-[65px] hover:underline cursor-pointer"
          >
            Speakers
          </div>
          <div
            onClick={onSponsorsClick}
            className="relative leading-[120%] inline-block min-w-[67px] hover:underline cursor-pointer"
          >
            Sponsors
          </div>
          <div
            onClick={onAgendaClick}
            className="relative leading-[120%] inline-block min-w-[56px] hover:underline cursor-pointer"
          >
            Agenda
          </div>
          <div
            onClick={onTeamClick}
            className="relative leading-[120%] inline-block min-w-[51px] hover:underline cursor-pointer"
          >
            Equipo
          </div>
          <div
            onClick={onFAQClick}
            className="relative leading-[120%] inline-block min-w-[81px] hover:underline cursor-pointer"
          >
            Preguntas Frecuentes
          </div>
        </nav>
        <div className="flex-1 flex flex-row items-center justify-end py-[14.5px] px-0 box-border min-w-[120px] max-w-full [row-gap:20px] mq450:flex-wrap mq1125:hidden">
          <div className="flex-1 flex flex-row items-center justify-end py-0 pr-6 pl-[131px] box-border gap-[12px] min-w-[281px] mq450:pl-5 mq450:box-border">
            <a
              href="https://www.facebook.com/awscommunitydaybolivia/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:scale-110 group"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
                loading="lazy"
                alt="Facebook"
                src="/icon--facebook.svg"
              />
            </a>
            <a
              href="https://www.instagram.com/awscommunitydaybolivia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:scale-110 group"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
                loading="lazy"
                alt="Instagram"
                src="/icon--instagram.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/aws-community-day-bolivia/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:scale-110 group"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
                loading="lazy"
                alt="LinkedIn"
                src="/icon--linkedin.svg"
              />
            </a>
            {/*<a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 ease-in-out hover:scale-110 group"
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
                loading="lazy"
                alt="YouTube"
                src="/icon--youtube.svg"
              />
            </a>*/}
          </div>
          <a
            href="mailto:contacto@awscommunity.org.bo"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer [border:none] py-2 px-5 bg-primary-primary rounded-31xl flex flex-row items-center justify-center hover:bg-chocolate no-underline "
          >
            <span className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left min-w-[94px] font-bold">
              Contáctanos
            </span>
          </a>
        </div>
        <div className="hidden mq1125:flex">
          <img
            className="h-[30px] w-[30px] relative cursor-pointer"
            alt="menu"
            src="/hamburger.svg"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-background-color-primary bg-opacity-85 z-[98] flex"
        >
          <div className="bg-white w-[77%] h-[99%] flex flex-col py-4 px-6">
            <div className="flex items-center justify-between pt-8 pb-8">
              <img
                className="h-[45px] mq450:h-[30px] relative overflow-hidden"
                loading="lazy"
                alt=""
                src="https://aws-cd-bo-web.s3.amazonaws.com/aws-cd-bo-logos-web/AWS-CD-BO-logoweb.svg"
              />
              <img
                className="h-[30px] w-[30px] relative cursor-pointer"
                alt="close"
                src="/closeX.svg"
                onClick={toggleMenu}
              />
            </div>
            <nav className="flex flex-col gap-5 text-left text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular">
              {/*<div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick()}
              >
                Inicio
              </div>*/}
              <div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick(onSpeakersClick)}
              >
                Speakers
              </div>
              <div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick(onSponsorsClick)}
              >
                Sponsors
              </div>
              <div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick(onAgendaClick)}
              >
                Agenda
              </div>
              <div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick(onTeamClick)}
              >
                Equipo
              </div>
              <div
                className="relative leading-[180%] py-2 hover:underline cursor-pointer"
                onClick={handleNavClick(onFAQClick)}
              >
                Preguntas Frecuentes
              </div>
            </nav>
            <a
              href="mailto:contacto@awscommunity.org.bo"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer [border:none]  py-4 px-5 bg-primary-primary rounded-31xl flex flex-row items-center justify-center hover:bg-chocolate mt-6 no-underline "
            >
              <span className="relative text-lg leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left min-w-[94px] font-bold">
                Contáctanos
              </span>
            </a>
            <div className="flex flex-row items-center justify-center gap-[12px] mt-auto pb-10">
              <div className="flex flex-row items-center justify-center box-border gap-[32px] min-w-[280px]">
                <a
                  href="https://www.facebook.com/awscommunitydaybolivia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[48px] h-[48px] p-2 rounded-full border-[1px] border-solid border-primary-primary hover:scale-110 transition-transform duration-300"
                >
                  <img
                    className="h-12 w-12"
                    loading="lazy"
                    alt="Facebook"
                    src="/icon--facebook.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/awscommunitydaybolivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[48px] h-[48px] p-2 rounded-full border-[1px] border-solid border-primary-primary hover:scale-110 transition-transform duration-300"
                >
                  <img
                    className="h-12 w-12"
                    loading="lazy"
                    alt="Instagram"
                    src="/icon--instagram.svg"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/aws-community-day-bolivia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[48px] h-[48px] p-2 rounded-full border-[1px] border-solid border-primary-primary hover:scale-110 transition-transform duration-300"
                >
                  <img
                    className="h-12 w-12"
                    loading="lazy"
                    alt="LinkedIn"
                    src="/icon--linkedin.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  onSpeakersClick: PropTypes.func,
  onSponsorsClick: PropTypes.func,
  onAgendaClick: PropTypes.func,
  onTeamClick: PropTypes.func,
  onFAQClick: PropTypes.func,
};

export default Navbar;
