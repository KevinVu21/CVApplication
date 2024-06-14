import ResumeContainer from './resumeContainer.jsx'
import './App.css';
function Resume({personal, educationInfo, savedEducations, experienceInfo, savedExperiences}){
    return(
      <div className="resume">
        <ResumeContainer personal={personal} educationInfo={educationInfo} savedEducations={savedEducations} experienceInfo={experienceInfo} savedExperiences={savedExperiences}/>
      </div>
    )
  }

  export default Resume;