import React, { useState } from "react";
import Tag from "../components/Layout/Tag";
import "../Styles/Newsletter.css";
import { allPosts } from "../data/blogPosts";
import AllPosts from "../components/Blog/AllPosts";

// import images
// import post1 from "../assets/post1.png";
// import post2 from "../assets/post2.png";
// import post3 from "../assets/post3.png";

function Newsletter() {
  // const allPosts = [
  //   {
  //     id: 1,
  //     title: "Bill Walsh leadership lessons",
  //     date: "Sunday, 1 Jan 2023",
  //     description:
  //       "Like to know the secrets of transforming a 2–14 team into a 3x Super Bowl winning Dynasty?",
  //     tags: ["Leadership", "Management", "Presentation"],
  //     image: post1,
  //   },
  //   {
  //     id: 2,
  //     title: "PM mental models",
  //     date: "Sunday, 1 Jan 2023",
  //     description:
  //       "Mental models are simple expressions of complex processes or relationships.",
  //     tags: ["Product", "Research", "Frameworks"],
  //     image: post2,
  //   },
  //   {
  //     id: 3,
  //     title: "What is Wireframing?",
  //     date: "Sunday, 1 Jan 2023",
  //     description:
  //       "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
  //     tags: ["Design", "Research", "Presentation"],
  //     image: post3,
  //   },
  // ];

  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  }

  return (
    <>
      <section className="newsletter-section" id="projects">
        {/* <HeroPage heroTitle="NEWSLETTER" /> */}

        <div className="newsletter-page">
          {/* Hero / Subscribe section */}
          <section className="newsletter-hero">
            <span className="newsletter-label">Newsletters</span>
            <h1 className="newsletter-title">Stories and interviews</h1>
            <p className="newsletter-subtitle">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates.
            </p>

            <form className="newsletter-form" onSubmit={() => handleSubscribe}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>

            <p className="newsletter-privacy">
              We care about your data in our{" "}
              <a href="#privacy" className="newsletter-privacy-link">
                privacy policy
              </a>
              .
            </p>
          </section>

          {/* All blog posts */}
          <section className="newsletter-posts">
            <h2 className="newsletter-posts-heading">All blog posts</h2>
            <AllPosts posts={allPosts} />
            {/* <div className="newsletter-grid">
              {allPosts.map((post) => (
                <article key={post.id} className="nl-post-card">
                  <div className="nl-post-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="nl-post-image"
                    />
                  </div>
                  <div className="nl-post-body">
                    <span className="nl-post-date">{post.date}</span>
                    <div className="nl-post-title-row">
                      <h3 className="nl-post-title">{post.title}</h3>
                      <span className="nl-post-arrow">↗</span>
                    </div>
                    <p className="nl-post-desc">{post.description}</p>
                    <div className="nl-post-tags">
                      {post.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div> */}
          </section>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
