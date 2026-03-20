// src/components/Layout/Navbar.jsx
import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import "../../Styles/Navbar.css";

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="navbar ">
      <div className="navbar-left">
        <button className="navbar-menu-btn" aria-label="Menu">
          &#9776;
        </button>
        <span className="navbar-logo">Your Name</span>
      </div>

      <nav className="navbar-links">
        <a href="#blog">Blog</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#newsletter">Newsletter</a>
      </nav>

      <div className="navbar-right">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}

export default Navbar;
