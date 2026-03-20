// src/components/Blog/BlogPage.jsx
import React from "react";
import RecentPosts from "./RecentPosts.jsx";
import AllPosts from "./AllPosts.jsx";
import Pager from "./Pager.jsx";
import "../../Styles/BlogPage.css";
// importing images
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";
import post4 from "../../assets/post4.png";
import post5 from "../../assets/post5.png";
import post6 from "../../assets/post6.png";

const recentPosts = [
  {
    id: 1,
    title: "UX review presentations",
    date: "Sunday, 1 Jan 2023",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["Design", "Research", "Presentation"],
    image: hero1,
  },
  {
    id: 2,
    title: "Migrating to Linear 101",
    date: "Sunday, 1 Jan 2023",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
    tags: ["Design", "Research"],
    image: hero2,
  },
  {
    id: 3,
    title: "Building your API Stack",
    date: "Sunday, 1 Jan 2023",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    tags: ["Design", "Research"],
    image: hero3,
  },
  {
    id: 4,
    title: "Grid system for better Design User Interface",
    date: "Sunday, 1 Jan 2023",
    description:
      "A grid system is a design tool used to arrange content on a webpage.",
    tags: ["Design", "Interface"],
    image: hero4,
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
    image: post1,
  },
  {
    id: 6,
    title: "PM mental models",
    date: "Sunday, 1 Jan 2023",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
    image: post2,
  },
  {
    id: 7,
    title: "What is Wireframing?",
    date: "Sunday, 1 Jan 2023",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Design", "Research", "Presentation"],
    image: post3,
  },
  {
    id: 8,
    title: "How collaboration makes us better designers",
    date: "Sunday, 1 Jan 2023",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Design", "Research", "Presentation"],
    image: post4,
  },
  {
    id: 9,
    title: "Our top 10 Javascript frameworks to use",
    date: "Sunday, 1 Jan 2023",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Software Development", "Tools", "SaaS"],
    image: post5,
  },
  {
    id: 10,
    title: "Podcast: Creating a better CX Community",
    date: "Sunday, 1 Jan 2023",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Podcasts", "Customer Success", "Presentation"],
    image: post6,
  },
];

function BlogPage() {
  return (
    <section className="blog-page" id="blog">
      <section className="blog-section">
        <h2 className="section-heading">Recent blog posts</h2>
        <RecentPosts posts={recentPosts} />
      </section>

      <section className="blog-section">
        <h2 className="section-heading">All blog posts</h2>
        <AllPosts posts={allPosts} />
      </section>
      <Pager />
    </section>
  );
}

export default BlogPage;
