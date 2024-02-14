import { useState } from 'react';
import PersonalDetails from './FormComponents/PersonalDetails';
import ProfessionalSummary from './FormComponents/ProfessionalSummary';
import InputVisible from './InputVisible';

const VisibilityManager = ({ initialState, personalDetails, handlePersonalDetailsChange }) => {
    const [isVisiblePersonal, setIsVisiblePersonal] = useState(initialState);
    const [isVisibleProfessional, setIsVisibleProfessional] = useState(initialState);

    const toggleVisibility = (inputTitle) => {
        if (inputTitle === "personal") {
            setIsVisiblePersonal(!isVisiblePersonal);
        } else if (inputTitle === "professional") {
            setIsVisibleProfessional(!isVisibleProfessional);
        }
    };

    return (
        <>
            <div>
                <h2 className='formTitle'>Personal Details</h2>
                {isVisiblePersonal && (
                    <PersonalDetails personalDetails={personalDetails} handlePersonalDetailsChange={handlePersonalDetailsChange} />
                )}
                <InputVisible isVisible={isVisiblePersonal} toggleVisibility={() => toggleVisibility("personal")} inputTitle="personal" />
            </div>
            <div>
                <h2 className='formTitle'>Professional Summary</h2>
                {isVisibleProfessional && (
                    <ProfessionalSummary personalDetails={personalDetails} handlePersonalDetailsChange={handlePersonalDetailsChange} />
                )}
                <InputVisible isVisible={isVisibleProfessional} toggleVisibility={() => toggleVisibility("professional")} inputTitle="professional" />
            </div>
        </>
    );
};

export default VisibilityManager;
