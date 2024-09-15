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
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProjects(); // Call the fetch function
  }, []);

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      // Use a conditional check to ensure containerRef.current is not null
      containerRef.current.style.cursor = "grabbing"; // Change cursor to grabbing
      const startX = e.pageX - containerRef.current.offsetLeft; // Get the starting X position
      const scrollLeft = containerRef.current.scrollLeft; // Get the current scroll position

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (containerRef.current) {
          // Use a conditional check inside the nested function
          const x = moveEvent.pageX - containerRef.current.offsetLeft; // Get the current X position
          const walk = (x - startX) * 2; // Calculate the distance to scroll
          containerRef.current.scrollLeft = scrollLeft - walk; // Update scroll position
        }
      };

      const handleMouseUp = () => {
        if (containerRef.current) {
          // Use a conditional check inside the nested function
          containerRef.current.style.cursor = "grab"; // Reset cursor
          containerRef.current.removeEventListener(
            "mousemove",
            handleMouseMove
          ); // Remove event listener
          containerRef.current.removeEventListener("mouseup", handleMouseUp); // Remove event listener
        }
      };

      containerRef.current.addEventListener("mousemove", handleMouseMove); // Add event listener for mouse move
      containerRef.current.addEventListener("mouseup", handleMouseUp); // Add event listener for mouse up
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="projects" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div
        className="projects-container"
        ref={containerRef}
        onMouseDown={handleMouseDown} // Add mouse down event
      >
        {projects.map((project) => (
          <ProjectItem
            key={project.sys.id}
            id={project.sys.id} // Pass the id prop
            title={project.fields.title}
            description={project.fields.description}
            imageUrl={`https:${project.fields.image.fields.file.url}`} // Construct the image URL
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
