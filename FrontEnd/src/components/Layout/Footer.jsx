// src/components/Layout/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <button className="pager-arrow">Previous</button>
        <div className="pager-pages">
          <button className="page-btn page-btn-active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-ellipsis">…</span>
          <button className="page-btn">10</button>
        </div>
        <button className="pager-arrow">Next</button>
      </div>

      <div className="footer-top">
        <span>© 2023</span>
        <div className="footer-links">
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#email">Email</a>
          <a href="#rss">RSS feed</a>
          <a href="#feedly">Add to Feedly</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
