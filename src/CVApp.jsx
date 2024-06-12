import React, {useState} from 'react';
import './App.css';
import Input from './input.jsx'
import Resume from './resume.jsx'

function App() {
  const [personal, setPersonal] = useState({
    fullName: '',
    userEmail: '',
    phoneNumber: '',
    addy: ''
  });
  const handlePersonalChange = (event) => {
    const {name, value} = event.target;
    setPersonal((prevPersonal)=>({
      ...prevPersonal,
      [name]: value
    }));
    console.log(personal);
  }

  const [showInput, setShowInput] = useState(false);
  const [educationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: ''
  });
  const [savedEducations, setSavedEducations] = useState([]);

  const handleAddEducation = () => {
    setShowInput(true);
  };

  const handleSaveEducation = () => {
    setSavedEducations([...savedEducations, educationInfo]);
    setEducationInfo({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    });
    setShowInput(false);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducations = [...savedEducations];
    updatedEducations.splice(index, 1);
    setSavedEducations(updatedEducations);
  };

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setEducationInfo((prevEducationInfo) =>({
      ...prevEducationInfo,
      [name]: value
    }))
  }

  const [showExperience, setShowExperience] = useState(false);
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });
  const [savedExperiences, setSavedExperiences] = useState([]);

  const handleAddExperience = () => {
    setShowExperience(true);
  }
  const handleSaveExperience = () => {
    setSavedExperiences([...savedExperiences, experienceInfo]);
    setExperienceInfo({
      companyName: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    });
    setShowExperience(false);
  };
  const handleDeleteExperience = (index) => {
    const updatedExperiences = [...savedExperiences];
    updatedExperiences.splice(index, 1);
    setSavedExperiences(updatedExperiences);
  };

  const handleExperienceChange = (e) =>{
    const {name, value} = e.target;
    setExperienceInfo((prevExperienceInfo) =>({
      ...prevExperienceInfo,
      [name]: value
    }))
  }

  return (
    <div className="container" >
      <Input showExperience={showExperience} experienceInfo={experienceInfo} savedExperiences={savedExperiences} handleAddExperience={handleAddExperience} handleSaveExperience={handleSaveExperience} handleDeleteExperience={handleDeleteExperience} handleExperienceChange={handleExperienceChange} personal={personal} handlePersonalChange={handlePersonalChange} showInput={showInput} educationInfo={educationInfo} savedEducations={savedEducations} handleAddEducation={handleAddEducation} handleSaveEducation={handleSaveEducation} handleDeleteEducation={handleDeleteEducation} handleInputChange={handleInputChange}/>
      <Resume personal={personal} educationInfo={educationInfo} savedEducations={savedEducations}/>
    </div>
  );
}




export default App;