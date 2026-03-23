import React from "react";
import HeroPage from "./HeroPage";
import "../../Styles/About.css";
import about1 from "../../assets/about1.png";

function About() {
  const skills = [
    "Extensive experience in UI design, with a strong portfolio of completed projects",
    "Proficiency in design tools such as Adobe Creative Suite and Sketch",
    "Excellent visual design skills, with a strong understanding of layout, color theory, and typography",
    "Ability to create wireframes and prototypes to communicate design concepts",
    "Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams",
    "Experience conducting user research and gathering insights to inform design decisions",
    "Proficiency in HTML, CSS, and JavaScript",
  ];

  const experiences = [
    "5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries",
    "Led the design of a successful e-commerce website, resulting in a 25% increase in online sales",
    "Created wireframes and prototypes for a mobile cooking app, leading to a 20% increase in app usage",
    "Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic",
  ];

  const education = [
    "Bachelor's degree in Graphic Design",
    "Certified User Experience Designer (CUED)",
  ];
  return (
    <>
      <section className="about-section">
        <HeroPage heroTitle="ABOUT" />

        <div className="about-page">
          {/* Hero Image */}
          <div className="about-hero">
            <img src={about1} alt="About Hero" className="about-hero-img" />
          </div>

          <div className="about-content">
            {/* About Me */}
            <section className="about-section">
              <h2 className="about-heading">About Me</h2>
              <p className="about-bio">
                As a passionate and experienced UI designer, I am dedicated to
                creating intuitive and engaging user experiences that meet the
                needs of my clients and their users. I have a strong
                understanding of design principles and a proficiency in design
                tools, and I am comfortable working with cross-functional teams
                to bring projects to fruition. I am confident in my ability to
                create designs that are both visually appealing and functional,
                and I am always looking for new challenges and opportunities to
                grow as a designer.
              </p>
            </section>

            {/* Skills */}
            <section className="about-section">
              <h3 className="about-subheading">Skills:</h3>
              <ul className="about-list">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </section>

            {/* Experience */}
            <section className="about-section">
              <h3 className="about-subheading">Experience:</h3>
              <ul className="about-list">
                {experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </section>

            {/* Education */}
            <section className="about-section">
              <h3 className="about-subheading">Education:</h3>
              <ul className="about-list">
                {education.map((edu, i) => (
                  <li key={i}>{edu}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
