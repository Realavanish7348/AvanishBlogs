import React, { useState } from "react";
import "../ui/Pager.css";

function Pager({ totalPages = 10, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const renderPages = () => {
    const pages = [];

    const windowSize = 1;
    // how many numbers before & after current page

    let start = Math.max(1, currentPage - windowSize);
    let end = Math.min(totalPages, currentPage + windowSize);

    // always show first page
    if (start > 1) {
      pages.push(
        <button key={1} className="page-btn" onClick={() => goToPage(1)}>
          1
        </button>,
      );

      if (start > 2) {
        pages.push(
          <span key="dots-start" className="page-ellipsis">
            ...
          </span>,
        );
      }
    }

    // middle pages
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={`page-btn ${currentPage === i ? "page-btn-active" : ""}`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>,
      );
    }

    // always show last page
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(
          <span key="dots-end" className="page-ellipsis">
            ...
          </span>,
        );
      }

      pages.push(
        <button
          key={totalPages}
          className="page-btn"
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <section className="pager-section">
      <div className="pager">
        <button
          className="pager-arrow"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          👈 Previous
        </button>

        <div className="pager-pages">{renderPages()}</div>

        <button
          className="pager-arrow"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next 👉
        </button>
      </div>
    </section>
  );
}

export default Pager;
