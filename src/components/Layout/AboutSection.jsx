import React from "react";
import { Link } from "react-router-dom";
import "../ui/AboutSection.css";

function AboutSection() {
  return (
    <section className="as-section" aria-label="About Avanish">
      <div className="as-glow" />
      <div className="as-container">
        {/* Avatar */}
        <div className="as-avatar-col">
          <div className="as-avatar-wrapper">
            <div className="as-avatar-ring">
              <img
                src="https://drive.google.com/thumbnail?id=1uRQWRAR5e_Y01tOHcjXJY_nNKbZXKsO8&sz=w400"
                alt="Avanish Maurya"
                className="as-avatar-img"
              />
            </div>
            <div className="as-avatar-badge">
              <span>🚀</span> Building in Public
            </div>
          </div>
          {/* Stats row */}
          <div className="as-stats">
            <div className="as-stat">
              <span className="as-stat-number">50+</span>
              <span className="as-stat-label">Articles</span>
            </div>
            <div className="as-stat-divider" />
            <div className="as-stat">
              <span className="as-stat-number">3+</span>
              <span className="as-stat-label">Projects</span>
            </div>
            <div className="as-stat-divider" />
            <div className="as-stat">
              <span className="as-stat-number">1K+</span>
              <span className="as-stat-label">Readers</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="as-content">
          <span className="as-label">About the Founder</span>
          <h2 className="as-heading">
            Hey, I'm Avanish — <br />
            <span className="as-heading-accent">
              Learning, Building, Writing.
            </span>
          </h2>
          <p className="as-bio">
            I'm a frontend developer (React) and aspiring full stack engineer,
            currently pursuing my BCA from IGNOU. I document everything I learn
            — from JavaScript fundamentals to AI tools — so other developers can
            learn clearly without the confusion.
          </p>
          <p className="as-mission">
            <span className="as-mission-icon">💡</span>
            <strong>Mission:</strong> Make practical tech knowledge accessible
            to every developer, regardless of background.
          </p>
          <div className="as-tags">
            {[
              "JavaScript",
              "React",
              "Full Stack",
              "AI",
              "DSA",
              "Building in Public",
            ].map((tag) => (
              <span key={tag} className="as-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="as-ctas">
            <Link to="/aboutme" className="as-btn-primary">
              Read My Story
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="as-btn-secondary"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
