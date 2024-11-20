import React from 'react';
import Sidebar from "./components/Sidebar.js";
import JobList from "./components/JobList.js";
import './components/styles/App.css';
import { useState } from 'react';

function App() {
  const [updatedJobs, setUpdatedJobs] = useState([{
    "title": "Software Engineer",
    "company": "Google",
    "location": "Mountain View, CA",
    "skills_matched": ["Python", "JavaScript", "React", "SQL"],
    "skills_missing": ["Java", "AWS"]
  },
  {
    "title": "Data Scientist",
    "company": "Amazon",
    "location": "Seattle, WA",
    "skills_matched": ["Python", "R", "Machine Learning", "SQL"],
    "skills_missing": ["TensorFlow", "Spark"]
  },
  {
    "title": "Web Developer",
    "company": "Facebook",
    "location": "Menlo Park, CA",
    "skills_matched": ["HTML", "CSS", "JavaScript", "React"],
    "skills_missing": ["Angular", "Node.js"]
  }  ]);
  
      
  const handleResult = (jobs) => {
    console.log('App: Received jobs', jobs);  // Log to ensure jobs are passed correctly
    if (Array.isArray(jobs)) {
      setUpdatedJobs(jobs);  // Update the jobs state with received jobs
    } else {
      console.error('Received jobs is not an array');
    }
  };
  return (
    <div className="app"> 
      <header className="fixed-header"> {/* Add a class for styling */}
        <h1>OkComputer</h1>
      </header>
      <Sidebar onResultReceived={handleResult}/>
      <JobList jobs={updatedJobs} />
    </div>
  );
}

export default App;
/**/