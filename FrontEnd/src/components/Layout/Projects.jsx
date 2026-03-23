import React from "react";
import "../../Styles/Project.css";
import HeroPage from "./HeroPage";
import ProjectCard from "./ProjectCard";

// image imports
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "User Experience Design Dashboard Hotel Management",
      description:
        "In the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind. This means creating a clear and intuitive interface that allows staff to easily access and use the various tools and features of the dashboard.",
      tags: ["Design", "Research", "Presentation"],
      image: project1,
    },
    {
      id: 2,
      title:
        "Bring of User Experience Design to Policy Making, How to Impact Society",
      description:
        "User experience (UX) design is a discipline that focuses on creating products and services that are easy to use, efficient, and enjoyable for users. In the context of policy making, UX design can be used to create policies that are effe...",
      tags: ["Research", "Presentation"],
      image: project2,
    },
    {
      id: 3,
      title:
        "UX review presentati...Bringing Design Process to Teams, How to Solve User Problems with Data & Inclusive Collaboration Designons",
      description:
        "There are many different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to teams and using data and inclusive collaboration to solve user problems.",
      tags: ["Design", "Research", "Presentation", "Collaboration"],
      image: project3,
      wide: true,
    },
    {
      id: 4,
      title: "Icon Package of Slin Icon",
      description:
        "An icon package is a collection of icons that can be used in various design projects, such as website design, app development, and graphic design.",
      tags: ["Design", "Branding", "Identity"],
      image: project4,
    },
    {
      id: 5,
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
      image: project5,
    },
  ];
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
