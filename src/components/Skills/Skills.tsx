import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-brands-svg-icons"; // This should be changed to free-solid-svg-icons for some icons
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

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <h2>My Skills</h2>
      <div className="category-wrapper">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
