import React, { useState } from "react";
import "../ui/NewsletterBanner.css";

function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="nb-section" aria-label="Newsletter">
      <div className="nb-glow" />
      <div className="nb-container">
        <div className="nb-content">
          <span className="nb-label">Newsletter</span>
          <h2 className="nb-heading">Stay Ahead in Tech</h2>
          <p className="nb-subheading">
            Get weekly deep-dives on JavaScript, React, AI tools, and career
            insights — straight to your inbox.
          </p>

          {submitted ? (
            <div className="nb-success">
              <span>🎉</span> You're in! Check your inbox.
            </div>
          ) : (
            <form className="nb-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="nb-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="nb-btn">
                Subscribe
              </button>
            </form>
          )}

          <p className="nb-trust">
            <span className="nb-trust-icon">🔒</span>
            No spam. Only practical insights. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsletterBanner;
