import React from 'react';

import DrawerToggleButton from './DrawerToggleButton'

import './style.css'

function Header (props) {
    return (
        <div className="container">
            <div className="logo">
                <DrawerToggleButton click={props.drawerClickHandler} />
                {props.name}
            </div>
        </div>
    );
}

export default Header;