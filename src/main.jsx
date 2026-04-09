import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Context/ThemeProvider.jsx";
import { PostProvider } from "./Context/PostProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <PostProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostProvider>
    </ThemeProvider>
  </StrictMode>,
);

/*
git switch main
git pull origin main

git switch feature/signup-ui

# do work

git add .
git commit -m "create signup ui"
git push

# create PR on github
# after merge

git switch main
git pull origin main 
*/
