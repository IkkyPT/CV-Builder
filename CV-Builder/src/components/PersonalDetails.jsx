const PersonalDetails = ({text, handleTextChange}) => {
    const handleChange = (e) => {
        handleTextChange(e.target.value);
    }

    return (
        <>
            <form action="">
                <input type="text" name="firstName" id="firstName" onChange={handleChange} />
            </form>
        </>
    )
}

export default PersonalDetails