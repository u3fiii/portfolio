// src/components/Projects.tsx
import React, { useState, useEffect, useRef } from "react";
import client from "../../data fetching/Contentful"; // Import the Contentful client
import ProjectItem from "./ProjectItem"; // Import the ProjectItem component
import "../../styles/projects/projects.scss";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]); // State to hold project data
  const [loading, setLoading] = useState(true); // Loading state
  const containerRef = useRef<HTMLDivElement>(null); // Initialize ref with null

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({
          content_type: "kitchenCarousel", // Replace with your content type ID
        });
        setProjects(response.items); // Set the projects in state
        console.log(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProjects(); // Call the fetch function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="projects" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container" ref={containerRef}>
        {projects.map((project) => (
          <ProjectItem
            key={project.sys.id}
            id={project.sys.id} // Pass the id prop
            title={project.fields.title}
            date={project.fields.date}
            category={project.fields.category}
            description={project.fields.description}
            imageUrl={`https:${project.fields.image.fields.file.url}`} // Construct the image URL
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
