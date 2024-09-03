// Links.tsx
import React from "react";

const linksData = [
  { name: "Home" },
  { name: "About" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Experiences" },
  { name: "Contact" },
];

const Links: React.FC<{ onLinkClick: (link: string) => void }> = ({
  onLinkClick,
}) => {
  return (
    <div className="links">
      {linksData.map((link, index) => (
        <div
          className="link-wrapper"
          key={index}
          onClick={() => onLinkClick(link.name)}
        >
          <div className="link">
            <p>{link.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Links;
