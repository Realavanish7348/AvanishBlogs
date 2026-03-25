import React from "react";
import "../Styles/Project.css";
import HeroPage from "../components/Layout/HeroPage";
import ProjectCard from "../components/Layout/ProjectCard";
import { projects } from "../data/projectsPosts";

function Projects() {
  const [first, second, wide, ...rest] = projects;
  return (
    <>
      <section className="project-section" id="projects">
        <HeroPage heroTitle="PROJECTS" />

        <div className="projects-page">
          <h2 className="projects-heading">List Project</h2>

          {/* Top row: 2 equal cards */}
          <div className="proj-grid-2">
            <ProjectCard project={first} />
            <ProjectCard project={second} />
          </div>

          {/* Wide full-width card */}
          <ProjectCard project={wide} />

          {/* Bottom row: 2 equal cards */}
          <div className="proj-grid-2">
            {rest.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
