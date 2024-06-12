import './App.css';
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

  export default PersonalDetails;