import PropTypes from "prop-types";

const Card2 = ({ speaker, className = "" }) => {
  return (
    <div
      className={`h-[495px] flex flex-col items-center justify-start gap-[24px] text-center text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt={speaker.name}
        src={speaker.image}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <b className="self-stretch relative leading-[250%]">{speaker.name}</b>
          <div className="self-stretch relative leading-[150%]">
            {speaker.jobTitle}
          </div>
        </div>

      </div>
      <div className="flex flex-row items-start justify-start gap-[14px]">
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:scale-110 group"
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
            loading="lazy"
            alt="YouTube"
            src="/icon--linkedin.svg"
          />
        </a>
        {speaker.twitter && (
        <a  
          href={speaker.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:scale-110 group"
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
            loading="lazy"
            alt="X (Twitter)"
            src="/icon--x.svg"
          />
        </a>
      )}
      </div>
    </div>
  );
};

Card2.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Card2;
