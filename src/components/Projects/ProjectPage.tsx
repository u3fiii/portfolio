// src/components/ProjectPage.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../data fetching/Contentful"; // Import the Contentful client

import "../../styles/projects/project-page.scss";
const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the project ID from the URL
  const [project, setProject] = useState<any>(null); // State to hold project data

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await client.getEntries({
          content_type: "kitchenCarousel", // Replace with your content type ID
          "sys.id": id, // Filter by the project ID
        });
        if (response.items.length > 0) {
          setProject(response.items[0]); // Set the first project found
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (id) {
      fetchProject(); // Call the fetch function if ID is present
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>; // Show loading state
  }

  console.log(project.fields);
  return (
    <div className="project-page">
      <div className="project-page-wrapper">
        {project.fields.image && (
          <img
            src={`https:${project.fields.image.fields.file.url}`}
            alt={project.fields.title}
            className="main-image"
          />
        )}
        <h1>{project.fields.title}</h1>
        <p>{project.fields.description}</p>
        <p>{project.fields.longDescription}</p>
        {project.fields.secondImage && (
          <img
            src={`https:${project.fields.secondImage.fields.file.url}`}
            alt={project.fields.title}
            className="main-image"
          />
        )}
        <p>{project.fields.longDescription}</p>

        {project.fields.thirdImage && (
          <img
            src={`https:${project.fields.thirdImage.fields.file.url}`}
            alt={project.fields.title}
            className="main-image"
          />
        )}
        <p>{project.fields.longDescription2}</p>

        {project.fields.fourthImage && (
          <img
            src={`https:${project.fields.fourthImage.fields.file.url}`}
            alt={project.fields.title}
            className="main-image"
          />
        )}
        <p>{project.fields.longDescription3}</p>

        {project.fields.fifthImage && (
          <img
            src={`https:${project.fields.fifthImage.fields.file.url}`}
            alt={project.fields.title}
            className="main-image"
          />
        )}
        <p>{project.fields.longDescription4}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
