import React from 'react';
import Sidebar from "./components/Sidebar.js";
import JobList from "./components/JobList.js";
import './components/styles/App.css';

function App() {
  const jobData = [
    {
      title: 'Front-End Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      skills: ['React', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      skills: ['Java', 'Python', 'AWS']
    },
    {
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Redmond, WA',
      skills: ['Python', 'R', 'Machine Learning']
    },
    {
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      skills: ['Java', 'Python', 'AWS']
    },
    {
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Redmond, WA',
      skills: ['Python', 'R', 'Machine Learning']
    },
    {
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      skills: ['Java', 'Python', 'AWS']
    },
    {
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Redmond, WA',
      skills: ['Python', 'R', 'Machine Learning']
    },
    {
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      skills: ['Java', 'Python', 'AWS']
    },
    {
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Redmond, WA',
      skills: ['Python', 'R', 'Machine Learning']
    },
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
