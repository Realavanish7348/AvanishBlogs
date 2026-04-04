// src/components/Blog/PostCardSmall.jsx
import React from "react";
import Tag from "../Layout/Tag.jsx";
import "../ui/PostCards.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider.jsx";

function PostCardSmall({ post, layout = "horizontal" }) {
  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://avanishblogs-backend.onrender.com";
  const { theme } = useContext(ThemeContext);
  const isVertical = layout === "vertical";

  return (
    <article
      className={`post-card-small ${
        isVertical ? "post-card-vertical" : "post-card-horizontal"
      }`}
    >
      <div className="post-image-wrapper">
        <img
          src={BASE_URL + post.image}
          alt={post.title}
          className="post-image"
        />
      </div>

      <div className="post-content">
        <span className="post-date">{post.date}</span>
        <div className="post-title-row">
          <h3 className="post-title">{post.title}</h3>
          <span className="post-external-icon">
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 21L17 11M17 11H7M17 11V21"
                stroke={theme === "dark" ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
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

export default PostCardSmall;
