import React from 'react';
import JobCard from './JobCard'; 
import './styles/JobList.css'; 

function JobList({ jobs }) { // Accept jobs prop
  return (
    <div className="job-list">
      {jobs.map((job, index) => ( // Map through jobs array
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          location={job.location}
          skills={job.skills} 
        />
      ))}
    </div>
  );
}

export default JobList;
