
import React, {useState} from 'react';
import './App.css';
import emailIcon from './small-mail-envelope.png';

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

function Education(){
  return(
    <div className='education'>
      <h2>Education</h2>
      <div className="educationInput">
      <label htmlFor='School'>School</label>
      <input
      type='text'
      id='school'
      name='school'
      />
      <label htmlFor='degree'>Degree</label>
      <input
      type='text'
      id='degree'
      name='degree'
      />
      <label htmlFor='startDate'>Start Date</label>
      <input
      type='month'
      id='startDate'
      name='startDate'
      />
      <label htmlFor='endDate'>End Date</label>
      <input
      type='month'
      id='endDate'
      name='endDate'
      />
      <label htmlFor='schoolLocation'>Location</label>
      <input
      type='text'
      id='schoolLocation'
      name='schoolLocation'
      />
      </div>
    </div> 
  )
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
            <img src={emailIcon} className='emailImage'/>
            <span>
            {personal.userEmail}
            </span>
            </div>)}
          {personal.phoneNumber && <div className='infoDiv'>{personal.phoneNumber}</div>}
          {personal.addy && <div className='infoDiv'>{personal.addy}</div>}
        </div>
      </div>
      
    </div>
  )
}

export default App;
