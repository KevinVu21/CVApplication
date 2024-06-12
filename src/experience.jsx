import './App.css';
function Experience({showExperience, experienceInfo, savedExperiences, handleAddExperience, handleSaveExperience, handleDeleteExperience, handleExperienceChange}){
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

export default Experience;