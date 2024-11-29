import designIcon from "../../assets/skills/design.svg";
import developmentIcon from "../../assets/skills/develop.svg";
import motionIcon from "../../assets/skills/motion.svg";

import "../../styles/skills/skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="category-skill design">
          <div className="category-title">
            <img src={designIcon} />
            <h3>Design</h3>
          </div>
          <div className="skills-items">
            <p>
              User Interface / User Research / Usability Testing / Data Analysis{" "}
            </p>
          </div>
        </div>
        <div className="category-skill develop">
          <div className="category-title">
            <img src={developmentIcon} />
            <h3>Develop</h3>
          </div>
          <div
            className="skills-items
          "
          >
            <p>
              User Interface / User Research / Usability Testing / Data Analysis{" "}
            </p>
          </div>
        </div>
        <div className="category-skill motion">
          <div className="category-title">
            <img src={motionIcon} />
            <h3>Motion</h3>
          </div>
          <div
            className="skills-items
          "
          >
            <p>
              User Interface / User Research / Usability Testing / Data Analysis{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
