import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import designIcon from "../../assets/design.svg";
import developmentIcon from "../../assets/development.svg";
import motionIcon from "../../assets/motion.svg";

import {
  faFigma,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faFacebook, // Using faFilm as a placeholder for Adobe After Effects
  faAirbnb,
  faAmazon,
  faMicrosoft,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/skills/skills.scss";

const skillsData = {
  "Product Design": [
    { name: "Figma", icon: faFigma },
    { name: "Sketch", icon: faFigma }, // Placeholder icon
    { name: "Adobe XD", icon: faFigma }, // Placeholder icon
    { name: "InVision", icon: faFigma }, // Placeholder icon
    { name: "User Research", icon: faFacebook }, // Placeholder icon
  ],
  Development: [
    { name: "React", icon: faReact },
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "Mobile Development", icon: faAirbnb },
  ],
  "Motion Design": [
    { name: "Adobe After Effects", icon: faAmazon }, // Using faFilm as a placeholder
    { name: "Principle", icon: faFacebook }, // Using faFilm as a placeholder
    { name: "Framer", icon: faMicrosoft }, // Using faFilm as a placeholder
    { name: "Lottie", icon: faTwitch }, // Using faFilm as a placeholder
    { name: "Animation", icon: faFacebook }, // Using faPaintBrush as a placeholder
  ],
};

// Define the category icons
const categoryIcons = {
  "Product Design": designIcon,
  Development: developmentIcon,
  "Motion Design": motionIcon,
};

// Define a type for the categories
type SkillCategory = keyof typeof skillsData;

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <h2>My Skills</h2>
      <div className="category-wrapper">
        {Object.entries(skillsData).map(([category, skills]) => {
          const typedCategory = category as SkillCategory; // Type assertion here
          return (
            <div key={category} className="skills-category">
              <h3>
                <img
                  src={categoryIcons[typedCategory]} // Use typedCategory here
                  alt={`${category} icon`}
                  className="category-icon"
                />
                {category}
              </h3>
              <ul className="skills-list">
                {skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
