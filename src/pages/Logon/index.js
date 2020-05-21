import React from 'react';

import './styles.css'

function SideDrawer (props) {
    return (
        <div className="containerLogon">
            <h1>Sistema de pedidos</h1>
            <img alt="imagem e-commerce" src={"https://news.comschool.com.br/wp-content/uploads/2014/09/ecommerce_sucesso.png"} />

            <div className="inputs">
                <input placeholder="Email" />
                <input type="password" placeholder="password" />
            </div>
        </div>
    );
}

export default SideDrawer;