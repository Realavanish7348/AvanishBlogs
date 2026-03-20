import Navbar from "./components/Layout/Navbar.jsx";
import Footer from "./components/Layout/Footer.jsx";
import BlogPage from "./components/Blog/BlogPage.jsx";
import HeroPage from "./components/Layout/HeroPage.jsx";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeProvider.jsx";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="app-main">
        <HeroPage heroTitle="THE BLOG" />
        <BlogPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
