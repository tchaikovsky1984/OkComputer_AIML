import React from "react";
import Sidebar from "./components/Sidebar.js";
import JobList from "./components/JobList.js";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <JobList />
    </div>
  );
}

export default App;
