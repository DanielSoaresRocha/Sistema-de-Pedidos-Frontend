import React from 'react';

import './styles.css'

function SideDrawer (props) {
    return (
        <div className="containerLogon">
            <h1>Sistema de pedidos</h1>
            <img alt="imagem e-commerce" src={"https://news.comschool.com.br/wp-content/uploads/2014/09/ecommerce_sucesso.png"} />

            <form>
                <div className="inputs">
                    <input placeholder="Email" />
                    <input type="password" placeholder="password" />
                </div>

                <div className="buttons">
                    <button type="submit">Entrar</button>
                    <div className="cadastrar">
                        <button type="submit">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SideDrawer;