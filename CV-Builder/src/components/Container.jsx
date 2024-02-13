import { useState } from "react";
import ResumeBuilder from "./ResumeBuilder";
import ResumePreview from "./ResumePreview";

const Container = () => {
    const [text, setText] = useState("");

    // Function to update text from input
    function handleTextChange(newText) {
        return setText(newText);
    }

    return (
        <>
            <ResumeBuilder text={text} handleTextChange={handleTextChange}/>
            <ResumePreview text={text}/>
        </>
    )
};

export default Container