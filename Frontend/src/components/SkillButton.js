import './styles/SkillButton.css';

function SkillButton({ children, className }) { // Add className prop
  return (
    <div className={`skill-button ${className}`}> {/* Apply className */}
      {children}
    </div>
  );
}

export default SkillButton;
/**/