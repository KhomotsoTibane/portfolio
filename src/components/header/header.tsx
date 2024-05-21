
import ME from "../../assets/IMG_9492bg.png";
import SocialMedia from "./SocialMedia";

import "./header.css";

const header = () => {
  return (
    <header>
      <div className="app__container app__header-container">
        <div className="app__header-me">
          <img src={ME} alt="khomotso" />
        </div>

        <div className="app__header-text">
          <h5>Hello I'm</h5>
          <h1>Khomotso Tibane</h1>
          <h6 className="app__text-light">Frontend Developer</h6>
          <p>
            From concept to click. Ready to bring your website and app ideas to life? Let's chat!
          </p>
          <div className="app__header_btn-container">
            <a href="#contact" className="app__header__btn app__header__btn-primary">
              Lets Chat
            </a>
          </div>
        </div>
        <SocialMedia />
      </div>
    </header>
  );
};

export default header;
