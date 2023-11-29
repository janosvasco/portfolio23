import "./Projects.css";
import ProjectDetails from "./ProjectDetails";
import { FRONTEND } from "./FrontendProject";
import { FULLSTACK } from "./FullstackProject";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <h2 id="projects-title">Projektek</h2>
      <div id="fe-section" className="project-section">
        <NavLink to="https://webshop-project-d5e24.web.app/">
          <div id="frontend-box" className="project-container"></div>
        </NavLink>
        <ProjectDetails details={FRONTEND} />
      </div>
      <div id="fs-section" className="project-section">
        <NavLink>
          <div id="fullstack-box" className="project-container"></div>
        </NavLink>
        <ProjectDetails details={FULLSTACK} />
      </div>
    </>
  );
}
