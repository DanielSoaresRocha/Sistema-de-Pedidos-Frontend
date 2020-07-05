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
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <a href="/categories">Categorias</a>
                    </li>
                    <li>
                        <a href="/cart">Carrinho</a>
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