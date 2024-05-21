import LinkdinLogo from "../../assets/linkedin.png";
import GithubLogo from "../../assets/github.png";

const SocialMedia = () => {
  return (
    <div className="app__socials">
     <a
        href="https://www.linkedin.com/in/khomotso-tibane-753b0186/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkdinLogo} alt="My LinkedIn profile" className=""  />
      </a>
      <a href="https://github.com/KhomotsoTibane" target="_blank" rel="noreferrer">
        <img src={GithubLogo} alt="My Github profile" className=""  />
      </a>
    </div>
  );
};

export default SocialMedia;
