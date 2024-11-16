import React, { useState } from 'react'; // Import useState
import './styles/Sidebar.css';


function Sidebar() {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [domain, setDomain] = useState('');
  const [resume, setResume] = useState(null);
  const[sliderValue, setSliderValue] = useState(300)
  const handleJobChange = (event) => {
    setJob(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log("Hi")
  };

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
    console.log("Hi")
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
    console.log("Hi")
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    console.log("Hi")
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Handle form data here (e.g., send it to an API)
    console.log('Form data:', { job, location, domain, resume , sliderValue});
  };
  return (
    <form className="sidebar" onSubmit={handleSubmit}>{/* Change to <form> */}
      <h2>Upload your Resume</h2>
      <div className="upload-box">
        <input 
          type="file" 
          id="resumeUpload" 
          accept=".pdf,.doc,.docx" 
          onChange={(e) => setResume(e.target.files[0])} 
        />
        <label htmlFor="resumeUpload" className="browse-button">Browse</label>
      </div>
      <h2>Preferred Job</h2>
      <input 
        type="text" 
        className="input-box" 
        value={job} 
        onChange={(e) => setJob(e.target.value)} 
      />
      <h2>Preferred Location</h2>
      <input 
        type="text" 
        className="input-box" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <div>
        <label htmlFor="sliderInput">Slider Value:</label>
        <input type="range" min="300" max="3000" step="500" id="sliderInput" value={sliderValue} onChange={handleSliderChange} />
        <span>{sliderValue}</span>
      </div>
      <button type="submit">Submit</button> 
    </form>
    
  );
}

export default Sidebar;
