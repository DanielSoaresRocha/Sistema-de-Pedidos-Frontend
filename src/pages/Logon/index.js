import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'

function SideDrawer (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    function handlerLogon (e) {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <div className="containerLogon">
            <h1>Sistema de pedidos</h1>
            <img alt="imagem e-commerce" src={"https://news.comschool.com.br/wp-content/uploads/2014/09/ecommerce_sucesso.png"} />

            <form onSubmit={handlerLogon}>
                <div className="inputs">
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="buttons">
                    <button type="submit">Entrar</button>
                    <div className="cadastrar">
                        <button type="button" onClick={() => history.push('/register')}>Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SideDrawer;