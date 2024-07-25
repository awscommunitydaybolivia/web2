import PropTypes from "prop-types";
import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const Navbar = ({ className = "", onSpeakersClick, onSponsorsClick, onEvent1Click, onTeamClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

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
        <nav className="m-0 w-[406px] overflow-hidden shrink-0 flex flex-row items-start justify-between py-5 px-0 box-border max-w-full whitespace-nowrap gap-[20px] text-left text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular mq450:flex-wrap mq1125:hidden">
          <div className="relative leading-[120%] inline-block min-w-[39px] hover:underline cursor-pointer">
            Inicio
          </div>
          <div onClick={onSpeakersClick} className="relative leading-[120%] inline-block min-w-[65px] hover:underline cursor-pointer">
            Speakers
          </div>
          <div onClick={onSponsorsClick} className="relative leading-[120%] inline-block min-w-[67px] hover:underline cursor-pointer">
            Sponsors
          </div>
          <div onClick={onEvent1Click} className="relative leading-[120%] inline-block min-w-[56px] hover:underline cursor-pointer">
            Agenda
          </div>
          <div onClick={onTeamClick} className="relative leading-[120%] inline-block min-w-[51px] hover:underline cursor-pointer">
            Equipo
          </div>
        </nav>
        <div className="flex-1 flex flex-row items-center justify-end py-[14.5px] px-0 box-border min-w-[120px] max-w-full [row-gap:20px] mq450:flex-wrap mq1125:hidden">
          <div className="flex-1 flex flex-row items-center justify-end py-0 pr-6 pl-[131px] box-border gap-[12px] min-w-[281px] mq450:pl-5 mq450:box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--facebook.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--instagram.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--linkedin.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--youtube.svg"
            />
          </div>
          <button className="cursor-pointer [border:none] py-2 px-5 bg-primary-primary rounded-31xl flex flex-row items-center justify-center hover:bg-chocolate">
            <b className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left min-w-[94px]">
              Contáctanos
            </b>
          </button>
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
          <div className="bg-white w-[90%] h-[99%] flex flex-col py-4 px-6">
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
            <nav className="flex flex-col gap-6 text-left text-base text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular">
              <div className="relative leading-[180%] py-2 hover:underline cursor-pointer">Inicio</div>
              <div onClick={onSpeakersClick} className="relative leading-[180%] py-2 hover:underline cursor-pointer">Speakers</div>
              
              <div onClick={onSponsorsClick} className="relative leading-[180%] py-2 hover:underline cursor-pointer">Sponsors</div>
              
              <div onClick={onEvent1Click} className="relative leading-[180%] py-2 hover:underline cursor-pointer">Agenda</div>
              
              <div onClick={onTeamClick} className="relative leading-[180%] py-2 hover:underline cursor-pointer">Equipo</div>
            </nav>
            <div className="flex flex-row items-start justify-start gap-[12px] mt-6">
            <div className="flex-1 flex flex-row items-center justify-start box-border gap-[12px] min-w-[281px] mq450:box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--facebook.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--instagram.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--linkedin.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icon--youtube.svg"
            />
          </div>
            </div>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-primary-primary rounded-31xl flex flex-row items-center justify-center hover:bg-chocolate mt-6">
              <b className="relative text-base leading-[120%] inline-block font-aws-cd-bo-1-desktop-body-caption-regular text-background-color-primary text-left min-w-[94px]">
                Contáctanos
              </b>
            </button>
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
  onEvent1Click: PropTypes.func,
  onTeamClick: PropTypes.func,
};

export default Navbar;