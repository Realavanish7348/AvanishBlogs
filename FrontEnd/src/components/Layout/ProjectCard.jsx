import React from "react";
import "../../Styles/Project.css";
import Tag from "../Shared/Tag";

function ProjectCard({ project }) {
  return (
    <article className={`proj-card ${project.wide ? "proj-card-wide" : ""}`}>
      <div className="proj-image-wrapper">
        <img src={project.image} alt={project.title} className="proj-image" />
      </div>
      <div className="proj-body">
        <div className="proj-title-row">
          <h3 className="proj-title">{project.title}</h3>
          <span className="proj-arrow">↗</span>
        </div>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
