import React from 'react';

import DrawerToggleButton from './DrawerToggleButton'

import './style.css'

function Header (props) {
    return (
        <div className="container">
            <div className="logo">
                <DrawerToggleButton click={props.drawerClickHandler} />
                Sistema de produtos
            </div>
            <div className="itens">
                <p>Sobre</p>
                <p>Outro</p>
            </div>
        </div>
    );
}

export default Header;