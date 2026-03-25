// src/components/Blog/RecentPosts.jsx
import React from "react";
import PostCardLarge from "./PostCardLarge.jsx";
import PostCardSmall from "./PostCardSmall.jsx";
import "../../Styles/RecentPosts.css";

function RecentPosts({ posts }) {
  const [first, ...rest] = posts;

  return (
    <div className="recent-posts-grid">
      <PostCardLarge post={first} />
      <div className="recent-posts-small">
        {rest.map((post) => (
          <PostCardSmall key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default RecentPosts;
