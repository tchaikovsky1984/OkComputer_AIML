import React from 'react';
import SkillButton from './SkillButton';
import './styles/JobCard.css';

function JobCard({ title, company, location, skills }) {
  return (
    <div className="job-card">
      <div className="title-location-container">
        <h3>{title}</h3>
        <p>At {company}, {location}</p> {/* Company and location with "At" prefix */}
      </div>
      <div className="vertical-line"></div> {/* Add the line */}
      <div className="skill-buttons-container">
        {skills.map((skill, index) => (
          <SkillButton key={index}>{skill}</SkillButton>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
