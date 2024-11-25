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

  return (
    <div className="project-page">
      {project.fields.image && (
        <img
          src={`https:${project.fields.image.fields.file.url}`}
          alt={project.fields.title}
          className="main-image"
        />
      )}
      <h1>{project.fields.title}</h1>
      <p>{project.fields.description}</p>
    </div>
  );
};

export default ProjectPage;
