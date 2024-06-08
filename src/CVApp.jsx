
import React, {useState} from 'react';
import './App.css';
import emailIcon from './icons8-email-64.png';
import phoneIcon from './icons8-phone-50.png'
import locationIcon from './icons8-location-50.png'

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
  return (
    <div className="container" >
      <Input personal={personal} handlePersonalChange={handlePersonalChange}/>
      <Resume personal={personal}/>
    </div>
  );
}

function Input({personal, handlePersonalChange}){
  return(
    <div className="input">
      <PersonalDetails personal={personal} handlePersonalChange={handlePersonalChange} />
      <Education />
      <Experience />
    </div>
  );
}

function Resume({personal}){
  return(
    <div className="resume">
      <ResumeContainer personal={personal}/>
    </div>
  )
}

function PersonalDetails({personal, handlePersonalChange}){
  return (
    <div className='personalDetails'>
      <h2 className='label'>Personal Details</h2>
      <div className='nameInput'>
        <label htmlFor='fullName'>Full Name</label>
        <input
        type='text'
        id='fullName'
        name='fullName'
        value={personal.fullName}
        onChange={handlePersonalChange}
        />
        <label htmlFor='userEmail'>Email</label>
        <input
        type='email'
        id='userEmail'
        name='userEmail'
        value={personal.userEmail}
        onChange={handlePersonalChange}
        />
        <label htmlFor='phoneNumber'>Phone</label>
        <input
        type='tel'
        id='phoneNumber'
        name='phoneNumber'
        value={personal.phoneNumber}
        onChange={handlePersonalChange}
        />
        <label htmlFor='addy'>Address</label>
        <input
        type='text'
        id='addy'
        name='addy'
        value={personal.addy}
        onChange={handlePersonalChange}
        />
      </div>
    </div>
  );
}

function Education() {
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

  return (
    <div className='education'>
      <h2>Education</h2>
  
      {showInput ? (
        <div className="educationInput">
          <label htmlFor='school'>School</label>
          <input
            type='text'
            id='school'
            name='school'
            value={educationInfo.school}
            onChange={(e) => setEducationInfo({ ...educationInfo, school: e.target.value })}
          />
          <label htmlFor='degree'>Degree</label>
          <input
            type='text'
            id='degree'
            name='degree'
            value={educationInfo.degree}
            onChange={(e) => setEducationInfo({ ...educationInfo, degree: e.target.value })}
          />
          <label htmlFor='startDate'>Start Date</label>
          <input
            type='month'
            id='startDate'
            name='startDate'
            value={educationInfo.startDate}
            onChange={(e) => setEducationInfo({ ...educationInfo, startDate: e.target.value })}
          />
          <label htmlFor='endDate'>End Date</label>
          <input
            type='month'
            id='endDate'
            name='endDate'
            value={educationInfo.endDate}
            onChange={(e) => setEducationInfo({ ...educationInfo, endDate: e.target.value })}
          />
          <label htmlFor='schoolLocation'>Location</label>
          <input
            type='text'
            id='schoolLocation'
            name='schoolLocation'
            value={educationInfo.location}
            onChange={(e) => setEducationInfo({ ...educationInfo, location: e.target.value })}
          />
          <button onClick={handleSaveEducation} className='saveButton'>Save</button>
        </div>
      ) : (
        <div className='educationInfo'>
          <div>
        {savedEducations.map((savedEducation, index) => (
          <div class='schoolInformation' key={index}>
            <div className='savedSchool'>
              {savedEducation.school}
            </div>
              <button onClick={() => handleDeleteEducation(index)}>Delete</button>
          </div>
        ))}
          </div>
        <button onClick={handleAddEducation}>Add Education</button>
        </div>
      )}
    </div>
  );
}

function Experience(){
  return(
    <div className='experience'>
      <h2>Experience</h2>
      <label htmlFor="companyName">Company Name</label>
      <input 
      type='text'
      id='companyName'
      name='companyName'
      />
      <label htmlFor='companyStart'>Start Date</label>
      <input
      type='month'
      id='companyStart'
      name='companyStart'
      />
      <label htmlFor='comapnyEnd'>End Date</label>
      <input
      type='month'
      id='companyEnd'
      name='companyEnd'
      />
      <label htmlFor='experienceLocation'>Location</label>
      <input
      type='text'
      id='experienceLocation'
      name='experienceLocation'
      />
      <label htmlFor='jobDescription'>Description</label>
      <input
      type='text'
      id='jobDescription'
      name='jobDescription'
      />
    </div>
  )
}

function ResumeContainer({personal}){
  return(
    <div className='resumeContainer'>
      <div className='personalInfoSection'>
        <h2 className='fullNameDiv'>
        {personal.fullName}
        </h2>
        <div className='restOfPersonInfo'>
          {personal.userEmail && (
            <div className='infoDiv'>
            <img src={emailIcon} className='images' alt='mail image'/>
            <span>
            {personal.userEmail}
            </span>
            </div>)}
          {personal.phoneNumber && (
            <div className='infoDiv'>
              <img src={phoneIcon} className='images' alt='image of a phone'/>
              <span>
              {personal.phoneNumber}
              </span>
            </div>)}
          {personal.addy && (
            <div className='infoDiv'>
              <img src={locationIcon} className='images' alt='image of a location pin'/>
              <span>
              {personal.addy}
              </span>
            </div>)}
        </div>
      </div>
      
    </div>
  )
}

export default App;
