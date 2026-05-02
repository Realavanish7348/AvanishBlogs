import React from "react";
import { Link } from "react-router-dom";
import "../ui/CategoriesSection.css";

const categories = [
  {
    name: "JavaScript",
    icon: "⚡",
    count: 18,
    slug: "javascript",
    color: "js",
  },
  { name: "React", icon: "⚛️", count: 15, slug: "react", color: "react" },
  { name: "NodeJS", icon: "🟢", count: 11, slug: "nodejs", color: "node" },
  { name: "AI & Tools", icon: "🤖", count: 9, slug: "ai", color: "ai" },
  { name: "CSS & Design", icon: "🎨", count: 12, slug: "css", color: "css" },
  { name: "Web Dev", icon: "🌐", count: 14, slug: "webdev", color: "webdev" },
  { name: "DSA", icon: "🧠", count: 7, slug: "dsa", color: "dsa" },
  { name: "Tech Trends", icon: "📈", count: 10, slug: "tech", color: "tech" },
];

function CategoryCard({ cat }) {
  return (
    <Link to="/categories" className={`cs-card cs-card--${cat.color}`}>
      <div className="cs-card-header">
        <span className="cs-icon">{cat.icon}</span>
      </div>
      <h3 className="cs-name">{cat.name}</h3>
      <span className="cs-count">{cat.count} Articles</span>
    </Link>
  );
}

function CategoriesSection() {
  return (
    <section className="cs-section" aria-label="Topics">
      <div className="cs-container">
        <div className="cs-header">
          <span className="cs-label">Topics</span>
          <h2 className="cs-heading">Browse by Category</h2>
          <p className="cs-subheading">
            Find exactly what you want to learn — from fundamentals to
            cutting-edge tools.
          </p>
        </div>
        <div className="cs-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
