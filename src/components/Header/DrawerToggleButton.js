import React from 'react';

import './style.css'

function DrawerToggleButton (props) {
    return (
        <button className='toggleButton' onClick={props.click}>
            <div className="toggleButton__line" />
            <div className="toggleButton__line" />
            <div className="toggleButton__line" />
        </button>
    );
}

export default DrawerToggleButton;