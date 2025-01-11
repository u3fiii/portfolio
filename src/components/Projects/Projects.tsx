import React, { useState, useEffect, useRef } from "react";
import client from "../../data fetching/Contentful"; // Import the Contentful client
import ProjectItem from "./ProjectItem";

import "../../styles/projects/projects.scss";

import arrowRight from "../../assets/projects/arrow-right.svg";
import arrowLeft from "../../assets/projects/arrow-left.svg";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]); // State to hold project data
  const [loading, setLoading] = useState(true); // Loading state
  const [clickedArrow, setClickedArrow] = useState<string | null>(null); // State to manage clicked arrow
  const containerRef = useRef<HTMLDivElement>(null); // Initialize ref with null

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({
          content_type: "kitchenCarousel",
        });
        setProjects(response.items);
        console.log(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleArrowClick = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setClickedArrow(direction);

      setTimeout(() => {
        setClickedArrow(null);
      }, 400); // Remove the class after 1 second
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="projects" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="arrow-container">
        <div
          className={`arrow arrow-left ${
            clickedArrow === "left" ? "clicked" : ""
          }`}
          onClick={() => handleArrowClick("left")}
        >
          <img src={arrowLeft} />
        </div>
        <div
          className={`arrow arrow-right ${
            clickedArrow === "right" ? "clicked" : ""
          }`}
          onClick={() => handleArrowClick("right")}
        >
          <img src={arrowRight} />
        </div>
      </div>
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
