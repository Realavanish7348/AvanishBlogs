import React, { useState, useEffect } from "react";
import "../Styles/Project.css";
import HeroPage from "../components/Layout/HeroPage";
import ProjectCard from "../components/Layout/ProjectCard";
import { getPojectBlogs } from "../api/projectApi";
import LoadingPage from "../utils/LoadingPage";

function Projects() {
  const [projectBlogs, setProjectBlogs] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getPojectBlogs();
      const postData = await data.projectPosts;
      console.log("ProjectData:", postData);
      setProjectBlogs(postData);
    }

    fetchProjects();
  }, []);

  const [first, second, wide, ...rest] = projectBlogs || [];

  if (!projectBlogs || projectBlogs.length === 0) {
    return <LoadingPage />;
  }
  return (
    <>
      <section className="project-section" id="projects">
        <HeroPage heroTitle="PROJECTS" />

        <div className="projects-page">
          <h2 className="projects-heading">List Project</h2>

          {/* Top row: 2 equal cards */}
          <div className="proj-grid-2">
            {first && <ProjectCard project={first} />}
            {second && <ProjectCard project={second} />}
          </div>

          {/* Wide full-width card */}
          {wide && <ProjectCard project={wide} />}

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
