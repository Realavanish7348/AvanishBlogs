// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import BlogPage from "./components/Blog/BlogPage.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="app-main">
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
