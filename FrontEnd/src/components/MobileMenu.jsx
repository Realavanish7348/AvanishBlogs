// src/components/Layout/MobileMenu.jsx
import React from "react";
import ThemeToggle from "./Layout/ThemeToggle";
import "../../src/Styles/MobileMenu.css";

function MobileMenu({ isOpen, onClose, theme, onToggleTheme }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay absolute ">
      <div className="mobile-menu-content">
        <div className="mobile-menu-logo">AvanishBlogs</div>

        <nav className="mobile-menu-links">
          <a href="#blog" onClick={onClose}>
            Blog
          </a>
          <a href="#projects" onClick={onClose}>
            Projects
          </a>
          <a href="#about" onClick={onClose}>
            About
          </a>
          <a href="#newsletter" onClick={onClose}>
            Newsletter
          </a>
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
