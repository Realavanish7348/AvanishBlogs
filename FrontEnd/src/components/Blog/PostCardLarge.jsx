// src/components/Blog/PostCardLarge.jsx
import React from "react";
import Tag from "../Shared/Tag.jsx";

function PostCardLarge({ post }) {
  return (
    <article className="post-card-large">
      <div className="post-image-wrapper">
        <img src={post.image} alt={post.title} className="post-image" />
      </div>
      <div className="post-content">
        <span className="post-date">{post.date}</span>
        <div className="post-title-row">
          <h3 className="post-title">{post.title}</h3>
          <span className="post-external-icon">↗</span>
        </div>
        <p className="post-description">{post.description}</p>
        <div className="post-tags">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default PostCardLarge;
