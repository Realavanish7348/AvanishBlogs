import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import MobileMenu from "./MobileMenu.jsx";
import "../../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="navbar">
        <nav className="nav relative ">
          <div className="navbar-left">
            <span className="navbar-logo">AvanishBlogs</span>
          </div>

          <div className="navbar-right">
            <nav className="navbar-links">
              <Link to="/">Blog</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/about">About</Link>
              <Link to="/newsletter">Newsletter</Link>
              <div className="theme-set">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              </div>
              <div className="navbar-auth">
                <Link to="/login" className="nav-btn nav-btn-secondary">
                  Log In
                </Link>
                <Link to="/signup" className="nav-btn nav-btn-primary">
                  Sign Up
                </Link>
              </div>
            </nav>
            <button
              className="navbar-menu-btn"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
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
