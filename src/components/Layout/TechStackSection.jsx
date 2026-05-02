import React from "react";
import "../ui/TechStackSection.css";

const techStack = [
  {
    name: "JavaScript",
    icon: "⚡",
    desc: "ES6+ fundamentals & async patterns",
  },
  { name: "React", icon: "⚛️", desc: "Component architecture & hooks" },
  { name: "Node.js", icon: "🟢", desc: "Server-side JS & REST APIs" },
  {
    name: "CSS / Tailwind",
    icon: "🎨",
    desc: "Modern styling & responsive design",
  },
  { name: "Git & GitHub", icon: "🐙", desc: "Version control & collaboration" },
  { name: "VS Code", icon: "💻", desc: "Primary development environment" },
  { name: "AI Tools", icon: "🤖", desc: "Copilot, Claude, Cursor" },
  { name: "Vite", icon: "⚡", desc: "Fast build tooling & HMR" },
];

function TechStackSection() {
  return (
    <section className="ts-section" aria-label="Tech Stack">
      <div className="ts-container">
        <div className="ts-header">
          <span className="ts-label">Tools & Stack</span>
          <h2 className="ts-heading">Built With Modern Tools</h2>
          <p className="ts-subheading">
            The technologies I use to build, learn, and create content every
            day.
          </p>
        </div>
        <div className="ts-grid">
          {techStack.map((tool) => (
            <div className="ts-card" key={tool.name}>
              <span className="ts-icon">{tool.icon}</span>
              <div className="ts-info">
                <span className="ts-name">{tool.name}</span>
                <span className="ts-desc">{tool.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
