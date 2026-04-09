import React, { useContext } from "react";
import RecentPosts from "../components/Blog/RecentPosts.jsx";
import AllPosts from "../components/Blog/AllPosts.jsx";
import Pager from "../components/Blog/Pager.jsx";
import HeroPage from "../components/Layout/HeroPage.jsx";
import "../Styles/BlogPage.css";
import { PostContext } from "../Context/PostProvider.jsx";

function BlogPage() {
  const { blogs } = useContext(PostContext);
  const recentPosts = blogs.recentPosts || [];
  const allPosts = blogs.allPosts || [];

  return (
    <section className="blog-page" id="blog">
      <HeroPage heroTitle="THE BLOG" />
      <RecentPosts posts={recentPosts} />
      <AllPosts posts={allPosts} />
      <Pager totalPages={15} />
    </section>
  );
}

export default BlogPage;
