const ProfessionalSummary = ({ personalDetails = {}, handlePersonalDetailsChange }) => {
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        handlePersonalDetailsChange(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="professionalSummary">
            <small>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</small>
            <div className="editBox">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="professionalSummary" id="professionalSummary" value={personalDetails.professionalSummary || ''} onChange={handleChange}/>
                </form>
            </div>
        </div>
    )
}

export default ProfessionalSummary;
