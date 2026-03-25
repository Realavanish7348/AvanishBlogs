import React from "react";
import HeroPage from "../components/Layout/HeroPage";
import "../Styles/About.css";
import about1 from "../assets/about1.png";
import { aboutBio, experiences, education, skills } from "../data/aboutdata";

function About() {
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
              <p className="about-bio">{aboutBio}</p>
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
