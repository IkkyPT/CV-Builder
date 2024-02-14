// ResumeBuilder Component

import PersonalDetails from './PersonalDetails';

const ResumeBuilder = ({ personalDetails, handlePersonalDetailsChange }) => {

    return (
        <>
            <PersonalDetails personalDetails={personalDetails} handlePersonalDetailsChange={handlePersonalDetailsChange}/>
        </>
    );
}

export default ResumeBuilder