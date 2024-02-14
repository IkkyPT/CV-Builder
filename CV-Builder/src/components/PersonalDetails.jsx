// PersonalDetails Component

import { useState } from 'react';

const PersonalDetails = ({ personalDetails, handlePersonalDetailsChange }) => {
    const [visible, setVisible] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        handlePersonalDetailsChange(name, value);
    }

    const handleVisibilityChange = () => {
        setVisible(prevVisible => !visible)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // assuming only one file will be selected
        if (file) {
            // Here you can handle the file, for example, you can store it in state
            handlePersonalDetailsChange('photo', file);
        }
    }

    return (
        <>
            {visible && (
                <div className="personalDetails">
                    <form action="">
                            <label htmlFor="wantedJob">Wanted Job Title</label>
                            <input type="text" name="wantedJob" id="wantedJob" value={personalDetails.wantedJob} onChange={handleChange} />
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" value={personalDetails.firstName} onChange={handleChange} />
                            <label htmlFor="lastName">Last Name</label>
                            <label htmlFor="photo">Photo</label>
                            <input type="file" name="photo" id="photo" accept="image/*" onChange={handleFileChange} />
                            <input type="text" name="lastName" id="lastName" value={personalDetails.lastName} onChange={handleChange} />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={personalDetails.email} onChange={handleChange} />
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" value={personalDetails.phone} onChange={handleChange} />
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" value={personalDetails.country} onChange={handleChange} />
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" value={personalDetails.city} onChange={handleChange} />
                    </form>
                </div>
            )}
            <button className="hideForm" onClick={handleVisibilityChange}>{visible ? "Hide personal details" : "Show personal details"}</button>
        </>
    )
}

export default PersonalDetails;