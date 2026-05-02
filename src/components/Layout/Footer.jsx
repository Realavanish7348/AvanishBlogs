import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Footer.css";

const navLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/aboutme" },
  { label: "Newsletter", to: "/newsletter" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "🐙" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
  { label: "Twitter / X", href: "https://twitter.com", icon: "🐦" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            AvanishBlogs
          </Link>
          <p className="footer-tagline">
            Practical tech knowledge for developers who want to grow fast.
          </p>
          <div className="footer-socials">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={s.label}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="footer-nav">
          <span className="footer-nav-title">Explore</span>
          <ul className="footer-nav-list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer-nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics */}
        <div className="footer-nav">
          <span className="footer-nav-title">Topics</span>
          <ul className="footer-nav-list">
            {["JavaScript", "React", "NodeJS", "AI Tools", "CSS", "DSA"].map(
              (t) => (
                <li key={t}>
                  <Link to="/categories" className="footer-nav-link">
                    {t}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© {currentYear} AvanishBlogs. All rights reserved.</span>
        <span className="footer-bottom-right">
          Built by{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="footer-author-link"
          >
            Avanish Maurya
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
