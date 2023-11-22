import React from "react";
import "./Projects.css";
import ProjectDetails from "./ProjectDetails";
import { FRONTEND } from "./FrontendProject";
import { FULLSTACK } from "./FullstackProject";

export default function Projects() {
  return (
    <>
      <h2 id="projects-title">Projektek</h2>
      <div id="frontend-box" className="project-container"></div>
      <ProjectDetails details={FRONTEND} />
      <div id="fullstack-box" className="project-container"></div>
      <ProjectDetails details={FULLSTACK} />
    </>
  );
}
