import React from "react";
import "../../Styles/HeroPage.css";

function HeroPage({ heroTitle }) {
  return (
    <>
      <section className="hero-page mb-[24px]">
        <div className="blog-hero">
          <h1 className="blog-title">{heroTitle}</h1>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
