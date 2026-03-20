// src/components/Blog/AllPosts.jsx
import React from "react";
import PostCardSmall from "./PostCardSmall.jsx";

function AllPosts({ posts }) {
  return (
    <div className="all-posts-grid">
      {posts.map((post) => (
        <PostCardSmall key={post.id} post={post} layout="vertical" />
      ))}
    </div>
  );
}

export default AllPosts;
