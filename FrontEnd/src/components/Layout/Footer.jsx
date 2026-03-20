import React from "react";
import "../../Styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#email">Email</a>
          <a href="#rss">RSS feed</a>
          <a href="#feedly">Add to Feedly</a>
        </div>
        <span>© {currentYear}</span>
      </div>
    </footer>
  );
}

export default Footer;
