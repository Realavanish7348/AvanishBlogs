import { allPosts } from "../data/blogPosts";
import AllPosts from "../components/Blog/AllPosts";
import NewsletterSubscribe from "../components/Layout/NewsletterSubscribe";

function Newsletter() {
  return (
    <>
      <NewsletterSubscribe />
      <AllPosts posts={allPosts} />
    </>
  );
}

export default Newsletter;
