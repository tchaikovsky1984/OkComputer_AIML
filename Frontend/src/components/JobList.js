import React from 'react';
import JobCard from './JobCard'; 
import './styles/JobList.css'; 

function JobList({ jobs }) { // Accept jobs prop
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          company={job.company}
          location={job.location}
          skills_matched={job.skills_matched} // Pass skills_matched
          skills_missed={job.skills_missed} // Pass skills_missed
        />
      ))}
    </div>
  );
}

export default JobList;
