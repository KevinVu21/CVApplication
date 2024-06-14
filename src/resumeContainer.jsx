import emailIcon from './icons8-email-64.png';
import phoneIcon from './icons8-phone-50.png'
import locationIcon from './icons8-location-50.png'
import './App.css';

function ResumeContainer({ personal, educationInfo, savedEducations, experienceInfo, savedExperiences }) {
    const hasEducation = () => {
        return (
          savedEducations.length > 0 ||
          educationInfo.school ||
          educationInfo.degree ||
          educationInfo.startDate ||
          educationInfo.endDate ||
          educationInfo.location
        );
      };
      const hasExperience = () => {
        return (
          savedExperiences.length > 0 ||
          experienceInfo.companyName ||
          experienceInfo.startDate ||
          experienceInfo.endDate ||
          experienceInfo.location ||
          experienceInfo.description
        )
      };
    function formatDate(date){
        if(!date){return ''}
        const [year, month] = date.split('-');
        return `${month}/${year}`;
    }
    return (
      <div className='resumeContainer'>
        <div className='personalInfoSection'>
          <h2 className='fullNameDiv'>
            {personal.fullName}
          </h2>
          <div className='restOfPersonInfo'>
            {personal.userEmail && (
              <div className='infoDiv'>
                <img src={emailIcon} className='images' alt='mail image' />
                <span>
                  {personal.userEmail}
                </span>
              </div>
            )}
            {personal.phoneNumber && (
              <div className='infoDiv'>
                <img src={phoneIcon} className='images' alt='image of a phone' />
                <span>
                  {personal.phoneNumber}
                </span>
              </div>
            )}
            {personal.addy && (
              <div className='infoDiv'>
                <img src={locationIcon} className='images' alt='image of a location pin' />
                <span>
                  {personal.addy}
                </span>
              </div>
            )}
          </div>
        </div>
        {hasEducation() &&
        <div className='educationSection'>
          <h3 className='educationTab'>Education</h3>
          {savedEducations.map((education, index) => (
            <div key={index} className="educationDetails">
                <div className='educationLeft'>
                    <div className='educationDates'>
                        <div>
                          {education.startDate ? formatDate(education.startDate)+ ' - ' : ''}
                          {formatDate(education.endDate)}
                        </div>
                    </div>
                    <div>{education.location}</div>
                </div>
              <div className='educationRight'>
                <div><strong>{education.school}</strong></div>
                <div><i>{education.degree}</i></div>
              </div>
              
            </div>
          ))}
          <div className="educationDetails">
            <div className='educationLeft'>
              <div className='educationDates'>
                <div className="educationDetails">
                  {educationInfo.startDate ? formatDate(educationInfo.startDate)+ ' - ' : ''}
                  {educationInfo.endDate && formatDate(educationInfo.endDate)}
                  </div>
              </div>
              <div>{educationInfo.location}</div>
            </div>
            <div className='educationRight'>
              <div><strong>{educationInfo.school}</strong></div>
              <div><i>{educationInfo.degree}</i></div>
            </div>
          </div>
        </div>
}

{hasExperience() &&
<div className="experienceSection">
  <h3 className='experienceTab'>Professional Experience</h3>
  {savedExperiences.map((experience, index) => (
    <div key={index} className="experienceDetails">
      <div className='experienceLeft'>
          <div className='experienceDates'>
            <div>
              {experience.startDate ? formatDate(experience.startDate)+ ' - ' : ''}
              {formatDate(experience.endDate)}
            </div>
          </div>
          <div>{experience.location}</div>
      </div>
      <div className='experienceRight'>
        <div><strong>{experience.companyName}</strong></div>
        <div><i>{experience.positionTitle}</i></div>
        <div>{experience.description}</div>
      </div>
    </div>
  ))}
  <div className='experienceDetails'>
    <div className='experienceLeft'>
      <div className='experienceDates'>
        <div>
          {experienceInfo.startDate ? formatDate(experienceInfo.startDate)+ ' - ' : ''}
          {formatDate(experienceInfo.endDate)}
        </div>
      </div>
      <div>{experienceInfo.location}</div>
    </div>
    <div className='experienceRight'>
      <div><strong>{experienceInfo.companyName}</strong></div>
      <div><i>{experienceInfo.positionTitle}</i></div>
      <div>{experienceInfo.description}</div>
    </div>
  </div>
</div>

}
  </div>);}

  export default ResumeContainer;