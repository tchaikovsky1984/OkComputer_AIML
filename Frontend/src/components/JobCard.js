import React from 'react';
import SkillButton from './SkillButton';
import './styles/JobCard.css';

function JobCard({ title, company, location, skills_matched, skills_missing }) {
  console.log({ skills_matched, skills_missing });
  return (
    <div className="job-card">
      <div className="title-location-container">
        <h3>{title}</h3>
        <p>At {company}, {location}</p>
      </div>
      <div className="vertical-line"></div>
      <div className="skill-buttons-container">
        {skills_matched && skills_matched.length > 0 && (
          skills_matched.map((skill, index) => (
            <SkillButton className="skill-matched" key={index}>{skill}</SkillButton>
          ))
        )}
        {skills_missing && skills_missing.length > 0 && (
          skills_missing.map((skill, index) => (
            <SkillButton className="skill-missed" key={index}>{skill}</SkillButton>
          ))
        )}
        {(!skills_matched || skills_matched.length === 0) &&
          (!skills_missing || skills_missing.length === 0) && (
            <p>No skills matched</p>
        )}
      </div>
    </div>
  );
}


export default JobCard;
