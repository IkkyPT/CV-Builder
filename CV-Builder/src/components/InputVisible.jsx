// InputVisible Component

import { useState } from 'react';

const InputVisible = ({isVisible, toggleVisibility, inputTitle}) => {

    return (
        <>
            <button className="hideForm" onClick={toggleVisibility}>{isVisible ? `Hide ${inputTitle} details` : `Show ${inputTitle} details`}</button>
        </>
    );
}

export default InputVisible;