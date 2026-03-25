import React from "react";
import "../../Styles/Pager.css";

function Pager() {
  return (
    <section className="pager-section">
      <div className="pager">
        <button className="pager-arrow">👈 Previous</button>
        <div className="pager-pages">
          <button className="page-btn page-btn-active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-ellipsis">…</span>
          <button className="page-btn">10</button>
        </div>
        <button className="pager-arrow">Next 👉</button>
      </div>
    </section>
  );
}

export default Pager;
