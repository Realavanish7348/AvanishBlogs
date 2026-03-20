// src/components/Blog/BlogPage.jsx
import React from "react";
import RecentPosts from "./RecentPosts.jsx";
import AllPosts from "./AllPosts.jsx";

const recentPosts = [
  {
    id: 1,
    title: "UX review presentations",
    date: "Sunday, 1 Jan 2023",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Design", "Research", "Presentation"],
    image: "/assets/hero-1.jpg",
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    date: "Sunday, 1 Jan 2023",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
    tags: ["Design", "Research"],
    image: "/assets/hero-2.jpg",
  },
  {
    id: 3,
    title: "Building your API Stack",
    date: "Sunday, 1 Jan 2023",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    tags: ["Design", "Research"],
    image: "/assets/hero-3.jpg",
  },
  {
    id: 4,
    title: "Grid system for better Design User Interface",
    date: "Sunday, 1 Jan 2023",
    description:
      "A grid system is a design tool used to arrange content on a webpage.",
    tags: ["Design", "Interface"],
    image: "/assets/hero-4.jpg",
  },
];

const allPosts = [
  {
    id: 5,
    title: "Bill Walsh leadership lessons",
    date: "Sunday, 1 Jan 2023",
    description:
      "Like to know the secrets of transforming a 2–14 team to a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management", "Presentation"],
    image: "/assets/post-1.jpg",
  },
  {
    id: 6,
    title: "PM mental models",
    date: "Sunday, 1 Jan 2023",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
    image: "/assets/post-2.jpg",
  },
  {
    id: 7,
    title: "What is Wireframing?",
    date: "Sunday, 1 Jan 2023",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Design", "Research", "Presentation"],
    image: "/assets/post-3.jpg",
  },
  {
    id: 8,
    title: "How collaboration makes us better designers",
    date: "Sunday, 1 Jan 2023",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Design", "Research", "Presentation"],
    image: "/assets/post-4.jpg",
  },
  {
    id: 9,
    title: "Our top 10 Javascript frameworks to use",
    date: "Sunday, 1 Jan 2023",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Software Development", "Tools", "SaaS"],
    image: "/assets/post-5.jpg",
  },
  {
    id: 10,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday, 1 Jan 2023",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Podcasts", "Customer Success", "Presentation"],
    image: "/assets/post-6.jpg",
  },
];

function BlogPage() {
  return (
    <section className="blog-page" id="blog">
      <div className="blog-hero">
        <h1 className="blog-title">THE BLOG</h1>
      </div>

      <section className="blog-section">
        <h2 className="section-heading">Recent blog posts</h2>
        <RecentPosts posts={recentPosts} />
      </section>

      <section className="blog-section">
        <h2 className="section-heading">All blog posts</h2>
        <AllPosts posts={allPosts} />
      </section>
    </section>
  );
}

export default BlogPage;
