// src/components/Layout/Navbar.jsx
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import MobileMenu from "../MobileMenu.jsx";
import "../../Styles/Navbar.css";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="navbar">
        <nav className="nav relative ">
          <div className="navbar-left">
            <span className="navbar-logo">AvanishBlogs</span>
          </div>

          <div className="navbar-right">
            <nav className="navbar-links">
              <a href="#blog">Blog</a>
              <a href="#projects">Projects</a>
              <a href="#about">About</a>
              <a href="#newsletter">Newsletter</a>
              <div className="theme-set">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              </div>
            </nav>
            <button
              className="navbar-menu-btn"
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              &#9776;
            </button>
          </div>
          {/* Mobile menu overlay — renders as a portal over everything */}
          {menuOpen && (
            <MobileMenu
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              theme={theme}
              onToggleTheme={onToggleTheme}
            />
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
