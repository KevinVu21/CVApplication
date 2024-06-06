import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  return (
    <div className="container" >
      <Input />
      <Resume />
    </div>
  );
}

function Input(){
  return(
    <div className="input">
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  );
}

function Resume(){
  return(
    <div className="resume">
      resume
    </div>
  )
}

function PersonalDetails(){
  return (
    <div className='personalDetails'>
      <h2 className='label'>Personal Details</h2>
      <div className='nameInput'>
        <label htmlFor='fullname'>Full Name</label>
        <input
        type='text'
        id='name'
        name="fullname'"
        />
        <label htmlFor='email'>Email</label>
        <input
        type='email'
        id='email'
        name='email'
        />
      </div>
    </div>
  );
}

function Education(){
  return(
    <div className='education'>
      Education Content
    </div>
  )
}
function Experience(){
  return(
    <div className='experience'>Experience Content</div>
  )
}

export default App;
