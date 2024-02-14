import { useState } from "react";
import ResumeBuilder from "./ResumeBuilder";
import ResumePreview from "./ResumePreview";

const Container = () => {
    const [personalDetails, setPersonalDetails] = useState(
        {
            wantedJob: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            adress: "",
            postalCode: "",
            nationality: "",
            placeBirth: "",
            dateBirth: "",
            photo: null,
        }
    );

    // Function to update personal details
    function handlePersonalDetailsChange(field, newValue) {
        setPersonalDetails(prevDetails => ({
            ...prevDetails,
            [field]: newValue
        }));
    }

    return (
        <>
            <ResumeBuilder personalDetails={personalDetails} handlePersonalDetailsChange={handlePersonalDetailsChange}/>
            <ResumePreview personalDetails={personalDetails}/>
        </>
    )
};

export default Container