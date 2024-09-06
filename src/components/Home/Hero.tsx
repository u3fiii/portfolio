import "../../styles/home/hero.scss";

import downloadIcon from "../../assets/download.svg";
import InstagramIcon from "../../assets/instagram.svg";
import DribbleIcon from "../../assets/dribbble.svg";
import githubIcon from "../../assets/github.svg";

import CharacterMotion from "./CharacterMotion";

import TypingEffect from "../TypingEffect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="profile-pic-wrapper">
        <CharacterMotion />
      </div>
      <div className="right-texts">
        <div className="hero-title">
          <h1 className="hero-title-no-animation">I'm Ali, a</h1>
          <TypingEffect />
        </div>
        <div className="hero-description">
          With 10+ years of experience as a Designer/Developer, I blend creative
          problem-solving and technical skills to deliver user-friendly digital
          solutions.
        </div>
        <div className="hero-btns">
          <div className="dl-cv btn">
            <img src={downloadIcon} />
            <p>Download CV</p>
          </div>
          <div className="instagram btn">
            <img src={InstagramIcon} />
          </div>
          <div className="dribble btn">
            <img src={DribbleIcon} />
          </div>
          <div className="github btn">
            <img src={githubIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
