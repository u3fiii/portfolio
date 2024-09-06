import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

interface Link {
  name: string;
  icon: any; // Assuming you're using any for the icon type
}

const linksData: Link[] = [
  { name: "Home", icon: faHome },
  { name: "Skills", icon: faCode },
  { name: "Projects", icon: faProjectDiagram },
  { name: "Contact", icon: faEnvelope },
];

interface LinksProps {
  onLinkClick: (link: string) => void;
  activeSection: string;
}

const Links: React.FC<LinksProps> = ({ onLinkClick, activeSection }) => {
  return (
    <div className="links">
      {linksData.map((link, index) => (
        <div
          className={`link-wrapper ${
            activeSection === link.name ? "active" : ""
          }`}
          key={index}
          onClick={() => onLinkClick(link.name)}
        >
          <div className="link">
            <FontAwesomeIcon className="link-icon" icon={link.icon} size="1x" />
            <p>{link.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Links;
