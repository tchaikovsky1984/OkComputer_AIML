import React from 'react';
import JobCard from './JobCard'; 
import './styles/JobList.css'; 

function JobList({ jobs }) { // Accept jobs prop
  if (!jobs || jobs.length === 0) {
    return <div >No jobs to display.</div>; // Handle case where jobs are undefined or empty
  }
  
  return (
    <div className="job-list">
      {jobs.map((job, index) => ( // Map through jobs array
        <JobCard
          key={index}
          title={job.job_title}
          company={job.company}
          location={job.location}
          skills_matched={job.skills_matched}
          skills_missing={job.skills_missing} 
        />
      ))}
    </div>
  );
}

export default JobList;
