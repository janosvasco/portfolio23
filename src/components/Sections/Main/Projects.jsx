import React from "react";
import "./Projects.css";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <>
      <h2 id="projects-title">Projektek</h2>
      <div className="project-container">
        <p>frontend project</p>
      </div>
      <ProjectDetails />
      <div className="project-container">
        <p>fullstack project</p>
      </div>
      <ProjectDetails />
    </>
  );
}
