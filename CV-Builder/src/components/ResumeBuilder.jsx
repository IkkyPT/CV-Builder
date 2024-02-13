import PersonalDetails from './PersonalDetails';

const ResumeBuilder = ({text, handleTextChange}) => {

    return (
        <>
            <PersonalDetails text={text} handleTextChange={handleTextChange}/>
        </>
    );
}

export default ResumeBuilder