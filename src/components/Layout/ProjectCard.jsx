import React from "react";
import "../ui/ProjectCard.css";
import Tag from "./Tag";

function ProjectCard({ project }) {
  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://avanishblogs-backend.onrender.com";

  return (
    <article className={`proj-card ${project.wide ? "proj-card-wide" : ""}`}>
      <div className="proj-image-wrapper">
        <img
          src={BASE_URL + project.image}
          alt={project.title}
          className="proj-image"
        />
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
