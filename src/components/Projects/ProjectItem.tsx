import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/projects/project-item.scss";

import calendarIcon from "../../assets/calendar.svg";

interface ProjectItemProps {
  id: string; // Project ID
  title: string; // Project title
  description: string; // Project description
  imageUrl: string; // Project image URL
  date: string; // Project date in ISO format or a format that can be parsed by Date
  category: string[]; // Array of categories
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  title,
  description,
  date,
  category,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`); // Navigate to ProjectPage with the project ID
  };

  // Function to format the date to "Month Year"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  };

  // Function to truncate the description
  const truncateDescription = (desc: string, maxLength: number) => {
    return desc.length > maxLength
      ? `${desc.substring(0, maxLength)}...`
      : desc;
  };

  return (
    <div className="project-item" onClick={handleClick}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="project-item-img" />
      )}
      <div className="line1">
        <h3 className="project-item-title">{truncateDescription(title, 19)}</h3>
        <div className="date-wrapper">
          <img src={calendarIcon} alt="Calendar" />
          <p className="project-item-date">{formatDate(date)}</p>
        </div>
      </div>
      <p className="project-item-description">
        {truncateDescription(description, 43)} {/* Truncate the description */}
      </p>
      <div className="project-item-categories">
        {category.map((cat, index) => (
          <span key={index} className="project-item-category">
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
