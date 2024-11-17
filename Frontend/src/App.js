import React from 'react';
import Sidebar from "./components/Sidebar.js";
import JobList from "./components/JobList.js";
import './components/styles/App.css';

function App() {
  const jobData = [
    {
      "title": "Software Engineer",
      "company": "Google",
      "location": "Mountain View, CA",
      "skills_matched": ["Python", "JavaScript", "React", "SQL"],
      "skills_missed": ["Java", "AWS"]
    },
    {
      "title": "Data Scientist",
      "company": "Amazon",
      "location": "Seattle, WA",
      "skills_matched": ["Python", "R", "Machine Learning", "SQL"],
      "skills_missed": ["TensorFlow", "Spark"]
    },
    {
      "title": "Web Developer",
      "company": "Facebook",
      "location": "Menlo Park, CA",
      "skills_matched": ["HTML", "CSS", "JavaScript", "React"],
      "skills_missed": ["Angular", "Node.js"]
    }  
  ];
  return (
    <div className="app"> 
      <header className="fixed-header"> {/* Add a class for styling */}
        <h1>OkComputer</h1>
      </header>
      <Sidebar />
      <JobList jobs={jobData} />
    </div>
  );
}

export default App;
