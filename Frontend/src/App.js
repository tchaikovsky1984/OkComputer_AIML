import React from 'react';
import Sidebar from "./components/Sidebar.js";
import JobList from "./components/JobList.js";
import './components/styles/App.css';

function App() {
  return (
    <div className="app"> 
      <header className="fixed-header"> {/* Add a class for styling */}
        <h1>OkComputer</h1>
      </header>
      <Sidebar />
      <JobList />
    </div>
  );
}

export default App;
