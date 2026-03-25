// src/components/Layout/MobileMenu.jsx
import React from "react";
import ThemeToggle from "./ThemeToggle";
import "../ui/MobileMenu.css";
import { Link } from "react-router-dom";

function MobileMenu({ isOpen, onClose, theme, onToggleTheme }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay absolute ">
      <div className="mobile-menu-content">
        <div className="mobile-menu-logo">AvanishBlogs</div>

        <nav className="mobile-menu-links">
          <Link to="/" onClick={onClose}>
            Blog
          </Link>
          <Link to="/projects" onClick={onClose}>
            Projects
          </Link>
          <Link to="/about" onClick={onClose}>
            About
          </Link>
          <Link to="/newsletter" onClick={onClose}>
            Newsletter
          </Link>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>

      <button className="mobile-menu-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}

export default MobileMenu;
