import React from 'react';
import SkillButton from './SkillButton';
import './styles/JobCard.css';

function JobCard({ title, company, location, skills_matched, skills_missed }) {
  return (
    <div className="job-card">
      <div className="title-location-container">
        <h3>{title}</h3>
        <p>At {company}, {location}</p>
      </div>
      <div className="vertical-line"></div>
      <div className="skill-buttons-container">
        {skills_matched.map((skill, index) => (
          <SkillButton key={index} className="skill-matched">{skill}</SkillButton> 
        ))}
        {skills_missed.map((skill, index) => (
          <SkillButton key={index} className="skill-missed">{skill}</SkillButton> 
        ))}
      </div>
    </div>
  );
}

export default JobCard;
/**/
