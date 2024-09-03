// Header.tsx

import Links from "../data/Links"; // Adjust the import path as necessary
import "../styles/header.scss";

const Header = () => {
  const handleLinkClick = (link: string) => {
    console.log(`Navigating to ${link}`); // Handle link click (navigation or any action)
  };

  return (
    <div className="header">
      <Links onLinkClick={handleLinkClick} />
    </div>
  );
};

export default Header;
