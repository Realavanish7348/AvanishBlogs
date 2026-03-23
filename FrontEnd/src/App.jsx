// Feature Imports
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeProvider.jsx";
import { Routes, Route } from "react-router-dom";

// File imports
import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import BlogPage from "./components/Blog/BlogPage.jsx";
import "./App.css";
import Projects from "./components/Layout/Projects.jsx";
import About from "./components/Layout/About.jsx";
import Newsletter from "./components/Layout/Newsletter.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="app">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
