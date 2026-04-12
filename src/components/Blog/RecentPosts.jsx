// src/components/Blog/RecentPosts.jsx
import React from "react";
import PostCardLarge from "./PostCardLarge.jsx";
import PostCardSmall from "./PostCardSmall.jsx";
import "../ui/RecentPosts.css";
import LoadingPage from "../../utils/LoadingPage.jsx";

function RecentPosts({ posts = [], gridClass }) {
  if (!posts || posts.length === 0) {
    return <LoadingPage />;
  }

  const [first, ...rest] = posts;

  return (
    <>
      <section className="recent-blog-post">
        <h2 className="heading">Recent blog posts</h2>
        <div
          className={` grid lg:grid-cols-[1fr] md:grid-cols-[1fr] xl:grid-cols-[1fr] gap-6 ${gridClass}`}
        >
          <PostCardLarge post={first} />
          <div className="recent-posts-small">
            {rest.map((post) => (
              <PostCardSmall key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentPosts;
