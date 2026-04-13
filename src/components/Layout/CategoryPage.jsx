import React, { useState } from "react";
import "../ui/CategoryPage.css";

const categories = [
  {
    id: 1,
    name: "Design",
    description: "UI/UX tips, wireframing, and design thinking",
    icon: "🎨",
    count: 12,
  },
  {
    id: 2,
    name: "Development",
    description: "Frontend, backend, and full-stack development",
    icon: "💻",
    count: 24,
  },
  {
    id: 3,
    name: "JavaScript",
    description: "ES6+, async programming, and frameworks",
    icon: "⚡",
    count: 18,
  },
  {
    id: 4,
    name: "React",
    description: "Components, hooks, and best practices",
    icon: "⚛️",
    count: 15,
  },
  {
    id: 5,
    name: "CSS",
    description: "Styling, layouts, and animations",
    icon: "🎭",
    count: 9,
  },
  {
    id: 6,
    name: "NodeJS",
    description: "Server-side JavaScript and APIs",
    icon: "🟢",
    count: 11,
  },
];

function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="category-page">
      {selectedCategory ? (
        <>
          <button className="back-button" onClick={handleBack}>
            ← Back to Categories
          </button>
          <div className="category-posts">
            <h2>{selectedCategory.name} Posts</h2>
            <div className="posts-grid">
              {/* Posts for selected category would be rendered here */}
              <p style={{ color: "var(--text-secondary)" }}>
                Posts for {selectedCategory.name} will appear here.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="category-header">
            <h1>Categories</h1>
            <p>Browse posts by topic</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => handleCategoryClick(category)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="category-count">{category.count} posts</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryPage;
