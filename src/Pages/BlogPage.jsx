import React, { useState, useEffect } from "react";
import RecentPosts from "../components/Blog/RecentPosts.jsx";
import AllPosts from "../components/Blog/AllPosts.jsx";
import Pager from "../components/Blog/Pager.jsx";
import HeroPage from "../components/Layout/HeroPage.jsx";
import "../Styles/BlogPage.css";
import { getAllRecentBlogs } from "../api/blogApi.js";
import { allPosts } from "../data/blogPosts.js";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllRecentBlogs();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const recentPosts = blogs.recentPosts || [];

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
