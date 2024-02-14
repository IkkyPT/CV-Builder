// ResumePreview Component

const ResumePreview = ({ personalDetails }) => {
    const { wantedJob, firstName, lastName, email, phone, country, city, photo } = personalDetails;

    return (
        <div>
            <p>{wantedJob}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{country}</p>
            <p>{city}</p>
            {photo && (
                <img src={URL.createObjectURL(photo)} alt="Profile Picture" style={{ width: '200px', height: '200px' }}/>
            )}
        </div>
    );
}

export default ResumePreview;