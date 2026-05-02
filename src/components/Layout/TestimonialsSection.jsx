import React from "react";
import "../ui/TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    avatar: "RS",
    text: "AvanishBlogs is my go-to resource when I'm stuck on React concepts. The explanations are clear and the examples are actually practical — not just toy demos.",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "CS Student",
    avatar: "PN",
    text: "As someone learning JavaScript from scratch, this blog made closures and async/await finally make sense. The writing style feels like a friend explaining, not a textbook.",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Full Stack Dev",
    avatar: "AM",
    text: "What I love most is that Avanish documents his actual learning journey. It's honest, practical, and you can feel the effort in every article.",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="tm-card">
      <p className="tm-quote">"{t.text}"</p>
      <div className="tm-author">
        <div className="tm-avatar">{t.avatar}</div>
        <div className="tm-author-info">
          <span className="tm-name">{t.name}</span>
          <span className="tm-role">{t.role}</span>
        </div>
        <div className="tm-stars">★★★★★</div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="tm-section" aria-label="Testimonials">
      <div className="tm-container">
        <div className="tm-header">
          <span className="tm-label">Reader Reviews</span>
          <h2 className="tm-heading">What Developers Are Saying</h2>
          <p className="tm-subheading">
            Real feedback from developers who read AvanishBlogs.
          </p>
        </div>
        <div className="tm-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
