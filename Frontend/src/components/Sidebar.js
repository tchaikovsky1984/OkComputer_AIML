import React from "react";
import "./styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>OkComputer</h1>
      <h2>Upload your Resume</h2>
      <div className="upload-box">
        <button>Browse</button>
      </div>
      <h2>Preferred Job</h2>
      <div className="input-box">Intern, Software Engineer, Data Scientist</div>
      <h2>Preferred Location</h2>
      <div className="input-box">Bangalore, India; Amsterdam, Netherlands</div>
      <h2>Search Domain</h2>
      <div className="input-box">Your Search Domain</div>
    </div>
  );
}

export default Sidebar;
