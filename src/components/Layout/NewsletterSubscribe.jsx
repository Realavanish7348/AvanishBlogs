import React, { useState } from "react";
import "../ui/NewsletterSubscribe.css";

function NewsletterSubscribe() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  }
  return (
    <section className="newsletter-section" id="projects">
      {/* <HeroPage heroTitle="NEWSLETTER" /> */}
      <div className="newsletter-page">
        {/* Hero / Subscribe section */}
        <section className="newsletter-hero">
          <span className="newsletter-label">Newsletters</span>
          <h1 className="newsletter-title">Stories and interviews</h1>
          <p className="newsletter-subtitle">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>

          <form className="newsletter-form" onSubmit={() => handleSubscribe}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>

          <p className="newsletter-privacy">
            We care about your data in our{" "}
            <a href="#privacy" className="newsletter-privacy-link">
              privacy policy
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}

export default NewsletterSubscribe;
