import React from "react";
import "../components/ui/LoadingPage.css";

function LoadingPage() {
  return (
    <section className="loading-page">
      <div className="loader">
        <p>Loading posts...</p>
      </div>
    </section>
  );
}

export default LoadingPage;
