import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { BioData } from "../data/aboutdata";
import "../Styles/About.css";
import { getBio } from "../api/aboutApi";

// const DRIVE_BASE_URL = "https://drive.google.com/uc?export=view&id=";
// "https://drive.google.com/uc?export=view&id=1uRQWRAR5e_Y01tOHcjXJY_nNKbZXKsO8"

function About() {
  const [bio, setBio] = useState([]);

  useEffect(() => {
    const fetchBio = async () => {
      const bioDetails = await getBio();
      setBio(bioDetails);
    };
    fetchBio();
  }, []);

  const BioData = bio.bioData || [];

  // Flatten skills from BioData
  const skills = [
    ...(BioData.skills?.frontend || []),
    ...(BioData.skills?.programming_concepts || []),
    ...(BioData.skills?.tools || []),
    ...(BioData.skills?.learning_focus || []),
  ];
  // Get experience from BioData
  const experience = BioData.experience?.[0]?.responsibilities || [];
  // Get education from BioData
  const education =
    BioData.education?.map((edu) => edu.degree || edu.course || "") || [];
  // Get aboutBio from BioData
  const aboutBio = BioData.aboutBio || "";
  // Get interests as focus areas from BioData
  const focusAreas = BioData.interests || [];

  return (
    <section className="about-page" aria-label="About the Founder">
      <div className="about-container">
        <div className="about-wrapper">
          {/* Left Side - Profile Image */}
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <img
                src={BioData.image}
                alt={`${BioData.name} - Founder of AvanishBlogs`}
                className="about-profile-image"
              />

              <div className="about-image-glow" />
            </div>
            <div className="about-quick-info">
              <h3 className="about-name">{BioData.name}</h3>
              <p className="about-role">Founder of AvanishBlogs</p>
              <span className="about-badge">
                {BioData.title?.split("|")[0]?.trim() || "Frontend Developer"}
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content-section">
            <header className="about-header">
              <h2 className="about-section-title">About the Founder</h2>
              <p className="about-title">{BioData.title}</p>
            </header>

            <p className="about-bio-text">{aboutBio}</p>

            {/* Focus Areas */}
            <div className="about-focus">
              <h4 className="about-card-title">Focus Areas</h4>
              <div className="about-focus-tags">
                {focusAreas.slice(0, 6).map((area) => (
                  <span key={area} className="about-focus-tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="about-card">
              <h4 className="about-card-title">Skills</h4>
              <div className="about-skills-grid">
                {skills.slice(0, 12).map((skill) => (
                  <span key={skill} className="about-skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className="about-card">
              <h4 className="about-card-title">Experience</h4>
              <ul className="about-card-list">
                {experience.map((exp, index) => (
                  <li key={index} className="about-card-item">
                    <span className="about-item-bullet">→</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Card */}
            <div className="about-card">
              <h4 className="about-card-title">Education</h4>
              <ul className="about-card-list">
                {education.map((edu, index) => (
                  <li key={index} className="about-card-item">
                    <span className="about-item-bullet">•</span>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="about-cta">
              <Link to="/blog" className="about-cta-button">
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
