import React from "react";
import "../ui/BlogDetail.css";
import Tag from "../Layout/Tag.jsx";
import { blog } from "../../data/detailBlogs.js";
import NewsletterSubscribe from "../Layout/NewsletterSubscribe.jsx";
import RecentPost from "../Blog/RecentPosts.jsx";
import { recentPosts } from "../../data/blogPosts.js";

function GridTypeCard({ item }) {
  return (
    <div className="grid-type-card">
      <div className="grid-type-img-wrapper">
        <img src={item.image} alt={item.label} />
      </div>
      <span className="grid-type-label">{item.label}</span>
      <p className="grid-type-desc">{item.description}</p>
    </div>
  );
}

function renderSection(section, idx) {
  switch (section.type) {
    case "paragraph":
      return (
        <p key={idx} className="bd-paragraph">
          {section.content}
        </p>
      );

    case "heading2":
      return (
        <h2 key={idx} className="bd-heading2">
          {section.content}
        </h2>
      );

    case "heading3":
      return (
        <h3 key={idx} className="bd-heading3">
          {section.content}
        </h3>
      );

    case "image":
      return (
        <figure key={idx} className="bd-figure">
          <img
            src={section.src}
            alt={section.caption}
            className="bd-figure-img"
          />
          {section.caption && (
            <figcaption className="bd-figcaption">{section.caption}</figcaption>
          )}
        </figure>
      );

    case "grid-types":
      return (
        <div key={idx} className="bd-grid-types">
          {section.items.map((item, i) => (
            <GridTypeCard key={i} item={item} />
          ))}
        </div>
      );

    case "list":
      return (
        <ul key={idx} className="bd-list">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}

// ── Main Component ──
function BlogDetail({ post = blog }) {
  return (
    <section className="blog-details md:grid grid-cols-[1fr] lg:grid-cols-[400px_1fr] xl:grid-cols-[500px_1fr]">
      <div className="hidden md:block xl:grid">
        <RecentPost posts={recentPosts} gridClass="grid grid-cols-[1fr]" />
      </div>
      <article className="details">
        {/* ── Title & Meta ── */}
        <header className="bd-header">
          <h1 className="bd-title">{post.title}</h1>
          <div className="bd-meta">
            <span className="bd-date">{post.date}</span>
            <span className="bd-dot">·</span>
            <span className="bd-read-time">{post.readTime}</span>
            <span className="bd-dot">·</span>
            <span className="bd-author">{post.author}</span>
          </div>
          <div className="bd-tags">
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </header>

        {/* ── Hero Image ── */}
        <div className="bd-hero">
          <img src={post.heroImage} alt={post.title} className="bd-hero-img" />
        </div>

        {/* ── Article Body ── */}
        <div className="bd-body">
          {post.sections.map((section, idx) => renderSection(section, idx))}
        </div>

        <NewsletterSubscribe />
      </article>
    </section>
  );
}

export default BlogDetail;
