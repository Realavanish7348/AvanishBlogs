import React, { useContext, useState, useEffect } from "react";
import RecentPosts from "../components/Blog/RecentPosts.jsx";
import AllPosts from "../components/Blog/AllPosts.jsx";
import Pager from "../components/Blog/Pager.jsx";

import "../Styles/BlogPage.css";
import { PostContext } from "../Context/PostProvider.jsx";
import HeroPage from "../components/Layout/HeroPage.jsx";

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  // All Posts and recent posts
  const { blogs } = useContext(PostContext);
  const recentPosts = blogs.recentPosts || [];

  // Paginated Posts
  const LIVE = "https://avanishblogs-backend.onrender.com";
  const LOCAL = "http://localhost:5000";
  const API_URL = "/api/v1/blogposts";
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        `${LIVE + API_URL}/getposts?page=${currentPage}&limit=5`,
      );
      const data = await response.json();
      console.log("PAginated Posts:", data);
      return data;
    }
    const fetchPosts = async () => {
      const data = await getPosts();
      const postData = await data.data;
      setPosts(postData);
    };

    fetchPosts();
  }, [currentPage]);

  const allPosts = posts?.allPosts || [];
  return (
    <section className="blog-page" id="blog">
      <HeroPage heroTitle="THE BLOG" />
      <RecentPosts posts={recentPosts} />
      <AllPosts posts={allPosts} />
      <Pager
        totalPages={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onPageChange={(page) => console.log("Page changed to:", page)} // Add this
      />
    </section>
  );
}

export default BlogPage;
