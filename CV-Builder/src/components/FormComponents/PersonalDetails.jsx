// PersonalDetails Component

const PersonalDetails = ({ personalDetails = {}, handlePersonalDetailsChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        handlePersonalDetailsChange(name, value);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handlePersonalDetailsChange('photo', file);
        }
    }

    return (
        <>
            <div className="personalDetails">
                <form action="">
                    <label htmlFor="wantedJob">Wanted Job Title</label>
                    <input type="text" name="wantedJob" id="wantedJob" value={personalDetails.wantedJob} onChange={handleChange} />
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={personalDetails.firstName} onChange={handleChange} />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={personalDetails.lastName} onChange={handleChange} />
                    <label htmlFor="photo">Photo</label>
                    <input type="file" name="photo" id="photo" accept="image/*" onChange={handleFileChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={personalDetails.email} onChange={handleChange} />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" value={personalDetails.phone} onChange={handleChange} />
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" value={personalDetails.country} onChange={handleChange} />
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" value={personalDetails.city} onChange={handleChange} />
                    <label htmlFor="address">Address</label>
                    <input type="text" name='address' id='address' value={personalDetails.address} onChange={handleChange} />
                    <label htmlFor="postalCode">Postal code</label>
                    <input type="text" name='postalCode' id='postalCode' value={personalDetails.postalCode} onChange={handleChange} />
                    <label htmlFor="dateBirth">Date birth</label>
                    <input type="text" name='dateBirth' id='dateBirth' value={personalDetails.dateBirth} onChange={handleChange} />
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" name='nationality' id='nationality' value={personalDetails.nationality} onChange={handleChange} />
                </form>
            </div>
        </>
    )
}

export default PersonalDetails;