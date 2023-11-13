import React from "react";
import "./Projects.css";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <>
      <h2 id="projects-title">Projektek</h2>
      <div id="frontend-box" className="project-container"></div>
      <ProjectDetails />
      <div id="fullstack-box" className="project-container"></div>
      <ProjectDetails />
    </>
  );
}
