import React, { useContext } from "react";
import AllPosts from "../components/Blog/AllPosts";
import NewsletterSubscribe from "../components/Layout/NewsletterSubscribe";
import { PostContext } from "../Context/PostProvider";

function Newsletter() {
  const { blogs } = useContext(PostContext);
  const allPosts = blogs.allPosts || [];

  return (
    <>
      <NewsletterSubscribe />
      <AllPosts posts={allPosts} />
    </>
  );
}

export default Newsletter;
