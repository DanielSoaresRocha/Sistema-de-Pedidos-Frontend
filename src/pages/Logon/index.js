import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'

function SideDrawer (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    useEffect(() => {
        const randon = (min, max) => Math.floor(Math.random() * (max - min) + min)

        const ulSquares = document.querySelector("ul.squares")

        for (let i = 0; i <= 10; i++) {
            const li = document.createElement("li")
            let size
            if (window.innerWidth > 600) {
                size = randon(50, 100)
            } else {
                size = randon(20, 70)
            }

            li.style.width = `${size}px`
            li.style.height = `${size}px`

            li.style.left = `${randon(1, 99)}%`
            li.style.animationDuration = `${randon(5, 30)}s`
            li.style.animationDelay = `${randon(0.1, 5)}`
            li.style.overflow = "hidden"
            ulSquares.style.overflow = "hidden"

            ulSquares.appendChild(li)
        }
    }, [])

    function handlerLogon (e) {
        e.preventDefault()
        history.push('/categories')
    }

    return (
        <>
            <ul className="squares" />
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
        </>
    );
}

export default SideDrawer;