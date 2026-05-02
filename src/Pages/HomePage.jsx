import React from "react";
import HeroPage2 from "../components/Layout/HeroPage2";
import FeaturedArticles from "../components/Layout/FeaturedArticles";
import CategoriesSection from "../components/Layout/CategoriesSection";
import AboutSection from "../components/Layout/AboutSection";
import NewsletterBanner from "../components/Layout/NewsletterBanner";
import TechStackSection from "../components/Layout/TechStackSection";
import TestimonialsSection from "../components/Layout/TestimonialsSection";

function HomePage() {
  return (
    <>
      <HeroPage2 />
      <FeaturedArticles />
      <CategoriesSection />
      <AboutSection />
      <TechStackSection />
      <TestimonialsSection />
      <NewsletterBanner />
    </>
  );
}

export default HomePage;
