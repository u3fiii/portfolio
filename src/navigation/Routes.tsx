// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../App"; // Assuming Homepage is in the pages folder
import ProjectPage from "../components/Projects/ProjectPage"; // Import the ProjectPage component

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/project/:id" element={<ProjectPage />} />{" "}
        {/* Dynamic route for ProjectPage */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
