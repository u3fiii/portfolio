// src/components/ProjectItem.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/projects/project-item.scss";

interface ProjectItemProps {
  id: string; // Add the id prop
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`); // Navigate to ProjectPage with the project ID
  };

  return (
    <div className="project-item" onClick={handleClick}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="project-item-img" />
      )}
      <h3 className="project-item-title">{title}</h3>
      <p className="project-item-description">{description}</p>
    </div>
  );
};

export default ProjectItem;
