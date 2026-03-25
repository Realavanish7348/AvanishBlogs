// src/components/Layout/ThemeToggle.jsx
import React from "react";
import "../ui/ThemeToggle.css";

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      <span className="toggle-label">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
      <div className="toggle-track">
        <div
          className={`toggle-thumb ${theme === "dark" ? "thumb-right" : "thumb-left"}`}
        ></div>
      </div>
    </button>
  );
}

export default ThemeToggle;
