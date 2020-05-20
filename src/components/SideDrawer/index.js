import React from 'react';

import './style.css'

function SideDrawer () {
    return (
        <div className="sideBarContainer">
            <div className="sideBar">
                <h1>Menu</h1>
                <ul>
                    <li>
                        <a href="/">Profile</a>
                    </li>
                    <li>
                        <a href="/">Categorias</a>
                    </li>
                    <li>
                        <a href="/">Carrinho</a>
                    </li>
                    <li>
                        <a href="/">Logouth</a>
                    </li>
                </ul>
            </div>
            <div className="backDrop">
                <h1>cade euuu</h1>
            </div>
        </div>
    );
}

export default SideDrawer;