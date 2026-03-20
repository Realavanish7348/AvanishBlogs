// src/components/Blog/AllPosts.jsx
import React from "react";
import PostCardSmall from "./PostCardSmall.jsx";

function AllPosts({ posts }) {
  return (
    <div className="all-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCardSmall key={post.id} post={post} layout="vertical" />
      ))}
    </div>
  );
}

export default AllPosts;
