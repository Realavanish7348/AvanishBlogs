// Feature Imports
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeProvider.jsx";
import { Routes, Route } from "react-router-dom";

// File imports
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import "./App.css";

import HomePage from "./Pages/HomePage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Newsletter from "./Pages/Newsletter.jsx";
import BlogDetail from "./components/Blog/BlogDetail.jsx";
import SignupPage from "./Pages/SignupPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import CategoryPage from "./components/Layout/CategoryPage.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="app">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Routes>
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
