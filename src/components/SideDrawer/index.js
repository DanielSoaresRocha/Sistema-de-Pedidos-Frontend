import React from 'react';

import './style.css'

function SideDrawer (props) {
    let drawerClasse = 'sideBar'
    if (props.show) {
        drawerClasse = 'sideBar open'
    }
    return (
        <div className={"sideBarContainer"}>
            <div className={drawerClasse}>
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
        </div>
    );
}

export default SideDrawer;