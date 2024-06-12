import PersonalDetails from "./personalDetails";
import Education from "./education";
import Experience from "./experience";
import './App.css';

function Input({personal, handlePersonalChange, showInput, educationInfo, savedEducations, handleAddEducation, handleSaveEducation, handleDeleteEducation, handleInputChange, showExperience, experienceInfo, savedExperiences, handleAddExperience, handleSaveExperience, handleDeleteExperience, handleExperienceChange}){
    return(
      <div className="input">
        <PersonalDetails personal={personal} handlePersonalChange={handlePersonalChange} />
        <Education showInput={showInput} educationInfo={educationInfo} savedEducations={savedEducations} handleAddEducation={handleAddEducation} handleSaveEducation={handleSaveEducation} handleDeleteEducation={handleDeleteEducation} handleInputChange={handleInputChange}/>
        <Experience showExperience={showExperience} experienceInfo={experienceInfo} savedExperiences={savedExperiences} handleAddExperience={handleAddExperience} handleSaveExperience={handleSaveExperience} handleDeleteExperience={handleDeleteExperience} handleExperienceChange={handleExperienceChange}/>
      </div>
    );
  }


  export default Input;