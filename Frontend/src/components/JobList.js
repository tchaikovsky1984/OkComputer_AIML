import React from "react";
import "./styles/JobList.css";

function JobList() {
  return (
    <div className="job-list">
      <div className="job-card">
        <h3>Front End Developer</h3>
        <p>At Goldman Sachs, Bangalore</p>
        <button>CSS</button>
      </div>
      <div className="job-card">
        <h3>Front End Developer</h3>
        <p>At Goldman Sachs, Bangalore</p>
        <button>CSS</button>
      </div>
      {/* Add more job cards as needed */}
    </div>
  );
}

export default JobList;
