// src/components/Blog/AllPosts.jsx
import React from "react";
import PostCardSmall from "./PostCardSmall.jsx";
import "../ui/AllPost.css";
import LoadingPage from "../../utils/LoadingPage.jsx";

function AllPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return <LoadingPage />;
  }

  return (
    <section className="all-blog-post">
      <h2 className="heading">All blog posts</h2>
      <div className="all-posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCardSmall key={post.id} post={post} layout="vertical" />
        ))}
      </div>
    </section>
  );
}

export default AllPosts;
