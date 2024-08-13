import PropTypes from "prop-types";

const Card = ({ team, className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center justify-start gap-[24px] min-w-[240px] max-w-[304px] text-center text-lg text-link-primary font-aws-cd-bo-1-desktop-body-caption-regular ${className}`}
    >
      <img
        className="h-[270px] max-w-[270px] relative object-contain"
        loading="lazy"
        alt={team.name}
        src={team.image}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-center justify-start">
          <b className="self-stretch relative leading-[150%]">{team.name}</b>
          <div className="self-stretch relative leading-[150%]">{team.jobTitle}</div>
        </div>
        {/*<div className="self-stretch relative text-base leading-[150%]">
          LLLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>*/}
      </div>
      <div className="flex flex-row items-start justify-start gap-[14px]">
        <a
          href={team.linkedin}
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
        {team.twitter && (
        <a  
          href={team.twitter}
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
      {team.instagram && (
        <a  
          href={team.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 ease-in-out hover:scale-110 group"
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:[color-scheme:dark]"
            loading="lazy"
            alt="X (Twitter)"
            src="/icon--instagram.svg"
          />
        </a>
      )}
      </div>
    </div>
  );
};

Card.propTypes = {
  team: PropTypes.shape({
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default Card;
