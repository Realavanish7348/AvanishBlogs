import React from "react";
import { Link } from "react-router-dom";
import "../ui/HeroPage2.css";

const topicCards = [
  { name: "JavaScript", icon: "⚡", count: 18 },
  { name: "React", icon: "⚛️", count: 15 },
  { name: "NodeJS", icon: "🟢", count: 11 },
];

const tagPills = ["JavaScript", "React", "AI", "WebDev", "TechTrends"];

function HeroPage2() {
  return (
    <section className="hero-section2" aria-label="Hero">
      <div className="hero-glow" />
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Practical Tech Knowledge</span>
          <h1 className="hero-heading">
            Learn Development, AI & Modern Tech Clearly
          </h1>
          <p className="hero-description">
            Deep insights on JavaScript, React, AI tools, system design, and the
            future of technology. Built for developers who want practical
            knowledge.
          </p>
          <div className="hero-buttons">
            <Link to="/blog" className="hero-btn-primary">
              Start Reading
            </Link>
            <Link to="/categories" className="hero-btn-secondary">
              Browse Categories
            </Link>
          </div>
          <div className="hero-tags">
            {tagPills.map((tag) => (
              <span key={tag} className="hero-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            {topicCards.map((card, index) => (
              <div
                key={card.name}
                className="topic-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="topic-card-header">
                  <span className="topic-card-name">{card.name}</span>
                  <span className="topic-card-icon">{card.icon}</span>
                </div>
                <span className="topic-card-count">{card.count} Articles</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage2;
