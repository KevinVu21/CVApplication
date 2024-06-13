import './App.css';
function Experience({showExperience, experienceInfo, savedExperiences, handleAddExperience, handleSaveExperience, handleDeleteExperience, handleExperienceChange}){
    return(
      <div className='experience'>
        <h2>Experience</h2>
        {showExperience ? (
          <div className='experienceInput'>
          <label htmlFor="companyName">Company Name</label>
          <input 
          type='text'
          id='companyName'
          name='companyName'
          value={experienceInfo.companyName}
          onChange={handleExperienceChange}
          />
          <label htmlFor='startDate'>Start Date</label>
          <input
          type='month'
          id='startDate'
          name='startDate'
          value={experienceInfo.startDate}
          onChange={handleExperienceChange}
          />
          <label htmlFor='endDate'>End Date</label>
          <input
          type='month'
          id='endDate'
          name='endDate'
          value={experienceInfo.endDate}
          onChange={handleExperienceChange}
          />
          <label htmlFor='location'>Location</label>
          <input
          type='text'
          id='location'
          name='location'
          value={experienceInfo.location}
          onChange={handleExperienceChange}
          />
          <label htmlFor='description'>Description</label>
          <input
          type='text'
          id='description'
          name='description'
          value={experienceInfo.description}
          onChange={handleExperienceChange}
          />
          <button onClick={handleSaveExperience} className='saveButton'>Save</button>
          </div>): (
            <div className='experienceInfo'>
              {savedExperiences.map((savedExperience, index) => (
            <div class='companyInformation' key={index}>
              <div className='savedCompany'>
                {savedExperience.companyName}
              </div>
                <button onClick={() => handleDeleteExperience(index)}>Delete</button>
            </div>
          ))}
          <button onClick={handleAddExperience}>Add Experience</button>
            </div>
          )

        }
      </div>
    )
}

export default Experience;