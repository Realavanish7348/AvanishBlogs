// src/components/Blog/BlogPage.jsx
import React from "react";
import RecentPosts from "../components/Blog/RecentPosts.jsx";
import AllPosts from "../components/Blog/AllPosts.jsx";
import Pager from "../components/Blog/Pager.jsx";
import HeroPage from "../components/Layout/HeroPage.jsx";
import "../Styles/BlogPage.css";
import { recentPosts, allPosts } from "../data/blogPosts.js";

function BlogPage() {
  return (
    <section className="blog-page" id="blog">
      <HeroPage heroTitle="THE BLOG" />
      <RecentPosts posts={recentPosts} />
      <AllPosts posts={allPosts} />
      <Pager />
    </section>
  );
}

export default BlogPage;
