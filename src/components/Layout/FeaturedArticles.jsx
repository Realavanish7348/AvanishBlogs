import React from "react";
import { Link } from "react-router-dom";
import "../ui/FeaturedArticles.css";

const featuredPosts = [
  {
    id: 1,
    title: "JavaScript Closures Explained — Finally",
    description:
      "Stop memorizing definitions. This is the mental model that makes closures click for every developer.",
    category: "JavaScript",
    categoryColor: "js",
    readTime: "6 min read",
    date: "Apr 28, 2026",
  },
  {
    id: 2,
    title: "React useEffect: The Complete Mental Model",
    description:
      "Most tutorials teach you the syntax. This one teaches you how to actually think about effects and their dependencies.",
    category: "React",
    categoryColor: "react",
    readTime: "8 min read",
    date: "Apr 22, 2026",
  },
  {
    id: 3,
    title: "How AI Tools Are Changing the Way We Code",
    description:
      "GitHub Copilot, Cursor, Claude — a practical breakdown of how to use AI as a force multiplier, not a crutch.",
    category: "AI",
    categoryColor: "ai",
    readTime: "5 min read",
    date: "Apr 15, 2026",
  },
  {
    id: 4,
    title: "REST APIs Explained From First Principles",
    description:
      "Before you build one, understand what you are actually building. A clear, no-fluff guide to REST.",
    category: "Web Dev",
    categoryColor: "webdev",
    readTime: "7 min read",
    date: "Apr 10, 2026",
  },
  {
    id: 5,
    title: "Git Workflow for Solo Developers",
    description:
      "You do not need a complex branching strategy when working alone. Here is a clean, practical workflow.",
    category: "Tools",
    categoryColor: "tools",
    readTime: "4 min read",
    date: "Apr 4, 2026",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox: When to Use Which",
    description:
      "A decision framework so you stop guessing and start making confident layout choices every time.",
    category: "CSS",
    categoryColor: "css",
    readTime: "5 min read",
    date: "Mar 29, 2026",
  },
];

function ArticleCard({ post }) {
  return (
    <article className="fa-card">
      <div className="fa-card-top">
        <span className={`fa-category fa-category--${post.categoryColor}`}>
          {post.category}
        </span>
        <span className="fa-read-time">{post.readTime}</span>
      </div>
      <h3 className="fa-title">{post.title}</h3>
      <p className="fa-description">{post.description}</p>
      <div className="fa-card-footer">
        <span className="fa-date">{post.date}</span>
        <Link to="/blog" className="fa-cta">
          Read More →
        </Link>
      </div>
    </article>
  );
}

function FeaturedArticles() {
  return (
    <section className="fa-section" aria-label="Featured Articles">
      <div className="fa-container">
        <div className="fa-header">
          <span className="fa-label">Featured Articles</span>
          <h2 className="fa-heading">Handpicked for Developers</h2>
          <p className="fa-subheading">
            Practical, no-fluff articles on JavaScript, React, AI, and modern
            web development.
          </p>
        </div>
        <div className="fa-grid">
          {featuredPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
        <div className="fa-view-all">
          <Link to="/blog" className="fa-view-all-btn">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;
