// Creating Post Context
import { createContext } from "react";
const PostContext = createContext();

// Create Post Provider
import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../api/blogApi.js";

function PostProvider({ children }) {
  // code of task
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      const blogData = await data.data;
      setBlogs(blogData);
    };
    fetchBlogs();
  }, []);

  return (
    <PostContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
