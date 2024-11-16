import './styles/SkillButton.css';

function SkillButton({ children }) { 
    return (
      <div className="skill-button"> {/* Update class name */}
        {children}
      </div>
    );
  }
  
  export default SkillButton;