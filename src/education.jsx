import './App.css';
function Education({showInput, educationInfo, savedEducations, handleAddEducation, handleSaveEducation, handleDeleteEducation, handleInputChange}) {
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
              onChange={handleInputChange}
            />
            <label htmlFor='degree'>Degree</label>
            <input
              type='text'
              id='degree'
              name='degree'
              value={educationInfo.degree}
              onChange={handleInputChange}
            />
            <label htmlFor='startDate'>Start Date</label>
            <input
              type='month'
              id='startDate'
              name='startDate'
              value={educationInfo.startDate}
              onChange={handleInputChange}
            />
            <label htmlFor='endDate'>End Date</label>
            <input
              type='month'
              id='endDate'
              name='endDate'
              value={educationInfo.endDate}
              onChange={handleInputChange}
            />
            <label htmlFor='schoolLocation'>Location</label>
            <input
              type='text'
              id='schoolLocation'
              name='location'
              value={educationInfo.location}
              onChange={handleInputChange}
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
  
  export default Education;