import React from "react";
import Links from "../data/Links"; // Adjust the import path as necessary
import "../styles/header.scss";

interface HeaderProps {
  activeSection: string; // Define the type for activeSection prop
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const handleLinkClick = (link: string) => {
    console.log(`Navigating to ${link}`); // Handle link click (navigation or any action)
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <Links onLinkClick={handleLinkClick} activeSection={activeSection} />
    </div>
  );
};

export default Header;
