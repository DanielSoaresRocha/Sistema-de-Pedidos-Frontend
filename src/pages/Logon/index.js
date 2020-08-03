import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import responseError from '../../utils/responseError'

import api from '../../services/api'
import request from '../../utils/request'

import './styles.css'

function Logon (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    function animation () {
        console.log("foi")
        const randon = (min, max) => Math.floor(Math.random() * (max - min) + min)

        const ulSquares = document.querySelector("ul.squares")
        if (!ulSquares)
            return
        ulSquares.innerHTML = ''
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

            li.style.left = `${randon(1, 80)}%`
            li.style.animationDuration = `${randon(5, 30)}s`
            li.style.animationDelay = `${randon(0.1, 5)}`
            ulSquares.appendChild(li)
        }
    }

    useEffect(() => {
        animation()
        const interval = setInterval(() => {
            animation()
        }, 15000);

        return () => clearInterval(interval);

    }, [])

    async function handlerLogon (e) {
        e.preventDefault()
        try {
            const response = await api.post('/login', { email, senha: password })
            let token = response.headers.authorization
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)

            // setando cliente
            api.get(`http://localhost:3333/clientes/email`, {
                params: {
                    value: email
                },
                headers: {
                    Authorization: token
                }
            }).then(response => {
                request.setClient(response.data)
            })

            history.push('/categories')
        } catch (e) {
            console.log(e.response)
            responseError(e)
        }
    }

    return (
        <div className="containerLogon">
            <ul className="squares" />
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

export default Logon;