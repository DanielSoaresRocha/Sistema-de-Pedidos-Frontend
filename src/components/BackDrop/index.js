import React from 'react';

import './style.css'

function BackDrop (props) {
    return (
        <div className="backDrop" onClick={props.click} />
    );
}

export default BackDrop;