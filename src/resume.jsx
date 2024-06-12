import ResumeContainer from './resumeContainer.jsx'
import './App.css';
function Resume({personal, educationInfo, savedEducations}){
    return(
      <div className="resume">
        <ResumeContainer personal={personal} educationInfo={educationInfo} savedEducations={savedEducations}/>
      </div>
    )
  }

  export default Resume;